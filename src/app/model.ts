import { EventEmitter } from './eventEmitter';
import { ICell } from './cell';

export interface IModel {
    emitter: EventEmitter;
    readonly props: ICell;
    move(x: number, y: number): void;
}

export interface IModelConstructor {
    new (props: ICell): IModel;
}

export class Model implements IModel {
    emitter = new EventEmitter();
    constructor(readonly props: ICell)  { }
    
    move(x: number, y: number) {
        console.log(x, y)
        this.props.x = x;
        this.props.y = y;

        this.emitter.emit('change');
    }
}