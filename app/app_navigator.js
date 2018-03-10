import React from 'react';
import { DrawerNavigator, StackNavigator, DrawerItems, NavigationAction } from 'react-navigation';
import SplashScreen from './screens/splash_screen';
import LoginScreen from './screens/login_screen'; 
import MatchScreen from './screens/match_screen';
import PostScreen from './screens/post_screen';
import { ScrollView } from 'react-native';
import { Button, Icon } from 'native-base';

const hiddenItems = [
    'Splash',
    'Login'
];

const SideBar = (props) => {
    const propsClone = {
        ...props,
        items: props.items.filter(item => !hiddenItems.includes(item.key))
    }
    return (
        <ScrollView>
            <DrawerItems {...propsClone} />
        </ScrollView>
    )
}

const MenuButton = ({navigate}) => (
    <Button transparent onPress={() => {navigate('DrawerOpen')}}>
        <Icon name="menu" size={28} style={{color: '#fff'}} />
    </Button>
)
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
const Match = {
    screen: MatchScreen,
    navigationOptions: {
        headerMode: 'screen',
        headerTitle: 'Matches',
        drawerLabel: 'Matches'
    }
}
const Post = {
    screen: PostScreen,
    navigationOptions: {
        headerMode: 'screen',
        headerTitle: 'Post',
    }
}
const MatchStack = StackNavigator({
    Match: Match,
    Post: Post
},{
    navigationOptions: ({navigation, HeaderProps}) => ({
        headerLeft: <MenuButton navigate={navigation.navigate} />,
        headerStyle: {backgroundColor: "#000"},
        headerTintColor: '#fff'
    })
})

const RouteConfig = {
    initailRoute: 'Splash',
    contentComponent: SideBar,
    navigationOptions: {
       gesturesEnabled: false
    }
}
const AppNavigator = DrawerNavigator({
    Splash: Splash,
    Login: Login,
    Match: { screen: MatchStack }
},RouteConfig)

export default AppNavigator;