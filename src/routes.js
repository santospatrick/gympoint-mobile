import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Signin from 'pages/Signin';

export default createAppContainer(
    createSwitchNavigator({
        Signin,
    }),
);
