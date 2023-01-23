import { action } from '@storybook/addon-actions';
import { argTypes, getDefaultArgs } from '../utils/argTypes';
import { Swich } from '../../Swich';
import { preloadAssets } from '../utils/loader';
import { centerElement } from '../../utils/helpers/resize';
import { Container } from '@pixi/display';
import { BUTTON_EVENTS } from '../../utils/HelpTypes';

const args = {
    triggerEvent1: BUTTON_EVENTS,
    triggerEvent2: ['', ...BUTTON_EVENTS],
    triggerEvent3: ['', ...BUTTON_EVENTS],
    action: action('swich: ')
};

export const Sprites = ({ action, triggerEvent1, triggerEvent2, triggerEvent3 }: any) =>
{
    const view = new Container();

    const assets = [`avatar-01.png`, `avatar-02.png`, `avatar-03.png`, `avatar-04.png`, `avatar-05.png`];

    preloadAssets(assets).then(() =>
    {
    // Component usage !!!
        const swich = new Swich(assets, [triggerEvent1, triggerEvent2, triggerEvent3]);

        swich.onChange.connect((state) => action(`state ${state}`));

        view.addChild(swich);

        centerElement(view);
    });

    return { view, resize: () => centerElement(view) };
};

export default {
    title: 'Components/Swich/Sprites',
    argTypes: argTypes(args),
    args: getDefaultArgs(args)
};
