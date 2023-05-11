import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import Menu from '@components/Menu'
import Hero from '@components/Hero'

import Generic from '@components/Generic'
import Section from '@components/Section'

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap" rel="stylesheet"></link>

      </Head>

      <main>
        <div className="region--top">
          <Hero />
          <Menu title="I&M" />
          <Header title="Irina & Michael" />
        </div>

        <Section id="story" title="Our Story">
          <div>
          <div className="copy_content">
            <img className="image" src="https://picsum.photos/800/600" alt="" />
            <div className="copy">
              <h3>Irina Usman</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="copy_content">
            <img className="image" src="https://picsum.photos/800/600" alt="" />
            <div className="copy">
              <h3>Michael Smith</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        </Section>


        <Generic title="photos" />
        <Generic title="party" />
        <Generic title="day" />
        <Generic />
        <Generic />

      </main>

      <Footer />
    </div>
  )
}
