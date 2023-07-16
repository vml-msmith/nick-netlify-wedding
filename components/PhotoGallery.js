import PhotoGalleryImage from "./PhotoGalleryImage.js";
import React from "react";

export default function PhotoGallery(props) {
  const [currentIndex, setCurrentIndex] = React.useState(false);
  const [showAll, setShowAll] = React.useState(false);

  const handleLeft = function (e, current) {
    if (current === 0) {
      setShowAll(true);
      setCurrentIndex(props.photos.length - 1);
    } else {
      setCurrentIndex(current - 1);
    }
  };

  const handleRight = function (e, current) {
    if (current === props.photos.length - 1) {
      setCurrentIndex(0);
    } else {
      if (current >= 9) {
        setShowAll(true);
      }
      setCurrentIndex(current + 1)
    }
  };

  const handleClose = function (e) {
    console.log("exit");

    setCurrentIndex(false);
  };

  return (
    <>
      <div className="photo_gallery">
        {props.photos.slice(0,10).map((img, index) => (
          <PhotoGalleryImage
            isOpen={currentIndex === index}
            src={img}
            index={index}
            handleLeft={handleLeft}
            handleRight={handleRight}
            handleClose={handleClose}
            key={index}
          />
        ))}
        {showAll && (
          <>
          {props.photos.slice(10).map((img, index) => (
            <>
            <PhotoGalleryImage
              isOpen={currentIndex === index + 10}
              src={img}
              index={index + 10}
              handleLeft={handleLeft}
              handleRight={handleRight}
              handleClose={handleClose}
              key={index + 10}
            />
            </>
          ))}
          </>
        )}

      </div>
      {!showAll && (
        <div className="show_all">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowAll(!showAll);
            }}
          >
            Show More Photos
          </a>
        </div>
      )}
    </>
  );
}
