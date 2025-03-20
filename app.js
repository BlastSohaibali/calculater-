let input = document.querySelector("input");
let button = document.querySelectorAll("button");


let string = "";
let arr = Array.from(button);

arr.forEach(button =>{
    button.addEventListener("click",(d)=>{
        if(d.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
            return;
        }
        else if(d.target.innerHTML == "AC"){
            string = " ";
            input.value = string;
            return;
        }
        else if(d.target.innerHTML == "DEL"){
            string =string.slice(0, -1);
            input.value = string;
            return;
        }
        else{
            string += d.target.innerHTML;
            input.value = string;
        }
    })
})