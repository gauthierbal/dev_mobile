$(document).ready(function(){
  var compt = 0;
  $("#menu").click(function(){
    compt++;
    if (compt%2 == 0) {
      $(".nav").slideUp();
      $("#menu").css("transform", "rotate(0deg)");
    }else{
      $(".nav").slideDown();
      $("#menu").css("transform", "rotate(90deg)");
    }

  });
});
