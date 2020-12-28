import React, {useState} from 'react';
import Layout from './layout/Layout';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import AppContext from './components/AppContext';

export default function App() {

    const [is_error, setIsError] = useState(false);
    const [selected_tab, setSelectedTab] = useState('');

    const global_settings = {
        is_error: is_error,
        selected_tab: selected_tab,
        setIsError,
        setSelectedTab
    };
    return (
        <AppContext.Provider value={global_settings}>
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path='/' render={(props) => <Layout {...props} />}/>
                        <Route path='/property_details' render={(props) => <Layout {...props} />}/>
                        <Route path='/financial_details' render={(props) => <Layout {...props} />}/>
                        <Route path='/demographics' render={(props) => <Layout {...props} />}/>
                        <Route path='/declarations' render={(props) => <Layout {...props} />}/>
                        <Route path='/summary' render={(props) => <Layout {...props} />}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </AppContext.Provider>
    )

}
