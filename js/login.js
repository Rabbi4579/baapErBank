
document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    if(email === 'fozlerabbi1120@gmail.com' && password === 'rabbi1234'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Wrong information')
    }
})