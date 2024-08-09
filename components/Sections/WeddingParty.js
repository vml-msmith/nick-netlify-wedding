import Section from '@components/Section'
import IndividualStory from '@components/IndividualStory'

export default function WeddingParty() {
  return (
    <Section id="party" title="Wedding Party" type="condensed">
      <div className="story__content">
        <IndividualStory role="Maid of Honor" title={<>Joanna<br/>Schear</>} img="/IMG_7552.jpeg" img_alt="">
          <p>Joanna is the sister for which I prayed and my only sibling.  Despite mental delays and physical
limitations, she is one of the sweetest people I know.  She fully lives up to her middle name of
Joy.  Joanna and I speak our own language, play our own games, and enjoy giving each other
hugs and showing physical affection.  We take special trips like going to Stockton Lake for the
weekend.  She attends a year-round day program for special-needs adults and lives at home with
our parents.  Her favorite pastime is playing with rubber gloves.</p>
        </IndividualStory>

        <IndividualStory role="Best Man" title={<>Michael<br/>Smith</>} img="/IMG_9799.jpeg" img_alt="">
          <p>Michael and I first met in Boy Scouts as teenagers. We were one year apart, but our personalities
meshed well from the start. We got closer after working on Boy Scout summer camp staff
together for 3 years. Not long after that, we lived together for almost 7 years as we both got
established in our careers. I was honored to stand next to Michael as he married Irina back in
October. Michael has a giving spirit, which is seen on this very website as he literally built it!</p>
        </IndividualStory>

        <IndividualStory role="Bridesmatron" title={<>Laura<br/>Vogel</>} img="/IMG_4095.jpeg" img_alt="">
          <p>My housemate and best friend of nine years, I met Laura at a disaster relief training in our
mutual home-state of California.  We reconnected at our church, the International House of
Prayer in Kansas City, where she was on staff.  Laura now teaches 4 th  grade at The Daniel
Academy.  She and I have been on our church’s dance team for many years.  We have enjoyed
traveling together to Israel (twice!), Germany, Italy, the Grand Canyon in Arizona, Yellowstone
in Wyoming, Texas, California, and Cape Cod, Massachusetts.</p>
        </IndividualStory>

        <IndividualStory role="Groomsman" title={<>Jeff<br/>Volk</>} img="/IMG_4876.jpeg" img_alt="">
          <p>I met Jeff when we were freshmen in high school. At the time, his family had just moved here,
and I was going to a high school where I literally knew one other person. When one quiet, easy-
going, sports-loving guy meets another, a friendship ensues. I was honored to stand next to Jeff
as he married Amy back in 2009. Through tragedy, we both unexpectedly lost parents far earlier
than expected. Through grace, our surviving parents actually married years later, so I am thrilled
that Jeff is not only a friend but also my stepbrother!</p>
        </IndividualStory>

        <IndividualStory role="Bridesmatron" title={<>Miranda<br/>Keough</>} img="/IMG_0391.jpeg" img_alt="">
          <p>Miranda and I were roommates at Oral Roberts University for 3 years.  We supported each other
through the challenges of the nursing program, the rigors of the honors program, the joys of
dorm-floor leadership positions, the opportunities of multiple international and local outreaches,
and the pain of her mom’s cancer-diagnosis our senior year.  My “Georgia-Mom” went to heaven
in 2013.  We keep up our friendship through my annual visits to her home-state of
Georgia.  Miranda, her husband and their five children warmly welcome “Aunt Angela.”</p>
        </IndividualStory>

        <IndividualStory role="Groomsman" title={<>Trent<br/>Dodson</>} img="/IMG_5749.jpeg" img_alt="">
          <p>My brother Trent had to be part of my special day. Trent is 11 years older than me, but we are
still close. Though Trent was out of the house for most of my formative years, he always had
time for me. I have fond memories of him picking me up and taking me to lunch, just the two of
us. Over the years, we have only gotten closer as we talk almost weekly. I was thrilled to be part
of his wedding with Jennifer in 2011, and I couldn’t imagine having my own wedding without
him there.</p>
        </IndividualStory>
      </div>

    </Section>
  )
}
