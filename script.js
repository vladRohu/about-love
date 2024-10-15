$(document).ready(function () {
  function hideMenu() {
    $(".menu-mobile").css({
      opacity: "0",
      pointerEvents: "none",
    });
  }

  $("#mobile-menu-icon").click(function () {
    var $menuMobile = $(".menu-mobile");
    if ($menuMobile.css("opacity") === "1") {
      hideMenu();
    } else {
      $menuMobile.css({
        opacity: "1",
        pointerEvents: "auto",
      });
    }
  });

  $("#close").click(function () {
    hideMenu();
  });

  $(".main-menu-mb a").click(function () {
    hideMenu();
  });

  function isInViewport(element) {
    const rect = element[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || $(document).height()) &&
      rect.right <= (window.innerWidth || $(document).width())
    );
  }

  function fadeInOnScroll() {
    $(".fade-in").each(function () {
      if (isInViewport($(this))) {
        $(this).addClass("visible");
      }
    });
  }

  $(window).on("scroll", fadeInOnScroll);

  fadeInOnScroll(); // Trigger the function once on load
});
