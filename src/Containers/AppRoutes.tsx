import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../Components/Layout';

const GlobalLayout = (props: any) => {
    return (<Layout>{props.children}</Layout>);
};

export default () => (
    <Router>
        <Switch>
            <GlobalLayout>
                <Route exact path={'/a'} component={() => (<div>Hello, a!</div>)} />
                <Route exact path={'/b'} component={() => (<div>Hello, b!</div>)} />
                <Route exact path={'/c'} component={() => (<div>Hello, c!</div>)} />
                <Route exact path={'/'} component={() => (<div>Hello, World!</div>)} />
            </GlobalLayout>
        </Switch>
    </Router>
);
