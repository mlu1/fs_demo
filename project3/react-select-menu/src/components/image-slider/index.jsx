import { useEffect, useState } from "react";
import {bsArrowLeftCircleFill,bsArrowRightCircleFill} from 'react-icons/bs'
import './image-slider-styles.css'

export default function ImageSlider(urls,limit=5,page=1){
    const [images,setImages] = useState([]);
    const [currentSide,setCurrentSlide] = useState(0)
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
            <bsArrowLeftCircleFill  className = "arrow arrow-left"
            {
                images && images.length ? 
                images.map(imageItem=>{

                }
                :null
            }/>
        </div>
    )
}