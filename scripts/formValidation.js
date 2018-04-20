window.onload = function() {

    document.getElementById('txtCardNumber').onkeyup =  ccInputMask;
    document.getElementById('txtPhoneNumber').onkeyup = phoneInputMask;

    document.getElementById('frmCheckout').onsubmit = function() {
        if(!isValidEmail()){
          return false;
        }
        else if(!isValidPhone()){
          return false;
        }
        else{
          return true;
        }
    }

}

function isValidPhone(){
  var phone = document.getElementById('txtPhoneNumber');
  var rePhone = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;

  if(rePhone.test(phone.value)){
    return true;
  }
  else{
    phone.style.color = "red";
    return false;
  }

}

function isValidEmail(){
  var email = document.getElementById('txtEmail');
  var reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(email.value.search(reEmail)==-1){
    email.style.color = "red";
    return false;
  }
  else{
    return true;
  }
}

function ccInputMask(event) {


    var cardNumberTextbox = document.getElementById('txtCardNumber');
    var unmaskedCardNum = cardNumberTextbox.value.replace(/-/gi, "");


    if(event.keyCode == 8){
      return;
    }

    switch (unmaskedCardNum.length) {
        case 4:
            cardNumberTextbox.value = unmaskedCardNum+"-";
            break;
        case 8:
            cardNumberTextbox.value = unmaskedCardNum.substr(0, 4) + "-" + unmaskedCardNum.substr(4, 4)+"-";
            break;
        case 12:
            cardNumberTextbox.value = unmaskedCardNum.substr(0, 4) + "-" + unmaskedCardNum.substr(4, 4) + "-" + unmaskedCardNum.substr(8, 4)+"-";
            break;
        case 16:
            cardNumberTextbox.value = unmaskedCardNum.substr(0, 4) + "-" + unmaskedCardNum.substr(4, 4) + "-" + unmaskedCardNum.substr(8, 4)+ "-" + unmaskedCardNum.substr(12, 4);
            break;

    }

}

function phoneInputMask(event) {
    var phoneNumberTextbox = document.getElementById('txtPhoneNumber');
    var unmaskedPhoneNum = phoneNumberTextbox.value.replace(/-/g, "").replace(/\(/g, "").replace(/\)/g, "").replace(/ /g,"");


    if(event.keyCode == 8){
      return;
    }

    switch (unmaskedPhoneNum.length) {
        case 3:
            phoneNumberTextbox.value = "("+unmaskedPhoneNum+") ";
            break;
        case 6:
            phoneNumberTextbox.value = "("+unmaskedPhoneNum.substr(0, 3) + ") " + unmaskedPhoneNum.substr(3, 3)+"-";
            break;
        case 10:
            phoneNumberTextbox.value = "("+unmaskedPhoneNum.substr(0, 3) + ") " + unmaskedPhoneNum.substr(3, 3)+"-"+unmaskedPhoneNum.substr(6,4);
            break;
    }
}
