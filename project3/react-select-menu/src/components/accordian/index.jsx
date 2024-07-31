import { useState } from "react"
import data from "./data"
import './style.css';

export default function Accordian(){
    const [selected,setSelected] = useState(null)
    function handleSingleSelections(getCurrrentId){
            setSelected(getCurrrentId === selected ?null:getCurrrentId)

        }
    console.log("The selected"+selected)    
    return (
        <div className="wrapper">
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div onClick={()=>handleSingleSelections(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                                </div> 
                                {
                                        selected === dataItem.id?
                                        <div className="content">{dataItem.answer}</div>:null
                                }
                        </div>))
                    ):(<div> No data found</div>)
                }
            </div>
        </div>
    )
}