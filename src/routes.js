import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Signin from 'pages/Signin';
import Checkins from 'pages/Checkins';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Signin,
                App: createBottomTabNavigator(
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
                initialRouteName: signedIn ? 'App' : 'Signin',
            },
        ),
    );
