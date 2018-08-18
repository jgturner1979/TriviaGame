$(document).ready(function () {


    //Global variables
    var counter = 45;
    var correctAns = 0;
    var incorrect = 0;

    var quiz = [{
            question: "What was the name of Angela's son in Who's the Boss?",
            answer: ["Mike Seaver", "Jonathon Bower", "Michael Keaton", "Sam Malone"],
            correct: "Jonathon Bower"
        },
        {
            question: "Who played the role of Blair Werner on the Facts of Life?",
            answer: ["Kim Fields", "Mindy Cohn", "Lisa Whelchel", "Nancy McKeon"],
            correct: "Lisa Whelchel"
        },
        {
            question: "Who shot J.R. Ewing?",
            answer: ["Sue Ellen", "Kristen Shepard", "Miss Ellie", "Bob Ewing"],
            correct: "Kristen Shepard"
        },
        {
            question: "What was the name of Mallory's boyfriend on Family Ties?",
            answer: ["Nick Moore", "Steve Hale", "George Burnett", "Steve Urkel"],
            correct: "Nick Moore"
        }
    ];

    //Load questions and answers to the DOM

    function loadscreen() {

        for (var i = 0; i < quiz.length; i++) {
            $("#questions").append("<p>" + quiz[i].question + "</p>");
            for (var j = 0; j < quiz.length; j++) {
                var radiobutton = $("<input type='radio' value='" + quiz[i].answer[j] + "' name='question-" + i + "'><label for='" + quiz[i].answer[j] + "'></label>");
                radiobutton.html(quiz[i].answer[j]);
                $("#questions").append(radiobutton);
            };

        };

    };
    //Check answers and display correct and incorrect to DOM

    function checkAnswers() {
        $("button").click(function () {
            for (var i = 0; i < quiz.length; i++) {
                $.each($("input[name='question-" + i + "']:checked"), function () {
                    console.log($(this));
                    var userGuess = $(this).attr("value");
                    if (userGuess === quiz[i].correct){
                        correctAns++;
                        $("#correctAns").html("Correct Answers: " + correctAns);
                        console.log(correctAns);
                    }
                    else if (userGuess !== quiz[i].correct){
                        incorrect++;
                        $("#incorrect").html("Incorrect Answers: " + incorrect);
                    }
                });
            };
        });
    };
// 3 timer functions - set time, decrement time and stop time
    function createTimer() {
        timer = setInterval(decrementTime, 1000);
        clearInterval();
    };

    function decrementTime() {
        counter--;
        $("#timer").html("Time Remaining: " + counter);
        if (counter === 0) {
            stopTimer();
        }
    };

    function stopTimer() {
        $(".container").html("You ran out of time!");

    };

    loadscreen();
    checkAnswers();
    createTimer();

});