import React from 'react';
import { interfaces } from 'inversify';
import { DIContext } from './Provider';

const useDI = <T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): T => {
    const di = React.useContext(DIContext);

    return di.get<T>(serviceIdentifier);
}

export default useDI;
