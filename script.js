var wrapperEle = document.body.querySelector(".wrapper");

var number1=prompt("Enter a number");
if(isNaN(number1)){
  wrapperEle.innerHTML="It is not a number!";
}
var prompter = prompt("Enter an operator");

var number2=prompt("Enter a Number");
if(isNaN(number2)){
  wrapperEle.innerHTML="It is not a number!";
}

var number4=(number1*number2);
var answer=number4
wrapperEle.innerHTML=answer;