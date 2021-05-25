import {TickerAction, TickerActionTypes, TickerStateType} from "../../types/tickerTypes"

const initState: TickerStateType = {
    tickers: [],
    loading: false,
    error: null,
}
export const tickerReducer = (state = initState, action: TickerAction): TickerStateType => {
    switch (action.type) {
        case TickerActionTypes.FETCH_TICKER:
            return {...state, loading:true}
        case TickerActionTypes.FETCH_TICKER_SUCCESS:
            return {...state, loading:false, tickers:action.payload}
        case TickerActionTypes.FETCH_TICKER_ERROR:
            return {...state, loading:false, error:action.payload}

        default:
            return state
    }
}