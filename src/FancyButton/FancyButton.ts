import { ObservablePoint, Ticker, Rectangle } from '@pixi/core';
import { Container } from '@pixi/display';
import { Sprite } from '@pixi/sprite';
import { getView } from '../utils/helpers/view';
import { AnyText, getTextView, PixiText } from '../utils/helpers/text';
import { fitToView } from '../utils/helpers/fit';
import { Tween, Group } from 'tweedle.js';
import { ButtonContainer } from '../Button';
import {
    AnimationData,
    ButtonOptions,
    Offset,
    Pos,
    StateAnimations,
    State,
    Views } from './FancyButtonTypes';
import { StateController } from './StateController';

/**
 * Button component with a lots of tweaks, to create a button fast.
 *
 *  By default text view and icon view are centered in the active view.
 *
 * If views are not the same size, offset property of the constructor
 * can be used to adjust the position of the text, icon and the views.
 * @example
 * const button = new FancyButton({
 *     defaultView: `button.png`,
 *     hoverView: `button_hover.png`,
 *     pressedView: `button_pressed.png`,
 *     text: new Text('Click me!'),
 *     animations: {
 *          hover: {
 *              props: {
 *                  scale: {
 *                      x: 1.1,
 *                      y: 1.1,
 *                  }
 *              },
 *              duration: 100,
 *          },
 *          pressed: {
 *              props: {
 *                  scale: {
 *                      x: 0.9,
 *                      y: 0.9,
 *                  }
 *              },
 *              duration: 100,
 *          }
 *      }
 * });
 *
 * button.onPress.connect(() => console.log('Button pressed!'));
 */
export class FancyButton extends ButtonContainer
{
    private animations: StateAnimations;
    private originalInnerViewState: AnimationData;
    private defaultDuration = 100;

    private _text: PixiText;
    private _icon: Container;

    /** Padding of the button text view. If button text does not fit active view + padding it will scale down to fit. */
    public padding: number;

    /** Offset of the button state views. If state views have different sizes, this option can help adjust them. */
    public offset: Offset & Pos;

    /** Offset of the text view. Can be set to any state of the button. */
    public textOffset: Offset;

    /** Offset of the icon view. Can be set to any state of the button. */
    public iconOffset: Offset;

    //* View that holds all button inner views */
    public innerView: Container;

    /** State of the button. Possible valuers are: 'default', 'hover', 'pressed', 'disabled' */
    public state: StateController;

    /** Anchor point of the button. */
    public anchor: ObservablePoint;

    /**
     * Turns a given container-based view into a button by adding all button events.
     * @param {object} options - Button options.
     * @param {Container} options.defaultView - Container-based view that is shown when non of the button events are active.
     * @param {Container} options.hoverView - Container-based view that is shown when the mouse hovers over the button.
     * @param {Container} options.pressedView - Container-based view, shown when the mouse press on the component.
     * @param {Container} options.disabledView - Container-based view shown when the button is disabled.
     * @param {Container} options.icon - Container-based view for the button icon.
     * @param {Text} options.text - Text-based view for the button text.
     * @param {number} options.padding - Padding of the button text and icon views.
     * If button text or icon does not fit active view + padding it will scale down to fit.
     * @param {Point} options.offset - Offset of the button state views.
     * @param {Point} options.textOffset - Offset of the text view.
     * @param {Point} options.iconOffset - Offset of the icon view.
     * @param {number} options.scale - Scale of the button. Scale will be applied to a main container,
     * when all animations scales will be applied to the inner view.
     * @param {number} options.anchor - Anchor point of the button.
     * @param {number} options.anchorX - Horizontal anchor point of the button.
     * @param {number} options.anchorY - Vertical anchor point of the button.
     * @param options.animations - Animations that will be played when the button state changes.
     */
    constructor({
        defaultView,
        hoverView,
        pressedView,
        disabledView,
        text,
        padding,
        offset,
        textOffset,
        iconOffset,
        scale,
        anchor,
        anchorX,
        anchorY,
        icon,
        animations
    }: ButtonOptions)
    {
        super();

        this.state = new StateController();

        this.innerView = new Container();
        this.addChild(this.innerView);

        this.anchor = new ObservablePoint(this.updateAnchor, this);
        this.anchor.set(anchorX ?? anchor ?? 0, anchorY ?? anchor ?? 0);

        this.padding = padding ?? 0;
        this.offset = offset;
        this.textOffset = textOffset;
        this.iconOffset = iconOffset;
        this.scale.set(scale ?? 1);

        if (animations)
        {
            this.animations = animations;
            Ticker.shared.add(() => Group.shared.update());
        }

        this.setViews({
            defaultView,
            hoverView,
            pressedView,
            disabledView,
            text,
            icon
        });

        this.state.set('default');
    }

