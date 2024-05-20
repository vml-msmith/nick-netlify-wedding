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
            We're starting the ceremony at 4:00pm and ask that guests arrive
            fifteen minutes early so that everyone is settled, and we can begin
            on time.
          </>
        }
      />
      <FAQItem
        title="Can I bring a plus one?"
        answer={<>Absolutely, if you have a plus one, you should bring them.</>}
      />
      <FAQItem
        title="Are kids invited?"
        answer={
          <>
            Yes, there will be many kids in attendance. If you have little ones
            that would like to attend, all we ask is that you include that in
            your RSVP so that we can get an accurate count. Please no +1s for
            the kids.
          </>
        }
      />
      <FAQItem
        title="Will there be an open bar?"
        answer={
          <>
            We are providing an open bar with beer, wine, and cocktail
            selections. There will be a cocktail hour for an hour after the
            ceremony and before the reception while the wedding party takes
            photos nearby.
          </>
        }
      />
    </Section>
  );
}
