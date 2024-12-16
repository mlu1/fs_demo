import React from "react";
import PropTypes from 'prop-types'

ImageList.propTypes = {
    images:PropTypes.string
}

const ImageList = ({images})=>{
    const images = images.map((image)=>{
        return(
            <img key={image.id} src = {image.webformatURL} alt="image" />
        )
    })
    return(
        <div>{images}</div>
    )
}

export default ImageList;