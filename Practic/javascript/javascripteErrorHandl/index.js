try {
    x = 5 // ReferenceError: x is not defined")
    console.log(x) // x is not defined
    console.log("no error World")
}
catch (e) {
    console.log("Error: ")
    console.log("there is an error catch") // ReferenceError
}
finally {
    console.log("finally block") // finally block
}
// finally block

try {
    console.log(y)
    console.log("no error ,y is defined World")
}
catch (e) {
    console.log("Error: y is not defined")
    console.log("there is an error catch2") // ReferenceError
}
finally {
    console.log("finally block2") // finally block
}