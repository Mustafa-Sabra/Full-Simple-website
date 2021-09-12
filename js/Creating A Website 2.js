$(function () {
  $(".header").height($(window).height());

  $(".header-info").css({
    top: ($(window).height() - $(".header-info").height()) / 2,
  });

  $(window).resize(function () {
    $(".header").height($(window).height());

    $(".header-info").css({
      top: ($(window).height() - $(".header-info").height()) / 2,
    });
  });

  $(".header-info #hire-us").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".contact").offset().top,
      },
      2000
    );
  });

  $(".header-info #our-works").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".our-works").offset().top,
      },
      1500
    );
  });

  $(".arrow").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".categories").offset().top,
      },
      1500
    );
  });

  $(".show-more").click(function () {
    if ($(this).is(":contains('show more')")) {
      $(".hidden").fadeIn(1000);
      $(this).text("show less");
    } else {
      $(".hidden").fadeOut(900);
      $(this).text("show more");
    }
  });

  function checker() {
    if ($(".opinion:first").hasClass("active")) {
      $(".fa-chevron-left").fadeOut();
    } else {
      $(".fa-chevron-left").fadeIn();
    }
    if ($(".opinion:last").hasClass("active")) {
      $(".fa-chevron-right").fadeOut();
    } else {
      $(".fa-chevron-right").fadeIn();
    }
  }
  checker();

  $(".chevrons i").click(function () {
    if ($(this).hasClass("fa-chevron-right")) {
      $(".opinions-box .active").fadeOut(1000, function () {
        $(this)
          .removeClass("active")
          .next(".opinion")
          .addClass("active")
          .fadeIn(1000);
        checker();
      });
    }

    if ($(this).hasClass("fa-chevron-left")) {
      $(".opinions-box .active").fadeOut(1000, function () {
        $(this)
          .removeClass("active")
          .prev(".opinion")
          .addClass("active")
          .fadeIn(1000);
        checker();
      });
    }
  });
});
