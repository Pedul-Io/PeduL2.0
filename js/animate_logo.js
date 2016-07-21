var edu = $("#edu");
var pandl =  $("#pandl");
var pedul_logo = $("#pedul_logo_container");
var intro_text = $(".intro-text");
var pedul_head = $("a.page-scroll.log");
pedul_head.hide();
intro_text.hide();
edu.hide();
pandl.hide();

$(document).ready(function() {

  edu.fadeIn(1500);
  setTimeout(function(){
    pandl.fadeIn(1000);
  }, 1200);
  
  setTimeout(function(){
    pandl.fadeOut(1000);
    edu.fadeOut(2500);
  },3500);

  setTimeout(function(){
    pedul_logo.fadeOut(700);
  }, 5500);
    
  setTimeout(function(){
    pedul_head.fadeIn(1000);
  }, 6500);

  setTimeout(function(){
    intro_text.fadeIn(1000);
  }, 6000);

});
