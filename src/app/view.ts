import { IModel } from './model';
import { IController } from './controller';

export interface IView {
    model: IModel;
    controller: IController;
    ctx: CanvasRenderingContext2D;
    cell: HTMLDivElement;
    draw(ctx: CanvasRenderingContext2D, grid: HTMLDivElement): void;
    onClick(event: any): void;
}

export interface IViewConstructor {
    new (model: IModel, controller: IController): IView;
}

export class View implements IView {
    ctx: CanvasRenderingContext2D;
    cell: HTMLDivElement;
    image: any;
    start: boolean = false;
    size: number;
    step: number;
    spritePos: number;
    constructor(
        readonly model: IModel,
        readonly controller: IController
    ) {
        this.model.emitter.on('change', this.draw, this);

        this.size = 50;
        this.step = 65;
        this.spritePos = 5;
    }
    
    change(d) {
        console.log(d)
        this.spritePos += this.step;

        if (this.spritePos >= this.image.width) {
            this.spritePos = 5;
        }
    }

    draw(ctx, grid) {
        if (!this.ctx) this.ctx = ctx;
        
        if (this.start) return;

        let state = this.model.props;
        if (!this.image) {
            this.image = new Image();
            this.image.src = require('../assets/img/sprite.png');
            this.image.onload = () => {
                this.ctx.drawImage(this.image, this.spritePos, 10, this.size, this.size, state.x, state.y, state.width, state.height);
            };
        } else {
            this.ctx.drawImage(this.image, this.spritePos, 10, this.size, this.size, state.x, state.y, state.width, state.height);
        }

        if (!this.cell) {
            this.cell = this.createCell();
            grid.appendChild(this.cell);
        } else {
            this.updateCell();
        }

    }

    createCell(): HTMLDivElement {
        let div = document.createElement('div');
        let state = this.model.props;

        div.style.position  = 'absolute';
        div.style.left      = state.x + 'px';
        div.style.top       = state.y + 'px';
        div.style.width     = state.width + 'px';
        div.style.height    = state.height + 'px';

        div.addEventListener('click', e => {
            this.onClick(event);
        });

        return div;
    }

    updateCell() {
        let div = this.cell;
        let state = this.model.props;

        div.style.left      = state.x + 'px';
        div.style.top       = state.y + 'px';
    }

    onClick(event) {
        this.controller.onClick(event);
    }
}