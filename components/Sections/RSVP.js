import Section from "@components/Section";
import Script from "next/script";

export default function RSVP() {
  return (
    <Section id="rsvp" title="RSVP">
      <Script type="text/javascript" src="/assets/jotform.js" />

      <script
        src="https://cdn02.jotfor.ms/static/prototype.forms.js?3.3.43100"
        type="text/javascript"
      ></script>
      <script
        src="https://cdn03.jotfor.ms/static/jotform.forms.js?3.3.43100"
        type="text/javascript"
      ></script>
      <script
        defer
        src="https://cdnjs.cloudflare.com/ajax/libs/punycode/1.4.1/punycode.js"
      ></script>
      <script
        src="https://cdn01.jotfor.ms/js/payments/validategateways.js?v=3.3.43100"
        type="text/javascript"
      ></script>
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn01.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.43100"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn02.jotfor.ms/css/styles/payment/payment_styles.css?3.3.43100"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn03.jotfor.ms/css/styles/payment/payment_feature.css?3.3.43100"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn01.jotfor.ms/stylebuilder/donationBox.css?v=3.3.43100"
      />

      <form
        className="jotform-form"
        action="https://submit.jotform.com/submit/231768221965059"
        method="post"
        name="form_231768221965059"
        id="231768221965059"
        acceptCharset="utf-8"
        autoComplete="on"
      >
        <input type="hidden" name="formID" defaultValue="231768221965059" />
        <input type="hidden" id="JWTContainer" defaultValue="" />
        <input type="hidden" id="cardinalOrderNumber" defaultValue="" />
        <div role="main" className="form-all">
          <ul className="form-section page-section">
            <li id="cid_1" className="form-input-wide" data-type="control_head">
              <div className="form-header-group  header-large">
                <div className="header-text httal htvam">
                  <h1 className="Header_header__title__t1eCI">
                    Irina &amp; Michael
                  </h1>
                  <h2 className="Header_header__title__t1eCI">
                    Wedding Ceremony and Reception RSVP
                  </h2>
                  <p>
                    Invites have gone out! Please reply by <strong>September 1st</strong>. We hope you
                    can make it, and really appreciate the prompty reply!
                  </p>
                </div>{" "}
              </div>
            </li>
            <li
              className="form-line jf-required"
              data-type="control_fullname"
              id="id_3"
            >
              <label
                className="form-label form-label-left form-label-auto"
                id="label_3"
                htmlFor="first_3"
              >
                {" "}
                Name on invitation<span className="form-required">*</span>{" "}
              </label>
              <div
                id="cid_3"
                className="form-input jf-required"
                data-layout="full"
              >
                <div data-wrapper-react="true">
                  <span
                    className="form-sub-label-container"
                    style={{ verticalAlign: "top" }}
                    data-input-type="first"
                  >
                    <input
                      type="text"
                      id="first_3"
                      name="q3_name[first]"
                      className="form-textbox validate[required]"
                      data-defaultvalue=""
                      autoComplete="section-input_3 given-name"
                      size="10"
                      defaultValue=""
                      data-component="first"
                      aria-labelledby="label_3 sublabel_3_first"
                      required=""
                    />
                    <label
                      className="form-sub-label"
                      htmlFor="first_3"
                      id="sublabel_3_first"
                      style={{ minHeight: "13px" }}
                      aria-hidden="false"
                    >
                      First Name
                    </label>
                  </span>
                  <span
                    className="form-sub-label-container"
                    style={{ verticalAign: "top" }}
                    data-input-type="last"
                  >
                    <input
                      type="text"
                      id="last_3"
                      name="q3_name[last]"
                      className="form-textbox validate[required]"
                      data-defaultvalue=""
                      autoComplete="section-input_3 family-name"
                      size="15"
                      defaultValue=""
                      data-component="last"
                      aria-labelledby="label_3 sublabel_3_last"
                      required=""
                    />
                    <label
                      className="form-sub-label"
                      htmlFor="last_3"
                      id="sublabel_3_last"
                      style={{ minHeight: "13px" }}
                      aria-hidden="false"
                    >
                      Last Name
                    </label>
                  </span>
                </div>
              </div>
            </li>
            <li
              className="form-line jf-required"
              data-type="control_email"
              id="id_4"
            >
              <label
                className="form-label form-label-left form-label-auto"
                id="label_4"
                htmlFor="input_4"
              >
                {" "}
                Your Email Address<span className="form-required">*</span>{" "}
              </label>
              <div
                id="cid_4"
                className="form-input jf-required"
                data-layout="half"
              >
                {" "}
                <span
                  className="form-sub-label-container"
                  style={{ verticalAlign: "top" }}
                >
                  <input
                    type="email"
                    id="input_4"
                    name="q4_email"
                    className="form-textbox validate[required, Email]"
                    data-defaultvalue=""
                    style={{ width: "310px" }}
                    size="310"
                    defaultValue=""
                    data-component="email"
                    aria-labelledby="label_4 sublabel_input_4"
                    required=""
                  />
                  <label
                    className="form-sub-label"
                    htmlFor="input_4"
                    id="sublabel_input_4"
                    style={{ minHeight: "13px" }}
                    aria-hidden="false"
                  >
                    example@example.com
                  </label>
                </span>{" "}
              </div>
            </li>
            <li
              className="form-line jf-required"
              data-type="control_dropdown"
              id="id_10"
            >
              <label
                className="form-label form-label-left form-label-auto"
                id="label_10"
                htmlFor="input_10"
              >
                {" "}
                Are you joining us for our wedding celebration?
                <span className="form-required">*</span>{" "}
              </label>
              <div
                id="cid_10"
                className="form-input jf-required"
                data-layout="half"
              >
                {" "}
                <select
                  className="form-dropdown validate[required]"
                  id="input_10"
                  name="q10_areYou"
                  style={{ width: "310px" }}
                  data-component="dropdown"
                  required=""
                  aria-label="Are you joing us for our wedding celebration?"
                >
                  <option defaultValue="">Please Select</option>
                  <option defaultValue="Yes">Yes</option>
                  <option defaultValue="No">No</option>
                </select>{" "}
              </div>
            </li>
            <li
              className="form-line form-field-hidden"
              style={{ display: "none" }}
              data-type="control_fullname"
              id="id_8"
            >
              <label
                className="form-label form-label-left form-label-auto"
                id="label_8"
                htmlFor="first_8"
              >
                {" "}
                Your Plus One's Name{" "}
              </label>
              <div id="cid_8" className="form-input" data-layout="full">
                <div data-wrapper-react="true">
                  <span
                    className="form-sub-label-container"
                    style={{ verticalAign: "top" }}
                    data-input-type="first"
                  >
                    <input
                      type="text"
                      id="first_8"
                      name="q8_name8[first]"
                      className="form-textbox"
                      data-defaultvalue=""
                      autoComplete="section-input_8 given-name"
                      size="10"
                      defaultValue=""
                      data-component="first"
                      aria-labelledby="label_8 sublabel_8_first"
                    />
                    <label
                      className="form-sub-label"
                      htmlFor="first_8"
                      id="sublabel_8_first"
                      style={{ minHeight: "13px" }}
                      aria-hidden="false"
                    >
                      First Name
                    </label>
                  </span>
                  <span
                    className="form-sub-label-container"
                    style={{ verticalAign: "top" }}
                    data-input-type="last"
                  >
                    <input
                      type="text"
                      id="last_8"
                      name="q8_name8[last]"
                      className="form-textbox"
                      data-defaultvalue=""
                      autoComplete="section-input_8 family-name"
                      size="15"
                      defaultValue=""
                      data-component="last"
                      aria-labelledby="label_8 sublabel_8_last"
                    />
                    <label
                      className="form-sub-label"
                      htmlFor="last_8"
                      id="sublabel_8_last"
                      aria-hidden="false"
                    >
                      Last Name
                    </label>
                  </span>
                </div>
              </div>
            </li>
            <li
              className="form-line form-field-hidden"
              style={{ display: "none" }}
              data-type="control_dropdown"
              id="id_15"
            >
              <label
                className="form-label form-label-left form-label-auto"
                id="label_15"
                htmlFor="input_15"
              >
                {" "}
                Are you bringing kids?{" "}
              </label>
              <div id="cid_15" className="form-input" data-layout="half">
                {" "}
                <select
                  className="form-dropdown"
                  id="input_15"
                  name="q15_areYou15"
                  style={{ width: "315px" }}
                  data-component="dropdown"
                  aria-label="Are you bringing kids?"
                >
                  <option defaultValue="">Please Select</option>
                  <option defaultValue="Yes">Yes</option>
                  <option defaultValue="No">No</option>
                </select>{" "}
              </div>
            </li>
            <li
              className="form-line form-field-hidden"
              style={{ display: "none" }}
              data-type="control_spinner"
              id="id_6"
            >
              <label
                className="form-label form-label-left form-label-auto"
                id="label_6"
                htmlFor="input_6"
              >
                {" "}
                How many kids are joining you?{" "}
              </label>
              <div id="cid_6" className="form-input" data-layout="half">
                <div data-wrapper-react="true">
                  <input
                    type="number"
                    id="input_6"
                    name="q6_typeA"
                    data-type="input-spinner"
                    className="form-spinner-input  form-textbox"
                    data-spinnermin="0"
                    data-defaultvalue="0"
                    defaultValue="0"
                    data-component="spinner"
                    aria-labelledby="label_6"
                  />
                </div>
              </div>
            </li>
            <li
              className="form-line form-field-hidden"
              style={{ display: "none" }}
              data-type="control_textbox"
              id="id_13"
            >
              <label
                className="form-label form-label-left form-label-auto"
                id="label_13"
                htmlFor="input_13"
              >
                {" "}
                Is there a specific song you'd like to dance to?{" "}
              </label>
              <div id="cid_13" className="form-input" data-layout="half">
                {" "}
                <input
                  type="text"
                  id="input_13"
                  name="q13_isThere"
                  data-type="input-textbox"
                  className="form-textbox"
                  data-defaultvalue=""
                  style={{ width: "310px" }}
                  size="310"
                  defaultValue=""
                  data-component="textbox"
                  aria-labelledby="label_13"
                />{" "}
              </div>
            </li>
            <li
              className="form-line form-field-hidden"
              style={{ display: "none" }}
              data-type="control_textarea"
              id="id_12"
            >
              <label
                className="form-label form-label-left form-label-auto"
                id="label_12"
                htmlFor="input_12"
              >
                {" "}
                Would you care to share some wedding or marriage advice with us?{" "}
              </label>
              <div id="cid_12" className="form-input" data-layout="full">
                {" "}
                <textarea
                  id="input_12"
                  className="form-textarea"
                  name="q12_whatWedding"
                  style={{ width: "648px", height: "163px" }}
                  data-component="textarea"
                  aria-labelledby="label_12"
                ></textarea>{" "}
              </div>
            </li>
            <li className="form-line" data-type="control_button" id="id_2">
              <div id="cid_2" className="form-input-wide" data-layout="full">
                <div
                  data-align="auto"
                  className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField"
                >
                  <button
                    id="input_2"
                    type="submit"
                    className="form-submit-button submit-button jf-form-buttons jsTest-submitField"
                    data-component="button"
                    data-content=""
                  >
                    Submit
                  </button>
                </div>
              </div>
            </li>
            <li style={{ display: "none" }}>
              Should be Empty:{" "}
              <input type="text" name="website" defaultValue="" />
            </li>
          </ul>
        </div>
        <input
          type="hidden"
          className="simple_spc"
          id="simple_spc"
          name="simple_spc"
          defaultValue="231768221965059"
        />
        <div className="formFooter-heightMask"></div>
      </form>
      <script src="https://cdn.jotfor.ms//js/vendor/smoothscroll.min.js?v=3.3.43100"></script>
      <script src="https://cdn.jotfor.ms//js/errorNavigation.js?v=3.3.43100"></script>
    </Section>
  );
}
