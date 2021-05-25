import io from "socket.io-client";

const socket = io('http://localhost:4000/');
// @ts-ignore
socket.on('connect', function (data) {
    console.log("удачное подключение к сокету")
});

export default socket