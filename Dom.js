//document.getElementById

// let element = document.getElementById("demo");
// element.innerText = "DOM"
// console.log(element);

// let div=document.getElementById("test");
// // div.innerText = "<h1>header</h1>" 
// div.innerHTML = "<h1>header</h1>"
// console.log(div);

let ele = document.getElementsByClassName("test");
console.log(ele);
console.log(Array.isArray(ele));
// ele[0].style.backgroundColor = "yellow";

//! spread operator :- It is used to takeout each and every value from the original array and store it in one more new array.
//! syntax:- [...variable]

let x = [...ele]
console.log(x , Array.isArray(x));
x.map((element)=> {
    console.log(element);
    element.style.backgroundColor = "red";
})