    /**
     * Updates the text of the button and updates its scaling basing on the new size.
     * @param {string | number} text
     */
    set text(text: string | number | null)
    {
        if (!text || text === 0)
        {
            this.innerView.removeChild(this._text);
            this._text = null;

            return;
        }

        if (!this._text)
        {
            this.createTextView(text);

            return;
        }

        this._text.text = text.toString();
    }

    /** Returns the text string of the button text element. */
    get text(): string | undefined
    {
        return this._text?.text;
    }

    /**
     * Setter, that prevents all button events from firing.
     * @param {boolean} enabled
     */
    // eslint-disable-next-line accessor-pairs
    override set enabled(enabled: boolean)
    {
        super.enabled = enabled;

        this.setState(enabled ? 'default' : 'disabled');
    }

    /**
     * Updates button state and shows the according views.
     *
     * Updates positions and offsets of the views.
     *
     * Plays animations if they are set.
     * @param {State} state
     */
    setState(state: State)
    {
        this.state.set(state);

        this.setOffset(this.state.activeView, state, this.offset);

        this.updateAnchor();
        this.playAnimations(state);
    }

    /**
     *
     * Manage button text view.
     * @param {string | Text} text - can be a string, Text, BitmapText ot HTMLText (Container-based element).
     */
    private createTextView(text: AnyText)
    {
        this._text = getTextView(text);

        if (!this._text.parent) this.innerView.addChild(this._text);

        this.adjustTextView(this.state.get());
    }

    /**
     * Manages views offsets if it's set.
     * @param view
     * @param state
     * @param offset
     */
    private setOffset(view: Container, state: State, offset: Offset)
    {
        if (!view) return;

        const stateOffset = offset
            ? offset[state]
            : {
                x: 0,
                y: 0
            };

        const defaultStateOffset = offset?.default;

        if (stateOffset)
        {
            view.x += stateOffset.x ?? 0;
            view.y += stateOffset.y ?? 0;
        }
        else if (defaultStateOffset)
        {
            view.x += defaultStateOffset.x ?? 0;
            view.y += defaultStateOffset.y ?? 0;
        }
        else if (offset.x || offset.y)
        {
            view.x += offset.x ?? 0;
            view.y += offset.y ?? 0;
        }
    }

    /**
     * Adjusts text view position and scale.
     * @param {State} state
     */
    private adjustTextView(state: State)
    {
        if (!this.text) return;

        const activeView = this.state.activeView;

        if (activeView)
        {
            fitToView(activeView, this._text, this.padding);

            this._text.x = activeView.x + (activeView.width / 2);
            this._text.y = activeView.y + (activeView.height / 2);
        }

        this._text.anchor.set(0.5);

        this.setOffset(this._text, state, this.textOffset);
    }

    /**
     * Adjusts icon view position and scale.
     * @param {State} state
     */
    private adjustIconView(state: State)
    {
        if (!this._icon)
        {
            return;
        }

        const activeView = this.state.activeView;

        fitToView(activeView, this._icon, this.padding);

        (this._icon as Sprite).anchor?.set(0);

        this._icon.x = activeView.x + (activeView.width / 2) - (this._icon.width / 2);
        this._icon.y = activeView.y + (activeView.height / 2) - (this._icon.height / 2);

        this.setOffset(this._icon, state, this.iconOffset);
    }

