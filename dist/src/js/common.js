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

   /* yakor */
   $('a.yakor').on('click', function(e) {
    let $anchor = $(this)
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 57
    }, {
      duration: 2000,
      specialEasing: {
        width: 'linear',
        height: 'easeInOutCibic'
      }
    })
    e.preventDefault()
  })
  /* yakor */
});
