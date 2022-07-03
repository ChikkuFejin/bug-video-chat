import React, { useState } from 'react'
import { useContext } from 'react'
import { SocketContext } from '../SocketContext'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Options({
    children
}) {

    const {
        me,callAccepted,name,setName,callEnded,leaveCall,callUser
    }=useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('')

  return (
    <div className='container mt-4 '>
        <div className="row bg-white p-2 shadow-sm">
            <div>
                <form noValidate autoComplete='off'>
                    <div className='row '>
                        <div className='col-12 col-sm-6'>
                            <h6>Account Info</h6>
                            <input
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                 placeholder="Name"
                                 className='form-control'
                            />
                            <CopyToClipboard 
                                text={me}
                            >
                                <button type="button" className='btn mt-2 btn-sm w-100 shadow btn-info'>
                                            Copy Id
                                </button>
                            </CopyToClipboard>
                        </div>

                        <div className='col-12 col-sm-6'>
                            <h6>Make a Call</h6>
                            <input
                                value={idToCall}
                                onChange={(e)=>setIdToCall(e.target.value)}
                                 placeholder="Id to Call"
                                 className='form-control'
                            />
                           {
                            callAccepted&& !callEnded?(
                                    <button
                                        className='btn btn-sm btn-danger w-100 my-2 shadow'
                                        onClick={leaveCall}
                                        type="button"
                                    >
                                        Hang Up
                                    </button>
                            ):(
                                    <button 
                                    className='btn btn-sm btn-success w-100 my-2 shadow'
                                    onClick={()=>{callUser(idToCall)}}
                                    type="button"
                                    >
                                        call
                                    </button>
                            )
                           }
                        </div>
                    </div>
                </form>
                {children}
            </div>
        </div>

    </div>
  )
}

export default Options