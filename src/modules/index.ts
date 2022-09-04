
import { combineReducers, compose, createStore } from 'redux';
import { translateReducer, TranslateState } from './reducers';

export * from './constants';
export * from './actions';
export * from './selectors';
export * from './reducers';

export interface AppState {
    translate: TranslateState;
}

const appReducer = combineReducers({
    translate: translateReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(appReducer, composeEnhancers());
