
// Get the modal
let signupModal = document.getElementById("signupModal");

let loginModal = document.getElementById("loginModal");

// Get the button that opens the modal
let sbtn = document.getElementById("signupBtn");

let lbtn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close")[1];

//User signup
const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const signupForm = document.querySelector('#signup-form')
const signupInputs = document.querySelectorAll(".signup-input")
const loginForm = document.querySelector('#login-form')
const loginInputs = document.querySelectorAll(".login-input")
const header = document.querySelector('.header-banner')
const map = document.querySelector('#map')
const formSignup = document.querySelector('.formSignup')
const formLogin = document.querySelector('.formLogin')

const logout = document.querySelector('.logout')
let currentUser

//signup
signupForm.addEventListener('submit', function(e){
    e.preventDefault()
    fetch(USERS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            user: {
                email: signupInputs[0].value,
                password: signupInputs[1].value
            }
        })
    })
    .then(res => res.json())
    .then(function(object){
        if (object.message) {
            alert(object.message)
        }
        else {
        loggedInUser(object)
        }
    }
    )
})


//login
// let base64 = require('base-64');

let email = loginInputs[0].value;
let password = loginInputs[1].value;

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.append('Authorization', 'Basic ' + window.btoa(email + ":" + password));

fetch(BASE_URL, {method:'GET',
        headers: headers,
        //credentials: 'email:password'
       })
.then(response => response.json())
.then(json => console.log(json));
//.done();

function parseJSON(response) {
return response.json()
}


//Once User is logged in
function loggedInUser(object){
    currentUser = object
    signupForm.style.display = 'none'
    signupModal.style.display = 'none'
    loginForm.style.display = 'none'
    loginModal.style.display = 'none'
    sbtn.style.display = 'none'
    lbtn.style.display = 'none'

    welcome.innerHTML = `<h3>Hello, <i>${currentUser.email}</i> !</h3>`
    map.style.display =  'block'


    //fetchPins()
}

// When the user clicks the button, open the modal
sbtn.onclick = function() {
  signupModal.style.display = "block";
}

lbtn.onclick = function() {
  loginModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  signupModal.style.display = "none";
  // loginModal.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  // signupModal.style.display = "none";
  loginModal.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupModal || event.target == loginModal) {
    signupModal.style.display = "none";
    loginModal.style.display = "none";
  }
}
