import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import SplashScreen from './screens/splash_screen';
import LoginScreen from './screens/login_screen'; 

const Splash = {
    screen: SplashScreen,
    navigationOptions: {
        header: null
    }
}
const Login = {
    screen: LoginScreen,
    navigationOptions: {
        header: null
    }
}

const RouteConfig = {
    initailRoute: 'Splash'
}
const AppNavigator = DrawerNavigator({
    Splash: Splash,
    Login: Login
},RouteConfig)

export default AppNavigator;