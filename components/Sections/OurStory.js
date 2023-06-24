
import Section from '@components/Section'
import IndividualStory from '@components/IndividualStory'
import TogetherStory from '@components/TogetherStory'


export default function OurStory() {
  return (
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
  )
}

