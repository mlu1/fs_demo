import QRCode from "react-qr-code";
import { useState } from "react";
import './qr-styles.css'

export default function QRCodeGenerator(){
    const [qrCode,setQrCode] = useState('')
    const [input ,setInput] = useState('')
    
    function handleGenerateQrCode(){
        setQrCode(input)
        setInput('')
    }
    
    return (
        <div className="qr-container">
            <h2>QR Code Generator</h2>
            <div>
                <input onChange={(e)=>setInput(e.target.value)}
                 type="text"
                 name = "qr-code"
                 placeholder="Enter your value here"
                 value={input}
                 />
                <button 
                 disabled = {input == '' ?  false:true} 
                 onClick={handleGenerateQrCode}>
                    Generate
                </button>
                <div>
                  <QRCode
                    id ="qr-cde-value"
                    value = {qrCode}
                    size = {400}
                    bgColor = "#fff"
                  />  
                </div>
            </div> 
        </div>
     )   
}

