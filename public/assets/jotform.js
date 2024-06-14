JotForm.extendsNewTheme = false;
JotForm.singleProduct = false;
JotForm.newPaymentUIForNewCreatedForms = true;
JotForm.texts = {
  confirmEmail: "E-mail does not match",
  pleaseWait: "Please wait...",
  validateEmail: "You need to validate this e-mail",
  confirmClearForm: "Are you sure you want to clear the form",
  lessThan: "Your score should be less than or equal to",
  incompleteFields:
    "There are incomplete required fields. Please complete them.",
  required: "This field is required.",
  requireOne: "At least one field required.",
  requireEveryRow: "Every row is required.",
  requireEveryCell: "Every cell is required.",
  email: "Enter a valid e-mail address",
  alphabetic: "This field can only contain letters",
  numeric: "This field can only contain numeric values",
  alphanumeric: "This field can only contain letters and numbers.",
  cyrillic: "This field can only contain cyrillic characters",
  url: "This field can only contain a valid URL",
  currency: "This field can only contain currency values.",
  fillMask: "Field value must fill mask.",
  uploadExtensions: "You can only upload following files:",
  noUploadExtensions:
    "File has no extension file type (e.g. .txt, .png, .jpeg)",
  uploadFilesize: "File size cannot be bigger than:",
  uploadFilesizemin: "File size cannot be smaller than:",
  gradingScoreError: "Score total should only be less than or equal to",
  inputCarretErrorA: "Input should not be less than the minimum value:",
  inputCarretErrorB: "Input should not be greater than the maximum value:",
  maxDigitsError: "The maximum digits allowed is",
  minCharactersError:
    "The number of characters should not be less than the minimum value:",
  maxCharactersError:
    "The number of characters should not be more than the maximum value:",
  freeEmailError: "Free email accounts are not allowed",
  minSelectionsError: "The minimum required number of selections is ",
  maxSelectionsError: "The maximum number of selections allowed is ",
  pastDatesDisallowed: "Date must not be in the past.",
  dateLimited: "This date is unavailable.",
  dateInvalid: "This date is not valid. The date format is {format}",
  dateInvalidSeparate: "This date is not valid. Enter a valid {element}.",
  ageVerificationError:
    "You must be older than {minAge} years old to submit this form.",
  multipleFileUploads_typeError:
    "{file} has invalid extension. Only {extensions} are allowed.",
  multipleFileUploads_sizeError:
    "{file} is too large, maximum file size is {sizeLimit}.",
  multipleFileUploads_minSizeError:
    "{file} is too small, minimum file size is {minSizeLimit}.",
  multipleFileUploads_emptyError:
    "{file} is empty, please select files again without it.",
  multipleFileUploads_uploadFailed:
    "File upload failed, please remove it and upload the file again.",
  multipleFileUploads_onLeave:
    "The files are being uploaded, if you leave now the upload will be cancelled.",
  multipleFileUploads_fileLimitError: "Only {fileLimit} file uploads allowed.",
  dragAndDropFilesHere_infoMessage: "Drag and drop files here",
  chooseAFile_infoMessage: "Choose a file",
  maxFileSize_infoMessage: "Max. file size",
  generalError:
    "There are errors on the form. Please fix them before continuing.",
  generalPageError:
    "There are errors on this page. Please fix them before continuing.",
  wordLimitError: "Too many words. The limit is",
  wordMinLimitError: "Too few words.  The minimum is",
  characterLimitError: "Too many Characters.  The limit is",
  characterMinLimitError: "Too few characters. The minimum is",
  ccInvalidNumber: "Credit Card Number is invalid.",
  ccInvalidCVC: "CVC number is invalid.",
  ccInvalidExpireDate: "Expire date is invalid.",
  ccInvalidExpireMonth: "Expiration month is invalid.",
  ccInvalidExpireYear: "Expiration year is invalid.",
  ccMissingDetails: "Please fill up the credit card details.",
  ccMissingProduct: "Please select at least one product.",
  ccMissingDonation: "Please enter numeric values for donation amount.",
  disallowDecimals: "Please enter a whole number.",
  restrictedDomain: "This domain is not allowed",
  ccDonationMinLimitError: "Minimum amount is {minAmount} {currency}",
  requiredLegend: "All fields marked with * are required and must be filled.",
  geoPermissionTitle: "Permission Denied",
  geoPermissionDesc: "Check your browser's privacy settings.",
  geoNotAvailableTitle: "Position Unavailable",
  geoNotAvailableDesc:
    "Location provider not available. Please enter the address manually.",
  geoTimeoutTitle: "Timeout",
  geoTimeoutDesc: "Please check your internet connection and try again.",
  selectedTime: "Selected Time",
  formerSelectedTime: "Former Time",
  cancelAppointment: "Cancel Appointment",
  cancelSelection: "Cancel Selection",
  noSlotsAvailable: "No slots available",
  slotUnavailable:
    "{time} on {date} has been selected is unavailable. Please select another slot.",
  multipleError:
    "There are {count} errors on this page. Please correct them before moving on.",
  oneError:
    "There is {count} error on this page. Please correct it before moving on.",
  doneMessage: "Well done! All errors are fixed.",
  invalidTime: "Enter a valid time",
  doneButton: "Done",
  reviewSubmitText: "Review and Submit",
  nextButtonText: "Next",
  prevButtonText: "Previous",
  seeErrorsButton: "See Errors",
  notEnoughStock: "Not enough stock for the current selection",
  notEnoughStock_remainedItems:
    "Not enough stock for the current selection ({count} items left)",
  soldOut: "Sold Out",
  justSoldOut: "Just Sold Out",
  selectionSoldOut: "Selection Sold Out",
  subProductItemsLeft: "({count} items left)",
  startButtonText: "START",
  submitButtonText: "Submit",
  submissionLimit:
    "Sorry! Only one entry is allowed. Multiple submissions are disabled for this form.",
  reviewBackText: "Back to Form",
  seeAllText: "See All",
  progressMiddleText: "of",
  fieldError: "field has an error.",
  error: "Error",
};
JotForm.newPaymentUI = true;
JotForm.replaceTagTest = true;

