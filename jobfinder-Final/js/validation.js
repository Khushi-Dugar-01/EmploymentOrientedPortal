function formValidation()
{
    var i = 0;
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("emaili");
    var passid = document.getElementById("upassword");
    var ugender = document.getElementById("ggender");
    var userType = document.getElementById("Utype");

if(firstName(fname)==false)
{    return false;  }
if(lastName(lname)==false)
{   return false;   }
if(ValidateGender(ugender)==false)
{   return false;   }
if(ValidateEmail(email)==false)
{   return false;   }
if(passid_validation(passid,7,14)==false)
{   return false;   }
if(ValidateUser(userType)==false)
{   return false;   }






}



function firstName(uname)
{ 

    if (uname.value.length < 2 || uname.value.length > 20) {
        alert("Name length should be more than 2 and less than 21");
        uname.focus();
        return false;
      }
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('It must have alphabet characters only');
uname.focus();
return false;
}
}



function lastName(uname)
{ 

    if (uname.value.length < 2 || uname.value.length > 20) {
        alert("Name length should be more than 2 and less than 21");
        uname.focus();
        return false;
      }
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('It must have alphabet characters only');
uname.focus();
return false;
}
}




function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}










function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}


function ValidateGender(ugender)
{
    var gen = ugender.value.length;

    if (gen >= 1) 
    {
        return true;
    }
    else
    {
        alert ("please select a gender");
        return false;
    }
}

function ValidateUser(userType)
{
    var c = userType.value.length;
    if (c > 4) 
    {   
        return true;
    }
    else
    {
        alert ("please select your user type");
        return false;
    }
}
