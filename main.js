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
});