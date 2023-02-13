export {}
//types
const message = "hello ayo"
console.log(message)

let total:number = 0;
console.log(total)
let name:string = "Ayo";

let multiType : number | boolean;

multiType = 20;
multiType = true;

let anyType: any;
anyType = "Ayo";
anyType = 30;
anyType = true;

//functiions
function add(num1:number, num2:number):number{
    return num1 + num2
}
add(2,3)

//interfaces 