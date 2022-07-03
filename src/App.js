import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Videoplayer from './components/Videoplayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

function App() {
  return (
    <div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className="col-8 col-md-6  text-center">
              <div className='shadow p-2'>
                 <h1>Video player</h1>
              </div>
              
              <Videoplayer/>
              <Options>
                <Notifications/>
              </Options>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App