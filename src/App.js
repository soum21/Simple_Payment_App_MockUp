import React, { Component } from 'react'
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import Router from './routes/router';

class App extends Component {
    render() {
        const store = createStore(rootReducer,{}, applyMiddleware(thunk))
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;
