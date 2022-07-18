var list=[];
function addItem()
{
    var newItem=document.querySelector("#item").value;
list.push(newItem);
console.log(newItem);
newItem=" ";
}

function addItemVIP()
{
    var vipItem=document.querySelector("#itemVIP").value;
list.unshift(vipItem);
console.log(vipItem);
vipItem=" ";
}
function dispList()
{
    var dispElem=document.querySelectorAll(".disp");
    dispElem[0].innerHTML="<ul>";
    for(let item of list)
        {
dispElem[0].innerHTML+="<li>"+item+"</li>";
        }
        dispElem[0].innerHTML+="</ul>";
}