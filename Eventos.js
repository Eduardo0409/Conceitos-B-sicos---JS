const submitButton = document.querySelector('#submit-button');
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const myForm = document.querySelector('#my-form')

const items = document.querySelector('.items')
const body = document.querySelector('body')



submitButton.addEventListener('click', function (events) {
    events.preventDefault();

    // console.log("Clicked");

 

//Validando campos do nome e email
const nameValue = nameInput.value;
const emailValue = emailInput.value

    if(nameValue === '' || emailValue === ''){
        return alert('Please fill out all the fields!')
    }
    myForm.style.background = "red";
    items.firstElementChild.textContent = nameValue;
    items.children[1].textContent = emailValue;

    body.style.background = 'white'

});


// //Escutando 
// nameInput.addEventListener("change", function(events){
//     console.log(events.target.value)
// })

