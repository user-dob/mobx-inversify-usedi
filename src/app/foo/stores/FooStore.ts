import { observable, action } from 'mobx';
import { injectable } from 'inversify';
import { FooService } from '../services/FooService';

@injectable()
export class FooStore {

    @observable title: string = '';

    @observable isLoading: boolean = false;

    @observable items: number[] = [];

    private fooService: FooService;

    constructor(fooService: FooService) {
        this.fooService = fooService;
    }

    @action async loadItems() {
        this.isLoading = true;

        try {
            this.items = await this.fooService.getItems();
        } catch (e) {

        } finally {
            this.isLoading = false;
        }
    }

    @action setTitle() {
        this.title += this.fooService.getTitle();
    }
}
