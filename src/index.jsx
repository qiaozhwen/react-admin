import React from 'react';
import App from './router/PageRouter'
import {Provider} from "react-redux";
import store from "./store";

export default class AllRouter extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}