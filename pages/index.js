import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import Menu from '@components/Menu'
import Hero from '@components/Hero'

import Generic from '@components/Generic'
import Section from '@components/Section'


import OurStory from '@components/Sections/OurStory'

import WeddingParty from '@components/Sections/WeddingParty'
import Photos from '@components/Sections/Photos'
import RSVP from '@components/Sections/RSVP'



export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Irina and Michael -- Getting Married!</title>
        <link rel="icon" href="/favicon.png" />
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

        <OurStory />
        <Photos />
        <WeddingParty />

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

        <RSVP />

      </main>

      <Footer />
    </div>
  )
}
