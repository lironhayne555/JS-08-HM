function Sum()
{
    var num1=parseInt(document.querySelector("#num1").value);
    var num2=parseInt(document.querySelector("#num2").value);
    console.log(num1+ "number one");
    console.log(num2+ "number two");
    var dispElem=document.querySelectorAll("#result");
    var sum=num1+num2;
    dispElem[0].innerHTML="<label>"+"the sum is "+sum+"</label>";
    document.querySelector("#num1").value=" ";
    document.querySelector("#num2").value=" "
}