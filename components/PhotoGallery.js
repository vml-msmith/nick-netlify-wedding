import PhotoGalleryImage from './PhotoGalleryImage.js'
import React from "react";


export default function PhotoGallery(props) {
  const [currentIndex, setCurrentIndex] = React.useState(false);

  const handleLeft = function (e, current) {
    console.log("Go left");
    console.log(current);
    if (current === 0) {
      setCurrentIndex(props.photos.length - 1);
    }
    else {
      setCurrentIndex(current - 1)
    }

    console.log("Index "  + currentIndex);
  }

  const handleRight = function (e, current) {
    console.log("Go left");
    console.log(current);
    if (current === 0) {
      props.photos
      setCurrentIndex(props.photos.length - 1);
    }
  }

  const handleClose = function(e) {
    setCurrentIndex(false)
  }

  return (
    <div className="photo_gallery">
      {props.photos.map((img, index) => (
                <PhotoGalleryImage isOpen={currentIndex === index} src={img} index={index} handleLeft={handleLeft} handleRight={handleRight} handleClose={handleClose}/>
      ))}
    </div>
  )
}