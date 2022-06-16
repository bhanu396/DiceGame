function randNum(){
  var randomNumber1 =Math.random();
  randomNumber1=6*randomNumber1;
  randomNumber1=Math.floor(randomNumber1)+1;
  return randomNumber1;
}
var a=randNum();
var b=randNum();
document.querySelector(".img1").setAttribute("src", "images/dice"+a+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+b+".png");
if(a>b)
document.querySelector("h1").innerHTML="🚩Plyer 1 wins!";
if(a<b)
document.querySelector("h1").innerHTML="Plyer 2 wins!🚩";
if(a===b)
document.querySelector("h1").innerHTML="Draw!";
