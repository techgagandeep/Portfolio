//const guess=document.getElementById('.guess');
const guess1=document.getElementById('guess');
var findnumber = document.querySelector('.findnumber');
var again1 = document.querySelector('.again1');
var var1,var2;
guess1.focus();
findnumber.addEventListener('click', find);   
again1.addEventListener('click', myfuction2);
function find()
{
    document.getElementById("findnumber").disabled = true;
    var1=setInterval(myfuction1, 10000);
    fun1();
} 
function fun1()  
{  
    var life=document.getElementById("lifeline");
    life2=Number(life.querySelector("div span").innerHTML);
   // console.log(life2);
    if(life2>0)
    {
var win1 = window.open();  
randomnumber=Math.floor(Math.random() * (10*100000 - 10*1000)) + 10*1000;
win1.document.write(" <h2> Your number is "+randomnumber+"</h2>");  
setTimeout(function(){win1.close()}, 1000);  
}
} 
function stop() {  
    clearInterval(var1);  
    clearInterval(var2);  
    }  
function myfuction2()
{
    guess1.focus(); 
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".thnx").style.backgroundColor = "black";
    document.querySelector(".answer").innerHTML='?';    
    var score=document.getElementById("score");
    Number(score.querySelector("div span").innerHTML=0);  
    document.getElementById("thnx").innerHTML="Thanks For Coming"; 
    k=document.querySelector('.guess').value='';
    Number(lifeline.querySelector("div span").innerHTML=3);
    stop();
    guess1.focus();
    document.getElementById("findnumber").disabled = false;
}
function myfuction1()
        {
            const number=document.querySelector('.guess').value;

            var score=document.getElementById("score");
            k=Number(score.querySelector("div span").innerHTML);

            var lifeline=document.getElementById("lifeline");
            l1=Number(lifeline.querySelector("div span").innerHTML);

            var highscore1=document.getElementById("highscore1");
            k1=Number(highscore1.querySelector("div span").innerHTML);
            
            if(number==randomnumber)
            {
                k=k+1;
                Number(lifeline.querySelector("div span").innerHTML=l1);
                Number(score.querySelector("div span").innerHTML=k);
                document.body.style.backgroundColor = "green";
                document.querySelector(".thnx").style.backgroundColor = "green";
                document.getElementById("thnx").innerHTML="Correct Number"; 
                document.getElementById("answer").innerHTML=randomnumber;
                if(k1<k)
                { 
                document.getElementById("highscore").innerHTML=k;             
                }
                randomnumber=Math.floor(Math.random() * (10*100000 - 10*1000)) + 10*1000;
                k=document.querySelector('.guess').value='';
                guess1.focus(); 
                setTimeout(fun1, 2000);
                //fun1();
            }
            else
            {

                if(l1==0)
                {
                    clearInterval(var1);
                    document.getElementById("thnx").innerHTML="Your final score is  "+k;
                    var2=setInterval(changecolor,1000);
					Number(lifeline.querySelector("div span").innerHTML=l1); 
                }
                else
                {
					l1=l1-1; 
                    Number(lifeline.querySelector("div span").innerHTML=l1);  
                    document.body.style.backgroundColor = "red";
                    document.querySelector(".thnx").style.backgroundColor = "red";
                    document.getElementById("answer").innerHTML=randomnumber;
                    document.getElementById("thnx").innerHTML="Wrong answer";
                    document.querySelector("body").style.backgroundColor = "black";
                    k=document.querySelector('.guess').value='';
                    guess1.focus(); 
                    setTimeout(fun1, 2000);
                }
            }
        }
function changecolor()
{
    var var3 = document.body;  
    var3=var3.style.backgroundColor = var3.style.backgroundColor == "lightblue" ? "lightgreen" : "lightblue";  
}