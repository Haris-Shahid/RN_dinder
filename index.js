import { AppRegistry } from 'react-native';
import AppNavigator from './app/app_navigator';
import React, { Component } from 'react';

import { Provider } from 'mobx-react';
import stores from './app/stores';

class App extends Component {
    render() {
        return (
            <Provider stores={stores} >
                <AppNavigator />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('dinder', () => App);
