import {combineReducers, createStore,applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
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
           promotions:Promotions,
           ...createForms({
            feedback: InitialFeedback
        })
       }),
       applyMiddleware(thunk, logger)
    );
    return store;
}