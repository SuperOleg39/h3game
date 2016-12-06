import { Global } from './global';
import Canvas from './Canvas';
import Draw from './Draw';
import Board from './Board';
import { Cell } from './cell';
import { EntityManager } from './entityManager';
import { Entity } from './entity';

import { EventEmitter } from './eventEmitter';

let emitter = new EventEmitter();

emitter.on('start', start, this);
emitter.emit('start');
emitter.un('start', start, this);
emitter.emit('start');

function start() {
    console.log('start!');
}

class Game {
    gameId: string = 'canvas';
    container: any;
    grid: any;
    canvas: Canvas;
    canvasElement: HTMLCanvasElement;
    draw: Draw;
    constructor(id?: string) {
        if (id) this.gameId = id;
    }

    public init(): void {
        this.createCanvas();
        this.bootstrapCanvas();
    }

    private createCanvas(): void {
        this.canvas = new Canvas(300, 150, this.gameId);
        this.canvasElement = this.canvas.create();
    }

    private bootstrapCanvas(): void {
        const board = new Board(this.canvasElement.width, this.canvasElement.height);
        board.createBoard();

        Global.container.appendChild(this.canvasElement);

        let ctx: CanvasRenderingContext2D = getContext(this.canvasElement);
        let draw = this.draw = new Draw(this.canvasElement);

        // board.cells.forEach(item => {
        //     let props = new Cell(item.x, item.y);
        //     let entity = new Entity(props);
        //     EntityManager.register(entity);
        // });

        let props = new Cell();
        let entity = new Entity(props);
        EntityManager.register(entity);

        Global.ctx = ctx;

        requestAnimationFrame(step);
        
        function timeShift(time) {
            return Date.now() - time;
        }

        
        function step(timestamp) {
            console.log(timestamp)

            // Global.grid.innerHTML = '';
            draw.fill();

            EntityManager.store.forEach(item => {
                item.reflow();
            });

            setTimeout(function() {
                requestAnimationFrame(step);
            }, 1000 / 60);
        }
    }
}

function getContext(canvas: any): CanvasRenderingContext2D {
    return canvas.getContext('2d');
}

export default Game;