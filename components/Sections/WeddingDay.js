import Section from "@components/Section";
import Map from "@components/Map";
import MapReception from "@components/MapReception";

export default function WeddingDay() {
  return (
    <Section id="day" title="Wedding Day">
      <div className="where">
        <div className="mapBox">
          <div>
            <h2 className="day__title">Ceremony</h2>
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
          <Map />
        </div>
        <div className="mapBox">
          <div>
            <h2 className="day__title">Reception</h2>
            <h3>Schear Residence</h3>
            <a
              target="_blank"
              href="https://www.google.com/maps/@38.7453415,-94.4413576,3a,75y,23.67h,87.2t/data=!3m7!1e1!3m5!1sdJf7pFhpOG0o9SV-yVjYAA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DdJf7pFhpOG0o9SV-yVjYAA%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D23.66706680362075%26pitch%3D2.8014095138684922%26thumbfov%3D90!7i16384!8i8192?coh=205410&entry=ttu"
            >
              <address>
                20619 S State Rt J
                <br />
                Peculiar, MO
                <br />
                64078
              </address>
            </a>
          </div>
          <MapReception />

        </div>
      </div>
    </Section>
  );
}