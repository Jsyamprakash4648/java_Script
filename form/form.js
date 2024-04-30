function takinginputs()
{
    var firstname=document.getElementById("fisrtname").value;
    document.getElementById("FirstNAME").innerHTML=firstname;


    var lastname=document.getElementById("lastname").value;
    document.getElementById("LASTNAME").innerHTML=lastname;


    var mailid=document.getElementById("mail").value;
    document.getElementById("EMAILID").innerHTML=mailid;

    var phonenumber=document.getElementById("phonenumber").value;
    document.getElementById("Phone_Number").innerHTML=phonenumber;


    

    var gender=document.getElementById("gender").value;
    document.getElementById("GENDER").innerHTML=gender;

    var textarea=document.getElementById("textarea").value;
    document.getElementById("CURRENT_ADDRESS").innerHTML=textarea; 
    
    var dob=document.getElementById("dob").value;
    document.getElementById("DOb").innerHTML=dob;

    var time=document.getElementById("time").value;
    document.getElementById("Time").innerHTML=time;
    
    


    var selectElements=document.getElementById("languages");
    document.getElementById("lang").innerHTML=languages[0];
    document.getElementById("lang").innerHTML=languages[1];
    


    var select_feilds=document.getElementById("select_feilds").value;
    document.getElementById("interest").innerHTML=select_feilds;

    var photo=document.getElementById("photo").value;
    document.getElementById("PIC").innerHTML=photo;

    document.getElementById("table1").style.display="none";
    
    document.getElementById("table2").style.display="inline";





   


    
}