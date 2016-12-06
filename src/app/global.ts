import { EventEmitter } from './eventEmitter';

export namespace Global {
    export let container = <HTMLDivElement> document.getElementById('game');
    export let grid = <HTMLDivElement> document.getElementById('grid');
    export let emitter = new EventEmitter();
    export let ctx: CanvasRenderingContext2D;
}