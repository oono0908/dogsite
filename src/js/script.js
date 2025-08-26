$(function () {
  $(".js-hamberger,.js-drawer,.js-drawer__link").click(function() {
     e.preventDefault();
     $(".js-hamberger").toggleClass("is-active")
     $(".js-drawer").fadeToggle()
    })
});

const mySwiper = new Swiper ('.swiper', {
  loop: true,
  autoplay: { 
  delay: 3000,
  },
});