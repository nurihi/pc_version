$(function(){
/*gnb*/
    $('#gnb .active').mouseover(function(){
        $('.sub').addClass('on');
    })
    $('#gnb .active').mouseleave(function(){
        $('.sub').removeClass('on');
    })

 /*btn*/
$('.header_right .btn').click(function(e){
   e.preventDefault();
   $(this).toggleClass("on off");
  $('.side_m').toggleClass('active');
})
/*main slide*/
   var swiper = new Swiper(".main_slide", {
    speed: 1000, 
    loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },
      effect: 'fade'
      
    });
    //slogan

    $('.intro').addClass('go');

    $('.reload').click(function() {
      $('.intro').removeClass('go').delay(200).queue(function(next) {
        $('.intro').addClass('go');
        next();
      });
  
    });

    $(".slogun_wrap li").mouseover(function(){

      idx= $(this).index()+1;
      $(".slogun_wrap li").removeClass("on");
      $(this).addClass('on');

      $('.slogun_wrap').removeClass('bg01 bg02 bg03').addClass('bg0'+idx)
  });

    //collect

    var swiper = new Swiper(".collec_slide", {
      slidesPerView: 2,
      spaceBetween: 20,
  
      navigation: {   
      nextEl: ".collec_list .next",
      prevEl: ".collec_list .prev",
      },
    });
  
    //brand
    var swiper = new Swiper(".brand_slide", {
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
      speed: 3000, 
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    });

})