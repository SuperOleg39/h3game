import { Global } from './global';
import { ICell, Cell } from './cell';
import { IModel, Model } from './model';
import { IController, Controller } from './controller';
import { IView, View } from './view';

export interface IEntity {
    model: IModel;
    controller: IController;
    view: IView;
    reflow(): void;
}

export class Entity {
    model: IModel;
    controller: IController;
    view: IView;
    constructor(public props: ICell) {
        this.model = new Model(this.props);
        this.controller = new Controller(this.model);
        this.view = new View(this.model, this.controller);
    }

    reflow() {
        this.view.draw(Global.ctx, Global.grid);
    }
}