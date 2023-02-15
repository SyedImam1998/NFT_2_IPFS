import React from 'react'
import '../App.css';
export default function Popup({url,setopen,open}) {
    const copy=()=>{
        console.log("copy")
        navigator.clipboard.writeText(url);
        setopen(false)
    }
  return (
   open && <div className='popupParent'>
        <div className='Popup'>
            <div>
                <h3>Copy to Clipboard</h3>
            </div>
            <div className='url'>
           {url}
            
            </div>
            <br></br>
            <div>
                <button onClick={copy}>Copy</button>
            </div>




        </div>

    </div>
  )
}
