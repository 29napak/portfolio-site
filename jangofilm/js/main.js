
$(document).ready(function(){
  $(".gallery li").click(function(){
    $(this).closest('.gallery li').toggleClass('active');   
  });
  
});
$(document).ready(function(){
  $(".gallery2 li").click(function(){
    $(this).closest('.gallery2 li').toggleClass('active');   
  });
  
});
$(document).ready(function(){
  $(".gallery3 li").click(function(){
    $(this).closest('.gallery3 li').toggleClass('active');   
  });
  
});

$(document).ready(function() {
    $('.toggle').click(function() {
      $('.toggle').toggleClass('active');
      $(".overlay").toggleClass("active");
      $('.menu').toggleClass('active');
      $('.top').toggleClass('active');
      $('.middle').toggleClass('active');

      $('.button').toggleClass('active');
      $('.brand').toggleClass('active');
    })
  })
  $(document).ready(function() {
    $('.toggle2').click(function() {
      $('.toggle2').toggleClass('active');
      $(".overlay").toggleClass("active");
      $('.menu').toggleClass('active');
      $('.top').toggleClass('active');
      $('.middle').toggleClass('active');
      $('.button').toggleClass('active');
      $('.brand').toggleClass('active');
    })
  })


  /*----fullpage----*/

  new fullpage('#service',{
    autoScrolling:true,
    navigation:true,
    navigationPosition:'right',
    scrollBar:false,
    keyboardScrolling:true,
    responsiveWidth:900,
    scrollingSpeed: 800,
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6','page7','page8','page9'],

  });
 
  $(document).on('click', '.arrow', function(){
fullpage_api.moveTo('page1', 1);
});
$(document).on('click', '.se2 .div2', function(){
fullpage_api.moveTo('page4', 1);
});
$(document).on('click', '.se2 .div3', function(){
fullpage_api.moveTo('page5', 1);
});
$(document).on('click', '.se2 .div4', function(){
fullpage_api.moveTo('page6', 1);
});
$(document).on('click', '.se2 .div5', function(){
fullpage_api.moveTo('page7', 1);
});


new fullpage('#fullpage',{
  autoScrolling:true,
  navigation:true,
  navigationPosition:'right',
  scrollBar:true,
  keyboardScrolling:true,
  responsiveWidth:900,
  scrollingSpeed: 800,
  anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],

});

$(document).on('click', '.arrow', function(){
fullpage_api.moveTo('page1', 1);
});

new fullpage('#work',{
  autoScrolling:false,
  navigation:true,
  navigationPosition:'right',
  scrollBar:true,
  keyboardScrolling:true,
  responsiveWidth:900,
  scrollingSpeed: 800,
  anchors: ['page1', 'page2', 'page3'],

});

$(document).on('click', '.arrow', function(){
fullpage_api.moveTo('page1', 1);
});



$(window).bind('mousewheel', function(e){
  if(e.originalEvent.wheelDelta /1500 > 0) {

     $(".arrow").addClass("showarrow");
     $(".circular-text").addClass("noscoll-text");
     $(".scroll-down").addClass("hide-scroll");
    
    
  }
  else{
    $(".arrow").removeClass("showarrow");
    $(".circular-text").removeClass("noscoll-text");
    $(".scroll-down").removeClass("hide-scroll");
  }
});





// rotated--------------------------------
const circleType = new CircleType(document.getElementById("rotated")).radius(80);
$(window).scroll(function() {
  var offset = $(window).scrollTop();
  offset = offset * 0.4;
  $(".circular-text").css({
    "-moz-transform": "rotate(" + offset + "deg)",
    "-webkit-transform": "rotate(" + offset + "deg)",
    "-o-transform": "rotate(" + offset + "deg)",
    "-ms-transform": "rotate(" + offset + "deg)",
    "transform": "rotate(" + offset + "deg)",
  });
});






// nav animation--------------------------------
TweenMax.from(".brand a img", 1, {
  delay: 4.4,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut
})
TweenMax.from(".toggle", 1, {
  delay: 4.6,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut
})
TweenMax.from(".hero-bg img", 1, {
  delay: 5,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut
})
TweenMax.from(".text-header", 1, {
  delay: 5.4,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut
})

