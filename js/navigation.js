$('.menu-icon').click( function(){
  $( ".nav-top .nav-items" ).animate({
  height: [ "toggle", "swing" ],
}, 300, "linear");
});
