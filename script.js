$(document).ready(function() {
	var $navHamburger = $(".nav-hamburger");
  var $navDropDown = $(".nav-dropdown");
    $navHamburger.on("click", function() {
      $navDropDown.toggleClass("show");
    });

  $(window).resize(function() {
    if ($(document).width() > 565) {
      $navDropDown.removeClass("show");
    }
  });
});