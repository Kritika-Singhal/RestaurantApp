import {combineReducers, createStore} from 'redux';
import {Dishes} from './dishes';
import {Promotions} from './promotions';
import {Comments} from './comments';
import { Leaders } from './leaders';

export const configureStore = () => {
    const store = createStore (
       combineReducers({
           dishes: Dishes,
           comments: Comments,
           leaders: Leaders,
           promotions:Promotions
       })
    );
    return store;
}