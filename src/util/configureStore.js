import Immutable from 'immutable';
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(reducer, initialState) {
    const enhancer = compose(
        applyMiddleware(thunkMiddleware)
    );
    const store = createStore(
        reducer,
        Immutable.fromJS(initialState),
        enhancer
    );
    return store;
}
