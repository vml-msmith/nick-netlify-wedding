import Image from 'next/image'
import React from "react";

import { useEffect } from 'react'

export default function PhotoGallery(props) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const handleClick = function (e) {
    console.log("click!");
    setCollapseOpen(!collapseOpen);
    if (!collapseOpen) {
      window.addEventListener('keydown', keyPress)
    }
    else {
      window.removeEventListener('keydown', keyPress)      
    }
  }

  const keyPress = (e) => {
    console.log(e )
    if(e.keyCode === 27){
      setCollapseOpen(false);
      window.removeEventListener('keydown', keyPress)
      props.handleClose(e)
    }
    else if (e.keyCode === 37) {
      // Go left
      setCollapseOpen(false);
      window.removeEventListener('keydown', keyPress)
      props.handleLeft(e, props.index);
    }
  }


  useEffect(() => {
    if (collapseOpen) {
      window.addEventListener('keydown', keyPress)
    }

    if (props.isOpen) {
      handleClick();
    }
  },[])

  return (
    <>
    <div onClick={(e) => {
      handleClick(e)
    }}>
    <Image
      src={props.src}
      alt={props.src}
      width={300}
      height={300}
    />
  </div>
  {collapseOpen && (
    <>
  <div className="modal_overlay"></div>
  <div className="modal">
    <div className="modal__header">
      <div className="modal__close_button" onClick={(e) => {
        handleClick(e)
      }}>

      </div>
    </div>
    <div className="modal__content modal__content-image">
      <Image
        src={props.src}
        alt={props.src}
        width={2000}
        height={2000}
      />
    </div>
    </div>
   </>
  )}
  </>

  )
}
