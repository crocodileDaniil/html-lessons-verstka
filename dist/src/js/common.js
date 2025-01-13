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

  $(".companies > img").click(function() {
    const revId = $(this).data("revid");
		$(".companies > img").not(this).removeClass('active')
		$(this).addClass('active')

		$(".rew_inner > .item_rev").not(revId).removeClass('active')
		$(revId).addClass('active')

    // console.log(revId);
  });
});
