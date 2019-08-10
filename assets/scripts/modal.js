const body = document.getElementsByClassName('content-wrapper')[0];
const modal = document.getElementById('modal');
const modalButton = document.getElementById('modalButton');
let forms = document.querySelectorAll(".news-letter-form");

forms.forEach(function (elem) {
  elem.addEventListener('submit', event => {
    if (event.preventDefault) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.returnValue = false;
      event.stopPropagation();
    }
    submitToAPI(event);
  });
});

modalButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  modal.classList.toggle('active');
  body.classList.toggle('modal-open');
}


function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://iw7ggnrpwf.execute-api.us-west-2.amazonaws.com/prod";

    if (($("#email-input").val()=="") && ($("#footer-email-input").val()=="")) {
        alert ("Please enter your email id");
        return;
    }

    // var reemail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    // if (!reemail.test($("#email-input").val())) {
    //     alert ("Please enter valid email address");
    //     return;
    // }

    var email = $("#email-input").val() || $("#footer-email-input").val();
    var data = {
        lists:[{id: "1086612997"}],
        email_addresses: [{email_address: email}]
    };

    $.ajax({
        type: "POST",
        url : URL,
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json;",
        beforeSend: function(xhr){xhr.setRequestHeader("X-Api-Key","4aJNB1bkZ54rgkdTZGYQX41FQhD5leU490d2QZ9T");},
        data: JSON.stringify(data),

        success: function (e) {
            $("#email-input").val("");
            $("#footer-email-input").val("");
            toggleMenu();
        },
        error: function(xhr,err){
            if (xhr.responseJSON[0]) {
                console.log(xhr.responseJSON[0].error_message);
                alert('Please enter a valid email address.');
            }
        }});
}
