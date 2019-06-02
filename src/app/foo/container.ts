import {ContainerModule, interfaces} from 'inversify';
import { FooStore } from './stores/FooStore';
import { FooService } from './services/FooService';
import { BarStore } from './stores/BarStore';


const container = new ContainerModule((bind: interfaces.Bind) => {

    bind(FooStore).toSelf();
    bind(FooService).toSelf();
    bind(BarStore).toSelf();

});

export default container;
