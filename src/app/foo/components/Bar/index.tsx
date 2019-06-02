import React from 'react';
import { observer } from 'mobx-react-lite';
import { FooStore } from '../../stores/FooStore';
import { BarStore } from '../../stores/BarStore';
import useDI from '../../../useDI';

interface IBarProps {
}

const Bar = ({}: IBarProps) => {

    const barStore = useDI(BarStore);

    return (
        <div>
            <div>
                <h1>{barStore.title}</h1>
            </div>
        </div>
    )

}

export default observer(Bar);
