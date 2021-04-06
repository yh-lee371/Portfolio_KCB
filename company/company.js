$(document).ready(function(){
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      1340: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      740: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  });

  // 연혁 더보기
  $('.timeline__list__item').slice(0, 8).show(); 
  $('.moreview__btn').click(function(e){
      e.preventDefault();
      $('.timeline__list__item:hidden').slice(0, 16).fadeIn(500); 
      if($('.timeline__list__item:hidden').length == 0){ 
          $('.more_btn').hide(); 
      }
  });



});