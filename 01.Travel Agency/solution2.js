window.addEventListener("load", solution);
function solution() {
    let submitButton = document.getElementById('submitBTN');
    let continueButton = document.getElementById('continueBTN');
    let editButton = document.getElementById('editBTN');
    let block = document.getElementById('block');
    let infoPreview = document.getElementById('infoPreview');

    let inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
    let labelValues = Array.from(document.getElementById('form').querySelectorAll('label'));
    inputValues.pop(); // popvame zashtoto wzimame i submit butona i toi e input tip

    submitButton.addEventListener('click',()=>{
        submitButton.disabled = true;
        editButton.disabled = false;
        continueButton.disabled = false;
        let name = inputValues[0];
        let email = inputValues[1];

        if(name !== '' || email !== ''){

        for (let i = 0; i < inputValues.length; i++) {
        let createdLi = document.createElement('li');
        createdLi.textContent = `${labelValues[i].textContent} ${inputValues[i].value}` 
        infoPreview.appendChild(createdLi);   
        inputValues[i].value = '';     
        }
    }
    })

    editButton.addEventListener('click',()=>{
        submitButton.disabled = false;
        editButton.disabled = true;
        continueButton.disabled = true;
        let name = inputValues[0];
        let email = inputValues[1];
        if(name !== '' || email !== ''){
        let previewList = Array.from(document.getElementById('infoPreview').querySelectorAll('li'))
        for (let index = 0; index < inputValues.length; index++) {
           inputValues[index].value = previewList[index].textContent.split(': ')[1];
            
           previewList[index].remove()
        }
    }
    })

    continueButton.addEventListener('click',()=>{
        block.innerHTML = '';
        let newMessage = document.createElement('h3');
        newMessage.textContent = 'Thank you for your reservation';
        block.appendChild(newMessage)
    })
    

}
