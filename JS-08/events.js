var elem=document.querySelectorAll(".container");
var title=document.querySelector("#title");
var text=document.querySelector("#text");
let msg='';
function changeColor()
{
document.body.style.backgroundColor="orange";
elem[0].style.backgroundColor="pink";
}
function restoreColor()
{
    document.body.style.backgroundColor="aqua";
    elem[0].style.backgroundColor="";
}
function Mymsg()
{
    msg=text.value;
    title.innerHTML=msg;
}