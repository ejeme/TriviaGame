var questions =
{ 
    q1: 'What planet is closest to the Sun?',
    q2: 'How far away is the Sun from the Earth?',
    q3: 'Which star is closest to the Earth?',
    q4: 'What is the name of our galaxy?'
};

var answers =
{
    answers1:{
        1:'Mars',
        2:'Jupiter',
        3:'Mercury' // Correct Answer
    },
    answers2:{
        1:'93 Million Miles',// Correct Answer
        2:'50 Billion Miles',
        3:'8 Million Miles' 
    },
    answers3:{
        1:'Sun', // Correct Answer
        2:'Alpha Centauri',
        3:'Kepler B52' 
    },
    answers4:{
        1:'Milky Way',// Correct Answer
        2:'Starry Sky',
        3:'Universe' 
    },
};
//console.log(answers);

//Counter variables
var isCorrect = false;
var questCnt = 0;
var time = 0;
var corAnswer = 0;
var wrongCount = 0;

//Used to reset the time
var interval;


/*
====================================================*/
function gamePlay()
{
    $('.startBtn').on('click', function()
    {
        //Hides the Start Button
        $('.startBtn').hide();

        //Starts timer and starts question
        timeCount();
        quest1();
        chooseCheckAnswer();
    });
    
}

function timeCount()
{
    //Sets time to 30 seconds
    time = 30;
    //Counts down
    interval = setInterval(timeRemaining, 1000);
    
    //Adds a new div to btn container with the text "TIme Remaining"
    $('.btnContainer').append('<div class="timeRem">' + 'Time Remaining: ' + '<div class="timerCountDown"></div>' + '</div>');
}
//Print time remaining to the DOM, and if the time is equal to zero, the timer stops
function timeRemaining() 
{
    //Decrement time by 1
    time--;
    //Prints the time remaining
    $('.timerCountDown').text(time + ' seconds');
    //Test / Debug
    //console.log(time);
    //Once time reaches zero....
    if(time===0)
    {
        console.log('time = '+time);
        //Stops time at zero
        clearInterval(interval);
        //Removes button answers
        $('button').remove();
        //Removes question
        $('questionInput').remove();
        //Displays "Time is up" when time reaches zero
        $('.btnContainer').append('<div class="timeIsUp">Time is up</div>');
        dispAns();
    }
}
function dispAns()
{
//==================================================================================
    //First question

    if (questionCnt === 1 && isCorrect === false)
    {
        //Tracks the wrong answers
        wrongCount++;
        var newDiv = $('<div class="corAnsw">');
        correctAnswer = newDiv.text('WRONG!!! The correct answer is ' + answers.answers1[3]);
        $('.btnContainer').append(correctAnswer);

        console.log(newDiv);
    
        //Removes the correct answer after five seconds
        //Removes the time remaining, then calls the time remaining function to start the timer again
        setTimeout(function()
        {
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');

            //Reset time count
            timeCount();
            //Create 2nd question and answers
            quest2();
            chooseCheckAnswer();
        }, 3000);
    }
    else if(questionCnt === 1 && isCorrect === true)
    {
        //Tracks the right answers
        corAnswer++;
        //Display correct!!!
        var newDiv = $('<div class="corAnsw">');
        correntAnswer = newDiv.text('CORRECT!!!');
        $('.btnContainer').append(correctAnswer);
    
        //Removes the correct answer after five seconds
        //Removes the time remaining, then calls the time remaining function to start the timer again
        setTimeout(function()
        {
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');

            //Reset time count
            timeCount();
            //Create 2nd question and answers
            quest2();
            chooseCheckAnswer();
        }, 3000); 
    }

    
//==================================================================================
    //Second Question
    else if (questionCnt === 2 && isCorrect === false)
    {
        //Tracks the wrong answers
        wrongCount++;
        var newDiv = $('<div class="corAnsw">');
        correntAnswer = newDiv.text('WRONG!!! The correct answer is ' + answers.answers2[1]);
        $('.btnContainer').append(correctAnswer);
    
        //Removes the correct answer after five seconds
        //Removes the time remaining, then calls the time remaining function to start the timer again
        setTimeout(function()
        {
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');

            //Reset time count
            timeCount();
            //Create 3rd question and answers
            quest3();
            chooseCheckAnswer();
        }, 3000); 
}

    else if(questionCnt === 2 && isCorrect === true)
    {
        //Tracks the right answers
        corAnswer++;
        //Display correct!!!
        var newDiv = $('<div class="corAnsw">');
        correntAnswer = newDiv.text('CORRECT!!!');
        $('.btnContainer').append(correctAnswer);
    
        //Removes the correct answer after five seconds
        //Removes the time remaining, then calls the time remaining function to start the timer again
        setTimeout(function()
        {
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');

            //Reset time count
            timeCount();
            //Create 3rd question and answers
            quest3();
            chooseCheckAnswer();
        }, 3000); 
    }

//==================================================================================
    //Third Question
    else if(questionCnt === 3 && isCorrect === false)
    {
        //Tracks the wrong answers
        wrongCount++;
        var newDiv = $('<div class="corAnsw">');
        correntAnswer = newDiv.text('WRONG!!! The correct answer is ' + answers.answers3[1]);
        $('.btnContainer').append(correctAnswer);
    
        //Removes the correct answer after five seconds
        //Removes the time remaining, then calls the time remaining function to start the timer again
        setTimeout(function()
        {
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');

            //Reset time count
            timeCount();
            //Create 4th question and answers
            quest4();
            chooseCheckAnswer();
        }, 3000); 
}

    else if(questionCnt === 3 && isCorrect === true)
    {
        //Tracks the right answers
        corAnswer++;
        //Display correct!!!
        var newDiv = $('<div class="corAnsw">');
        correntAnswer = newDiv.text('CORRECT!!!');
        $('.btnContainer').append(correctAnswer);
    
        //Removes the correct answer after five seconds
        //Removes the time remaining, then calls the time remaining function to start the timer again
        setTimeout(function()
        {
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');

            //Reset time count
            timeCount();
            //Create 4th question and answers
            quest4();
            chooseCheckAnswer();
        }, 3000); 
    }

//==================================================================================
    //Fourth Question
    else if(questionCnt === 4 && isCorrect === false)
    {
        //Tracks the wrong answers
        wrongCount++;
        var newDiv = $('<div class="corAnsw">');
        correntAnswer = newDiv.text('WRONG!!! The correct answer is ' + answers.answers4[1]);
        $('.btnContainer').append(correctAnswer);
    
        //Removes the correct answer after five seconds
        //Removes the time remaining, then calls the time remaining function to start the timer again
        setTimeout(function()
        {
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');

            //Display end game
            endGame();
        }, 3000); 
}

    else if(questionCnt === 4 && isCorrect === true)
    {
        //Tracks the right answers
        corAnswer++;
        //Display correct!!!
        var newDiv = $('<div class="corAnsw">');
        correntAnswer = newDiv.text('CORRECT!!!');
        $('.btnContainer').append(correctAnswer);
    
        //Removes the correct answer after five seconds
        //Removes the time remaining, then calls the time remaining function to start the timer again
        setTimeout(function()
        {
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');

            //Display end game
            endGame();

        }, 3000); 
    }
    //Test Debug
    console.log('Question counter = ' +questCnt);
}