JotForm.setConditions([
  {
    action: [
      {
        id: "action_0_1716168211205",
        visibility: "ShowMultiple",
        isError: false,
        fields: ["7", "9", "11", "12"],
      },
    ],
    id: "1716166749400",
    index: "1",
    link: "Any",
    priority: "1",
    terms: [
      {
        id: "term_0_1716168211205",
        field: "8",
        operator: "equals",
        value: "Yes",
        isError: false,
      },
    ],
    type: "field",
  },
  {
    action: [
      {
        id: "action_1716166683415",
        visibility: "Show",
        isError: false,
        field: "10",
      },
    ],
    id: "1716166703526",
    index: "2",
    link: "Any",
    priority: "2",
    terms: [
      {
        id: "term_1716166683415",
        field: "9",
        operator: "equals",
        value: "Yes",
        isError: false,
      },
    ],
    type: "field",
  },
]);
JotForm.clearFieldOnHide = "disable";
JotForm.submitError = "jumpToFirstError";
window.addEventListener("DOMContentLoaded", function () {
  window.brandingFooter.init({
    formID: 241398379458070,
    campaign: "powered_by_jotform_le",
    isCardForm: false,
    isLegacyForm: true,
    formLanguage: "en",
  });
});
JotForm.isFullSource = true;

