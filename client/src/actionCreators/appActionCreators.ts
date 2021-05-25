import axios from "axios"
import {Dispatch} from "react"
import {
    fetchTickerAction,
    fetchTickerErrorAction,
    fetchTickerSuccessAction,
    Ticker,
    TickerAction,
    TickerActionTypes
} from "../types/tickerTypes"
import socket from "../socket";


export const fetchTicker = (): fetchTickerAction => {
    return {type: TickerActionTypes.FETCH_TICKER}
}
export const fetchErrorTicker = (): fetchTickerErrorAction => {
    return {
        type: TickerActionTypes.FETCH_TICKER_ERROR,
        payload: "Произошла ошибка при загрузке списка дел"
    }
}
export const fetchSuccessTicker = (data: Ticker[]): fetchTickerSuccessAction => {
    return {
        type: TickerActionTypes.FETCH_TICKER_SUCCESS,
        payload: data,
    }
}


export const fetchTickers = () => {
    return async (dispatch: Dispatch<TickerAction>) => {
        dispatch(fetchTicker())
        try {
            socket.emit('start');
            socket.on('ticker', (data) => {
                dispatch(fetchSuccessTicker(data))
            }
        )
        } catch (e) {
            dispatch(fetchErrorTicker())
        }
    }
}