import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './image-slider-styles.css'

export default function ImageSlider(urls,limit=5,page=1){
    const [images,setImages] = useState([]);
    const [currentSlide,setCurrentSlide] = useState(0)
    const[errorMsg,setErrorMsg] = useState(null)
    const[loading,setLoading] =useState(false)

    async function fetchImages(getUrl){
        try{
            const response =  await fetch(`${getUrl['urls']}?page=${getUrl['page']}&limit=${getUrl['limit']}`);
            const data = await response.json();
            if(data){
                setImages(data)
                setLoading(false)
            }
        }catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }


     /*
        Scenario
        1. User is at the first image and clicks left button -> go to last image.
        2. User is at the last image and clicks next button -> got to 1st image.
        3.else move -1 or +1
    */

    function handlePrevious(){
       
        setCurrentSlide(currentSlide === 0 ? images.length - 1:currentSlide-1)

    }

    function handleNext(){
        
        setCurrentSlide(currentSlide === images.length -1 ? 0: currentSlide +1)
    }

    useEffect(()=>{
        if(urls !== '')  fetchImages(urls)
            
        },[urls]);

    if(loading){
        return <div>Loading Data! Please wait</div>
    }

    if(errorMsg !== null){
        return(<div>Error occured {errorMsg}</div>)
    }

    return(
        <div className="container">
            <BsArrowLeftCircleFill  onClick = {handlePrevious} className="arrow arrow-left"/>
                {
                images
                ? images.map((imageItem,index)=>(
                    <img
                    key = {imageItem.id}
                    alt = {imageItem.download_url}
                    src = {imageItem.download_url}
                    className={currentSlide === index ? "current-image":"current-image hide-current-image"}/>
                ))
                :null}
                <BsArrowRightCircleFill onClick={handleNext} className = "arrow arrow-right"/>
                <span className="circle-indicators">
                    {
                        images && images.length ? 
                        images.map((_,index)=>
                            <button
                                key = {_}
                                className={
                                    currentSlide === index ?
                                    "current-indicator":
                                    "current-indicator inactive-indicator"
                                }
                                onClick={() => setCurrentSlide(index)}
                            ></button>)
                        :null
                
                    }
                </span>
        </div>
    )
}