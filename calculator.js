/**
 * Created by PanaCloud Guru on 6/15/2016.
 */

var num1 = 0, num2 = 0, submitNum1 = 0, submitNum2 = 0, answer = 0;
var sign = "";
var flag = false;

function myFunction() {
    document.getElementById("userInput").value = "0";
}

function nine() {
    if (document.getElementById("userInput").value == "0") {
        document.getElementById("userInput").value = "9";
    }
    else if ((document.getElementById("userInput").value != "0") && (flag == true)) {
        document.getElementById("userInput").value = "9";
        flag = false;
        num1 = "9";
    }
    else {
        num1 = document.getElementById("userInput").value;
        num1 = num1 + "9";
        document.getElementById("userInput").value = num1;
    }
}

function eight() {
    if(document.getElementById("userInput").value == "0") {
        document.getElementById("userInput").value = "8";
    }
    else if ((document.getElementById("userInput").value != "0") && (flag == true)) {
        document.getElementById("userInput").value = "8";
        flag = false;
        num1 = 8;
    }
    else {
        num1 = document.getElementById("userInput").value;
        num1 = num1 + "8";
        document.getElementById("userInput").value = num1;
    }
}

function seven() {
    if(document.getElementById("userInput").value == "0") {
        document.getElementById("userInput").value = "7";
    }
    else if ((document.getElementById("userInput").value != "0") && (flag == true)) {
        document.getElementById("userInput").value = "7";
        flag = false;
        num1 = 7;
    }
    else {
        num1 = document.getElementById("userInput").value;
        num1 = num1 + "7";
        document.getElementById("userInput").value = num1;
    }
}

function six() {
    if(document.getElementById("userInput").value == "0") {
        document.getElementById("userInput").value = "6";
    }
    else if ((document.getElementById("userInput").value != "0") && (flag == true)) {
        document.getElementById("userInput").value = "6";
        flag = false;
        num1 = 6;
    }
    else {
        num1 = document.getElementById("userInput").value;
        num1 = num1 + "6";
        document.getElementById("userInput").value = num1;
    }
}

function five() {
    if(document.getElementById("userInput").value == "0") {
        document.getElementById("userInput").value = "5";
    }
    else if ((document.getElementById("userInput").value != "0") && (flag == true)) {
        document.getElementById("userInput").value = "5";
        flag = false;
        num1 = 5;
    }
    else {
        num1 = document.getElementById("userInput").value;
        num1 = num1 + "5";
        document.getElementById("userInput").value = num1;
    }
}

function four() {
    if(document.getElementById("userInput").value == "0") {
        document.getElementById("userInput").value = "4";
    }
    else if ((document.getElementById("userInput").value != "0") && (flag == true)) {
        document.getElementById("userInput").value = "4";
        flag = false;
        num1 = 4;
    }
    else {
        num1 = document.getElementById("userInput").value;
        num1 = num1 + "4";
        document.getElementById("userInput").value = num1;
    }
}

function three() {
    if(document.getElementById("userInput").value == "0") {
        document.getElementById("userInput").value = "3";
    }
    else if ((document.getElementById("userInput").value != "0") && (flag == true)) {
        document.getElementById("userInput").value = "3";
        flag = false;
        num1 = 3;
    }
    else {
        num1 = document.getElementById("userInput").value;
        num1 = num1 + "3";
        document.getElementById("userInput").value = num1;
    }
}

function two() {
    if(document.getElementById("userInput").value == "0") {
        document.getElementById("userInput").value = "2";
    }
    else if ((document.getElementById("userInput").value != "0") && (flag == true)) {
        document.getElementById("userInput").value = "2";
        flag = false;
        num1 = 2;
    }
    else {
        num1 = document.getElementById("userInput").value;
        num1 = num1 + "2";
        document.getElementById("userInput").value = num1;
    }
}

function one() {
    if(document.getElementById("userInput").value == "0") {
        document.getElementById("userInput").value = "1";
    }
    else if ((document.getElementById("userInput").value != "0") && (flag == true)) {
        document.getElementById("userInput").value = "1";
        flag = false;
        num1 = 1;
    }
    else {
        num1 = document.getElementById("userInput").value;
        num1 = num1 + "1";
        document.getElementById("userInput").value = num1;
    }
}

function zero() {
    if(document.getElementById("userInput").value == "0") {
        document.getElementById("userInput").value = "0";
    }
    else if ((document.getElementById("userInput").value != "0") && (flag == true)) {
        document.getElementById("userInput").value = "0";
        flag = false;
        num1 = 0;
    }
    else {
        num1 = document.getElementById("userInput").value;
        num1 = num1 + "0";
        document.getElementById("userInput").value = num1;
    }
}

function decimalPoint() {
    if(document.getElementById("userInput").value == "0") {
        document.getElementById("userInput").value = ".";
    }
    else if ((document.getElementById("userInput").value != "0") && (flag == true)) {
        document.getElementById("userInput").value = "0";
        flag = false;
        num1 = ".";
    }
    else {
        num1 = document.getElementById("userInput").value;
        num1 = num1 + ".";
        document.getElementById("userInput").value = num1;
    }
}

function clearValue() {
    document.getElementById("userInput").value = "0";
}

function plus() {
    submitNum1 = document.getElementById("userInput").value;
    document.getElementById("userInput").value = 0;
    sign = '+';
    flag = false;
}

function minus() {
    submitNum1 = document.getElementById("userInput").value;
    document.getElementById("userInput").value = 0;
    sign = '-';
}

function multiply() {
    submitNum1 = document.getElementById("userInput").value;
    document.getElementById("userInput").value = 0;
    sign = '*';
}

function divide() {
    submitNum1 = document.getElementById("userInput").value;
    document.getElementById("userInput").value = 0;
    sign = '/';
    console.log(submitNum1);
}

function isEqualTo() {
    flag = true;
    submitNum2 = document.getElementById("userInput").value;
    document.getElementById("userInput").value = 0;
    if(sign == '+')
        answer = Number(submitNum1) + Number(submitNum2);
    else if(sign == '-')
        answer = Number(submitNum1) - Number(submitNum2);
    else if(sign == '*')
        answer = Number(submitNum1) * Number(submitNum2);
    else
        answer = Number(submitNum1) / Number(submitNum2);

    document.getElementById("userInput").value = answer;
}

