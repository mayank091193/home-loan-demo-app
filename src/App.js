import React from 'react';
import Layout from './layout/Layout';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends React.Component {

    render() {

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path='/' render={(props) => <Layout {...props} /> } />
                        <Route path='/property_details' render={(props) => <Layout {...props} /> } />
                        <Route path='/financial_details' render={(props) => <Layout {...props} /> }/>
                        <Route path='/demographics' render={(props) => <Layout {...props} />} />
                        <Route path='/declarations' render={(props) => <Layout {...props} />} />
                        <Route path='/summary' render={(props) => <Layout {...props} />} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }

}

export default App;
