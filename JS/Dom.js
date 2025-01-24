//document.getElementById

// let element = document.getElementById("demo");
// element.innerText = "DOM"
// console.log(element);

// let div=document.getElementById("test");
// // div.innerText = "<h1>header</h1>" 
// div.innerHTML = "<h1>header</h1>"
// console.log(div);

// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].style.backgroundColor = "yellow";

//! spread operator :- It is used to takeout each and every value from the original array and store it in one more new array.
//! syntax:- [...variable]

// let x = [...ele]
// console.log(x , Array.isArray(x));
// x.map((element)=> {
//     console.log(element);
//     element.style.backgroundColor = "red";
// })


//!document.getElementsByTagName
//-----------------------------
// let ele = document.getElementsByTagName("div");
// console.log(ele);

// !document.getElementsByName
// ---------------------------
// let ele=document.getElementsByName("username");
// // console.log(ele);
// [...ele].map(element=>{
//     // console.log(element);
//     element.style.backgroundColor = "green";
// })

//!document.querySelector
//-----------------------
// let ele = document.querySelector("#demo")
// console.log(ele);

// let ele = document.querySelector(".test")
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// // console.log(ele); 
// [...ele].map(element=>{
//     console.log(element.innerText);
// })

//! Event Handling

// let btn = document.getElementById("btn");
// // btn.addEventListener("events", callbackfunction)
// btn.addEventListener("click", ()=>{
//     console.log("Button Clicked");
//     document.body.style.backgroundColor = "red";
// })

// let btn = document.getElementById("btn");
// btn.addEventListener("dblclick", ()=>{
//     console.log("Button Clicked 2 Times");
//     document.body.style.backgroundColor = "blue";
// })


// let btn = document.getElementById("btn");
// btn.addEventListener("mouseover", ()=>{
//     // alert("Mouse Over");
//     console.log("Mouse Over");
//     document.body.style.backgroundColor = "green";
// })
// btn.addEventListener("mouseout", ()=>{
//     // alert("Mouse Out");
//     console.log("Mouse Out");
//     document.body.style.backgroundColor = "tomato";
// })

// let inp = document.querySelector("#inp");
// inp.addEventListener("keydown", (e)=>{
//     console.log("Key Down");
// })

// inp.addEventListener("keyup", (e)=>{
//     console.log("Key Up");
// })