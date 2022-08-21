
const submitButton = document.querySelector('.submit');


const firstName = document.querySelector ('#first_name');
const lastName = document.querySelector ('#last_name');
const email = document.querySelector ('#email');
const password = document.querySelector ('#password');

const errorMsgFn = document.querySelector('.error_message_fn');
const errorMsgE = document.querySelector('.error_message_e');
const errorMsgP = document.querySelector('.error_message_p');
const errorMsgLn = document.querySelector('.error_message_ln');

submitButton.addEventListener('click', (e) => {

    e.preventDefault();

    if (firstName.value === '') {
        firstName.classList.add('invalid');
        errorMsgFn.style.display = 'block';  
        errorMsgFn.style.padding = "0" ;
    }
    else{
        firstName.classList.remove('invalid');
        errorMsgFn.style.display = 'none'; 
    }


    if (lastName.value === '') {
        lastName.classList.add('invalid');
        errorMsgLn.style.display = 'block';
    }
    else{
        lastName.classList.remove('invalid');
        errorMsgLn.style.display = 'none'; 
    }


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) === false) {
        email.classList.add('invalid');
        errorMsgE.style.display = 'block';
    }
    else{
        email.classList.remove('invalid');
        errorMsgE.style.display = 'none'; 
    }



    if (password.value === '') {
        password.classList.add('invalid');
        errorMsgP.style.display = 'block';
    }
    else{
        password.classList.remove('invalid');
        errorMsgP.style.display = 'none'; 
    }




})


