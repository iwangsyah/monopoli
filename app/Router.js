import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Landing from './screens/Landing';
import Tentang from './screens/Tentang';
import Info from './screens/Info';
import PilihJumlah from './screens/PilihJumlah';
import PilihPemain from './screens/PilihPemain';
import App from './screens/App';

console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
    {
        Landing: Landing,
        Tentang: Tentang,
        Info: Info,
        PilihJumlah: PilihJumlah,
        PilihPemain: PilihPemain,
        App: App,
    },
    {
        initialRouteName: 'Landing',
        defaultNavigationOptions: ({ navigation }) => ({
            header: null
        })
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Router extends React.Component {
    render() {
        return <AppContainer />;
    }
}