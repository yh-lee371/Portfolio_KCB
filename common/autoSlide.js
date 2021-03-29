// 버튼 클릭시 해당 이미지로 이동 

$('.btn li').click(function(){
  let idx = $(this).index(); // 함수 안에 변수를 선언하면, 지역 변수. 그 함수 내에서만 사용
  $('.gallery').stop().animate({marginLeft:-100 * idx + '%'}, 600);

  $('.btn li').removeClass('active');
  $(this).addClass('active');
});

// 자동 슬라이드

let num = 0; // 전역변수. 이 문서 내에서 사용. 위의 익명 함수 안의 변수와는 다름 
function slide(){
  num = (num+1) % 4; // 변수 키워드 미작성시 전역 변수로 활용
  $('.gallery').stop().animate({marginLeft:-100 * num + '%'}, 600); // 0:0, 1:-100%, 2:-200% ...

  $('.btn li').eq(num).addClass('active').siblings().removeClass();
}

// 함수 호출 slide();
let auto = setInterval(slide, 2000);

$('.btn').hover(function(){ // mouseenter
  clearInterval(auto);
}, function(){ // mouseleave
  setInterval(slide, 2000);
});