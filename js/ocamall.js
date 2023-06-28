/* a링크 미구현시 경고문 출력 */
$(function(){
    $(`<div class="alert">죄송합니다. 해당페이지는 준비중입니다.</div>`).appendTo("#wrap");
    $("a[href='#']").not(".eventNone").on("click", function(e){
        e.preventDefault();
        $(".alert").stop().fadeIn(700)
        setTimeout(() => {
            $(".alert").stop().fadeOut(700);
        }, 1000);
    })
})



/* 맨 위 닫기 */
$('header .text_slide img').on('click',function(){
    $('.sub_text').stop().hide();
    // $('.gnb_menu').css({marginTop: "-50px"});
});

/* gnb 보이게하기 */
$('.gnb input').click(function(){
    $('.gnb_menu').stop().slideToggle();
});


/* gnb 2depth 슬라이드 */
$('.gnb_menu ul p').mouseenter(function(){
    $(this).siblings('li').stop().slideDown();
});
$('.gnb_menu ul').mouseleave(function(){
    $(this).children('li').stop().slideUp();
});

/* 슬라이드 js */
$('.main_slide').slick({
    dots: true,
    slide: 'div',
    dotsClass: 'slick-dots',
    autoplay: true,
    infinite: true,
    speed: 400,
    fade: true,
    cssEase: 'linear'
  });

/* 자동 슬라이드 */
// let slideIndex = 0;
// autoSlide();
// function autoSlide(){
//     // let swiper = document.querySelector('.swiper_slider');
//     // let slide = swiper.querySelectorAll('.slider');
//     let slide = $('.slider');
//     let dot = $('.dot');
//     for(let i = 0; i<slide.length; i++){
//         slide.eq(i).fadeOut();
//     }
//     slideIndex++;
//     console.log(slideIndex);

//     slide.eq(slideIndex-1).fadeIn().css({display:'block'});
//     dot.eq(slideIndex-1).css({backgroundColor:'#999999'});
//     dot.eq(slideIndex-2).css({backgroundColor: '#fff'});


//     if(slideIndex > slide.length-1){
//         slideIndex = 0;
//     }

//     setTimeout(autoSlide,3000);
// };

/* 동영상 하나씩 나오게 */
let video_list = $('.md_pick ul').find('li');
let video = $('.md_pick_area figure');
function menu(num) {
    for(let i=0; i<video_list.length; i++){
        if(num === i) {
            video_list.eq(i).addClass('on');
            video.children('.video0'+i).show();
        } else {
            video_list.eq(i).removeClass('on');
            video.children('.video0'+i).hide();
        }   
    }
}





/* 페이지 탑/다운버튼 */
const moveTop = document.querySelector('.topButton');
const moveDown = document.querySelector('.downButton');
moveTop.onclick = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
}
moveDown.onclick = () => {
    window.scrollTo({top:document.body.scrollHeight, behavior: "smooth"});
}

