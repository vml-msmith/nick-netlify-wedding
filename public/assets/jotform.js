JotForm.newDefaultTheme = true;
	JotForm.extendsNewTheme = false;
	JotForm.singleProduct = false;
	JotForm.newPaymentUIForNewCreatedForms = true;
	JotForm.newPaymentUI = true;

  JotForm.setConditions([{"action":[{"id":"action_1687831858478","visibility":"Show","isError":false,"field":"6"}],"id":"1687831872562","index":"1","link":"Any","priority":"1","terms":[{"id":"term_1687831858478","field":"15","operator":"equals","value":"Yes","isError":false}],"type":"field"},{"action":[{"id":"action_0_1688336703294","visibility":"ShowMultiple","isError":false,"fields":["8","15","13","12"]}],"id":"1687831792717","index":"2","link":"Any","priority":"2","terms":[{"id":"term_0_1688336703294","field":"10","operator":"equals","value":"Yes","isError":false}],"type":"field"}]);	JotForm.clearFieldOnHide="disable";
	JotForm.submitError="jumpToFirstError";

	JotForm.init(function(){
	/*INIT-START*/
    if(typeof $('input_6').spinner !== 'undefined') {$('input_6').spinner({ imgPath:'https://cdn.jotfor.ms/images/', width: '310', maxValue:'', minValue:'', allowNegative: false, addAmount: 1, value:'0' });}
    $('input_6').up(2).setAttribute('tabindex','');
if (window.JotForm && JotForm.accessible) $('input_13').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_12').setAttribute('tabindex',0);
      JotForm.alterTexts(undefined);
	/*INIT-END*/
	});

   JotForm.prepareCalculationsOnTheFly([null,{"name":"heading","qid":"1","text":"Enter your name and email to RSVP","type":"control_head"},{"name":"submit2","qid":"2","text":"Submit","type":"control_button"},{"description":"","name":"name","qid":"3","text":"Your Name","type":"control_fullname"},{"description":"","name":"email","qid":"4","subLabel":"example@example.com","text":"Your Email Address","type":"control_email"},null,{"description":"","name":"typeA","qid":"6","subLabel":"","text":"How many kids are joining you?","type":"control_spinner"},null,{"description":"","name":"name8","qid":"8","text":"Your Plus One's Name","type":"control_fullname"},null,{"description":"","name":"areYou","qid":"10","subLabel":"","text":"Are you joing us for our wedding celebration?","type":"control_dropdown"},null,{"description":"","name":"whatWedding","qid":"12","subLabel":"","text":"What wedding or advice would you like to share with us, if any?","type":"control_textarea"},{"description":"","name":"isThere","qid":"13","subLabel":"","text":"Is there a specifc song you'd like to dance to?","type":"control_textbox"},null,{"description":"","name":"areYou15","qid":"15","subLabel":"","text":"Are you bringing kids?","type":"control_dropdown"}]);
   setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,{"name":"heading","qid":"1","text":"Enter your name and email to RSVP","type":"control_head"},{"name":"submit2","qid":"2","text":"Submit","type":"control_button"},{"description":"","name":"name","qid":"3","text":"Your Name","type":"control_fullname"},{"description":"","name":"email","qid":"4","subLabel":"example@example.com","text":"Your Email Address","type":"control_email"},null,{"description":"","name":"typeA","qid":"6","subLabel":"","text":"How many kids are joining you?","type":"control_spinner"},null,{"description":"","name":"name8","qid":"8","text":"Your Plus One's Name","type":"control_fullname"},null,{"description":"","name":"areYou","qid":"10","subLabel":"","text":"Are you joing us for our wedding celebration?","type":"control_dropdown"},null,{"description":"","name":"whatWedding","qid":"12","subLabel":"","text":"What wedding or advice would you like to share with us, if any?","type":"control_textarea"},{"description":"","name":"isThere","qid":"13","subLabel":"","text":"Is there a specifc song you'd like to dance to?","type":"control_textbox"},null,{"description":"","name":"areYou15","qid":"15","subLabel":"","text":"Are you bringing kids?","type":"control_dropdown"}]);}, 20); 

var all_spc = document.querySelectorAll("form[id='231768221965059'] .si" + "mple" + "_spc");
for (var i = 0; i < all_spc.length; i++)
{
  all_spc[i].value = "231768221965059-231768221965059";
}

function create(htmlStr) {
  var frag = document.createDocumentFragment(),
    temp = document.createElement('div');
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

document.querySelector('form').addEventListener('submit', function (event) {
  var data = this;
  fetch(data.getAttribute('action'), {
    method: data.getAttribute('method'),
    body: new FormData(data)
  }).then(function (response) {
    // The API call was successful!
    if (response.status == 200) {
      return response.text();
    } else {
      return Promise.reject(response);
    }
  }).then(function (data) {
    // This is the JSON from our response
    
    let div = document.createElement('div');
    div.innerHTML = data;
    let content = div.querySelector('.thankyou-wrapper').outerHTML;
    var fragment = document.createElement("div")
    fragment.innerHTML = content

    document.querySelector('form').insertAdjacentElement('afterEnd', fragment);
    document.querySelector('form').hide();
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });

  event.preventDefault();
});
