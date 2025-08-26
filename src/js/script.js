$(function () {
  $(".js-hamberger,.js-drawer,.js-drawer__link").click(function() {
     $(".js-hamberger").toggleClass("is-active")
     $(".js-drawer").fadeToggle()
    })
});