var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);
//myFunction is test function
function firstValueFunction(value, index, array) {
    return value >18;
}
document.writeln("First number over 18 is " + firstValueFunction(5));

var firstIndex = number.findIndex(myFunction);
//myFunction is test functon
function firstIndexFunction(value, index, array) {
    return value >18;
}
document.writeln("First number over 18 has index " + firstIndexFunction(5));