
import Section from '@components/Section'
import IndividualStory from '@components/IndividualStory'
import TogetherStory from '@components/TogetherStory'


export default function OurStory() {
  return (
    <Section id="story" title="Our Story">
    <div className="story__content">
      <IndividualStory title="Irina" img="/irina1.jpeg" img_alt="">
        <p>Introducing Michael's incredible fiancée, Irina – the love of his life and his ultimate best friend.</p>
        <p>Originally from Ukraine, Irina has embraced her new life as a US citizen, having resided here for almost as long as she did in her home country. While she has created a beautiful life alongside Michael in Kansas City, she remains deeply connected to her roots, with her brother, sister-in-law, father, and childhood best friend all residing here and cherishing their Ukrainian traditions.</p>
        <p>An extraordinary aspect of their relationship is the professional collaboration they share. Irina and Michael work side by side at the same company, often collaborating on joint projects. It was Irina's boldness that sparked their romantic journey when she took the initiative to ask Michael out. Since that moment, their lives have been filled with joy and fulfillment.</p>

      </IndividualStory>

      <IndividualStory title="Michael" img="/michael2.jpeg" img_alt="">
        <p>Michael </p>
      </IndividualStory>

      <TogetherStory title="Us Together!" img="/us1.jpeg" img_alt="">
        <p>As they stand on the precipice of their wedding day, Michael and Irina are filled with excitement for the future. They look forward to continuing their journey as partners, building a life rooted in love, understanding, and shared dreams. With hearts intertwined and a steadfast commitment, they eagerly anticipate the beautiful chapters yet to be written, knowing that their love will guide them through every moment, now and forever.</p>
      </TogetherStory>
    </div>
    </Section>
  )
}

