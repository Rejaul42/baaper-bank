document.getElementById('btn-submit').addEventListener('click', function(){
    
    const emailField = document.getElementById('email-input');
    const email = emailField.value;

    const passwordField = document.getElementById('pass-input');
    const password = passwordField.value;

    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href= 'bank.html'
    }
    else{
        alert('Tui password vule gesos!!!! toke tejjo putro korlam')
    }
})