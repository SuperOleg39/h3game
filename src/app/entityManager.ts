import { IEntity } from './entity';

export namespace EntityManager {
    export let store: IEntity[] = [];

    export function register(entity: IEntity): void {
        store.push(entity);
    }
}