TweenMax.from(".typing", 1, {
  delay: 5.7,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut
})

TweenMax.from(".s1 .text", 1, {
  delay: 5.8,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut
})




TweenMax.to(".load",1,{
  height:"0%",
  delay:4,
  ease:Expo.easeInOut
  
});


var tl = new TimelineMax();
tl.from(".loader",1.6,{
  opacity:"0",
  ease:Expo.easeInOut,
  delay:1,
  
});
tl.to(".loader",1.6,{
  height:"0vh",
  scaleY:"0%",
  opacity:"0",
  ease:Expo.easeInOut,
  transformOrigin:"0% 100%",
  delay:1,
})







TweenMax.from(".brand2 a img", 1, {
  delay: 2,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut
})
TweenMax.from(".toggle2", 1, {
  delay: 2,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut
})
TweenMax.to(".load2",1,{
  height:"0%",
  delay:1.5,
  ease:Expo.easeInOut
  
});


var tl = new TimelineMax();
tl.from(".loader2",1,{
  opacity:"0",
  ease:Expo.easeInOut,
  delay:0,
  
});
tl.to(".loader2",1,{
  height:"0vh",
  opacity:"0",
  ease:Expo.easeInOut,
  transformOrigin:"0% 100%",
  delay:0,
})








$(document).ready(function () {
  $('.gallery li:lt(8)').show();
  $('.less').hide();
  var items =  25;
  var shown =  8;
  $('.more').click(function () {
      $('.less').show();
      shown = $('.gallery li:visible').length+8;
      if(shown< items) {
        $('.gallery li:lt('+shown+')').show(300);
      } else {
        $('.gallery li:lt('+items+')').show(300);
        $('.more').hide();
      }
  });
  $('.less').click(function () {
      $('.gallery li').not(':lt(8)').hide(300);
      $('.more').show();
      $('.less').hide();
  });
});

$(document).ready(function () {
  $('.gallery2 li:lt(8)').show();
  $('.less2').hide();
  var items =  25;
  var shown =  8;
  $('.more2').click(function () {
      $('.less2').show();
      shown = $('.gallery2 li:visible').length+8;
      if(shown< items) {
        $('.gallery2 li:lt('+shown+')').show(300);
      } else {
        $('.gallery2 li:lt('+items+')').show(300);
        $('.more2').hide();
      }
  });
  $('.less2').click(function () {
      $('.gallery2 li').not(':lt(8)').hide(300);
      $('.more2').show();
      $('.less2').hide();
  });
});

$(document).ready(function () {
  $('.gallery3 li:lt(8)').show();
  $('.less3').hide();
  var items =  25;
  var shown =  8;
  $('.more3').click(function () {
      $('.less3').show();
      shown = $('.gallery3 li:visible').length+8;
      if(shown< items) {
        $('.gallery3 li:lt('+shown+')').show(300);
      } else {
        $('.gallery3 li:lt('+items+')').show(300);
        $('.more2').hide();
      }
  });
  $('.less3').click(function () {
      $('.gallery3 li').not(':lt(8)').hide(300);
      $('.more3').show();
      $('.less3').hide();
  });
});




$(document).ready(function() {
  $('.button2').click(function() {
    $('.show-1').addClass('hide');
    $('.show-3').addClass('hide');
    $('.show-2').addClass('active');
    $('.show-2').removeClass('hide');
    $('.button2').addClass('active');
    $('.button3').removeClass('active');
    $('.button1').addClass('active');
  })
});
$(document).ready(function() {
  $('.button3').click(function() {
    $('.show-1').addClass('hide');
    $('.show-2').addClass('hide');
    $('.show-3').addClass('active');
    $('.show-3').removeClass('hide');
    $('.button3').addClass('active');
    $('.button2').removeClass('active');
    $('.button1').addClass('active');
  })
});
$(document).ready(function() {
  $('.button1').click(function() {
    $('.show-1').removeClass('hide');
    $('.show-2').addClass('hide');
    $('.show-3').addClass('hide');
    $('.button2').removeClass('active');
    $('.button3').removeClass('active');
    $('.button1').removeClass('active');
    
  })
});



