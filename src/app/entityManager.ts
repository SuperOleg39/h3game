import { Entity, IEntity }  from './entity';
import { ICell }            from './cell';

export namespace EntityManager {
    export let entityStore: IEntity[] = [];

    export function createEntity(cells: ICell[], color: string): IEntity {
        let entity = new Entity(cells, color);
        entityStore.push(entity);
        return entity;
    }
}