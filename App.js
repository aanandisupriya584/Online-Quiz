const timeH =  document.querySelector('h4');
let timeSecond = 300;
displayTime(timeSecond)
const countDown = setInterval(()=> {
timeSecond--;
displayTime(timeSecond);
if(timeSecond<=0 || timeSecond<1){
clearInterval(countDown);
}
},1000)
function displayTime(second){
    const min = Math.floor(second/60);
    const sec = Math.floor(second%60);
    timeH.innerHTML=` ${min<10?'0':''}${min}:${sec<10?'0':''}${sec}`
}
function endTime(){
timeH.innerHTML = 'Time Out'

}


const quizDB = [
    {
       question : "Q 1 - What is the correct HTML element for inserting a line break?",
        a:"<br>",
        b:"<break>",
        c:"<lbr>",
        d:"<bre>",
        ans:"ans1"
    },
   {
    question:"Q 2 - Which of the following is a component of CSS style rule?",
    a:"selector",
    b:"Property",
    c:"Value",
    d:"All",
    ans:"ans4"
    },
    {
    question: "Q 3 -Which HTML tag is used to define an internal style sheet?",
    a:"<css>",
    b:"<script>",
    c:"<style>",
    d:"none",
    ans:"ans3",
    },
    {
    question:"Q 4 - Which of the following property is used to create a small-caps effect?",
    a:"font-family",
    b:"font-style",
    c:"font-variant",
    d:"font-weight",
    ans:"ans3",
    }
    ];
    const question = document.querySelector('.question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');
    const submit = document.querySelector('#submit');

    const answers = document.querySelectorAll('.answer');
    const showScore = document.querySelector('#showScore');

      let questionCount = 0;
      let score = 0;
    
    const loadQuestion = () => {

        const questionList = quizDB[questionCount];

        question.innerText = questionList.question;

        option1.innerText = questionList.a;
        option2.innerText = questionList.b;
        option3.innerText = questionList.c;
        option4.innerText = questionList.d;
    }

    loadQuestion(); 

    const getCheckAnswer = () =>{
        let answer;

        answers.forEach((curAnsElem) => {
            if(curAnsElem.checked){
                answer = curAnsElem.id;
            }
        });
        return answer;
    };

    submit.addEventListener('click',() => { 
        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);
    
    
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };
         questionCount++;
         
  
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length} </h3>

            <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});

  
     

    
       
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
