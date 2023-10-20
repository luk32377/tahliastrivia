
var qq = document.getElementById("question");
var trueButton = document.getElementById("intrue");
var falseButton = document.getElementById("infalse");
var scoreTag = document.getElementById("score");
var score = 0;
var str = "";
var answer = false;
var xhttp = new XMLHttpRequest();

function getQuestion() {
    xhttp.open("GET", "https://opentdb.com/api.php?amount=1&type=boolean", false);
    xhttp.send();
    str = xhttp.response;
    var dd = JSON.parse(str);
    dd = dd["results"];
    dd = JSON.stringify(dd[0]);
    dd = JSON.parse(dd);
    qq.innerHTML = dd["question"];
    aa = dd["correct_answer"];
    if (aa == "True") {
        answer = true;
    } else {
        answer = false;
    }
}

trueButton.onclick = function() {
    if (answer) {
        score++;
        scoreTag.innerHTML = "Score: " + score;
    }
    getQuestion();
}

falseButton.onclick = function() {
    if (!answer) {
        score++;
        scoreTag.innerHTML = "Score: " + score;
    }
    getQuestion();
}

getQuestion();