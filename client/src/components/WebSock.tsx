import {useEffect, useState} from 'react';
import * as React from "react";
import socket from '../socket'
import {useDispatch} from "react-redux";
import {fetchTickers} from "../actionCreators/appActionCreators";
import Connect from "./Connect";
import TickersList from "./TickersList";

const WebSock = () => {
    const dispatch = useDispatch()
    const [connected, setConnected] = useState(false)
    useEffect(() => {
            // @ts-ignore
            socket.on('connect', function (data) {
                console.log("удачное подключение к сокету")
                setConnected(true)
                dispatch(fetchTickers())
            })
        },[])

    return (
        <div>
            {connected && <div>Online</div>}
            <TickersList/>
        </div>
    );
};

export default WebSock;