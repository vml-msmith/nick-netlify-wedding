import React from "react";
import Image from 'next/image'


export default function IndividualStory(props) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  return (
    <div className="copy_content">
      <div className="copy_image">
      <Image
        layout='fill'
        src={props.img}
        alt={props.img_alt}
        width={300}
        height={300}
        layout='responsive'
      />
</div>
      <div className="copy">
        <div className="header_box">
        {props.role && (
          <h4>{props.role}</h4>
        )}
          <h3>{props.title}</h3>
        </div>
  
        <div className="copy_simple">
          {props.children}
        </div>
  
        {props.extra && (
          <>
          {!collapseOpen && (
              <div
              
            onClick={(e) => {
              e.preventDefault();
              setCollapseOpen(!collapseOpen);
            }}
            role="button"
            className="expander_button"
          >Continue Story</div>
          )}

          {collapseOpen && (
            <>
              <div className="modal_overlay"></div>
              <div className="modal">
                <div className="modal__header">
                  <div className="modal__close_button" onClick={(e) => {
                    e.preventDefault();
                    setCollapseOpen(!collapseOpen);
                  }}>

                  </div>
                </div>
                <div className="modal__content modal__content--two-col">

                  <div className="copy_image">
                    <Image
                      layout='fill'
                      src={props.img}
                      alt={props.img_alt}
                      width={300}
                      height={300}
                      layout='responsive'
                    />
                  </div>
                  <div class="expanded_copy">
                  <div className="header_box">
                  {props.role && (
                    <h4>{props.role}</h4>
                  )}
                    <h3>{props.title}</h3>
                  </div>

                  {props.children}
                  {props.extra}
                  </div>
              </div>
              </div>
            </>
          )}
          </>
        )}
      </div>
    </div>
  )
}