JotForm.init(function () {
  /*INIT-START*/
  if (window.JotForm && JotForm.accessible)
    $("input_13").setAttribute("tabindex", 0);
  JotForm.alterTexts({
    ageVerificationError:
      "You must be older than {minAge} years old to submit this form.",
    alphabetic: "This field can only contain letters",
    alphanumeric: "This field can only contain letters and numbers.",
    cancelAppointment: "Cancel Appointment",
    cancelSelection: "Cancel Selection",
    ccDonationMinLimitError: "Minimum amount is {minAmount} {currency}",
    ccInvalidCVC: "CVC number is invalid.",
    ccInvalidExpireDate: "Expire date is invalid.",
    ccInvalidExpireMonth: "Expiration month is invalid.",
    ccInvalidExpireYear: "Expiration year is invalid.",
    ccInvalidNumber: "Credit Card Number is invalid.",
    ccMissingDetails: "Please fill up the credit card details.",
    ccMissingDonation: "Please enter numeric values for donation amount.",
    ccMissingProduct: "Please select at least one product.",
    characterLimitError: "Too many Characters.  The limit is",
    characterMinLimitError: "Too few characters. The minimum is",
    chooseAFile_infoMessage: "Choose a file",
    confirmClearForm: "Are you sure you want to clear the form",
    confirmEmail: "E-mail does not match",
    currency: "This field can only contain currency values.",
    cyrillic: "This field can only contain cyrillic characters",
    dateInvalid: "This date is not valid. The date format is {format}",
    dateInvalidSeparate: "This date is not valid. Enter a valid {element}.",
    dateLimited: "This date is unavailable.",
    disallowDecimals: "Please enter a whole number.",
    doneButton: "Done",
    doneMessage: "Well done! All errors are fixed.",
    dragAndDropFilesHere_infoMessage: "Drag and drop files here",
    email: "Enter a valid e-mail address",
    error: "Error",
    fieldError: "field has an error.",
    fillMask: "Field value must fill mask.",
    formerSelectedTime: "Former Time",
    freeEmailError: "Free email accounts are not allowed",
    generalError:
      "There are errors on the form. Please fix them before continuing.",
    generalPageError:
      "There are errors on this page. Please fix them before continuing.",
    geoNotAvailableDesc:
      "Location provider not available. Please enter the address manually.",
    geoNotAvailableTitle: "Position Unavailable",
    geoPermissionDesc: "Check your browser's privacy settings.",
    geoPermissionTitle: "Permission Denied",
    geoTimeoutDesc: "Please check your internet connection and try again.",
    geoTimeoutTitle: "Timeout",
    gradingScoreError: "Score total should only be less than or equal to",
    incompleteFields:
      "There are incomplete required fields. Please complete them.",
    inputCarretErrorA: "Input should not be less than the minimum value:",
    inputCarretErrorB: "Input should not be greater than the maximum value:",
    invalidTime: "Enter a valid time",
    justSoldOut: "Just Sold Out",
    lessThan: "Your score should be less than or equal to",
    maxCharactersError:
      "The number of characters should not be more than the maximum value:",
    maxDigitsError: "The maximum digits allowed is",
    maxFileSize_infoMessage: "Max. file size",
    maxSelectionsError: "The maximum number of selections allowed is ",
    minCharactersError:
      "The number of characters should not be less than the minimum value:",
    minSelectionsError: "The minimum required number of selections is ",
    multipleError:
      "There are {count} errors on this page. Please correct them before moving on.",
    multipleFileUploads_emptyError:
      "{file} is empty, please select files again without it.",
    multipleFileUploads_fileLimitError:
      "Only {fileLimit} file uploads allowed.",
    multipleFileUploads_minSizeError:
      "{file} is too small, minimum file size is {minSizeLimit}.",
    multipleFileUploads_onLeave:
      "The files are being uploaded, if you leave now the upload will be cancelled.",
    multipleFileUploads_sizeError:
      "{file} is too large, maximum file size is {sizeLimit}.",
    multipleFileUploads_typeError:
      "{file} has invalid extension. Only {extensions} are allowed.",
    multipleFileUploads_uploadFailed:
      "File upload failed, please remove it and upload the file again.",
    nextButtonText: "Next",
    noSlotsAvailable: "No slots available",
    notEnoughStock: "Not enough stock for the current selection",
    notEnoughStock_remainedItems:
      "Not enough stock for the current selection ({count} items left)",
    noUploadExtensions:
      "File has no extension file type (e.g. .txt, .png, .jpeg)",
    numeric: "This field can only contain numeric values",
    oneError:
      "There is {count} error on this page. Please correct it before moving on.",
    pastDatesDisallowed: "Date must not be in the past.",
    pleaseWait: "Please wait...",
    prevButtonText: "Previous",
    progressMiddleText: "of",
    required: "This field is required.",
    requiredLegend: "All fields marked with * are required and must be filled.",
    requireEveryCell: "Every cell is required.",
    requireEveryRow: "Every row is required.",
    requireOne: "At least one field required.",
    restrictedDomain: "This domain is not allowed",
    reviewBackText: "Back to Form",
    reviewSubmitText: "Review and Submit",
    seeAllText: "See All",
    seeErrorsButton: "See Errors",
    selectedTime: "Selected Time",
    selectionSoldOut: "Selection Sold Out",
    slotUnavailable:
      "{time} on {date} has been selected is unavailable. Please select another slot.",
    soldOut: "Sold Out",
    startButtonText: "START",
    submissionLimit:
      "Sorry! Only one entry is allowed. Multiple submissions are disabled for this form.",
    submitButtonText: "Submit",
    subProductItemsLeft: "({count} items left)",
    uploadExtensions: "You can only upload following files:",
    uploadFilesize: "File size cannot be bigger than:",
    uploadFilesizemin: "File size cannot be smaller than:",
    url: "This field can only contain a valid URL",
    validateEmail: "You need to validate this e-mail",
    wordLimitError: "Too many words. The limit is",
    wordMinLimitError: "Too few words.  The minimum is",
  });
  /*INIT-END*/
});

