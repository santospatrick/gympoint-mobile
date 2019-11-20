import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/reactotron';

import Routes from 'routes';
import { store, persistor } from './store';

const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Routes />
        </PersistGate>
    </Provider>
);

export default App;
