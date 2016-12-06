export interface ICell {
    width: number;
    height: number;
    id: number;
    posX: number;
    posY: number;
}

export class Cell implements ICell {
    public width: number = 25;
    public height: number = 25;
    constructor(
        public id: number,
        public posX: number,
        public posY: number,
    ) { }
}