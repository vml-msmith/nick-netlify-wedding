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
          //item.question = 'Would you care to share some wedding or marriage advice with us?';
          let element = {}

          if (!item.data.file) {
            return;
          }

          if (item.data.name) {
            element.attribution = item.data.name;
          }

          if (item.data.message) {
            element.copy = '<p>' + item.data.message + '</p>';
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
      /*
      {
        img: '/johnc.jpeg',
        copy: '<p>Never eat ice cream alone.</p>',
        attribution: 'John Cardarella'
      },/**/
      /*
      {
        img: '/advice/asavynskyi.jpg',
        copy: '<p>Be happy!</p>',
        attribution: 'Andrei Savynskyi'
      },/**/
      /*
      {
        img: '/advice/vsavynskyi.jpg',
        copy: '<p>Happy wife, happy life!</p>',
        attribution: 'Vitalii Savynskyi'
      },
      /**/
      /*
      {
        img: '/advice/ajohnson.jpg',
        copy: "<p>The wedding day goes so fast with a lot of things to do. Make sure you guys have some alone time carved out on the wedding day! And savor it. Can't wait to party with you two!</p>",
        attribution: 'Andrea Johnson'
      },
      /**/
      /*
      {
        img: '/advice/ysuriano.jpg',
        copy: "<p>I don't know, we'll let you know once we get married ;)</p><p>But, while planning your wedding, really take in all the little things that will make your wedding yours and how lucky you are to be surrounded and supported by all your loved ones.</p><p>So happy for you guys. Can't wait to celebrate your love!</p>",
        attribution: 'Yenifer Suriano'
      },
      /**/
      /*
      {
        img: '/advice/kkimbrough.jpg',
        copy: "<p>Make every day as much fun as you can. </p>",
        attribution: 'Kateryna Kimbrough'
      },/**/
      /*
      {
        img: '/advice/lwait.jpg',
        copy: "<p>I have no advice BUT, I’m incredibly happy for you both!</p>",
        attribution: 'Liz Wait'
      },/**/
      /*
      {
        img: '/advice/nmorgan.jpg',
        copy: "<p>A wedding advice: bring some water and snacks everywhere you go to stay hydrated and not starve.</p>",
        attribution: 'Nina Morgan'
      },/**/
      /*
      {
        img: '/advice/nmorgan.jpg',
        copy: "<p>A marriage advice: pick your battles, you don’t always have to be right!</p>",
        attribution: 'Nina Morgan'
      },/**/
      /*
      {
        img: '/advice/jmcculley.jpg',
        copy: "<p>Enjoy the day, it goes by fast-  and no judgement if you end up at Taco Bell drive thru afterwards (like us) because forgetting to eat/not being hungry due to excitement is a thing. Don't worry, Taco Bell employees will compliment your dress and tux.</p>",
        attribution: 'Jude McCulley'
      },/**/
      /*
      {
        img: '/advice/jcourtice.jpg',
        copy: "<p>It’s ok to go to bed angry. Just keep talking.</p>",
        attribution: 'Jimmy Courtice'
      },/**/
      /*
      {
        img: '/advice/dkeen.jpg',
        copy: "<p>As long as you can laugh at every situation and forgive one another you will  find your way through difficult times, together.</p>",
        attribution: 'Dianna Keen'
      },/**/
      {
        img: '/advice/rmott.jpg',
        copy: "<p>Keep it weird!</p>",
        attribution: 'Ryan Mott'
      },
      /*
      {
        img: '/advice/jmay.jpg',
        copy: "<p>Wedding & marriage memories form in the imperfect moments spent together.</p>",
        attribution: 'Joanna May'
      },/**/
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
      { img: 'g1.jpeg' },
      { img: 'g2.jpeg' },
      { img: 'g3.jpeg' },
      { img: 'g5.jpeg' },
      { img: 'g6.jpeg' },
      { img: 'g8.jpeg' },
      { img: 'g9.jpeg' },
      { img: 'g10.jpeg' },
      { img: 'g11.jpeg' },
      { img: 'g12.jpeg' },
      { img: 'g14.jpeg' },
      { img: 'g15.jpeg' },
      { img: 'g16.jpeg' },
      { img: 'g17.jpeg' },
      { img: 'g18.jpeg' },
      { img: 'g19.jpeg' },
      { img: 'g20.jpeg' },
      { img: 'g21.jpeg' },
      { img: 'g22.jpeg' },
      { img: 'g24.jpeg' },
      { img: 'g25.jpeg' },
      { img: 'g26.jpeg' },
      { img: 'g28.jpeg' },
      { img: 'g29.jpeg' },
      { img: 'g30.jpeg' },
      { img: 'g31.jpeg' },
      { img: 'g32.jpeg' },
      { img: 'g33.jpeg' },
      { img: 'g34.jpeg' },
      { img: 'g35.jpeg' },
      { img: 'g37.jpeg' },
      { img: 'g38.jpeg' },
      { img: 'g39.jpeg' },
      { img: 'g40.jpeg' },
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
        console.log("Fade in timeout");
        setImageClass('null');
      }, 1000);

      const fadeTimeout = setTimeout(() => {
        console.log("Fade out timeout");
          setImageClass('fadeout');
      }, 7000);

      const intervalId = setTimeout(() => {
        console.log("swap");
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