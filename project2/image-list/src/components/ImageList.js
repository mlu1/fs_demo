import React from "react";
import PropTypes from "prop-types";

const ImageList = ({ images }) => {
  if (!images || !Array.isArray(images)) {
    return <div>No images to display.</div>;
  }

  const renderedImages = images.map((image) => {
    return <img key={image.id} src={image.webformatURL} alt="image" />;
  });

  return <div>{renderedImages}</div>;
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageList;
