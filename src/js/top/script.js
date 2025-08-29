// drawer__linkクリック時に選択された場所移動する
$(function() {
  $('.js-drawer__item a, .js-header__link').on('click', function(e) {
    // e.preventDefault();
    var targetId = $(this).attr('href');
    var target = $(targetId);
    if(target.length) {
      var headerHeight = $('.js-header').outerHeight();
      var scrollPosition = target.offset().top - headerHeight;
      $('html, body').animate({
        scrollTop: scrollPosition
      }, 600);
    }
  });
});

// swiper
const mySwiper = new Swiper ('.swiper', {
  loop: true,
  autoplay: { 
  delay: 3000,
  },
});

// topBtnクリック時にtopに戻る
$(function() {
  $('.js-top-btn').on('click', function(e) {
    $('html, body').animate({ scrollTop: 0 }, 600); 
    return false;
  });
});

// headerの背景変化
$(function() {
  $(window).on('scroll', function() {
    var conceptTop = $('.js-concept').offset().top;
    var scroll = $(window).scrollTop();
    if (scroll >= conceptTop) {
      $('.js-header').css('background-color', "white");
      $('.js-top-btn').css('display','block');
    } else {
      $('.js-header').css('background-color', 'transparent');
       $('.js-top-btn').css('display','none');
    }
  });
});

$(function() {
  if(window.location.hash) {
    var target = $(window.location.hash);
    if(target.length) {
      var headerHeight = $('.js-header').outerHeight() || 0;
      var scrollPosition = target.offset().top - headerHeight;
      $('html, body').animate({ scrollTop: scrollPosition }, 600);
    }
  }
});