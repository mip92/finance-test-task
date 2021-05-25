import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {tickerReducer} from "./tickerReducer";
import thunkMiddleware from "redux-thunk";


export const rootReducer=combineReducers(
    {
        tickers: tickerReducer,
    }
)
export type RootStateType=ReturnType<typeof rootReducer>

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

window['__store__']=store;

export default store;