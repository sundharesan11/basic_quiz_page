const quizData=[
    {
        question:"Which of these is not a early computer?",
        a:"ENIAC",
        b:"UNIVAC",
        c:"NASA",
        d:"SAGE",
        correct:"c"
    },
    {
        question:"Which of these is a file format for digital images?",
        a:"CIA",
        b:"JPG",
        c:"ICBM",
        d:"IBM",
        correct:"b"
    },
    {
        question:"How many bits make a byte?",
        a:"16 bits",
        b:"8 bits",
        c:"4 bits",
        d:"12 bits",
        correct:"b"
    },
    {
        question:"The first mechanical computer designed by Charles Babbage was called?",
        a:"Abacus",
        b:"Calculator",
        c:"Analytical Engine",
        d:"Processor",
        correct:"c"
    },
    {
        question:"who is inventor of www?",
        a:"Bill Gates",
        b:"Tim Berners-Lee",
        c:"Timothy Bill",
        d:"Ray Tomlinson",
        correct:"b"
    }
];
const Question=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitbtn=document.getElementById("submit")
const answerEl=document.querySelectorAll("input[name='answer']");
const quizResult=document.getElementById("quizRes")
let score=0;

let currentQuiz=0;
quiz();
function quiz()
{
    deselect();
    const currentQuizData=quizData[currentQuiz];

            Question.innerText=currentQuizData.question;
            a_text.innerText=currentQuizData.a;
            b_text.innerText=currentQuizData.b;
            c_text.innerText=currentQuizData.c;
            d_text.innerText=currentQuizData.d;
}

function selectOption()
{
    let answer=undefined;
    answerEl.forEach((answerE)=>
    {
        if(answerE.checked)
        {
            answer = answerE.id;
        }
    });
    return answer;
}

function deselect()
{
    answerEl.forEach((answerE)=>
    {
        answerE.checked=false;
    })
}

submitbtn.addEventListener('click',()=>
{
    const answers=selectOption();
    if(answers)
    {
       
        if(answers===quizData[currentQuiz].correct)
        {
            score++;
        }
            currentQuiz++;
        if(currentQuiz<quizData.length)
        {
            quiz();
        }
        else{
            quizResult.innerHTML=`<h2>You have completed the Quiz and you scored ${score}/${quizData.length} !</h2>
            <button onclick ="location.reload()">Reload Quiz</button>`;
        }
    }
    else{
        alert("Please select answer to proceed !")
    }
})