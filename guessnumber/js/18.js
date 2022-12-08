var secretNumber=Math.trunc(Math.random()*20)+1;
const guess=document.getElementById('.guess');
const guess1=document.getElementById('guess');
var inputnumber = document.querySelector('.inputnumber');
var again1 = document.querySelector('.again1');
guess1.focus();
inputnumber.addEventListener('click', myfuction1);
again1.addEventListener('click', myfuction2);
function myfuction2()
{
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".thnx").style.backgroundColor = "black";
    document.querySelector(".answer").innerHTML='?';    
    var score=document.getElementById("score");
    Number(score.querySelector("div span").innerHTML=20);  
    document.getElementById("thnx").innerHTML="Thanks For Coming"; 
    k=document.querySelector('.guess').value='';
    guess1.focus();
}
function myfuction1()
        {
            const number=Number(document.querySelector('.guess').value);
            console.log(secretNumber);
            var score=document.getElementById("score");
            var highscore1=document.getElementById("highscore1");
            k=Number(score.querySelector("div span").innerHTML);
            k1=Number(highscore1.querySelector("div span").innerHTML);
            if(number==secretNumber)
            {
                document.body.style.backgroundColor = "green";
                document.querySelector(".thnx").style.backgroundColor = "green";
                document.getElementById("thnx").innerHTML="You win"; 
                document.getElementById("answer").innerHTML=secretNumber;
                if(k1<k)
                { 
                document.getElementById("highscore").innerHTML=k;             
                }
            }
            else
            {
                if(number<secretNumber)
                {
                    k=k-1;
                    Number(score.querySelector("div span").innerHTML=k);
                   document.querySelector(".thnx").style.backgroundColor = "red";
                    document.getElementById("thnx").innerHTML="Number is greater than your number";
                    guess1.focus();
                }
                else
                {
                    k=k-1;
                    Number(score.querySelector("div span").innerHTML=k);
                    document.querySelector(".thnx").style.backgroundColor = "red";
                    document.getElementById("thnx").innerHTML="Number is smaller then your number";
                    guess1.focus();
                }
            }
        }
