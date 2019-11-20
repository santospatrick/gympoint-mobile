import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Signin from 'pages/Signin';
import Checkins from 'pages/Checkins';
import Header from 'components/Header';
import HelpOrders from 'pages/HelpOrders';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Signin,
                App: createStackNavigator(
                    {
                        Main: createBottomTabNavigator(
                            {
                                Checkins,
                                HelpOrdersStack: {
                                    screen: createStackNavigator(
                                        {
                                            HelpOrders,
                                        },
                                        {
                                            headerMode: 'none',
                                        },
                                    ),
                                    navigationOptions: {
                                        title: 'Pedir ajuda',
                                        tabBarIcon: ({ tintColor }) => (
                                            <Icon
                                                name="live-help"
                                                size={20}
                                                color={tintColor}
                                            />
                                        ),
                                    },
                                },
                            },
                            {
                                tabBarOptions: {
                                    keyboardHidesTabBar: true,
                                    activeTintColor: '#EE4E62',
                                    inactiveTintColor: '#999999',
                                },
                            },
                        ),
                    },
                    {
                        defaultNavigationOptions: {
                            header: <Header />,
                        },
                    },
                ),
            },
            {
                initialRouteName: signedIn ? 'App' : 'Signin',
            },
        ),
    );
