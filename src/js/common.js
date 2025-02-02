$(function () {
  new WOW().init();

  /*mobile open menu */
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")) {
      $(".mnu_top").slideDown(300);
      $(".mnu_top").addClass("mnu_top-flex");
    } else {
      $(".mnu_top").slideUp(300);
      $(".mnu_top").removeClass("mnu_top-flex");
    }
  });
  /*mobile open menu */
  /* Reviews tabs */

  $(".companies > img").click(function() {
    const revId = $(this).data("revid");
		$(".companies > img").not(this).removeClass('active')
		$(this).addClass('active')

		$(".rew_inner > .item_rev").not(revId).removeClass('active')
		$(revId).addClass('active')

    // console.log(revId);
  });
});
