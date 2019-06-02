import { observable, action } from 'mobx';
import { injectable } from 'inversify';

@injectable()
export class BarStore {

    @observable title: string = '';

    @action setTitle() {
        this.title += '!';
    }
}
