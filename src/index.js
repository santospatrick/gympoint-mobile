import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/reactotron';

import { store, persistor } from './store';
import App from './App';

const Index = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor} />
        <App />
    </Provider>
);

export default Index;
