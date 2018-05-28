$(window).on('scroll', function () {
  var topOffset = $(window).scrollTop();
  if (topOffset >= 100) {
    $('.header').addClass('_scrolled');
  } else {
    $('.header').removeClass('_scrolled');
  }
});

$('.header-menu__item').click(function (e) {
  e.preventDefault();

  var offsetEl = $(this).attr('href');

  $(this).addClass('_active').siblings().removeClass('_active');

  $('html, body').animate({
    scrollTop: $(offsetEl).offset().top - 140
  }, 2000)
});