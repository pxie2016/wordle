import React from 'react'
import './Keyboard.css'
import Key from './Key'

function Keyboard() {
    const keys1 =["Q","W", "E","R","T","Y","U","I","O","P"]
    const keys2 =["A","S", "D","F","G","H","J","K","L"]
    const keys3 =["Z","X","C","V","B","N","M"]
    
    return (
    <div className="keyboard">

        <div className='line'>
            {keys1.map((key)=>{
                return <Key keyValue={key} />;
            })}
        </div>

        <div className='line'>
            {keys2.map((key)=>{
                return <Key keyValue={key} />;
            })}
        </div>

        <div className='line'>
            <Key keyValue={'Enter'} class={' func'}/>
            {keys3.map((key)=>{
                return <Key keyValue={key} />;
            })}
            <Key keyValue={'Delete'} class={' func'} />
        </div>
        
    </div>
  )
}

export default Keyboard