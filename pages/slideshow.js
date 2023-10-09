import React, { useEffect, useState } from "react";
import Image from 'next/image'


function ImageSwapper () {
    const [currentImage, setCurrentImage] = useState(null);
    const [imageClass, setImageClass] = useState(null);
    const [imagePosition, setImagePosition] = useState(null);
    const [postedImages, setPostedImages] = useState(null);
//    const [images, setImages] = useState([]);
    const [initialImages, setInitialImages] = useState(null);

    const callAPI = async () => {
      try {
        const res = await fetch(
          `https://api.netlify.com/api/v1/sites/0c2ade19-beac-40a9-b9ac-a90abc35e355/submissions`, {
            headers: {
              "Authorization": "Bearer 2K-McS0A1g2PQ8sZC2QFD6J1XugECDxmVuCDdBB3M2w",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );
        const data = await res.json();
        let imgs = [];
        data.forEach((item) => {
          item.question = 'Would you care to share some wedding or marriage advice with us?';
          let element = {}

          if (!item.data.file) {
            return;
          }

          if (item.data.name) {
            element.attribution = item.data.name;
          }

          if (item.data.message) {
            element.copy = item.data.message;
          }


          element.img = item.data.file.url;

          imgs.push(element);
        });

        setPostedImages(imgs);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    const swapImage = async () => {
      console.log("Swap Image");
      console.log(images);
      setImageClass('fadeout');
      setImagePosition(styles[Math.floor(Math.random() * styles.length)]);
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }

    const advice =
    [
      {
        img: 'https://irinamichaelwedding.com/_next/image?url=%2Folga.jpeg&w=3840&q=75',
        copy: '<p>Don’t have good advice, only bad ones from experience! 😘</p>',
        attribution: 'Olha Vovk'
      },
      {
        img: '/johnc.jpeg',
        copy: '<p>Never eat ice cream alone.</p>',
        attribution: 'John Cardarella'
      },
      {
        img: '/asavynskyi.jpg',
        copy: '<p>Be happy!</p>',
        attribution: 'Andrei Savynskyi'
      }
    ];

    const songs = [
      {
        img: 'https://irinamichaelwedding.com/_next/image?url=%2Folga.jpeg&w=3840&q=75',
        copy: '<p>Verka Serdyuchka - any song</p>',
        attribution: 'Olha Vovk'
      }
    ]

    console.log("render");

    const styles = [
      "top-left",
//      "top-right",
      "bottom-left",
      "bottom-right"
    ];

    let images = [
      { img: 'g6.jpeg' }
    ]

    advice.forEach((element) => {
      element.question = 'Would you care to share some wedding or marriage advice with us?';
      images.push(element);
    });
    songs.forEach((element) => {
      element.question = 'Is there a specific song you\'d like to dance to?';
      images.push(element);
    });

    if (postedImages) {
      images = images.concat(postedImages);
    }

    useEffect(() => {

      //setInitialImages(i);
      //setImages(i);
      callAPI();
      swapImage();

      const fetchInterval = setInterval(() => {
        callAPI();
      }, 60000)

    }, []);

    useEffect(() => {

      const fadeinTimeout = setTimeout(() => {
        setImageClass('null');
      }, 1000);

      const fadeTimeout = setTimeout(() => {
          setImageClass('fadeout');
      }, 7000);

      const intervalId = setTimeout(() => {
        swapImage();
      }, 11000)


    }, [currentImage])

    return (
      <>
      <div className="shareBox">
      <Image
                      layout='fill'
                      src='/sharewedding.png'
                      alt='Share your image!'
                      width={300}
                      height={300}
                      layout='responsive'
                    />
                    <h1>Share your photos with us!</h1>
      </div>
        {currentImage && (
          <div className={`${imageClass} ${imagePosition} container slideshow`}>
            <div className="slide">
              {currentImage.copy && (
                <div className="content">
                  {currentImage.question && (
                    <div className="question">
                      {currentImage.question}
                    </div>
                  )}
                  <div className="copy" dangerouslySetInnerHTML={{ __html: currentImage.copy }}></div>
                  {currentImage.attribution && (
                    <div className="attribution">
                      {currentImage.attribution}
                    </div>
                  )}
                  </div>
              )}
              <img src={currentImage.img} />
            </div>
          </div>
        )}
      </>
    )
}


export default function SlideShow() {
  return (
    <ImageSwapper />
  )
}