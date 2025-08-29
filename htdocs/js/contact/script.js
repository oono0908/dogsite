// headerの背景変化
$(function() {
  $(window).on('scroll', function() {
    var conceptTop = $('.js-contact__text-content').offset().top;
    var scroll = $(window).scrollTop();
    if (scroll >= conceptTop) {
      $('.js-header').css('background-color', "white");
    } else {
      $('.js-header').css('background-color', 'transparent');
    }
  });
});
