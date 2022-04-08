import React from 'react'
import './Popup.css'

function Popup(props) {

    if (props.trigger) {
        return (
            <div className='popup'>
                <div className='pop-content'>
                    <button className='close-button' onClick={props.close}>close</button>
                    {props.content}
                </div>
            </div>
        )
    } else return null;
}

export default Popup;