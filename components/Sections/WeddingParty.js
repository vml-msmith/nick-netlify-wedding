import Section from '@components/Section'
import IndividualStory from '@components/IndividualStory'

export default function WeddingParty() {
  return (
    <Section id="party" title="Wedding Party" type="condensed">
      <div className="story__content">
        <IndividualStory role="Matron of Honor" title={<>Tatiana<br/>Moroz</>} img="/tanya.jpeg" img_alt="">
          <p>30 years , Tatiana transferred from another elementary school. At first recess she was standing alone by the window, I stopped by and asked her if she was a good painter.  A recess-long conversation started, and it’s been going on until this day, mostly, because Tatiana never answered my question and I just want her to admit that she’s not good at painting.</p>
        </IndividualStory>

        <IndividualStory role="Best Man" title={<>Nicholas<br/>Dodson</>} img="/nick.jpeg" img_alt="">
          <p>Nick has been my friend since childhood, having met at Boy Scouts. Although we were a year apart in age and rank, our involvement in our late teens led to us becoming good friends. We worked together and even lived together many years both at Scout Camp and in our after-camp lives. I'm proud to call Nick one of my best friends.</p>
        </IndividualStory>

        <IndividualStory role="Bridesmaid" title={<>Olha<br/>Vovk</>} img="/olga.jpeg" img_alt="">
          <p>My workplace is also the place where I connected with one of the most incredible people I know. Olha and I bonded over something that is called API automation, and it evolved into a strong friendship and later into a business partnership. It is very rare when you meet someone later in life and you create a meaningful relationship that you treasure, and this is exactly what happened between Olha and I.</p>
        </IndividualStory>

        <IndividualStory role="Groomsman" title={<>Corey<br/>Lee</>} img="/corey.jpg" img_alt="">
          <p>Corey and I spent most of our teenage and early 20s years in each other's company. We also met at Boy Scouts, and both participated in a lot of the same activities, including working together on Camp Staff. We both came of age together, spent too many nights hanging out at a coffee shop in college years and then decided to travel around the US together. Corey has gone on to serve in the Army and later move away from Kansas City, but I couldn't imagine I'd be the man I am today without his influence.</p>
        </IndividualStory>

        <IndividualStory role="Bridesmaid" title={<>Marina<br/>Melnychuk</>} img="/marina2.jpeg" img_alt="">
          <p>Marina has a special place in my heart because I’ve known her since my childhood. Incredible confidence and self-control are what made me to look up to her. Marina is the one who will always give you an advice that will have the best outcome. After a long separation she came to US last year- now I cannot imagine my special day without her standing by my side.</p>
        </IndividualStory>

        <IndividualStory role="Groomsman" title={<>Devon<br/>Smith</>} img="/devon.jpg" img_alt="">
          <p>Devon is my younger brother by 9 years. For many siblings, that age gap may make for a not-very-close relationship. In our case though, that couldn't be further from the truth. Devon is certainly one of my go-to calls when I'm inviting people to hang out or looking to involve people in an activity. We share a lot of the same interests and I definitely consider him a friend as well as my brother.</p>
        </IndividualStory>

        <IndividualStory role="Bridesmaid" title={<>Victoria<br/>Shevchenko</>} img="/vika2.jpeg" img_alt="">
          <p>I met Victoria through a mutual friend at a Halloween party, about 4 years ago. We started talking and there was an instant connection. From that moment we’ve always enjoyed each other’s company by sharing all kinds of life experiences.</p>
        </IndividualStory>

        <IndividualStory role="Groomsman" title={<>Sasha<br/>Usman</>} img="/sasha.jpeg" img_alt="">
          <p>Sasha is Irina's son and has become a constant companion of mine as Irina and I grew closer. He is young man that is growing every day into a wonderful human being, and I can't wait to see the man he turns out to be.</p>
        </IndividualStory>
      </div>

    </Section>
  )
}
