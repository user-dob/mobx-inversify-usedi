import { Container } from 'inversify';
import fooContainer from './foo/container';

const container = new Container({defaultScope: 'Singleton'});

container.load(
    fooContainer
)

export default container;
