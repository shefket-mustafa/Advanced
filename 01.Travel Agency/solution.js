window.addEventListener("load", solution);

function solution() {
  let fullNameElement = document.querySelector("#fname");
  let emailElement = document.querySelector("#email");
  let numberElement = document.querySelector("#phone");
  let adressElement = document.querySelector("#address");
  let codeElement = document.querySelector("#code");

  let submitBtnElement = document.querySelector("#submitBTN");

  let editButtonElement = document.querySelector("#editBTN");
  let continueButtonElement = document.querySelector("#continueBTN");

  let infoPreviewToAttachInfo = document.querySelector("#infoPreview");

  let newFullNameElement;
  let newEmailElement;
  let newNumberElement; // suzdawam gi tuk oshte za da moga w edit eventa da gi
  let newAdressElement; // izpolzwam inache ne znam kak da gi premahna ot tam
  let newCodeElement;

  submitBtnElement.addEventListener("click", function (e) {
    if (fullNameElement.value === "" || emailElement.value === "") {
      return;
    }
    let fullName = fullNameElement.value;
    let email = emailElement.value;
    let phone = numberElement.value;
    let adress = adressElement.value;
    let code = codeElement.value;

    submitBtnElement.setAttribute("disabled", true);
    editButtonElement.removeAttribute("disabled");
    continueButtonElement.removeAttribute("disabled");

    newFullNameElement = document.createElement("li");
    newEmailElement = document.createElement("li");
    newNumberElement = document.createElement("li");
    newAdressElement = document.createElement("li");
    newCodeElement = document.createElement("li");

    newFullNameElement.id = "namePreview";
    newEmailElement.id = "emailPreview";
    newNumberElement.id = "numberPreview";
    newAdressElement.id = "addressPreview";
    newCodeElement.id = "codePreview";

    newFullNameElement.textContent = `Full name: ${fullName}`;
    newEmailElement.textContent = `Email: ${email}`;
    newNumberElement.textContent = `Phone number: ${phone}`;
    newAdressElement.textContent = `Adress: ${adress}`;
    newCodeElement.textContent = `Postal code: ${code}`;

    infoPreviewToAttachInfo.appendChild(newFullNameElement);
    infoPreviewToAttachInfo.appendChild(newEmailElement);
    infoPreviewToAttachInfo.appendChild(newNumberElement);
    infoPreviewToAttachInfo.appendChild(newAdressElement);
    infoPreviewToAttachInfo.appendChild(newCodeElement);

    fullNameElement.value = "";
    emailElement.value = "";
    numberElement.value = "";
    adressElement.value = "";
    codeElement.value = "";
  });

  editButtonElement.addEventListener("click", function () {
    let editButt = document.getElementById("editBTN");
    let continueButt = document.getElementById("continueBTN");

    editButt.setAttribute("disabled", true);
    continueButt.setAttribute("disabled", true);
    submitBtnElement.disabled = false;

    let newName = document.getElementById("namePreview").textContent;
    let newEmail = document.getElementById("emailPreview").textContent;
    let newNumber = document.getElementById("numberPreview").textContent;
    let newAdress = document.getElementById("addressPreview").textContent;
    let newCode = document.getElementById("codePreview").textContent;

    fullNameElement.value = newName.replace("Full name: ", "").trim();
    emailElement.value = newEmail.replace("Email: ", "");
    numberElement.value = newNumber.replace("Phone number: ", "");
    adressElement.value = newAdress.replace("Adress: ", "");
    codeElement.value = newCode.replace("Postal code: ", "");

    infoPreviewToAttachInfo.removeChild(newFullNameElement);
    infoPreviewToAttachInfo.removeChild(newEmailElement);
    infoPreviewToAttachInfo.removeChild(newNumberElement);
    infoPreviewToAttachInfo.removeChild(newAdressElement);
    infoPreviewToAttachInfo.removeChild(newCodeElement);
  });

  continueButtonElement.addEventListener("click", function () {
    let blockElement = document.getElementById("block");
    blockElement.textContent = "";

    let message = document.createElement("h3");
    message.textContent = "Thank you for your reservation!";

    blockElement.appendChild(message);
  });
}
