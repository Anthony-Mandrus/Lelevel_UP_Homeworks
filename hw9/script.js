let num1, num2, result;

function plus(){
    num1 = document.getElementById('numb_1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('numb_2').value;
    num2 = parseInt(num2);
    result = num1+num2;
    document.getElementById("out").innerHTML = result;
}

function minus(){
    num1 = document.getElementById('numb_1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('numb_2').value;
    num2 = parseInt(num2);
    result = num1-num2;
    document.getElementById("out").innerHTML = result;
}

function divide(){
    num1 = document.getElementById('numb_1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('numb_2').value;
    num2 = parseInt(num2);
    result = num1/num2;
    document.getElementById("out").innerHTML =result;
}

function multi(){
    num1 = document.getElementById('numb_1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('numb_2').value;
    num2 = parseInt(num2);
    result = num1*num2;
    document.getElementById("out").innerHTML = result;
}