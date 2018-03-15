import { AppRegistry } from 'react-native';
// import AppNavigator from './app/app_navigator';
import React, { Component } from 'react';
import Add from './add';

// import { Provider } from 'mobx-react';
// import stores from './app/stores';
// import { StyleProvider } from "native-base";
// import getTheme from './native-base-theme/components';
// import custom from './native-base-theme/variables/custom';

// class App extends Component {
//     constructor(){
//         super()
//         console.disableYellowBox = true;
//     }
//     render() {
//         return (
//             <Provider stores={stores} >
//                 <StyleProvider style={getTheme(custom)} >
//                     <AppNavigator />
//                 </StyleProvider>
//             </Provider>
//         )
//     }
// }

AppRegistry.registerComponent('dinder', () => Add);
