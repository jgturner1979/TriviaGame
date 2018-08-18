$(document).ready(function () {


    //Global variables
    var counter = 30;
    var intervalId;
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

    function loadScreen() {

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
        $("#submit").click(function () {
            for (var i = 0; i < quiz.length; i++) {
                $.each($("input[name='question-" + i + "']:checked"), function () {
                    console.log($(this));
                    var userGuess = $(this).attr("value");
                    if (userGuess === quiz[i].correct){
                        correctAns++;
                        $("#correctAns").html("Correct Answers: " + correctAns);
                        console.log(correctAns);

                    }
                    else {
                        incorrect++;
                        $("#incorrect").html("Incorrect Answers: " + incorrect);
                    }
                });
            };
            clearInterval(intervalId);
        });
    };
// 3 timer functions - set time, decrement time and stop time
    function createTimer() {
        counter = 30;
        clearInterval(intervalId);
        intervalId = setInterval(decrementTime, 1000);

    };

    function decrementTime() {
        counter--;
        $("#timer").html("Time Remaining: " + counter);
        if (counter === 0) {
            stopTimer();
        }
    };

    function stopTimer() {
        clearInterval(intervalId);
        $("#questions").html("You ran out of time!<br>");
        // playAgain();

    };

    // Play again function
    function playAgain() {
    
            correctAns = 0;
            incorrect = 0;
            counter = 30;
            intervalId;
            $("#questions").empty();
            $("#correctAns").empty();
            $("#incorrect").empty();
            $("#timer").empty();
            loadScreen();
            createTimer();
            decrementTime();
    };

    $("#playagain").click(playAgain);
    loadScreen();
    checkAnswers();
    createTimer();
    decrementTime();

});