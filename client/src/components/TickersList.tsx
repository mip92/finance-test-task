import * as React from 'react';
// @ts-ignore
import {DataGrid, ColDef, ValueGetterParams} from '@material-ui/data-grid';
import {useTypeSelector} from "../hooks/useTypeSelector";

const columns: ColDef[] = [
    {field: 'ticker', headerName: 'Ticker', width: 120},
    {field: 'change', headerName: 'Change', width: 130},
    {field: 'change_percent', headerName: 'Change Persent', width: 180},
    {field: 'dividend', headerName: 'Devidended', type: 'number', width: 160,},
    {field: 'exchange', headerName: 'Exchange', width: 140,},
    {field: 'last_trade_time', headerName: 'last trade time', width: 170,},
    {field: 'price', headerName: 'Price', width: 110,},
    {field: 'yield', headerName: 'Yield', width: 110,},
];


export default function TickersList() {
    const {tickers} = useTypeSelector(state => state.tickers)
    let tickersWithId = tickers.map((t, key) => ({...t, id: key}))
    if (!tickers) {
        return <div>Загрузка</div>
    }
    return (
        <div style={{height: '500px', width: '100%'}}>
            <DataGrid rows={tickersWithId} columns={columns} pageSize={tickersWithId.length} checkboxSelection/>
        </div>
    );
}

