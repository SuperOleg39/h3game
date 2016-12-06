import { EventEmitter } from './eventEmitter';
import { IModel, Model } from './model';

export interface IComponent {
    emitter: EventEmitter;
    model: IModel;
}

export class Component {
    emitter = new EventEmitter();
    model = new Model();
    state: any;
    constructor() {
        this.state = this.model.getProps();
    }

    createCell(): HTMLElement {
        let div = document.createElement('div');

        div.style.position  = 'absolute';
        div.style.left      = this.state.x;
        div.style.top       = this.state.y;
        div.style.width     = this.state.width + 'px';
        div.style.height    = this.state.height + 'px';

        div.addEventListener('click', e => {
            console.log(e);
        });

        return div;
    }
}