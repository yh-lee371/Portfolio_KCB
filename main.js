$(document).ready(function(){
    // a 성격 제거
    $('a[href="#"]').on('click',function(e){
      e.preventDefault();
    });

    // 소메뉴 활성화
    $('.lnb').hide();
    $('.gnb').hover(function(){
      $('.lnb').stop().slideDown();
    }, function(){
      $('.lnb').stop().slideUp();
    });

    $('.gnb__list__item').hover(function(){
      $(this).css('color','#e63d21');
    }, function(){
      $(this).css('color','#000');
    });

    $('.lnb__list__item').on({
      'mouseenter':function(){
        $(this).css('color','#e63d21');
      },
      'mouseleave':function(){
        $(this).css('color','#000');
      }
    });

    // 검색창 활성화
    $('.search__box').hide();
    $('.search').click(function(){
      $('.search__box').slideDown();
    })
    $('.cancle').click(function(){
      $('.search__box').slideUp();
    })

  // let ht = $(window).height();
  // $('section').height(ht);

  // snb 활성화
  //  $(window).on('resize', function(){
  //    let ht = $(window).height();
  //    $('section').height(ht);
  //  });

  $(window).on('scroll', function(){ // 브라우저에서 스크롤 할 때
    let ht = $(window).height();
    let scroll_t = $(window).scrollTop();

    for(let k = 0 ; k < 6 ; k++) { // 첫번째 박스부터 네번째 박스의 값만큼 반복
      if(scroll_t >= ht*k && scroll_t < ht*(k+1)) {
        $('#snb li a').removeClass('active');
        $('#snb li').eq(k).find('a').addClass('active');
      }
    }
  });
});