    /**
     * Reset views positions according to the button anchor setting.
     * We have to set the anchor position for each view individually, as each of them
     * can be a different type of view (container without anchor, sprite with anchor, etc)
     * we have to reset all anchors to 0,0 and then set the positions manually.
     */
    private updateAnchor()
    {
        const anchorX = this.anchor.x ?? 0;
        const anchorY = this.anchor.y ?? 0;
        const states = this.state.views;

        states.forEach((view) =>
        {
            if (!view) return;

            if (view instanceof Sprite)
            {
                view.anchor?.set(0);
            }

            view.x = -view.width * anchorX;
            view.y = -view.height * anchorY;
        });

        const defaultView = this.state.getView('default');

        if (defaultView)
        {
            const { x, y, width, height } = defaultView;

            if (width && height)
            {
                this.hitArea = new Rectangle(x, y, width, height);
            }
        }

        this.adjustIconView(this.state.get());
        this.adjustTextView(this.state.get());
    }

    /**
     * Set button views according to the config.
     * If state view is not set (undefined), it will not be changed,
     * so if it was set before, it will remain the same.
     * If state view is set to null, it will be removed from the button.
     * If state view is set it will be updated or added to a button.
     * @param {Views} views
     */
    setViews(views: Views)
    {
        const { defaultView, hoverView, pressedView, disabledView, text, icon } = views;

        if (defaultView) this.state.add('default', defaultView);
        if (hoverView) this.state.add('hover', getView(defaultView));
        if (pressedView) this.state.add('pressed', getView(defaultView));
        if (disabledView) this.state.add('disabled', getView(defaultView));

        this.state.views.forEach((view, state) =>
        {
            // add all views to the button if not yet added
            if (!view.parent) this.innerView.addChild(view);

            // set views offsets
            this.setOffset(view, state, this.offset);
        });

        if (icon)
        {
            this._icon = getView(icon);

            if (!this._icon.parent) this.innerView.addChild(this._icon);
        }
        else if (icon === null && this._icon)
        {
            this.innerView.removeChild(this._icon);
            this._icon.destroy({ children: true, texture: true, baseTexture: true });
            this._icon = null;
        }

        if (text)
        {
            this.createTextView(text);
        }
        else if (text === null && this._text)
        {
            this.innerView.removeChild(this._text);
            this._text.destroy({ children: true, texture: true, baseTexture: true });
            this._text = null;
        }
    }

    /**
     * Starts animation for the current button state if configured.
     * @param {State} state
     */
    private playAnimations(state: State)
    {
        if (!this.animations) return;

        if (state === 'default' && !this.originalInnerViewState)
        {
            this.originalInnerViewState = {
                x: this.innerView.x,
                y: this.innerView.y,
                width: this.innerView.width,
                height: this.innerView.height,
                scale: {
                    x: this.innerView.scale.x,
                    y: this.innerView.scale.y
                }
            };

            // first animation state is default, so we don't need to animate it
            // this part will run only once, during initialization
            const defaultStateAnimation = this.animations?.default;

            if (defaultStateAnimation)
            {
                this.innerView.x = defaultStateAnimation.props.x ?? this.originalInnerViewState.x;
                this.innerView.y = defaultStateAnimation.props.y ?? this.originalInnerViewState.y;
                this.innerView.width = defaultStateAnimation.props.width ?? this.originalInnerViewState.width;
                this.innerView.height = defaultStateAnimation.props.height ?? this.originalInnerViewState.height;
                this.innerView.scale.x = defaultStateAnimation.props.scale.x ?? this.originalInnerViewState.scale.x;
                this.innerView.scale.y = defaultStateAnimation.props.scale.y ?? this.originalInnerViewState.scale.y;

                return;
            }
        }

        const stateAnimation = this.animations[state] ?? this.animations.default;

        if (stateAnimation)
        {
            const data = stateAnimation;

            this.defaultDuration = data.duration;

            new Tween(this.innerView).to(data.props, data.duration).start();

            return;
        }

        // if there is no animation for the current state, animate the button to the default state
        new Tween(this.innerView).to(this.originalInnerViewState, this.defaultDuration).start();
    }
}
