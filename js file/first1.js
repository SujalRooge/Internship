let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let choice = prompt(
"Choose operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Modulus"
);

switch(choice) {
    case "1":
        console.log("Result:", num1 + num2);
        document.writeln("addition is",num1+num2);
        break;
    case "2":
        console.log("Result:", num1 - num2);
         document.writeln("sub is",num1-num2);
        break;
    case "3":
        console.log("Result:", num1 * num2);
         document.writeln("mul is",num1*num2);
        break;
    case "4":
        console.log("Result:", num1 / num2);
         document.writeln("division is",num1/num2);
        break;
    case "5":
        console.log("Result:", num1 % num2);
         document.writeln("modulus is",num1%num2);
        break;
    default:
        console.log("Invalid choice");
}