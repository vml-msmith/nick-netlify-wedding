import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import Menu from '@components/Menu'
import Hero from '@components/Hero'


import OurStory from '@components/Sections/OurStory'

import WeddingParty from '@components/Sections/WeddingParty'
import Photos from '@components/Sections/Photos'
import RSVP from '@components/Sections/RSVP'
import WeddingDay from '@components/Sections/WeddingDay'
import Registry from '@components/Sections/Registry'

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
        <div id="home" name="home"></div>
        <Hero />
        <Menu title="I&M" />
        <Header title="Irina & Michael" />
        <OurStory />
        <Photos />
        <WeddingParty />
        <WeddingDay />
        <RSVP />
        <Registry />
      </main>

      <Footer />
    </div>
  )
}
