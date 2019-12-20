import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Landing from './Landing';
import PilihPemain from './PilihPemain';
import App from './App';

const AppNavigator = createStackNavigator(
    {
        Landing: Landing,
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