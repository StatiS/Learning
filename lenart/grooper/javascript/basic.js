
<script language="JavaScript">
 function narKrog(){

  var sirina=$(window).width();
  var polsirina=sirina/2.5;
  document.getElementById("circle").setAttribute("style","height:" + polsirina.toString() + "px");
  var krog = document.getElementById("circle");
  krog.style.borderRadius= "50%";
  krog.style.width= "40%";
  krog.style.backgroundColor= "orange";
  krog.style.marginLeft="35%";
  krog.style.marginTop="3%"

}

</script>
