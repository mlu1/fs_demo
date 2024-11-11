import React,{useState}from "react";
import './crypto-app.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function CryptoSearch(){

    const[crypto,setCrypto] = useState('')

    return (<div className="top-contanier">
            <span className = "paragraph-crypto"> Cryptocurrency Trading Bot!</span>
                <div className="col-md-4 mt-5">
                    <input type ="text" value={crypto} 
                    onChange={(e)=> setCrypto(e.target.value)}
                    placeholder="Enter the crypto"
                    required/>
                </div>
                <button className="btn btn-secondary px-5 mt-4">Submit</button>
            </div>
    )

}
