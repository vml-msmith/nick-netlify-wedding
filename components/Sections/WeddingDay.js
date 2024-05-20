import Section from "@components/Section";
import Map from "@components/Map";


export default function WeddingDay() {
  return (
    <Section id="day" title="Wedding Day">
      <div className="where">
        <h2>
          Ceremony and reception will be held at{" "}
            Holy Name of Jesus Parish
        </h2>
        <div className="mapBox">
          <Map />
          <div>
            <h3>Holy Name of Jesus Parish</h3>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Holy+Name+of+Jesus+Parish/@39.061308,-94.6232051,16z/data=!3m1!4b1!4m6!3m5!1s0x87c0ee20dc997909:0xdbf33f1dcb73a9bd!8m2!3d39.0613039!4d-94.6206248!16s%2Fg%2F1yfdrnk8h?entry=ttu"
            >
              <address>
                1001 Southwest Blvd
                <br />
                Kansas City, KS
                <br />
                66103
              </address>
            </a>
          </div>
        </div>
        <div className="more-details">
          <p>
            More wedding day details will be added as we get closer to the day!
          </p>
        </div>
      </div>
    </Section>
  );
}