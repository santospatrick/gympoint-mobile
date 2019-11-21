import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Signin from 'pages/Signin';
import Checkins from 'pages/Checkins';
import Header from 'components/Header';
import HelpOrders from 'pages/HelpOrders';
import NewHelpOrder from 'pages/NewHelpOrder';
import HelpOrderDetail from 'pages/HelpOrderDetail';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Signin,
                App: createStackNavigator(
                    {
                        Main: createBottomTabNavigator(
                            {
                                CheckinsStack: {
                                    screen: createStackNavigator(
                                        {
                                            Checkins,
                                        },
                                        {
                                            defaultNavigationOptions: {
                                                headerTitle: () => <Header />,
                                            },
                                            navigationOptions: {
                                                tabBarLabel: 'Check-ins',
                                                tabBarIcon: ({ tintColor }) => (
                                                    <Icon
                                                        name="person-pin-circle"
                                                        size={20}
                                                        color={tintColor}
                                                    />
                                                ),
                                            },
                                        },
                                    ),
                                },
                                HelpOrdersStack: {
                                    screen: createStackNavigator(
                                        {
                                            HelpOrders,
                                            NewHelpOrder,
                                            HelpOrderDetail,
                                        },
                                        {
                                            headerBackTitleVisible: false,
                                            defaultNavigationOptions: {
                                                headerTitle: () => <Header />,
                                                headerBackImage: () => (
                                                    <Icon
                                                        name="chevron-left"
                                                        color="#000"
                                                        size={24}
                                                        style={{
                                                            marginLeft: 15,
                                                        }}
                                                    />
                                                ),
                                            },
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
                                resetOnBlur: true,
                            },
                        ),
                    },
                    {
                        headerMode: 'none',
                    },
                ),
            },
            {
                initialRouteName: signedIn ? 'App' : 'Signin',
            },
        ),
    );
