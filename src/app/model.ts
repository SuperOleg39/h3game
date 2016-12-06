import { EventEmitter } from './eventEmitter';

export interface IModel {
    emitter: EventEmitter;
    getProps(): any;
}

export class Model implements IModel {
    private props = {
        x: 0,
        y: 0,
        width: 25,
        height: 25
    };
    emitter = new EventEmitter();
    constructor() { }

    getProps() {
        return this.props;
        // return Object.assign({}, this.props);
    }
}