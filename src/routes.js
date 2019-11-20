import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Signin from 'pages/Signin';
import Checkins from 'pages/Checkins';
import Header from 'components/Header';

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
                            },
                            {
                                tabBarOptions: {
                                    keyboardHidesTabBar: true,
                                    activeTintColor: '#EE4E62',
                                    inactiveTintColor: 'rgba(255,255,255,.6)',
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
