$(document).ready(function(){
  // a 성격 제거
  $('a[href="#"]').on('click',function(e){
    e.preventDefault();
  });

  //aos 이벤트
  AOS.init() ; 
  AOS.init({
    duration: 1000
  })


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

  let wt = $(window).width();
  gnb();

  if(wt <= 740) {   
    m_btn();
  }
  $(window).resize(function () {
    let wt = $(window).width();
    if (wt >= 740) {
      gnb();
    } else {
      m_btn();
    }
  });

  function m_btn() {
    $('.gnb').off('mouseenter mouseleave');
  }
  function gnb() {
    $('.gnb').on({
      'mouseenter':function(){ $('.lnb').stop().slideDown(); },
      'mouseleave':function(){ $('.lnb').stop().slideUp(); }
    });
  }

  // up btn
  $( window ).scroll( function() {
    if ( $( this ).scrollTop() > 200 ) {
      $( '.moveup-btn' ).fadeIn();
    } else {
      $( '.moveup-btn' ).fadeOut();
    }
  } );
  $( '.moveup-btn' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
  } );

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
  new Splide( '.splide', {
    type    : 'loop',
    perPage : 1,
    autoplay: true,
  } ).mount();

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
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      740: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  // 패밀리 사이트 활성화
  $('.family-site').click(function(){
    $(this).toggleClass('active');
  })

});