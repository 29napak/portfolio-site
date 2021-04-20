var typed = new Typed('.type', {
    strings: ['movie lover', 
            'movie creater',
            'dream maker',
            'producer'],
    typeSpeed:150,
    backSpeed:150,
    loop:true
  });

  //wow animation--------------------------------
new WOW().init();

window.addEventListener('scroll', function(e) {

if( $(window).scrollTop() <= 10) {
$('.wow').removeClass('animated');
$('.wow').removeAttr('style');
new WOW().init();
}
});
//wow end--------------------------------



$('.your-class').not('.slick-initialized').slick({
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
          
  
  