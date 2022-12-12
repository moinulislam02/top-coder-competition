$(document).ready(function () {
  $(".characters").owlCarousel({
    items: 6,
    loop: true,
    autoplay:false,
    responsive: {
      1200: {
        items: 5,
      },
      600: {
        items: 2,
      },
      400: {
        items: 1,
      },
    },
  });

  $(".episods").owlCarousel({
    items: 4,
    loop: true,
    autoplay:false,
    responsive: {
      1200: {
        items: 4,
      },
      600: {
        items: 2,
      },
      400: {
        items: 1,
      },
    },
  });


  var isMenuOpen = false;

  $("#hamburger").click(function () {
    if (isMenuOpen == false) {
      $(".menu").slideDown("1000");
      $("#hamburger").removeClass("fa-bars").addClass("fa-times");
      isMenuOpen = true;
    } else {
      $(".menu").slideUp("1000");
      $("#hamburger").removeClass("fa-times").addClass("fa-bars");
      isMenuOpen = false;
    }
  });

  $(window).resize(function () {
    var screenSize = $(window).width();

    if (screenSize > 991) {
      $("#nav-menu").removeAttr("style");
      $("#click-btn span").remove("fa-times").add("fa-bars");
    }
  });

});
