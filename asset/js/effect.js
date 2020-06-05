$(document).ready(function () {
  $(".ham-icon").click(function (e) {
    e.preventDefault();
    $(".header__list").toggleClass("active");
  });
});