function quest1()
{
    //Adds questions and answers to the question input div
    questCnt++;
    $('.btnContainer').append('<div class="questionInput">' + questions.q1 + '</div>' +
    '<button class="answerVal" value=0 btn-lg>' + answers.answers1[1] + '</button>' +
    '<button class="answerVal" value=0 btn-lg>' + answers.answers1[2] + '</button>' +
    '<button class="answerVal" value=1 btn-lg>' + answers.answers1[3] + '</button>'
);
}

function quest2()
{
    //Adds questions and answers to the question input div
    questCnt++;
    $('.btnContainer').append('<div class="questionInput">' + questions.q2 + '</div>' +
    '<button class="answerVal" value=1 btn-lg>' + answers.answers2[1] + '</button>' +
    '<button class="answerVal" value=0 btn-lg>' + answers.answers2[2] + '</button>' +
    '<button class="answerVal" value=0 btn-lg>' + answers.answers2[3] + '</button>'
);
}

function quest3()
{
    //Adds questions and answers to the question input div
    questCnt++;
    $('.btnContainer').append('<div class="questionInput">' + questions.q3 + '</div>' +
    '<button class="answerVal" value=1 btn-lg>' + answers.answers3[1] + '</button>' +
    '<button class="answerVal" value=0 btn-lg>' + answers.answers3[2] + '</button>' +
    '<button class="answerVal" value=0 btn-lg>' + answers.answers3[3] + '</button>'
);
}

function quest4()
{
    //Adds questions and answers to the question input div
    questCnt++;
    $('.btnContainer').append('<div class="questionInput">' + questions.q4 + '</div>' +
    '<button class="answerVal" value=1 btn-lg>' + answers.answers4[1] + '</button>' +
    '<button class="answerVal" value=0 btn-lg>' + answers.answers4[2] + '</button>' +
    '<button class="answerVal" value=0 btn-lg>' + answers.answers4[3] + '</button>'
);
}

function endGame()
{
    //Add game over text
    $('.btnContainer').append('<div class="gameOver">All done, here is how you did!</div>' + '<div class="gameOver">Correct:' + corAnswer + '</div>' + '<div class="gameOver">Wrong: ' + wrongCount + '</div>');
    resetGame();
}

function resetGame()
{
    $('.btnContainer').append('<button class="reset">Reset</button>');
    $('.reset').on('click', function (){
        $('div').remove('.gameOver');
        $('button').remove('.reset');

        //Reset Counters
        questCnt = 0;
        corAnswer = 0;
        wrongCount = 0;
        isCorrect = false;

    });
}

gamePlay();