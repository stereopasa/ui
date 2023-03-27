import { Container } from '@pixi/display';
import { AnyText } from '../utils/helpers/text';

export type State = 'default' | 'hover' | 'pressed' | 'disabled';

export type Pos = { x?: number; y?: number };
export type PosList = { [K in State]?: Pos };

export type Offset = Pos & PosList;

export type Views = {
    defaultView?: string | Container;
    hoverView?: string | Container;
    pressedView?: string | Container;
    disabledView?: string | Container;
    text?: AnyText;
    icon?: string | Container;
};

export type AnimationData = {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    scale?: Pos;
};

export type Animation = {
    props: AnimationData;
    duration?: number;
};

export type StateAnimations = {
    [K in State]?: Animation;
};

export type ButtonOptions = Views & {
    padding?: number;
    scale?: number;
    anchor?: number;
    anchorX?: number;
    anchorY?: number;
    offset?: Offset;
    textOffset?: Offset;
    iconOffset?: Offset;
    animations?: StateAnimations;
};
