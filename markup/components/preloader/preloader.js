$(document).ready(function () {
    setTimeout(function() {
      $('.preloader').fadeOut('slow', function() {});
      $('body').removeClass('_hidden');
    }, 2000);
});