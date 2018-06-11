$(document).ready(function(){
$(".emptyDiv").hide();
$(".timerBox").hide();
$("#questionOne").hide();
$("#questionTwo").hide();
$("#questionThree").hide();
$("#results").hide();

    var correctAnswer = 0;
    var wrongAnswer = 0;
    var countdown = 0;
    var objInterval;

    $("#startButton").click(function(){
        $(this).hide();
        $("#questionOne").show();
        $(".timerBox").show();
        startCountDown();
    })
    $(".qOne").click(function(){
        $("#questionOne").hide();
        $(".emptyDiv").show();
         
        $(".timerBox").hide();
        $(".timerBox").empty();
        setTimeout(function(){
            $(".emptyDiv").empty();
            $(".emptyDiv").hide();
            $(".timerBox").show();
            $("#questionTwo").show();
            resetCountDown()
            startCountDown()
             }, 2000);
    })
    $(".qTwo").click(function(){
        $("#questionTwo").hide();
        $(".emptyDiv").show();
        $(".timerBox").hide();
        $(".timerBox").empty();
        setTimeout(function(){
            $(".emptyDiv").empty();
            $(".emptyDiv").hide();
            $(".timerBox").show();
            $("#questionThree").show()
            resetCountDown();
            startCountDown();
             }, 2000);
    })
    $(".qThree").click(function(){
        $("#questionThree").hide();
        $(".emptyDiv").show();
         ;
        $(".timerBox").hide();
        $(".timerBox").empty();
        setTimeout(function(){
            $(".emptyDiv").empty();
            $(".emptyDiv").hide();
            $("#results").show()}, 2000);
    })


    $(".correct").click(function(){
        correctAnswer++;
        $(".emptyDiv").html("Correct!")
        console.log(correctAnswer)
    })
    
    $(".incorrect").click(function(){
        wrongAnswer++;
        $(".emptyDiv").html("Incorrect!")
        console.log(wrongAnswer);
    })

    function startCountDown() {
        countdown = 20;
        $(".timerBox").html("20");
        objInterval = setInterval(showCountDown, 1000);
    }
    function showCountDown() {
        $(".timerBox").html(countdown);
        if (countdown < 1){
            clearInterval(objInterval);
            $(".timerBox").html("Out of Time!")
        }
        else
            countdown--;
    }
    function resetCountDown() {
        clearInterval(objInterval);
        countdown = 20;
    }




});