var title = title;
var choices = choices;
var answer = answer;
​
var d1 = document.querySelector("#div1")
var d2 = document.querySelector("#div2")
var d3 = document.querySelector("#div3")
​
var step = 2 
​
d1.innerHTML = ("<h1>Are you ready motherfucker?</h1>")
​
d2.innerHTML = ("<p>This quiz will test your aptitude and abily to survive in the hashest of conditions</p>")
​
d3.innerHTML = ('<button class="start">Start!</button>') // this can contain one button or many buttons 
​
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
    for(var i =0; i < questions.length; i++) {
      console.log(i)
​
    }
​
    // console.log(questions[0].title)
​
​
    d3.addEventListener("click", function() {
      // retrieves a "step" variable = to the q number we're on, 
      step = 
      // changes innerHTML to the next question 
      stepQ(step)
      // updates the step var 
      step = (step + 1)
  });
  
  function stepQ (step) {
      d1.innerHTML = (object[step[0]])
      d2.innerHTML = (object[step[1]])
  
  }
​





