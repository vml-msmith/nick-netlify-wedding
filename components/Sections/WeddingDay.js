import Section from "@components/Section";
import Map from "@components/Map";


export default function WeddingDay() {
  return (
    <Section id="day" title="Wedding Day">
      <div className="where">
        <h2>
          Ceremony and reception will be held at{" "}
          <a
            target="_blank"
            href="http://grandstreetkc.com/plaza-event-spaces-2/"
          >
            Grand Street Cafe Event Space
          </a>
        </h2>
        <div className="mapBox">
          <Map />
          <div>
            <h3>Grand Street Cafe</h3>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Grand+Street+Cafe/@39.0413377,-94.5880478,17z/data=!3m1!4b1!4m6!3m5!1s0x87c0efbfabd07121:0x4d29f6c1222606e7!8m2!3d39.0413336!4d-94.5854675!16s%2Fg%2F1tfzbq84?entry=ttu"
            >
              <address>
                4740 Grand Ave
                <br />
                Kansas City, MO
                <br />
                64112
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