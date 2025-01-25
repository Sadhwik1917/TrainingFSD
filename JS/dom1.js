// let image = document.createElement("img");
// image.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
// console.log(image);
// document.body.appendChild(image);

// let x = document.createElement("h1");
// x.innerText = "Dynamic creation of html element from JS";
// x.setAttribute('id', 'demo');
// console.log(x);
// document.body.appendChild(x);

let form = document.querySelector("form");
let nameInput = document.querySelector("#uName");
let emailInput = document.querySelector("#uEmail");
let passwordInput = document.querySelector("#uPassword");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let name = nameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let userDetails ={
        name: name,
        email: email,
        password: password
    }
    console.log(userDetails);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
});
