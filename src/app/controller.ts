import { IModel } from './model';

export interface IController {
    model: IModel;
    onClick(event: any): void;
}

export interface IControllerConstructor {
    new (model: IModel): IController;
}

export class Controller implements IController {
    constructor(readonly model: IModel)  { }
    
    onClick(event) {
        this.model.move(this.model.props.x, this.model.props.y);
    }
}