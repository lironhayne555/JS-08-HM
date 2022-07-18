let array=[];
for(var i=0;i<1000;i++)
{
    if(i%2==0 && i%3==0)
{
 if(i!==66 && i!==666)   
 {
    array.push(i);
 }
    
}
}
for( var x=0;x<array.length;x++)
{
    console.log(array[x]);
}