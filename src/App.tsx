import React from 'react';
import './App.css';
import {InvoiceStepper} from "./invoice/InvoiceStepper";
import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from "./aws-exports";
import {Amplify} from "aws-amplify";
import {Center} from "@mantine/core";

Amplify.configure(awsExports);


function App() {

    return (
        <div className="App">
            <Center style={{height: 600}}><InvoiceStepper></InvoiceStepper></Center>
        </div>
    );
}

export default withAuthenticator(App);
