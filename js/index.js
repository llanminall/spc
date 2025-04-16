$(function () {
  let header = $("#header").offset().top;
  let visual = $("#visual").offset().top;
  let con01 = $(".con01").offset().top;
  let con02 = $(".con02").offset().top;
  let con03 = $(".con03").offset().top;
  let con04 = $(".con04").offset().top;
  let footer = $("footer").offset().top;

  console.log(header, visual, con01, con02, con03, con04, footer);

  $("#visual").addClass("on");
  $(".con01").addClass("on");

  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();
    console.log(sc);
    if (sc >= con01 && sc < con02) {
      $(".con02 .wrap_right").addClass("on");
    }
    if (sc >= con02 && sc < con03) {
      $(".con03").addClass("on");
      $(".con03 .wrap_left03").addClass("on");
    }

    if (sc >= con03 && sc < con04) {
      $(".con04").addClass("on");
    }
  });

  //모바일 해더부분
  $("header .bar").on("click", function () {
    $("header .menu02").toggleClass("on");
  });

  $("header .menu02 li").on("click", function () {
    let p = $(this).index();
    let isOn = $(this).find("i").hasClass("in");
    $("i").removeClass("in");
    $("p").removeClass("in");
    $(".gnb_s_bars").hide();
    if (!isOn) {
      $(this).find("p").addClass("in");
      $(this).find("i").addClass("in");
      $(this).find(".gnb_s_bars").show();
    }
  });

  // 서브메뉴나오는부분
  $(".gnb li").on("mouseenter", function () {
    $(".gnb_s").show();
    $(".bg").show();
  });
  $(".gnb li").on("mouseleave", function () {
    $(".gnb_s").hide();
    $(".bg").hide();
  });

  // 서브메뉴 백그라운드
  $(".gnb_s li").on("mouseenter", function () {
    $(".gnb_s li").removeClass("active");
    $(this).addClass("active");
    $(".gnb_s li a").css({ color: "#ccc" });
    $(this).children("a").css({ color: "#222" });
  });

  // lang 서브메뉴
  $(".lang").on("mouseenter", function () {
    $(".lang ul").show();
  });
  $(".lang").on("mouseleave", function () {
    $(".lang ul").hide();
  });

  // lang 서브메뉴글씨컬러
  $(".lang li").on("mouseenter", function () {
    $(this).addClass("on");
  });

  $(".lang li").on("mouseleave", function () {
    $(this).removeClass("on");
  });

  // 비주얼 움직임
  let i = 0;
  setInterval(function () {
    if (i == 3) {
      i = 0;
    } else {
      i++;
    }
    $(".vi_bg li").fadeOut();
    $(".vi_bg li").eq(i).fadeIn();
  }, 2000);
  $(".next").on("clilk", function () {
    let i = $(this).index();
    $(".vi_bg li").eq(i).show();
  });

  //con01 이미지모션
  $(".con01 li").on("mouseenter", function () {
    $(this).find("img").addClass("active01");
  });
  $(".con01 li").on("mouseleave", function () {
    $(this).find("img").removeClass("active01");
  });

  //con02 모션

  let j = 1;
  $(".nex").on("click", function () {
    if (j == 3) {
      j = 1;
    } else {
      j++;
    }
    $(".now").text("0" + j);

    $(".imag01, .imag02, .imag03").each(function () {
      $(this).find("li").fadeOut();
      $(this)
        .find("li")
        .eq(j - 1)
        .fadeIn();
    });
  });
  $(".prv").on("click", function () {
    if (j == 1) {
      j = 3;
    } else {
      j--;
    }

    $(".now").text("0" + j);
    $(".imag01, .imag02, .imag03").each(function () {
      $(this).find("li").fadeOut();
      $(this)
        .find("li")
        .eq(j - 1)
        .fadeIn();
    });
  });

  //con02 right 이미지모션
  $(".con02 li").on("mouseenter", function () {
    $(this).find(".bg01").addClass("active01");
  });
  $(".con02 li").on("mouseleave", function () {
    $(this).find(".bg01").removeClass("active01");
  });

  //con03 모션
  let s = 1;
  $(".nex03").on("click", function () {
    if (s == 3) {
      s = 1;
    } else {
      s++;
    }
    $(".now03").text("0" + s);

    $(".imag04, .imag05, .imag06").each(function () {
      $(this).find("li").fadeOut();
      $(this)
        .find("li")
        .eq(s - 1)
        .fadeIn();
    });
  });
  $(".prv03").on("click", function () {
    if (s == 1) {
      s = 3;
    } else {
      s--;
    }

    $(".now03").text("0" + s);
    $(".imag04, .imag05, .imag06").each(function () {
      $(this).find("li").fadeOut();
      $(this)
        .find("li")
        .eq(s - 1)
        .fadeIn();
    });
  });

  //con03  left 이미지모션
  $(".con03 li").on("mouseenter", function () {
    $(this).find(".bg01").addClass("active01");
  });
  $(".con03 li").on("mouseleave", function () {
    $(this).find(".bg01").removeClass("active01");
  });

  // con04 이미지모션
  $(".con04 li").on("mouseenter", function () {
    $(this).find("img").addClass("active01");
  });
  $(".con04 li").on("mouseleave", function () {
    $(this).find("img").removeClass("active01");
  });

  // familiysite 모션
  $(".family").on("click", function () {
    $(this).find(".minus01").toggleClass("on");
    $(".box").toggle();
  });
});
