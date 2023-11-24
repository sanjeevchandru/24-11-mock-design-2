
function email(){
    var mail=document.getElementById("m-s").value;
    let y=mail.length-4;
    let x=mail.slice(y,mail.length);
    
    let z=mail.length-10;
    let t=mail.slice(z,z+1);
    if(mail==""){
        alert("please enter  your email");
        return true;
    }
    else if((x==".com")&&(t=="@")){
        alert("your E-mail is valid");
    }
    else{
        alert("Please Enter a valid Email");
    }
    return false;
}
