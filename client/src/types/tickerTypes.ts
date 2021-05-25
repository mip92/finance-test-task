export interface Ticker{
    change: string
    change_percent: string
    dividend: string
    exchange: string
    last_trade_time: string
    price: string
    ticker: string
    yield: string
}

export interface TickerStateType{
    tickers:Ticker[];
    loading: boolean;
    error: null|string;
}

export enum TickerActionTypes{
    FETCH_TICKER="FETCH_TICKER",
    FETCH_TICKER_SUCCESS="FETCH_TICKER_SUCCESS",
    FETCH_TICKER_ERROR="FETCH_TICKER_ERROR",
}
export interface fetchTickerAction{
    type:TickerActionTypes.FETCH_TICKER;
}
export interface fetchTickerSuccessAction{
    type:TickerActionTypes.FETCH_TICKER_SUCCESS;
    payload: any[];
}
export interface fetchTickerErrorAction{
    type:TickerActionTypes.FETCH_TICKER_ERROR
    payload: null | string
}

export type TickerAction = fetchTickerAction|fetchTickerSuccessAction|fetchTickerErrorAction