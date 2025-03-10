import { useState,useEffect } from "react"
import './scroll-styles.css'
import PropTypes from 'prop-types'

ScrollIndicator.propTypes = {
    url:PropTypes.string.isRequired
}

export default function ScrollIndicator({url}){
    const [data,setData] = useState([]);
    const [errorMessage,setErrorMessage] =useState('')
    const [scrollPercentage,setScrollPercentage] = useState(0)
    
    async function fetchData(getUrl){
        try{
           
            setLoading(true)
            const response = await fetch(getUrl)
            const data = await response.json()
            
            if(data){
                setData(data.products)
                setLoading(false)
            }

        }catch(e){
            console.log(e)
            setErrorMessage(e.message)
        }
    }

    useEffect(()=>{
        fetchData(url)
    },[url])

    function handleScrollPercentage(){
        /*1. How much we have scrolled
          2. */
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight)
    
    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    setScrollPercentage((howMuchScrolled/height)*100) 
    }

    /*This useEffect is for the  window size*/
    useEffect(() =>{
        window.addEventListener('scroll',handleScrollPercentage)
        /* simply return  on unmount*/
        return ()=>{
            window.removeEventListener('scroll',() => {})
        }
    },[])

    console.log(data,scrollPercentage)
  
    if(errorMessage){
        return <div> Error  {errorMessage} </div>
    }
    return (
        <div className="main-container"> 
          <div className="top-container">
            <h1>Custom Scroll Indicator</h1>
            <div className="scroll-progress-tracking-container">
              <div
                className="current-progress-bar"
                style={{ width: `${scrollPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="data-container">
            {data.length > 0
              ? data.map((dataItem) => <p>{dataItem.title}</p>)
              : null}
          </div>
        </div>
      );
    }