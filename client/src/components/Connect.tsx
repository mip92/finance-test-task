import React from 'react';
import {Button} from "@material-ui/core";

interface ConnectProps {
    connect:  () => void;
}
const Connect: React.FC<ConnectProps> = ({connect}) => {

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={connect}>
                Подключиться к сокету
            </Button>
        </div>
    );
};

export default Connect;