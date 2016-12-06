import { Cell } from './Cell';

class Board {
    public cells: Cell[] = [];
    private sampleCell: Cell;
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.sampleCell = new Cell(0, 0, 0);
    }

    public createBoard(): void {
        let cellsCount = this.calcCellsCount();
        this.createCells(cellsCount);
    }

    public getPath(from: Cell, to: Cell): Cell[] {
        //
        // [ ][ ][ ][*]
        // [ ][*][*][ ]
        // [*][ ][ ][ ]
        //
        return this.cells;
    }

    public getArea(from: Cell, to: Cell): Cell[] {
        //
        // [ ][ ][ ][ ]
        // [ ][*][*][ ]
        // [ ][*][*][ ]
        // [ ][ ][ ][ ]
        //
        return this.cells;
    }

    private calcCellsCount(): number {
        let cellWidth = this.sampleCell.width;
        let cellHeight = this.sampleCell.height;

        let horizontalCount = Math.floor(this.width / cellWidth);
        let verticalCount = Math.floor(this.height / cellHeight);
        let count = horizontalCount * verticalCount;

        return count;
    }

    private createCells(count: number): void {
        let cellWidth = this.sampleCell.width;
        let cellHeight = this.sampleCell.height;
        let x = 0;
        let y = 0;

        for (let i = 0; i < count; i++) {
            let cell = new Cell(i, x, y);
            this.cells.push(cell);

            x += cellWidth;

            if (x === this.width) {
                x = 0;
                y += cellHeight;
            }
        }
    }
}

export default Board;