var correctCount = 0;
var wrongCount = 0;
var timeCount = 0;

var time = 30;
running = false;

var questionList = ["What was the first full length CGI movie?", 'What is the name of the boxer in "Pulp Fiction" who is paid to lose a match?', 'What is the highest grossing film of all time?', "Who is the actor with the highest gross box-office total of all time?"];
var answerList = [["Monster's Inc.", "Toy Story", "A Bug's Life", "Snow White", 1], ["Vincent Vega", "Jules Winnfield", "Marsellus Wallace", "Butch Coolidge", 3],["Avatar", "Titanic", "Avengers Endgame", "Jurrasic World", 0],["Harrison Ford", "Robert Downey Jr.", "Samuel L. Jackson", "Tom Hanks", 2]];
var gifList = ['<iframe src="https://giphy.com/embed/Rj51H8PkfX6HC" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>', '<iframe src="https://giphy.com/embed/iUYwiYC4K2gF2" width="480" height="361" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>', '<iframe src="https://giphy.com/embed/AxhxIcTMEMqR2" width="480" height="265" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>', '<iframe src="https://giphy.com/embed/l1J3D78s4USLhASU8" width="480" height="302" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'];
var questionNum = 0;


var startBtn = $("<h1>").addClass("time redo").attr("id", "startBtn").text("Start Game");
$("#qa").append(startBtn);

$(document).on("click", "#startBtn", function(){
    console.log("clicked button");
    start();
})

function start(){
    if(questionNum !== questionList.length){
        console.log("started running");
        if(!running){
            console.log("started running");
            running = true;
            intervalID = setInterval(timer, 1000);
            question();
        }
    }
    else{
        gameOver();
    }
}

function timer(){
    if(time > 0){
        time--;
        $("#displayTime").text(time + " seconds");
    }
    else{
        //times up
        timeCount++;
        questionAnswered(-1);
        clearInterval(intervalID);
    }
}


function question(){
    $("#displayTime").text("30 seconds");
    $("#qa").empty();
    var ansList = answerList[questionNum];
    var newQuestion = $("<p>").addClass("time").text(questionList[questionNum]);
    $("#qa").append(newQuestion);
    var correct = ansList[ansList.length - 1];
    for(var i = 0; i < ansList.length - 1; i++){
        if(i === correct && i !== ansList.length-2){
            var answer = $("<h1>").addClass("time answer").text(ansList[i]).val("1");
        }
        else if(i === correct && i === ansList.length-2){
            var answer = $("<h1>").addClass("time bottom").text(ansList[i]).val("1");
        }
        else if(i !== correct && i=== ansList.length-2){
            var answer = $("<h1>").addClass("time bottom").text(ansList[i]).val("0");
        }
        else{
            var answer = $("<h1>").addClass("time answer").text(ansList[i]).val("0");
        }

        $("#qa").append(answer);
    }
}

function questionAnswered(ans){
    $("#qa").empty();
    //correct
    if(ans === 1){
        var text = $("<p>").addClass("time").text("Correct!");
        $("#qa").append(text);
    }
    //incorrect
    else if(ans === 0){
        var text = $("<p>").addClass("time").text("Incorrect!");
        $("#qa").append(text);
    }
    //time up
    else{
        var text = $("<p>").addClass("time").text("Time's Up!");
        $("#qa").append(text);
    }
    var gif = $(gifList[questionNum]).addClass("gif");
    $("#qa").append(gif);
    time = 30;
    questionNum++;
    running = false;
    setTimeout(start, 3000);
}

$(document).on("click", ".answer", answerClicked);
$(document).on("click", ".bottom", answerClicked);

function answerClicked(){
    console.log("clicked");
    console.log($(this).val());
    clearInterval(intervalID);
    if($(this).val() === "1"){
        console.log("correct");
        correctCount++;
        questionAnswered(1);
    }
    else if($(this).val() === "0"){
        wrongCount++;
        questionAnswered(0);
    }
    running = false;
}

function gameOver(){
    $("#qa").empty();
    var endText = $("<h1>").addClass("time").text("Game Over!");
    var wins = $("<h1>").addClass("time").text("Correct Answers: " + correctCount);
    var losses = $("<h1>").addClass("time").text("Incorrect Answers: " + wrongCount);
    var timeOut = $("<h1>").addClass("time").text("Unanswered: " + timeCount);
    var startOver = $("<h1>").addClass("time redo").attr("id", "startOver").text("Start Over?");
    $("#qa").append(endText).append(wins).append(losses).append(timeOut).append(startOver);
}

$(document).on("click", "#startOver", function(){
    time = 30;
    correctCount = 0;
    wrongCount = 0;
    timeCount = 0;
    questionNum = 0;
    $("#qa").empty();
    $("#displayTime").text("30 seconds");
    start();
})



