let base64 = require('base-64');


let email: loginInputs[0].value; edited
let password: loginInputs[1].value;

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.append('Authorization', 'Basic ' + base64.encode(email + ":" + password));

fetch(BASE_URL, {method:'GET',
        headers: headers,
        //credentials: 'user:passwd'
       })
.then(response => response.json())
.then(json => console.log(json));
//.done();

function parseJSON(response) {
return response.json()
}












loginForm.addEventListener('submit', function(e){
    e.preventDefault()
    fetch(USERS_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },

        // body: JSON.stringify({
        //     user: {
        //         email: loginInputs[0].value,
        //         password: loginInputs[1].value
        //     }
        //
        // })
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
