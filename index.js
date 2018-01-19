import { AppRegistry } from 'react-native';
import AppNavigator from './app/app_navigator';
import React, {Component} from 'react';

class App extends Component {
    render(){
        return(
            <AppNavigator />
        )
    }
}

AppRegistry.registerComponent('dinder', () => App);