setTimeout(function () {
  JotForm.paymentExtrasOnTheFly([
    null,
    {
      name: "heading",
      qid: "1",
      text: "Enter your name and email to RSVP",
      type: "control_head",
    },
    { name: "submit2", qid: "2", text: "Submit", type: "control_button" },
    null,
    {
      description: "",
      name: "yourName",
      qid: "4",
      text: "Your Name",
      type: "control_fullname",
    },
    {
      description: "",
      name: "yourEmail",
      qid: "5",
      subLabel: "example@example.com",
      text: "Your Email Address",
      type: "control_email",
    },
    null,
    {
      description: "",
      name: "yourPlus",
      qid: "7",
      text: "Your Plus One's Name",
      type: "control_fullname",
    },
    {
      description: "",
      name: "willYou",
      qid: "8",
      subLabel: "",
      text: "Will you be part of our wedding day?",
      type: "control_dropdown",
    },
    {
      description: "",
      name: "areYou9",
      qid: "9",
      subLabel: "",
      text: "Are you bringing kids?",
      type: "control_dropdown",
    },
    {
      description: "",
      name: "howMany",
      qid: "10",
      subLabel: "",
      text: "How many kids are joining you?",
      type: "control_number",
    },
    {
      description: "",
      name: "willYou11",
      qid: "11",
      subLabel: "",
      text: "Will you be joining us for the ceremony?",
      type: "control_dropdown",
    },
    {
      description: "",
      name: "willYou12",
      qid: "12",
      subLabel: "",
      text: "Will you be joining us for the reception?",
      type: "control_dropdown",
    },
    {
      description: "",
      mde: "No",
      name: "doYou",
      qid: "13",
      subLabel: "",
      text: "Do you have any marriage advice for us?",
      type: "control_textarea",
      wysiwyg: "Disable",
    },
  ]);
}, 20);

JotForm.clearFieldOnHide = "disable";
JotForm.submitError = "jumpToFirstError";

JotForm.prepareCalculationsOnTheFly([
  null,
  {
    name: "heading",
    qid: "1",
    text: "Enter your name and email to RSVP",
    type: "control_head",
  },
  { name: "submit2", qid: "2", text: "Submit", type: "control_button" },
  {
    description: "",
    name: "name",
    qid: "3",
    text: "Your Name",
    type: "control_fullname",
  },
  {
    description: "",
    name: "email",
    qid: "4",
    subLabel: "example@example.com",
    text: "Your Email Address",
    type: "control_email",
  },
  null,
  {
    description: "",
    name: "typeA",
    qid: "6",
    subLabel: "",
    text: "How many kids are joining you?",
    type: "control_spinner",
  },
  null,
  {
    description: "",
    name: "name8",
    qid: "8",
    text: "Your Plus One's Name",
    type: "control_fullname",
  },
  null,
  {
    description: "",
    name: "areYou",
    qid: "10",
    subLabel: "",
    text: "Are you joing us for our wedding celebration?",
    type: "control_dropdown",
  },
  null,
  {
    description: "",
    name: "whatWedding",
    qid: "12",
    subLabel: "",
    text: "What wedding or advice would you like to share with us, if any?",
    type: "control_textarea",
  },
  {
    description: "",
    name: "isThere",
    qid: "13",
    subLabel: "",
    text: "Is there a specifc song you'd like to dance to?",
    type: "control_textbox",
  },
  null,
  {
    description: "",
    name: "areYou15",
    qid: "15",
    subLabel: "",
    text: "Are you bringing kids?",
    type: "control_dropdown",
  },
]);

