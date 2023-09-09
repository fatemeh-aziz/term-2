import React from 'react';
 interface Props{
     msg:string
 }
function Message({msg}:Props) {
    console.log("message component body....")
    return (
        <div>{msg}</div>
    );
}

export default Message;