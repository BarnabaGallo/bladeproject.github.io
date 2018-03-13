//Sticky navbar
$(window).scroll(function(){
  if($(this).scrollTop()>100){
    $('.menu').addClass("sticky")
  }else{
    $('.menu').removeClass("sticky")
  }
})


//Section scrolling animation
$(document).on('click', 'a[href^="#"]', function(event){
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
})
