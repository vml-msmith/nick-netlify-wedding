
import Section from '@components/Section'
import IndividualStory from '@components/IndividualStory'
import TogetherStory from '@components/TogetherStory'


export default function OurStory() {
  return (
    <Section id="story" title="Our Story">
    <div className="story__content">
      <IndividualStory title="Angela" img="/angela.jpg" img_alt="">
        <p>Introducing Angela. Lorem ipsum dolor it amet.  Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.  </p>
      </IndividualStory>

      <IndividualStory title="Nicholas" img="/nick.jpeg" img_alt="">
        <p>Introducing Nicholas. Lorem ipsum dolor it amet.  Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.  </p>
      </IndividualStory>

      <TogetherStory title="Us Together!" img="/us.jpg" img_alt="">
        <p>Introducing Angela. Lorem ipsum dolor it amet.  Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.  </p>
        <p>Introducing Nicholas. Lorem ipsum dolor it amet.  Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.   Lorem ipsum dolor it amet.  </p>
      </TogetherStory>
    </div>
    </Section>
  )
}

