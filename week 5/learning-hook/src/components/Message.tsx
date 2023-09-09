import React, {useEffect} from 'react';

interface Props {
    msg: string
}

function Message({msg}: Props) {
    console.log("message component body....")
    useEffect(() => {
        console.log("use effect mount")
        return () => {
            console.log("use effect unmount")
        }
    }, [])
    return (
        <div>{msg}</div>
    );
}

export default Message;