var mySpan=document.getElementById('myNum');
function GetDown()
{
    var btn=document.getElementById('myBtnDown');
    btn.style.background=RandColor();
    mySpan.style.color=RandColor();
    var n=parseInt(document.getElementById('myNum').innerHTML);
    n=n-1;
   if ( n===-6)
   {
    mySpan.innerHTML=0;
   }
   else{
    mySpan.innerHTML=n;
   }

}

function GetUp()
{
    var btn=document.getElementById('myBtnUp');
    btn.style.background=RandColor();
    mySpan.style.color=RandColor();
    var n=parseInt(document.getElementById('myNum').innerHTML);
n=n+1;
if ( n===6)
{
 mySpan.innerHTML=0;
}
else{
 mySpan.innerHTML=n;
}
}
function RandColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    var bgColor="rgb("+r+","+g+","+b+")";
return bgColor;
}