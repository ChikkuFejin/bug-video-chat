import React from 'react'
import { useContext } from 'react'
import { SocketContext } from '../SocketContext'

function Videoplayer() {

    const {myVideo
            ,userVideo,
            name,
            callAccepted,
            callEnded,
            stream,
            call

            }=useContext(SocketContext);

  return (
    <div className='contaniner mt-3'>
        <div className='row justify-content-center'>
            {
                stream&&(
                <div className='col-md-6'>
                <h6>{name||'Name'}</h6>
                <video 
                    muted
                    ref={myVideo}
                    autoPlay
                    width="100%"
                />
                </div>
                )
            }
            {/* Our own Video */}
            

            {/* Our own Video */}
              {/* User's own Video */}
              {
                callAccepted &&!callEnded &&(
                    <div className='col-md-6'>
                    <h6>{call?.name||"Name"}</h6>
                    <video 
                        muted
                        ref={userVideo}
                        autoPlay
                        width="100%"
                    />
                </div>
                )
              }

            {/* Our own Video */}
        </div>
    </div>
  )
}

export default Videoplayer