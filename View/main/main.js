//import registered users
import {users} from '../usersDataBase/users.js';

const loginButton = document.getElementById('in');
const notFound = document.getElementById('no');
const logupButton = document.getElementById('up');

const incorrectDataWarner = (message) => {
    notFound.innerHTML = message;
    setTimeout(() => {
        notFound.innerHTML = "";
    }, 5000);
}

loginButton.onclick = () => {

    const usernameIn = document.getElementById('username').value;
    const passwordIn = document.getElementById('password').value;

    if(usernameIn !== "" && passwordIn !== ""){

        let allowedUser;
        let allowedPassw;
        
        //Looking for the user entered
        for(let i=0;i<users.length;i++){
            if(usernameIn == users[i].username){
                allowedUser = true;
            }
            if(passwordIn == users[i].password){
                allowedPassw = true;
            }
        }

        //Handling user data errors
        if(allowedUser){
            if(allowedPassw){
                location.assign('../timeline_page/index.html');
            }else{
                incorrectDataWarner('Incorrect password.');
            }
        }else{
            incorrectDataWarner('Incorrect username.');
        }

    }else{
        incorrectDataWarner("Enter username and password.");
    } 

}

logupButton.onclick = () => {
    window.open('../sign_up_page/index.html');
}



