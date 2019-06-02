import React from 'react';
import { observer } from 'mobx-react-lite';
import { FooStore } from '../../stores/FooStore';
import { BarStore } from '../../stores/BarStore';
import useDI from '../../../useDI';

interface IFooProps {
}

const Foo = ({}: IFooProps) => {

    const fooStore = useDI(FooStore);

    React.useEffect(() => {
        fooStore.loadItems();
    }, []);

    const renderBody = () => {
        if (fooStore.isLoading) {
            return (
                <h1>Loading...</h1>
            )
        }

        return (
            <ul>
                {fooStore.items.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            {renderBody()}
        </div>
    )

}

export default observer(Foo);
