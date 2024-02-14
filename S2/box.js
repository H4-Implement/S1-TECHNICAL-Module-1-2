/* LUIS CORTEZ */

function ButtonFunction() {
    var box0 = document.getElementById('box0');
    var box1 = document.getElementById('box1');

    var box1BorderColor = window.getComputedStyle(box1).borderColor;
    box0.style.borderColor = box1BorderColor;
}

function resetAnimation() {
    var box0 = document.getElementById('box0');
    var box1 = document.getElementById('box1');

    box0.style.animation = 'none';
    box0.offsetHeight;
    box0.style.animation = null;

    box1.style.animation = 'none';
    box1.offsetHeight;
    box1.style.animation = null;
}

function purple() {
    ButtonFunction();
    resetAnimation();
    var box1 = document.getElementById('box1');
    box1.style.borderColor = "purple";
}

function pink() {
    ButtonFunction();
    resetAnimation();
    var box1 = document.getElementById('box1');
    box1.style.borderColor = "pink";
}

function blue() {
    ButtonFunction();
    resetAnimation();
    var box1 = document.getElementById('box1');
    box1.style.borderColor = "blue";
}

function lime() {
    ButtonFunction();
    resetAnimation();
    var box1 = document.getElementById('box1');
    box1.style.borderColor = "lime";
}

function yellow() {
    ButtonFunction();
    resetAnimation();
    var box1 = document.getElementById('box1');
    box1.style.borderColor = "yellow";
}

function orange() {
    ButtonFunction();
    resetAnimation();
    var box1 = document.getElementById('box1');
    box1.style.borderColor = "orange";
}

function red() {
    ButtonFunction();
    resetAnimation();
    var box1 = document.getElementById('box1');
    box1.style.borderColor = "red";
}

