function values() {
  var sides = new Array;                                //create an array called "sides" that will store variables containing user input values.
  var inputA = document.getElementById('SideA').value;  //create variables that will store user input values.
  var inputB = document.getElementById('SideB').value;
  var inputC = document.getElementById('SideC').value;
  var output = document.getElementById('output');       //create variable "output" that contains value of what to be displayed.
  sides.push(inputA,inputB,inputC);                     //push variables containing user input in the empty array "sides".
if (inputA.length === 0 || inputB.length === 0 || inputC.length === 0) // checks whether user has typed or has left blank.
{
  output.innerHTML = "<p>Please FILL all the fields.</p>"
} else {
var A = parseFloat(inputA);                                 //converts the input string values to numbers,and stores the results in variables(A,B & C).
var B = parseFloat(inputB);
var C = parseFloat(inputC);
}
}
function brain()
{

}
