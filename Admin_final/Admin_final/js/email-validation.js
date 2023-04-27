function ValidateEmail()
{
    var inputText = document.getElementById("resetEmail").value;
    const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(inputText===""){
        alert("Email address is mandatory");
        document.getElementById("resetEmail").focus();
        return false;
    }
    else if(mailformat.test(inputText))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.getElementById("resetEmail").focus();
        return false;
    }
}