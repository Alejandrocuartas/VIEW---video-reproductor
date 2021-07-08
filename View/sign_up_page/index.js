const up = document.querySelector('button');
const error = document.querySelector('#no');

const incorrectDataWarner = (message) => {
    error.innerHTML = message;
    setTimeout(() => {
        error.innerHTML = "";
    }, 5000);
}

up.onclick = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmP = document.getElementById('passwordConfirm').value;

    if(username != "" && password != "" && confirmP != ""){

        //Validating new user data
        if(username.split("").length>3){
            if(password === confirmP){
                location.assign('../timeline_page/index.html');
            }else{
                incorrectDataWarner("The passwords does not coincide.");
            }    
        }else{
            incorrectDataWarner("Use a longer username.");
        }
   
    }else{
        incorrectDataWarner("Enter the log up data.");
    }
}