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
import HeaderRight from 'components/HeaderRight';

import { getPersonIcon, getLiveIcon } from 'components/tabIcons';

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
                                            defaultNavigationOptions: ({
                                                navigation,
                                            }) => ({
                                                headerTitle: () => <Header />,
                                                headerRight: () => (
                                                    <HeaderRight
                                                        navigation={navigation}
                                                    />
                                                ),
                                            }),
                                            navigationOptions: () => ({
                                                tabBarLabel: 'Check-ins',
                                                tabBarIcon: getPersonIcon,
                                            }),
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
                                            defaultNavigationOptions: ({
                                                navigation,
                                            }) => ({
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
                                                headerRight: () => (
                                                    <HeaderRight
                                                        navigation={navigation}
                                                    />
                                                ),
                                            }),
                                        },
                                    ),
                                    navigationOptions: ({ navigation }) => ({
                                        title: 'Pedir ajuda',
                                        tabBarIcon: getLiveIcon,
                                        headerRight: () => (
                                            <Icon
                                                onPress={() => {
                                                    navigation.navigate(
                                                        'Signin',
                                                    );
                                                }}
                                                style={{
                                                    marginRight: 10,
                                                }}
                                                name="block"
                                                size={20}
                                                color="#EE4E62"
                                            />
                                        ),
                                    }),
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
