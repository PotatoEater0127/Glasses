$(document).ready(function () {
  console.log("ready");
  $(".ham-icon").click(function (e) {
    console.log(e);
    e.preventDefault();
    $(".header__list").toggleClass("active");
  });
});
