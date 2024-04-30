//eval(variablename)


function displaynumber(x)
{
  document.getElementById("result").value+=x;

}


function solve()
{
  var str=document.getElementById("result").value;
  var exp=eval(str);
  result.value=exp;
  
}


function clrdata()
{
  document.getElementById("result").value="";
  
}