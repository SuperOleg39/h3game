import Canvas from './Canvas';
import Draw from './Draw';
import Board from './Board';
import { EntityManager } from './entityManager';

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
    gameId: string = 'game';
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
        this.canvas = new Canvas(1000, 700, this.gameId);
        this.canvasElement = this.canvas.create();
    }

    private bootstrapCanvas(): void {
        const board = new Board(this.canvasElement.width, this.canvasElement.height);
        board.createBoard();

        document.body.appendChild(this.canvasElement);

        let draw = this.draw = new Draw(this.canvasElement);
            let k = 0;

        requestAnimationFrame(step);

        function step(timestamp) {
            console.log(timestamp);
            let cell = board.cells[k];
            EntityManager.createEntity([cell], 'green');
            cell = board.cells[k+1];
            EntityManager.createEntity([cell], 'purple');

            k++;

            if (!board.cells[k]) {
                k = 0;
            }

            draw.fill();
            EntityManager.entityStore.forEach(item => {
                item.cells.forEach(elem => {
                    draw.rect(elem.posX, elem.posY, elem.width, elem.height, item.color);
                });
            });

            setTimeout(function() {
                requestAnimationFrame(step);
            }, 1000 / 120);
        }
    }
}

export default Game;