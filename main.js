$(document).ready(function(){
  // a 성격 제거
  $('a[href="#"]').on('click',function(e){
    e.preventDefault();
  });

  // 소메뉴 활성화
  $('.lnb').hide();
  $('.gnb').hover(function(){
    $('.lnb').stop().slideDown();
    $('header').addClass('on');
  }, function(){
    $('.lnb').stop().slideUp();
    $('header').removeClass('on');
  });

  $('.gnb__list__item').hover(function(){
    $(this).css('color','#e63d21');
  }, function(){
    $(this).css('color','#000');
  });
  $('.lnb__list__item').on({
    'mouseenter':function(){
      $(this).css('color','#fff');
    },
    'mouseleave':function(){
      $(this).css('color','#000');
    }
  }); 

  // 메뉴버튼 활성화
  $('.navbar__toggle-btn').click(function(){
    $(this).toggleClass('active');
    $('nav').toggleClass('on');
  })

  // 언어설정 활성화
  $('.language').click(function(){
    $(this).toggleClass('active');
  })
  
  $('.drop__language li').click(function(){
    let selet = $('this').html();
    $('.language span').html(selet);
  })

  // 검색창 활성화
  $('.search__box').hide();
  $('.search').click(function(){
      $('.search__box').fadeIn();
  })
  $('.cancle').click(function(){
      $('.search__box').fadeOut();
  })

  // home slider
  /*   $(".splide__list > li:gt(0)").hide();
  setInterval(function() { 
  $('.splide__list > li:first')
  .fadeOut(1500)
  .next()
  .fadeIn(1500)
  .end()
  .appendTo('.splide__list');
  }, 4000); */


  new Splide( '.splide', {
    type    : 'loop',
    perPage : 1,
    autoplay: true,
  } ).mount();

  // var splide = new Splide( '.splide' );
  // splide.on( 'autoplay:playing', function ( rate ) {
  // 	console.log( rate ); // 0-1
  // } );
  // splide.mount(); 

  //snb 활성화
  $(window).on('scroll', function(){ 
    let scroll_t = $(window).scrollTop();
    let sec1 = $('#about').offset().top;
    let sec2 = $('#vision').offset().top;
    let sec3 = $('#academy').offset().top;
    let sec4 = $('#service').offset().top;
    let sec5 = $('#recruit').offset().top;
    let sec6 = $('#notice').offset().top;
    let sec7 = $('footer').offset().top;
    
    if(scroll_t >= sec1 && scroll_t < sec2 ) {
      $('.snb li a').removeClass('active');
      $('.snb li').eq(0).find('a').addClass('active');
    }
    if(scroll_t >= sec2 && scroll_t < sec3 ) {
      $('.snb li a').removeClass('active');
      $('.snb li').eq(1).find('a').addClass('active');
    }
    if(scroll_t >= sec3 && scroll_t < sec4) {
      $('.snb li a').removeClass('active');
      $('.snb li').eq(2).find('a').addClass('active');
    }
    if(scroll_t >= sec4 && scroll_t < sec5) {
      $('.snb li a').removeClass('active');
      $('.snb li').eq(3).find('a').addClass('active');
    }
    if(scroll_t >= sec5 && scroll_t < sec6) {
      $('.snb li a').removeClass('active');
      $('.snb li').eq(4).find('a').addClass('active');
    }
    if(scroll_t >= sec6 && scroll_t < sec7) {
      $('.snb li a').removeClass('active');
      $('.snb li').eq(5).find('a').addClass('active');
    }
    
  /* 
    let ht = $(window).height();
    let scroll_t = $(window).scrollTop();

    for(let k = 0 ; k < 6 ; k++) { 
      if(scroll_t >= ht*k && scroll_t < ht*(k+1)) {
        $('.snb li a').removeClass('active');
        $('.snb li').eq(k).find('a').addClass('active');
      }
    }
     */
  });

  // 공지사항 swiper
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });



  // 패밀리 사이트 활성화
  $('.family-site').click(function(){
    $(this).toggleClass('active');
  })


});