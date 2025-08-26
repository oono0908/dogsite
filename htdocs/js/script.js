$(function () {
  $(".js-hamberger,.js-drawer,.js-drawer__item a").click(function() {
     $(".js-hamberger").toggleClass("is-active")
     $(".js-drawer").fadeToggle()
      return false;
    })
});

const mySwiper = new Swiper ('.swiper', {
  loop: true,
  autoplay: { 
  delay: 3000,
  },
});

