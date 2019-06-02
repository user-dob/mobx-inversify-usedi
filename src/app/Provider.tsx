import React, { ReactNode } from 'react';
import { Container } from 'inversify';
import container from './container';

export const DIContext = React.createContext<Container>(null);

interface IProvider {
    children: ReactNode
}

const Provider = ({children}: IProvider) => {
    return (
        <DIContext.Provider value={container}>
            {children}
        </DIContext.Provider>
    )
}

export default Provider;
