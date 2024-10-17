window.addEventListener("load", solution);

function solution() {
  let submitButton = document.getElementById("submitBTN");
  let editButton = document.getElementById("editBTN");
  let continueBTN = document.getElementById("continueBTN");
  let block = document.getElementById("block");
  let previewInfo = document.getElementById("infoPreview");

  submitButton.disabled = false;
  editButton.disabled = true;
  continueBTN.disabled = true;

  let inputValues = Array.from(
    document.getElementById("form").querySelectorAll("input")
  );
  let labelValues = Array.from(
    document.getElementById("form").querySelectorAll("label")
  );
  inputValues.pop();
  // otgore wzimame naprawo formata sys wsichki danni i prawim query selectorAll
  // na input i label koeto ni wrushta nodelist kato masiw ot wsichki danni
  //za towa otdolu gi wzimame s []

  submitButton.addEventListener("click", function (event) {
    let fullName = inputValues[0];
    let email = inputValues[1];
    if (fullName !== "" && email !== "") {
      for (let index = 0; index < inputValues.length; index++) {
        const liElement = document.createElement("li");
        liElement.textContent = `${labelValues[index].textContent} ${inputValues[index].value}`;
        previewInfo.appendChild(liElement);
      }
      for (const input of inputValues) {
        input.value = "";
      }
      event.target.disabled = true; // zashtoto submit buttona si gubi referenciqta weche
      // za towa polzwame event.target. towa e butona na koito sme w momenta
      editButton.disabled = false;
      continueBTN.disabled = false;
    }
  });

  editButton.addEventListener("click", function (event) {
    let listItems = Array.from(previewInfo.childNodes);

    for (let i = 0; i < inputValues.length; i++) {
      inputValues[i].value = listItems[i].textContent.split(": ")[1];
      listItems[i].remove();
    }

    submitButton.disabled = false;
    editButton.disabled = true;
    continueBTN.disabled = true;
  });

  continueBTN.addEventListener("click", function (event) {
    block.innerHTML = "";

    let h3 = document.createElement("h3");
    h3.textContent = "Thank you for your reservation!";

    block.appendChild(h3);
  });
}
