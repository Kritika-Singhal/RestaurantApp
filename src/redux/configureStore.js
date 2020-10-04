import {combineReducers, createStore,applyMiddleware} from 'redux';
import {Dishes} from './dishes';
import {Promotions} from './promotions';
import {Comments} from './comments';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () => {
    const store = createStore (
       combineReducers({
           dishes: Dishes,
           comments: Comments,
           leaders: Leaders,
           promotions:Promotions
       }),
       applyMiddleware(thunk, logger)
    );
    return store;
}