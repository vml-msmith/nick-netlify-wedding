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
      <script
        src="https://cdn01.jotfor.ms/s/umd/bdb90f42aa0/for-form-branding-footer.js?v=3.3.54466"
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
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn01.jotfor.ms/stylebuilder/static/form-common.css?v=73932fc"
      />

      <form
        class="jotform-form"
        onsubmit="return typeof testSubmitFunction !== 'undefined' && testSubmitFunction();"
        action="https://submit.jotform.com/submit/241398379458070"
        method="post"
        name="form_241398379458070"
        id="241398379458070"
        accept-charset="utf-8"
        autocomplete="on"
      >
        <input type="hidden" name="formID" value="241398379458070" />
        <input type="hidden" id="JWTContainer" value="" />
        <input type="hidden" id="cardinalOrderNumber" value="" />
        <input
          type="hidden"
          id="jsExecutionTracker"
          name="jsExecutionTracker"
          value="build-date-1717458511229"
        />
        <input
          type="hidden"
          id="submitSource"
          name="submitSource"
          value="unknown"
        />
        <input
          type="hidden"
          id="buildDate"
          name="buildDate"
          value="1717458511229"
        />
        <div role="main" class="form-all">
          <ul class="form-section page-section">
            <li id="cid_1" class="form-input-wide" data-type="control_head">
              <div class="form-header-group  header-large">
                <div class="header-text httal htvam">
                  <h1 id="header_1" class="form-header" data-component="header">
                    Enter your name and email to RSVP
                  </h1>
                </div>
              </div>
            </li>

            <li
              class="form-line jf-required"
              data-type="control_fullname"
              id="id_4"
            >
              <label
                class="form-label form-label-left form-label-auto"
                id="label_4"
                for="first_4"
                aria-hidden="false"
              >
                {" "}
                Your Name<span class="form-required">*</span>{" "}
              </label>
              <div id="cid_4" class="form-input jf-required" data-layout="full">
                <div data-wrapper-react="true">
                  <span
                    class="form-sub-label-container"
                    data-input-type="first"
                  >
                    <input
                      type="text"
                      id="first_4"
                      name="q4_yourName[first]"
                      class="form-textbox validate[required]"
                      data-defaultvalue=""
                      autoComplete="section-input_4 given-name"
                      size="10"
                      data-component="first"
                      aria-labelledby="label_4 sublabel_4_first"
                      required=""
                    />
                    <label
                      class="form-sub-label"
                      for="first_4"
                      id="sublabel_4_first"
                    >
                      First Name
                    </label>
                  </span>
                  <span
                    class="form-sub-label-container"
                    data-input-type="last"
                  >
                    <input
                      type="text"
                      id="last_4"
                      name="q4_yourName[last]"
                      class="form-textbox validate[required]"
                      data-defaultvalue=""
                      autoComplete="section-input_4 family-name"
                      size="15"
                      data-component="last"
                      aria-labelledby="label_4 sublabel_4_last"
                      required=""
                    />
                    <label
                      class="form-sub-label"
                      for="last_4"
                      id="sublabel_4_last"
                    >
                      Last Name
                    </label>
                  </span>
                </div>
              </div>
            </li>
            <li
              class="form-line jf-required"
              data-type="control_email"
              id="id_5"
            >
              <label
                class="form-label form-label-left form-label-auto"
                id="label_5"
                for="input_5"
                aria-hidden="false"
              >
                {" "}
                Your Email Address<span class="form-required">*</span>{" "}
              </label>
              <div id="cid_5" class="form-input jf-required" data-layout="half">
                {" "}
                <span
                  class="form-sub-label-container"
                >
                  <input
                    type="email"
                    id="input_5"
                    name="q5_yourEmail"
                    class="form-textbox validate[required, Email]"
                    data-defaultvalue=""
                    autoComplete="section-input_5 email"
                    size="310"
                    data-component="email"
                    aria-labelledby="label_5 sublabel_input_5"
                    required=""
                  />
                  <label
                    class="form-sub-label"
                    for="input_5"
                    id="sublabel_input_5"
                  >
                    example@example.com
                  </label>
                </span>{" "}
              </div>
            </li>
            <li
              class="form-line jf-required"
              data-type="control_dropdown"
              id="id_8"
            >
              <label
                class="form-label form-label-left form-label-auto"
                id="label_8"
                for="input_8"
                aria-hidden="false"
              >
                {" "}
                Will you be part of our wedding day?
                <span class="form-required">*</span>{" "}
              </label>
              <div id="cid_8" class="form-input jf-required" data-layout="half">
                {" "}
                <select
                  class="form-dropdown validate[required]"
                  id="input_8"
                  name="q8_willYou"
                  data-component="dropdown"
                  required=""
                  aria-label="Will you be part of our wedding day?"
                >
                  <option value="">Please Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>{" "}
              </div>
            </li>
            <li
              class="form-line jf-required form-field-hidden"
              style={{ display: "none" }}
              data-type="control_dropdown"
              id="id_11"
            >
              <label
                class="form-label form-label-left form-label-auto"
                id="label_11"
                for="input_11"
                aria-hidden="false"
              >
                {" "}
                Will you be joining us for the ceremony?
                <span class="form-required">*</span>{" "}
              </label>
              <div
                id="cid_11"
                class="form-input jf-required"
                data-layout="half"
              >
                {" "}
                <select
                  class="form-dropdown validate[required]"
                  id="input_11"
                  name="q11_willYou11"
                  data-component="dropdown"
                  required=""
                  aria-label="Will you be joining us for the ceremony?"
                >
                  <option value="">Please Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>{" "}
              </div>
            </li>
            <li
              class="form-line jf-required form-field-hidden"
              style={{ display: "none" }}
              data-type="control_dropdown"
              id="id_12"
            >
              <label
                class="form-label form-label-left form-label-auto"
                id="label_12"
                for="input_12"
                aria-hidden="false"
              >
                {" "}
                Will you be joining us for the reception?
                <span class="form-required">*</span>{" "}
              </label>
              <div
                id="cid_12"
                class="form-input jf-required"
                data-layout="half"
              >
                {" "}
                <select
                  class="form-dropdown validate[required]"
                  id="input_12"
                  name="q12_willYou12"
                  data-component="dropdown"
                  required=""
                  aria-label="Will you be joining us for the reception?"
                >
                  <option value="">Please Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>{" "}
              </div>
            </li>
            <li
              class="form-line form-field-hidden"
              data-type="control_fullname"
              id="id_7"
              style={{ display: "none" }}
            >
              <label
                class="form-label form-label-left form-label-auto"
                id="label_7"
                for="first_7"
                aria-hidden="false"
              >
                {" "}
                Your Plus One's Name{" "}
              </label>
              <div id="cid_7" class="form-input" data-layout="full">
                <div data-wrapper-react="true">
                  <span
                    class="form-sub-label-container"
                    data-input-type="first"
                  >
                    <input
                      type="text"
                      id="first_7"
                      name="q7_yourPlus[first]"
                      class="form-textbox"
                      data-defaultvalue=""
                      autoComplete="section-input_7 given-name"
                      size="10"
                      data-component="first"
                      aria-labelledby="label_7 sublabel_7_first"
                    />
                    <label
                      class="form-sub-label"
                      for="first_7"
                      id="sublabel_7_first"
                    >
                      First Name
                    </label>
                  </span>
                  <span
                    class="form-sub-label-container"
                    data-input-type="last"
                  >
                    <input
                      type="text"
                      id="last_7"
                      name="q7_yourPlus[last]"
                      class="form-textbox"
                      data-defaultvalue=""
                      autoComplete="section-input_7 family-name"
                      size="15"
                      data-component="last"
                      aria-labelledby="label_7 sublabel_7_last"
                    />
                    <label
                      class="form-sub-label"
                      for="last_7"
                      id="sublabel_7_last"
                    >
                      Last Name
                    </label>
                  </span>
                </div>
              </div>
            </li>
            <li
              class="form-line form-field-hidden"
              data-type="control_dropdown"
              id="id_9"
              style={{ display: "none" }}
            >
              <label
                class="form-label form-label-left form-label-auto"
                id="label_9"
                for="input_9"
                aria-hidden="false"
              >
                {" "}
                Are you bringing kids?{" "}
              </label>
              <div id="cid_9" class="form-input" data-layout="half">
                {" "}
                <select
                  class="form-dropdown"
                  id="input_9"
                  name="q9_areYou9"
                  data-component="dropdown"
                  aria-label="Are you bringing kids?"
                >
                  <option value="">Please Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>{" "}
              </div>
            </li>
            <li
              class="form-line form-field-hidden"
              data-type="control_number"
              id="id_10"
              style={{ display: "none" }}
            >
              <label
                class="form-label form-label-left form-label-auto"
                id="label_10"
                for="input_10"
                aria-hidden="false"
              >
                {" "}
                How many kids are joining you?{" "}
              </label>
              <div id="cid_10" class="form-input" data-layout="half">
                {" "}
                <input
                  type="number"
                  id="input_10"
                  name="q10_howMany"
                  data-type="input-number"
                  class=" form-number-input form-textbox"
                  data-defaultvalue=""
                  size="310"
                  placeholder="e.g., 23"
                  data-component="number"
                  aria-labelledby="label_10"
                  step="any"
                />{" "}
              </div>
            </li>
            <li class="form-line" data-type="control_textarea" id="id_13">
              <label
                class="form-label form-label-left form-label-auto"
                id="label_13"
                for="input_13"
                aria-hidden="false"
              >
                {" "}
                Do you have any marriage advice for us?{" "}
              </label>
              <div id="cid_13" class="form-input" data-layout="full">
                {" "}
                <textarea
                  id="input_13"
                  class="form-textarea"
                  name="q13_doYou"
                  data-component="textarea"
                  aria-labelledby="label_13"
                ></textarea>{" "}
              </div>
            </li>
            <li class="form-line" data-type="control_button" id="id_2">
              <div id="cid_2" class="form-input-wide" data-layout="full">
                <div
                  data-align="auto"
                  class="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField"
                >
                  <button
                    id="input_2"
                    type="submit"
                    class="form-submit-button submit-button jf-form-buttons jsTest-submitField"
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
              <input type="text" name="website" value="" type="hidden" />
            </li>
          </ul>
        </div>
        <input
          type="hidden"
          class="simple_spc"
          id="simple_spc"
          name="simple_spc"
          value="241398379458070"
        />
      </form>

      <script type="text/javascript">JotForm.ownerView=true;</script>
      <script type="text/javascript">JotForm.isNewSACL=true;</script>

      <script src="https://cdn.jotfor.ms//js/vendor/smoothscroll.min.js?v=3.3.43100"></script>
      <script src="https://cdn.jotfor.ms//js/errorNavigation.js?v=3.3.43100"></script>
    </Section>
  );
}
