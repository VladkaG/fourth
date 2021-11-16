$(document).ready(function() {
   $('.icon-menu').click(function(event){
      $('.icon-menu,.menu__body').toggleClass('active');
      $('.body').toggleClass('lock');
   });
   
   if($('.slider__body').length>0){
      $('.slider__body').slick({
         dots: true,
         arrows: false,
         accessibility: false,
         autoplaySpeed: 3000,
         adaptiveHeight: true,
         nextArrow: '<button type="button" class="slick-next"></button>',
         prevArrow: '<button type="button" class="slick-prev"></button>',
         responsive: [{
         breakpoint: 768,
         settings: {}
}]
      })
   }
});

