function init() {
    var maindisplay = document.getElementById("maindisplay");
    var equation = document.getElementById("equation");

}
function addition() {
    if (maindisplay.innerHTML == "0") {
        maindisplay.innerHTML = "0";
    } else {
        equation.innerHTML += parseInt(maindisplay.innerHTML);
        maindisplay.innerHTML = "0";
        equation.innerHTML += "+";
    }
}
function substraction() {
    if (maindisplay.innerHTML == "0") {
        maindisplay.innerHTML = "0";

    } else {
        equation.innerHTML += parseInt(maindisplay.innerHTML);
        maindisplay.innerHTML = "0";
        equation.innerHTML += "-";
    }

}
function Multiplication() {
    if (maindisplay.innerHTML == "0") {
        maindisplay.innerHTML = "0";

    } else {
        equation.innerHTML += parseInt(maindisplay.innerHTML);
        maindisplay.innerHTML = "0";
        equation.innerHTML += "*";
    }

}
function Division() {
    if (maindisplay.innerHTML == "0") {

        maindisplay.innerHTML = "0";
    } else {

        equation.innerHTML += parseInt(maindisplay.innerHTML);
        maindisplay.innerHTML = "0";
        equation.innerHTML += "/";
    }

}
function equalto() {
    equation.innerHTML += maindisplay.innerHTML;
    maindisplay.innerHTML = eval(equation.innerHTML);
    equation.innerHTML = "";
}

function keypressed(key) {
    if (maindisplay.innerHTML == "0") {
        maindisplay.innerHTML = key;

    }
    else {
        maindisplay.innerHTML += key;

    }
}

function clearr() {
    maindisplay.innerHTML = "0";
    equation.innerHTML = "";
}