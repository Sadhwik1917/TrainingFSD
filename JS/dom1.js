// let image = document.createElement("img");
// image.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
// console.log(image);
// document.body.appendChild(image);

// let x = document.createElement("h1");
// x.innerText = "Dynamic creation of html element from JS";
// x.setAttribute('id', 'demo');
// console.log(x);
// document.body.appendChild(x);

// let form = document.querySelector("form");
// let nameInput = document.querySelector("#uName");
// let emailInput = document.querySelector("#uEmail");
// let passwordInput = document.querySelector("#uPassword");

// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     let name = nameInput.value;
//     let email = emailInput.value;
//     let password = passwordInput.value;
//     let userDetails ={
//         name: name,
//         email: email,
//         password: password
//     }
//     console.log(userDetails);
//     localStorage.setItem("userDetails", JSON.stringify(userDetails));
// });


//! dynamic elements

// let mainEle = document.createElement("div");
// mainEle.setAttribute("class", "mainBlock");
// mainEle.innerText = "This is created through JAVA SCRIPT";
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class", "topBlock");
// console.log(topEle);

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class", "bottomBlock");
// console.log(bottomEle);

//? But the output is like this
{/* <div class="mainBLock"></div>
    <div class="topBlock"></div>
    <div class="bottomBlock"></div> */}

//? Actual output should be like this
{/* <div class="mainBLock">
    <div class="topBlock"></div>
    <div class="bottomBlock"></div>
</div> */}

// let img = document.createElement("img");
// img.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"; 
// console.log(img);

// let p = document.createElement("h1");
// p.innerText = "Heading";
// console.log("Heading");

// let btn = document.createElement("button");
// btn.innerText = "View More";
// console.log(btn);

// bottomEle.appendChild(p);
// bottomEle.appendChild(btn);
// topEle.appendChild(img);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);

let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPassword");
let gen = document.getElementsByName("gender");
// console.log(gen);

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let user = username.value;
    let pass = password.value;
    let gender = "";
    // console.log(ele);
    for(let i=0; i<gen.length; i++){
        if(gen[i].checked){
            gender += gen[i].value;
        }
    }
    let userDetails = {
        username: user,
        password: pass,
        gender: gender
    }
    console.log(userDetails);
});