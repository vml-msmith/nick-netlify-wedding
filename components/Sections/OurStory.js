
import Section from '@components/Section'
import IndividualStory from '@components/IndividualStory'
import TogetherStory from '@components/TogetherStory'


export default function OurStory() {
  return (
    <Section id="story" title="Our Story">
    <div className="story__content">
      <IndividualStory title="Angela" img="/angela.jpg" img_alt="">
        <p>My fantastic fiancée is an ED nurse at KU Med. Angela’s nursing career began as a pediatric
ICU nurse at Children’s Mercy Hospital, and she has been at the KU ED for almost 9 years.
Angela was born in Canada, moved quickly to California, and, after several years there, her
family moved to the Kansas City area in 1999. Angela’s servant heart has shined through in
many areas. First and foremost, she serves God. She is devout in her faith, taking Bible college
courses and visiting Israel 7 times! At her church, IHOPKC, she has served on the dance team
and as head usher. Here in town, Angela is a board member at the Hope Family Care Center, a
non-profit medical clinic focused on helping the underserved population. In the US and abroad,
Angela has literally traveled the globe to help those in need, participating in numerous medical
mission trips and disaster relief efforts.</p>
      </IndividualStory>

      <IndividualStory title="Nicholas" img="/nick.jpeg" img_alt="">
        <p>My dear family and friends, let me introduce you to my fabulous fiancé.  Nick is a pharmacist
who specializes in the Emergency Department.  After pharmacy school, he was clinically trained
in a pharmacy Emergency Medicine residency program and has worked in the KU ED for nearly
8 years.  Born and raised in Kansas City, he has been involved in Boy Scouts continuously since
he was 6 years old, becoming an Eagle Scout, serving as program director at the Bartle Scout
Reservation in Osceola, Missouri for 5 years, and now volunteering as an adult leader at a local
troop.  Nick played tennis in high school and college, is training for his 2 nd  half-marathon, roots
for KU’s basketball team, and has had Kansas City Chiefs season-tickets for the past 9
years.  Born and raised Catholic, Nick has a sincere faith in Jesus and serves his church as an
usher, a reader, and a member of the pastoral council.</p>
      </IndividualStory>

      <TogetherStory title="Us Together!" img="/us.jpg" img_alt="">
        <p>Though we worked together for years, Angela and Nick did not connect romantically until last
year. Angela took care of Nick’s dad, Bob, in the ED when Nick was out of town. Bob noticed
Angela’s care and kindness, so he asked some about her personal life, and when he learned that
Angela was single, he offered that Nick was single too. Angela had her own questions first
though, notably about faith. Bob loved that question and was happy to share that Nick served his
church in several capacities. Knowing this, Angela thought a relationship with Nick might be
worth a shot.</p>
<p>It took some time to come together, but Angela and Nick went on their first date on December
9, 2023 at Rockhill Grille. They connected well, almost too well, as the waitress had to come
back to the table multiple times before they were even ready to order drinks. Three days later,
Angela left for 2 weeks to visit family in Alaska while Nick stayed home and eventually hosted
family for Christmas. The second date was not until December 30, but the frequency of dates
increased sharply from there. In January, Angela and Nick dated 2-3 times per week. In
February, the couple was nearly inseparable, seeing each other almost every single day. On
March 20, Nick “finally” proposed at Loose Park near his house at a spot already special to them
both.</p>
<p>
We believe God brought us together, showing that something beautiful can still come out of
suffering (Nick’s dad being in the ED). In each other, we have found the person we each have
been longing for over the past 20 years. We are truly in love! Both of us are grateful that each of
you shares our joy as we look forward to spending our lives together.</p>
      </TogetherStory>
    </div>
    </Section>
  )
}

