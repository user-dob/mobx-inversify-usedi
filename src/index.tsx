import 'reflect-metadata';
import * as React from "react";
import * as ReactDOM from "react-dom";
import Provider from './app/Provider';
import Foo from './app/foo/components/Foo';
import Bar from './app/foo/components/Bar';

const App = () => {
    return (
        <Provider>
            <Foo />
            <Bar />
        </Provider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("example")
);
