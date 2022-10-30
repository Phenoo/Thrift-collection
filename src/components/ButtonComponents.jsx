import React from 'react'
import {SiApple, SiGoogleplay} from 'react-icons/si'


const ButtonComponents = () => {
  return (
    <div className="button-container">
            <button>
              <div>
                <SiApple />
              </div>
              <div>
                <span>download on the</span>
                app store
              </div>
            </button>
            <button>
              <div>
                <SiGoogleplay />
              </div>
              <div>
                <span>get it on</span>
                playstore store
              </div>
            </button>
          </div>
  )
}

export default ButtonComponents