import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import SplashScreen from './screens/splash_screen';

const Splash = {
    screen: SplashScreen,
    navigationOptions: {
        header: null
    }
}

const RouteConfig = {
    initailRoute: 'Splash'
}
const AppNavigator = DrawerNavigator({
    Splash: Splash
},RouteConfig)

export default AppNavigator;