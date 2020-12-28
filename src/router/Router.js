import React, { Component } from 'react';
import PersonalDetails from '../components/PersonalDetails';
import PropertyDetails from '../components/PropertyDetails';
import FinancialDetails from '../components/FinancialDetails';
import Demographics from '../components/Demographics';
import Declarations from '../components/Declarations';
import Summary from '../components/Summary';
import { Route } from "react-router-dom";

class App extends Component {

    render() {
        return (
            <div>
                <Route exact={true} path='/' component={PersonalDetails} />
                <Route path='/property_details' component={PropertyDetails} />
                <Route path='/financial_details' component={FinancialDetails} />
                <Route path='/demographics' component={Demographics} />
                <Route path='/declarations' component={Declarations} />
                <Route path='/summary' component={Summary} />
            </div>
        );
    }
}

export default App;
