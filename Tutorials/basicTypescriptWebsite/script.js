//alert("hello in typescript");
var anyVar = "any string";
var numVar = 22;
var strVar = "Andrew McCracken";
var boolVal = false;
function greeter(person) {
    return "Hello my name is " + person;
}
document.getElementById("helloID").innerHTML = greeter(strVar);
