import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import pokeReducer from './pokeDucks';
import userReducer, { readUserAction }  from './userDucks';


const rootReducer = combineReducers({
    pokemones: pokeReducer,
    users : userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ))
    readUserAction()(store.dispatch)
    return store
}