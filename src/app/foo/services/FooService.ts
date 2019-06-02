import { injectable } from 'inversify';

@injectable()
export class FooService {

    getTitle(): string {
        return 'title';
    }

    getItems(): Promise<number[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve([1,2,3]), 2000);
        })
    }

}
