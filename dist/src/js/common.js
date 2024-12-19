$(function () {
  new WOW().init();

  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")) {
      $(".mnu_top").slideDown(300);
    } else {
      $(".mnu_top").slideUp(300);
    }
  });

  /* Reviews tabs */

  $(".companies > img").click(function () {
    const revId = $(this).data("revid");
    console.log("revId");
  });
});
