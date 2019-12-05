var time = 0
var d1 = document.querySelector("#div1")
var d2 = document.querySelector("#div2")
var d3 = document.querySelector("#div3")
var d4 = document.querySelector("#div4")
var b1 = document.querySelector("#b1")
var b2 = document.querySelector("#b2")
var b3 = document.querySelector("#b3")
var b4 = document.querySelector("#b4")
var step = 0
var score = time;
var answerBtns = document.querySelectorAll('.answer')
var Name = localStorage.setItem["Name"]
var score = localStorage.setItem["score"]
 
d1.innerHTML = ("<h1>My Lame Attempt at a Code Quiz</h1>")
d2.innerHTML = ("<p>Be Prepared to Have Your Mind Blown</p>")
d3.innerHTML = ('<button class="start">Start!</button>') // this can contain one button or many buttons 

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
       title: "What is the purpose of console.log?",
       choices: ["prompt a user", "to split wood", "alert a user", "print text to console"],
       answer: "print text to console"
    },
    {
       title: "How do we perform a task in Javascript?",
       choices: ["for loop", "a function", "an array", "math.random" ],
       answer: "a function"
    },
    {
       title: "What word is used to state if a condition is true, do this, else, do something else?",
       choices: ["if", "alert", "while", "loop"],
       answer: "if"
    }
  ];

  d3.addEventListener('click', function () {
    startTimer ()
  d1.innerHTML = questions[step].title;//questions and answers are not lined up correctly, will log "correct and timer -5"
  d2.innerHTML = ""
  d3.innerHTML = ""
  b1.innerHTML = questions[step].choices[0]
  b2.innerHTML = questions[step].choices[1]
  b3.innerHTML = questions[step].choices[2]
  b4.innerHTML = questions[step].choices[3]
  })

  
  for(var i=0; i<answerBtns.length;i++){
    answerBtns[i].addEventListener('click', function(){
      console.log(step)
      if(this.textContent === questions[step].answer){
        //console.log('correct')
        step++;
      }else{
        time = time -15;
        //console.log('false')
        step++;
      }
      if(step < questions.length){
        d1.textContent = questions[step].title;
        b1.textContent = questions[step].choices[0]
        b2.textContent = questions[step].choices[1]
        b3.textContent = questions[step].choices[2]
        b4.textContent = questions[step].choices[3]
      }
      if(step === questions.length) {
        clearInterval (timer);
        score = time;
        alert('Your Score is ' + score);
        // for (i=0; i < 9; i++ ) {        
          if(!Name + [i++]){
        //     console.log("contains Data")
        Name = prompt('Enter Your Name'); //localStorage.setItem("quentinTarantino", JSON.stringify(movies));
        localStorage.setItem("Name", JSON.stringify(Name)); //var localStorage[names] = new Array();
        localStorage.setItem("score", JSON.stringify(score)); //localStorage.names[0] = prompt("New member name?");
          // } else {
          //   Name = prompt('Enter Your Name');
          //   localStorage.setItem("Name", Name);
          // }
      }
      }
    }) 
  }
  
  function startTimer() {
    time = 75;
    timer = setInterval(function() {
      time--;
      d2.textContent=(time)
      if (time !== 0) {
      }  
      if (time === 0){
        clearInterval (timer);
        alert('Time is up!'); 
      }
      else {}
    }, 1000);
   }
  
    




//   b1.addEventListener('click', function () {
//     if (questions[0].choices[0] === questions[step].answer) {//cannot read property choices 
//       console.log(step)
//       console.log("correct")
//     } else {
//       console.log(step)
//       console.log("time-5")
//     }
//   d1.innerHTML = questions[step].title;
//   b1.innerHTML = questions[step].choices[0]
//   b2.innerHTML = questions[step].choices[1]
//   b3.innerHTML = questions[step].choices[2]
//   b4.innerHTML = questions[step].choices[3]
//   step++;
// })

// b2.addEventListener('click', function () {
//   if (questions[step].choices[1] === questions[step].answer) {//cannot read property choices
//     console.log(step)
//     console.log("correct")
//   } else {
//     console.log(step)
//     console.log("time-5")
//   }
//   d1.innerHTML = questions[step].title;
//   b1.innerHTML = questions[step].choices[0]
//   b2.innerHTML = questions[step].choices[1]
//   b3.innerHTML = questions[step].choices[2]
//   b4.innerHTML = questions[step].choices[3]
//   step++;
// })

// b3.addEventListener('click', function () {
//   if (questions[step].choices[2] === questions[step].answer) {//cannot read property choices
//     console.log(step)
//     console.log("correct")
//   } else {
//     console.log(step)
//     console.log("time-5")
//   }
//   d1.innerHTML = questions[step].title;
//   b1.innerHTML = questions[step].choices[0]
//   b2.innerHTML = questions[step].choices[1]
//   b3.innerHTML = questions[step].choices[2]
//   b4.innerHTML = questions[step].choices[3]
//   step++;
// })

// b4.addEventListener('click', function () {
  
//   if (questions[step].choices[3] === questions[step].answer) {//cannot read property choices
//     console.log(step)
//     console.log("correct")
//   } 
//     console.log(step)
//     console.log("time-5")
//   d1.innerHTML = questions[step].title;
//   b1.innerHTML = questions[step].choices[0]
//   b2.innerHTML = questions[step].choices[1]
//   b3.innerHTML = questions[step].choices[2]
//   b4.innerHTML = questions[step].choices[3]
//   step++;
// })





 //function endQuiz() {
   //if (questions[step] === 4) {
     //clearInterval (timer);
   //}
   
//}



//d1.innerHTML = questions[1].title;
//d2.innerHTML = questions[1].choices;

//console.log(i)
//console.log(questions[0].choices)
//console.log(questions[step].title)

//var lastQuestion = questions.[step] - 1;
//let runningQuestion = 0;
