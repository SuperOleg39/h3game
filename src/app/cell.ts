export interface ICell {
    readonly width: number;
    readonly height: number;
    x: number;
    y: number;
}

export class Cell implements ICell {
    readonly width: number = 25;
    readonly height: number = 25;
    constructor(
        public x: number = 0,
        public y: number = 0
    ) { }
}