


$(document).ready(function(){
///sticky navbar///

$(window).scroll(function () { 
    if($(window).scrollTop()){
        $("#nav").addClass("sticky");

    }
    else{
        $("#nav").removeClass("sticky")
    }
    
});

  
    $(window).scroll(function(){
        if($(this).scrollTop()>=300){
            $("#return-top").fadeIn(200);
        }
        else{
            $("#return-top").fadeOut(200);
        }
    });
    $("#return-top").click(function(){
        $("body,html").animate({
            scrollTop : 0

        },100);
    });



});




$(document).ready(function(){
    // typing text animation script
 



});






// form validation
var alphaExp = /^[a-zA-Z\s]+$/;
var numExp = /^[0-9]*$/;
// var alphaNumExp = /^[a-zA-Z0-9]+$/;
// var alphaNumSpaceExp = /^[a-zA-Z0-9\s]+$/;
var alphaAddExp = /^[a-zA-Z0-9\s,.'-]{3,}$/;
var emailExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

function formvalid(){

    var x=document.getElementById("text").value;
    if(x==""){
        document.getElementById("texterror").innerHTML="plz select the user name";
  
        document.getElementById("text").focus;
        return false;
    }
    else if(!x.match(alphaExp)){
        document.getElementById("texterror").innerHTML="plz shoud be chracter";
        document.getElementById("text").focus;
        return false;
    }
    else{
        document.getElementById("texterror").innerHTML="";
    }

    var x=document.getElementById("number").value;
    if(x == ""){
        document.getElementById("numerror").innerHTML="plz select the number";
        document.getElementById("number").focus;
        return false;
    }
    else if(!x.match(numExp)){
        document.getElementById("numerror").innerHTML="plz shoud be number";
        document.getElementById("number").focus;
        return false;
    }
    else{
        document.getElementById("numerror").innerHTML="";
    }

    var x=document.getElementById("email").value;
    if(x == ""){
        document.getElementById("emailrror").innerHTML="plz select the email";
        document.getElementById("email").focus;
        return false;
    }
    else if(!x.match(emailExp)){
        document.getElementById("emailrror").innerHTML="plz shoud be email";
        document.getElementById("email").focus;
        return false;
    }
    else{
        document.getElementById("emailrror").innerHTML="";
    }

    var x=document.getElementById("textarea").value;
    if(x == ""){
        document.getElementById("textrror").innerHTML="plx select the message";
        return false
        

    }
    else{
        document.getElementById("textarea").innerHTML="";
    }
    
}

var typed = new Typed(".typing", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing1", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});