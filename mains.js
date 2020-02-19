let inputs = document.querySelectorAll("form input");
let textarea = document.querySelector("form textarea");
let linkMailto = document.querySelector("form .btn_link");
let message = {
  firstname: "",
  lastname: "",
  address: "",
  messageTitle: "",
  messageBody: ""
};

linkMailto.addEventListener("click", () => {
  if (
    message.firstname.length > 0 &&
    message.lastname.length > 0 &&
    message.address.length > 0 &&
    message.messageTitle.length > 0 &&
    message.messageBody.length > 0
  ) {
    linkMailto.href =
      "mailto:azimku7@gmail.com?subject=" +
      message.messageTitle +
      "&amp;&body=" +
      message.messageBody;
  }
});

textarea.addEventListener("input", () => {
  message.messageBody = textarea.value;
  checkingInputs(textarea);
});

inputs.forEach(input => {
  input.addEventListener("input", () => {
    setMessage(input);
    checkingInputs(input);
  });
});

function setMessage(input) {
  if (input.name === "input_firstname") {
    message.firstname = input.value;
  } else if (input.name === "input_lastname") {
    message.lastname = input.value;
  } else if (input.name === "input_address") {
    message.address = input.value;
  } else if (input.name === "message_title") {
    message.messageTitle = input.value;
  }
}

function checkingInputs(input) {
  if (input.value.length > 0) {
    input.classList.add("good");
    input.classList.remove("mistake");
  }
  if (input.value.length == 0) {
    input.classList.remove("good");
    input.classList.add("mistake");
  }
}