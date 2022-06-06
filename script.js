let choice_1 = parseInt(prompt("Input-1:"));
console.log(choice_1);
let choice_2 = parseInt(prompt("Input-2 "));
console.log(choice_2);
choice = prompt("Your choice is add, sub, mul, div ")
if ( choice == "add")
{
    add = choice_1 + choice_2;
    console.log("Addition is : ", add);
}
else if ( choice == "sub")
{
    sub = choice_1 - choice_2;
    console.log("Subtraction is: ", sub);
}
else if ( choice == "mul")
{
    mul = choice_1 * choice_2;
    console.log("Multiplication is : ", mul);
}
else if ( choice == "div")
{
    div = choice_1 / choice_2;
    console.log("Division is : ",div);
}
else {
    console.log("Invalid Comment")
}