function Question(q,a){
    this.ques =q;
    this.answer =a;
};

function Quiz(){
    this.quesArray = [];
    this.quesToBeAsked;

    this.randQues = function(){
        return Math.floor((Math.random() * 5) + 1);
    };
    this.ask = function(num){
        this.quesToBeAsked = (this.quesArray[num -1]).ques;
        return this.quesToBeAsked;
    };
    this.checkAnswer = function(answer){
        if (this.quesToBeAsked.a === answer)
            return true;
        else 
            return false;
    };
    this.add = function(question){
        this.quesArray.push(question);
    }

const quiz = new Quiz();
let q1 = new Question ("What does HTML stand for?", "Hyper Text Markup Language");
let q2 = new Question ("How can you make HTML ordered list?", "<ol>");
let q3 = new Question ("What does CSS stand for?", "Cascading Style Sheets");
let q4 = new Question ("Which HTML attribute is used to define inline styles?", "Style");
let q5 = new Question ("Inside which HTML element do we put the JavaScript?", "<script>");

quiz.add(q1);
quiz.add(q2);
quiz.add(q3);
quiz.add(q4);
quiz.add(q5);

    let btnAns = document.querySelector("button");
    let next = document.querySelector("button");
    let start = document.querySelector("button");
    btn.addEventListener('click',  function(){
        
        let useranswer = document.querySelector("input").value;
        let lab = document.createElement("label");
        if (checkAnswer(useranswer))
        {
            let text = document.createTextNode("Correct");
        }
        else
        {
            let text = document.createTextNode("Wrong");
          
        }
        label.appendChild(text);
    });
    next.addEventListener('click',  function(){
        let quesID = "" + quiz.randQues();
        document.getElementById().style.display = "visible";
       
    });
    start.addEventListener('click',  function(){
        let quesID =  "" + quiz.randQues();
        document.getElementById("myDIV").style.display = "visible";
       
    });

}


