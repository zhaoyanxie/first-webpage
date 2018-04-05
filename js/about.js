function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

};

function validate(){
  var $result = $("#result");
  var email = $("#email").val();
  var name = $("#txtName").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text("Thanks " + name + "! I'll drop you a note to " + email + " soon! :)");
    $result.css("color", "#FF8C00");
  } else {
    $result.text(email + " is not valid :(");
    $result.css("color", "yellow");
  }
  return false;
};

$("#btnSubmit").bind("click", validate);
