import {createStore, combineReducers, applyMiddleware} from 'redux';
import {products} from "./reducers";
import initialState from "./initialState";

const loggerMW = store=>next=> action => {
    console.groupCollapsed("dispatching", action.type);
    console.log("prev state", store.getState());
    console.log("action", action);
    next(action);
    console.log("next state", store.getState());
    console.groupEnd();
}

export const storeFactory = () => {
    return applyMiddleware(loggerMW)(createStore)(
        combineReducers({products}), initialState, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
