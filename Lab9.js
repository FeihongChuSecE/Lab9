$(document).ready(function() {
  $("#btn1").click(function() {
    $("#img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10, #img11, #img12").hide();
    $("#img1").css('margin-right', '30px');
    $("#img1, #img2").show(2000).css("width", "500px");
  });

  $("#btn2").click(function() {
    $("#img1, #img2, #img5, #img6, #img7, #img8, #img9, #img10, #img11, #img12").hide();
    $("#img3, #img4").show(1000);
    $("#img3").css('margin-right', '30px');
    $("#img3, #img4").css('position', 'relative');
    $("#img3, #img4").animate( {
      left: "+=50",
      opacity:"0.3"
    }, 2000);
  });

  $("#btn3").click(function() {
    $("#img1, #img2, #img3, #img4, #img7, #img8, #img9, #img10, #img11, #img12").hide();
    $("#img5").css('margin-right', '30px');
    $("#img5, #img6").fadeIn(2000);
    $("#img5, #img6").fadeOut(5000);
  });

  $("#btn4").click(function() {
    $("#img1, #img2, #img3, #img4, #img5, #img6, #img9, #img10, #img11, #img12").hide();
    $("#img7").css('margin-right', '30px');
    $("#img7, #img8").fadeToggle(2000);
  });

  $("#btn5").click(function() {
    $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img11, #img12").hide();
    $("#img9").css('margin-right', '30px');
    $("#img9, #img10").slideDown(1000);
  });

  $("#btn6").click(function() {
    $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10").hide();
    $("#img11").css('margin-right', '30px');
    $("#img11, #img12").slideToggle(1000);
  });
});