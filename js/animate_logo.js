  console.log('loaded');

  var edu = $("#edu");
  var pandl =  $("#pandl");
  edu.hide();
  pandl.hide();
  
$(document).ready(function() {

  $("#edu").fadeIn(2000);
    setTimeout(function(){
      $("#pandl").fadeIn(1700);
    }, 1200);
    
    setTimeout(function(){
      edu.fadeOut(2500)
      pandl.fadeOut(1000)
    },3500);
    
});
