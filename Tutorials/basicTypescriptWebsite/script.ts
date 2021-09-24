//alert("hello in typescript");
let anyVar: any = "any string";
let numVar: number = 22;
let strVar: string = "Andrew McCracken";
let boolVal: boolean = false;

function greeter(person){
    return "hello, " + person;
}

document.body.textContent = greeter(strVar)