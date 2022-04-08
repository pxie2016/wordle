import React from 'react'
import './Popup.css'

function Popup(props) {

  return (props.trigger) ? (
    <div className='popup'>
    <div className='pop-content'>
        <button className='close-button' onClick={props.close}>close</button>
        {props.content}
    </div>
    </div>
  ) : "";
}

export default Popup