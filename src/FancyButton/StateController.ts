import { Container } from '@pixi/display';
import { getView } from '../utils/helpers/view';
import { State } from './FancyButtonTypes';

export class StateController
{
    views: Map<State, Container>;
    private state: State;

    constructor()
    {
        this.views = new Map();
    }

    add(state: State, view?: string | Container | null)
    {
        if (view)
        {
            this.views.set(state, getView(view));
        }
        else if (view === null && this.views.get(state))
        {
            const vewToRemove = this.views.get(state);

            vewToRemove.parent.removeChild(vewToRemove);
            vewToRemove.destroy({ children: true, texture: true, baseTexture: true });

            this.views.delete(state);
        }
    }

    remove(state: State)
    {
        this.views.delete(state);
    }

    set(state: State)
    {
        if (this.state === state)
        {
            return;
        }

        const currentView = this.views.get(this.state);
        const nextView = this.views.get(state);

        if (currentView && nextView)
        {
            currentView.visible = false;
            nextView.visible = true;

            this.state = state;
        }
    }

    get(): State
    {
        return this.state;
    }

    get activeView()
    {
        return this.views.get(this.state);
    }

    getView(state: State): Container
    {
        return this.views.get(state);
    }

    setView(state: State, view: Container)
    {
        this.views.set(state, view);
    }
}
