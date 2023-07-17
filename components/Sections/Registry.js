import Section from "@components/Section";
import Map from "@components/Map";

export default function WeddingDay() {
  return (
    <Section id="registry" title="Gifts">
      <p className="centered">
        Your presence at our wedding is the greatest gift we could ask for, and
        we're truly grateful for the love and support you've shown us. If you
        would like to contribute a gift to celebrate our special day, we have
        created a cash fund that allows you to contribute in a way that is
        convenient and meaningful to you.
      </p>
      <p className="centered">
        We will also have a wedding card box at the reception.
      </p>
      <h1 className="registry_heading">
        <a
          target="_blank"
          href="https://www.zola.com/registry/michaelandirina2023"
        >
          Visit Our Gift Registry
        </a>
      </h1>
    </Section>
  );
}
