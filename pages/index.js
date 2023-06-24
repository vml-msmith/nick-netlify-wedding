import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import Menu from '@components/Menu'
import Hero from '@components/Hero'

import Generic from '@components/Generic'
import Section from '@components/Section'

import IndividualStory from '@components/IndividualStory'
import TogetherStory from '@components/TogetherStory'

import PhotoGallery from '@components/PhotoGallery'


import Image from 'next/image'


export default function Home() {
  let photos = [
    '/IMG_1071.jpeg',
    '/IMG_0961.jpeg',
    '/IMG_1046.jpeg'
  ];

  return (
    <div className="container">

      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sofia-Sans:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet" />

      </Head>

      <main>

        <Hero />
        <Menu title="I&M" />
        <Header title="Irina & Michael" />


        <Section id="story" title="Our Story">
          <div className="story__content">
            <IndividualStory title="Irina" img="/IMG_1071.jpeg" img_alt="">
              <p>Irina is Michael's best friend. She comes from Ukraine, but has lived in the United States for over 20 years. She is a mother to a 13 year old child Sasha, and works with Michael at VMLY&R.</p>
            </IndividualStory>

            <IndividualStory title="Michael" img="/IMG_0961.jpeg" img_alt="">
              <p>Michael </p>
            </IndividualStory>

            <TogetherStory title="Us Together!" img="/IMG_1046.jpeg" img_alt="">
              <p>Lorem Ipsum</p>
            </TogetherStory>
          </div>

        </Section>

        <Section id="photos" title="Photo Gallery">
          <PhotoGallery photos={photos} />
        </Section>

        <Section id="party" title="Wedding Party" type="condensed">
          <div className="story__content">
            <IndividualStory role="Maid of Honor" title="Tatiana Moroz" img="/IMG_1071.jpeg" img_alt="" extra={<><p> Mauris posuere magna metus, vel rutrum neque convallis ut. Quisque sagittis, metus lobortis elementum vestibulum, risus ante vestibulum augue, ac sodales enim ipsum non mi. Sed vel cursus sapien. Pellentesque posuere ex sit amet orci faucibus elementum. Vestibulum urna nulla, maximus sed velit sit amet, malesuada porta mi. Vestibulum a hendrerit augue, et auctor ex. Nullam et laoreet leo, vitae condimentum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p><p>Maecenas euismod, mauris vel aliquam maximus, massa purus euismod est, vitae volutpat nisl dolor convallis sem.</p></>}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut porta metus, at dictum enim.</p>
            </IndividualStory>

            <IndividualStory role="Best Man" title="Nicholas Dodson" img="/IMG_1519.jpeg" img_alt="" extra={<><p>, scelerisque iaculis arcu. Maecenas vehicula dictum lobortis. Curabitur sit amet viverra enim. Morbi suscipit sed enim efficitur varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus elementum imperdiet quam, ut molestie massa eleifend vehicula. Nulla quis ex nulla. Aenean nec urna a nisl tempor porta nec in arcu. Praesent augue neque, iaculis id sollicitudin nec, luctus finibus augue. Nullam egestas a mauris ut lobortis. Vivamus interdum eros elementum lorem egestas condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p><p>Etiam fringilla, odio interdum varius faucibus, ligula nunc condimentum magna, at tempus velit dui eget felis.</p></>}>
              <p>Nunc posuere lobortis orci, a tristique magna. Praesent dolor nibh, interdum eget arcu id.</p>
            </IndividualStory>

            <IndividualStory role="Bridesmaid" title={<>Olha<br/>Vohk</>} img="/IMG_1071.jpeg" img_alt="">
              <p>Lorem ipsum</p>
            </IndividualStory>

            <IndividualStory role="Groomsman" title="Devon Smith" img="/IMG_1071.jpeg" img_alt="">
              <p>Lorem ipsum</p>
            </IndividualStory>

            <IndividualStory role="Bridesmaid" title="Marina Melychuk" img="/IMG_1071.jpeg" img_alt="">
              <p>Lorem ipsum</p>
            </IndividualStory>

            <IndividualStory role="Groomsman" title={<>Corey<br/>Lee</>} img="/IMG_1071.jpeg" img_alt="">
              <p>Lorem ipsum</p>
            </IndividualStory>

            <IndividualStory role="Bridesmaid" title="Victora Shevchenko" img="/IMG_1071.jpeg" img_alt="">
              <p>Lorem ipsum</p>
            </IndividualStory>

            <IndividualStory role="Groomsman" title="Sasha Usman" img="/IMG_1071.jpeg" img_alt="">
              <p>Lorem ipsum</p>
            </IndividualStory>
          </div>

        </Section>

        <Section id="day" title="Wedding Day">
          <div>
            <div>
              <h3>Arrival and Seating</h3>
              <div>3:30pm</div>
              <div>Grand Street Cafe</div>
            </div>

            <div>
              <h3>Ceremony</h3>
              <div>4:00pm</div>
            </div>

            <div>
              <h3>Happy Hour</h3>
              <div>4:00pm</div>
              <div>Grand Street Cafe</div>              
            </div>

            <div>
              <h3>Wedding Party Photos</h3>
              <div>4:00pm</div>
              <div>The Park</div>              
            </div>            

            <div>
              <h3>Reception Dinner</h3>
              <div>4:00pm</div>
              <div>The Park</div>              
            </div>

            <div>
              <h3>Reception Dancing</h3>
              <div>4:00pm</div>
              <div>The Park</div>              
            </div>            

            <div>
              <h3>Go home!</h3>
              <div>4:00pm</div>
              <div>The Park</div>              
            </div>            
          </div>
          
        </Section>
        
        <Generic />
        <Generic />

      </main>

      <Footer />
    </div>
  )
}
