var title=document.getElementById('#title');
let colors ={
    red:"rgb(255,0,0)",
    green:"rgb(0,255,0)",
    blue:"rgb(0,0,255)",



    colorMyTitle :function()
    {
        title.style.background=colors.green;
    }
}
let calculator={
    plus: function(num1,num2)
        {
        return num1+num2;
        },
    multipaly:function(num1,num2)
        {
        return num1*num2;
        },
    sqr:function(num1)
        {
        return num1*num2;
        },
    
}