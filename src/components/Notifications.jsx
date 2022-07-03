import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'

function Notifications() {
  const {answerCall,call,callAccepted}=useContext(SocketContext);
  console.log("🚀 ~ file: Notifications.jsx ~ line 6 ~ Notifications ~ call", call)
  return (
    <>
  {
    call.isReceivedCall && !callAccepted &&(
      <div className="d-flex justify-center-center">
        <h2>{call?.name} is calling:</h2>
        <button className="btn btn-sm btn-success"
          onClick={answerCall}
          
        >
          Asnwer
        </button>
      </div>
    )
  }
    </>
  )
}

export default Notifications