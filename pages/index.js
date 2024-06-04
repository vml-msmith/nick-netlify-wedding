import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

import Menu from "@components/Menu";
import Hero from "@components/Hero";

import OurStory from "@components/Sections/OurStory";

import WeddingParty from "@components/Sections/WeddingParty";
import Photos from "@components/Sections/Photos";
import RSVP from "@components/Sections/RSVPNick";
import WeddingDay from "@components/Sections/WeddingDay";
import Registry from "@components/Sections/Registry";
import FAQ from "@components/Sections/FAQ";
import Section from "@components/Section";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Angela and Nick -- Getting Married!</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sofia-Sans:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div id="home" name="home"></div>
        <Hero />
        <Menu title="A&N" />
        <Header title="Angela & Nick" />

        <Section>
          <h2 className="header__header">Wedding Ceremony</h2>
          <div className="header__details">
            <div>1:00pm</div>
          </div>
          <div className="header__details">
            <div><a target="_blank" href="http://holynameparishkck.org/">Holy Name of Jesus Parish</a></div>
          </div>
          <div className="header__details">
            <div><a href="https://www.google.com/maps/place/Holy+Name+of+Jesus+Parish/@38.9978394,-94.5811772,12z/data=!4m6!3m5!1s0x87c0ee20dc997909:0xdbf33f1dcb73a9bd!8m2!3d39.0613039!4d-94.6206248!16s%2Fg%2F1yfdrnk8h?entry=ttu" target="_blank">1001 Southwest Blvd &#x2022; Kansas City, KS &#x2022; 66103</a></div>
          </div>
          <div className="header__details">
          </div>
        </Section>
        <Section>
          <h2 className="header__header">Mid-day Break</h2>
          <div className="header__details">
            <div>2:30pm - 5:30pm</div>
          </div>
        </Section>
        <Section>
          <h2 className="header__header">Wedding Reception</h2>
          <div className="header__details">
            <div>6:00pm</div>
          </div>
          <div className="header__details">
            <div>Schear Residence</div>
          </div>
          <div className="header__details">
            <div><a href="https://www.google.com/maps/@38.7453415,-94.4413576,3a,75y,23.67h,87.2t/data=!3m7!1e1!3m5!1sdJf7pFhpOG0o9SV-yVjYAA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DdJf7pFhpOG0o9SV-yVjYAA%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D23.66706680362075%26pitch%3D2.8014095138684922%26thumbfov%3D90!7i16384!8i8192?coh=205410&entry=ttu" target="_blank">20619 S State Rte J &#x2022; Peculiar, MO &#x2022; 64078</a></div>
          </div>
          <div className="header__details">
          </div>
        </Section>

        <OurStory />
        <Photos />
        <WeddingParty />
        <WeddingDay />
        <FAQ />
        <RSVP />
        <Registry />
      </main>

      <Footer />
    </div>
  )
}

