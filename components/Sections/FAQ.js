import Section from "@components/Section";
import FAQItem from "@components/FAQItem";

export default function FAQ() {
  return (
    <Section id="faq" title="FAQ">
      <FAQItem
        title="What is the requested dress code?"
        answer={
          <>
            We're requesting{" "}
            <a
              href="https://www.brides.com/cocktail-attire-wedding-4844364"
              target="_blank"
            >
              Cocktail Wedding Attire
            </a>{" "}
            for the ceremony and reception.
            <br />
            <br />
            We don't expect everyone to follow the dress code to the T, but we
            would like to keep the event as a classy affair. It's a great chance
            for everyone to dress up for the evening. If you're unsure what cocktail attire entails (don't worry, we're all confused), you can see an easy guide here: <a href="https://www.brides.com/cocktail-attire-wedding-4844364">https://www.brides.com/cocktail-attire-wedding-4844364</a>
          </>
        }
      />
      <FAQItem
        title="What time should we arrive?"
        answer={
          <>
            Our wedding ceremony will start at 1:00pm., but worship music will start at the church at 12:30pm.  Please join us if you can.  We ask that all guests arrive at least fifteen minutes early so that the ceremony can start on time at 1:00pm.  Guests are welcome to arrive at the reception any time after 5:30pm.
          </>
        }
      />
      <FAQItem
        title="Can I bring a plus one or my children?"
        answer={<>Absolutely, if your invitation includes a plus one or "and family," please bring them with you.  There will be many kids in attendance.  Please, include everyone you would like to attend in your RSVP so that we can get an accurate count.</>}
      />
      <FAQItem
        title="What hotels do you recommend?"
        answer={
          <>
           We have two hotels we are recommending to our guests from out of town. [Include hotel info here]
          </>
        }
      />
      <FAQItem
        title="Will there be alcohol at the reception?"
        answer={
          <>
            Yes, we will have an adult beverage table for guests to pour or mix their own drinks. Other drinks (such as water, tea, and lemonade) will also be provided.
          </>
        }
      />
    </Section>
  );
}
