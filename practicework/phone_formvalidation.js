function validation()
{
    var username=document.getElementById("username");
    var passsowrd=document.getElementById("password");
   // document.write(username)

    if(username.value.trim()=="" ||passsowrd.value.trim()=="")
    {
       // alert("error in user name");
        username.style.border="solid 2px blue";
        document.getElementById("lbl").style.display="block";
        return false;
        
    }

    else if (passsowrd.value.trim()=="" && passsowrd.value.length<5)
    {
        alert("error in password");
        username.style.border="solid 2px blue";
        document.getElementById("rbl").style.display="block";
        return false;

        
    }
    else
    {
        return true;
    }

}


function valid()
{

    var num=document.getElementById("phone").value;

    var exp=/[7-9]\d{9}/

    if(exp.test(num))
    {
        alert("valid number");
        return true 
    }
    else{
        alert("invalid number...");
        return false;
    }

}