JotForm.showJotFormPowered = "new_footer";
JotForm.poweredByText = "Powered by Jotform";

var all_spc = document.querySelectorAll("form[id='241398379458070'] .si" + "mple" + "_spc");
for (var i = 0; i < all_spc.length; i++)
{
  all_spc[i].value = "241398379458070-241398379458070";
}

var attending = document.getElementById("input_8");

attending.addEventListener("change", function () {
  if (attending.value == "Yes") {
    document.getElementById("id_11").style.display = null;
    document.getElementById("id_12").style.display = null;
    document.getElementById("id_13").style.display = null;
    document.getElementById("id_7").style.display = null;
    document.getElementById("id_9").style.display = null;
  } else {
    document.getElementById("id_11").style.display = "none";
    document.getElementById("id_12").style.display = "none";
    document.getElementById("id_13").style.display = "none";
    document.getElementById("id_7").style.display = "none";
    document.getElementById("id_9").style.display = "none";
  }
});


var ceremony = document.getElementById("input_11");
var reception = document.getElementById("input_12");

ceremony.addEventListener("change", function (e) {
  if (ceremony.value == "Yes" || reception.value == "Yes") {
    //document.getElementById("id_7").style.display = null;
    //document.getElementById("id_12").style.display = null;
    //document.getElementById("id_13").style.display = null;
  }
  else {

  }
});

var kids = document.getElementById("input_9");

kids.addEventListener("change", function () {
  if (kids.value == "Yes") {
    document.getElementById("id_10").style.display = null;
  }
  else {
    document.getElementById("id_10").style.display = "none";
  }
});

function create(htmlStr) {
  var frag = document.createDocumentFragment(),
    temp = document.createElement("div");
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

document.querySelector("form").addEventListener("submit", function (event) {
  var data = this;
  fetch(data.getAttribute("action"), {
    method: data.getAttribute("method"),
    body: new FormData(data),
  })
    .then(function (response) {
      // The API call was successful!
      if (response.status == 200) {
        return response.text();
      } else {
        return Promise.reject(response);
      }
    })
    .then(function (data) {
      // This is the JSON from our response
      var fragment = null;

      if (!data.includes("Captcha-BlankSubMounted_Captcha")) {
        let div = document.createElement("div");
        div.innerHTML = data;
        let content = div.querySelector(".thankyou-wrapper").outerHTML;
        fragment = document.createElement("div");
        fragment.innerHTML = content;
      }
      else {
        let div = document.createElement("div");
        div.innerHTML = data;
        let content = div.querySelector("form").outerHTML;
        fragment = document.createElement("div");
        fragment.innerHTML = content;
        fragment.classList.add("captcha-form");
      }
      document
        .querySelector("form")
        .insertAdjacentElement("afterEnd", fragment);
        var x = fragment.getElementsByTagName("script");
        for(var i=0;i<x.length;i++)
        {
            eval(x[i].text);
        }
        document.querySelector("form").hide();
        document.querySelector(".captcha-form form").addEventListener("submit", function (event) {
          event.preventDefault();
          var data = this;
          fetch(data.getAttribute("action"), {
            mode: "no-cors",
            method: data.getAttribute("method"),
            body: new FormData(data),
          })
            .then(function (response) {
              // The API call was successful!
              if (response.status == 200 || response.status == 0) {
                let fragment = document.createElement("div");
                fragment.classList.add('form-thankyou');
                fragment.innerHTML = '<div class="form-header">Thank you!</div><div class="form-message">Your RSVP has been received and we can\'t wait to share our wedding with you!</div>';

                document
                  .querySelector("form")
                  .insertAdjacentElement("afterEnd", fragment);

                  document.querySelector(".captcha-form").hide();

                return response.text();

              } else {
                return Promise.reject(response);
              }
            })
            .then(function (data) {
              console.log(data);
            })
            .catch(function (err) {
              // There was an error
              console.warn("Something went wrong.", err);
            });
        });


    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });

  event.preventDefault();
});
