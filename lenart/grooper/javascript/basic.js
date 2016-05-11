 function narKrog(){

   var sirina=$(window).width();
   var polsirina=sirina/2.5;
   var krog = document.getElementById("circle");
   krog.style.borderRadius= "50%";
   krog.style.width= polsirina+"px";
   krog.style.backgroundColor= "orange";
   krog.style.marginLeft="35%";
   krog.style.marginTop="3%"
   krog.style.height=polsirina+"px";
   krog.style.position= "relative";
   krog.style.border = "thick solid #0000FF";
   return krog;
}

$(document).ready(function(){
    $("#log").click(function(){
      $("#page").load("login.html");
    });
});

$(document).ready(function(){
    $("#reg").click(function(){
      $("#page").load("register.html");
    });
});
