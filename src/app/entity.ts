import { ICell } from './cell';

export interface IEntity {
    cells: ICell[];
    color: string;
}

export class Entity implements IEntity {
    constructor(
        public cells: ICell[],
        public color: string
    ) { }
}