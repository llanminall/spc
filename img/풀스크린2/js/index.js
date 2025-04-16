$(function () {
  let con1 = $("#con1").offset().top;
  let con2 = $("#con2").offset().top;
  let con3 = $("#con3").offset().top;
  let con4 = $("#con4").offset().top;

  console.log(con1, con2, con3, con4);

  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();
    console.log(sc);

    if (sc >= con2) {
      $("#con1 #header").addClass("on");
    }
    if (sc >= con2 && sc < con3) {
      $("#wrap #con2").addClass("on");
    }
  });
});
