$(function () {
    $('.first').click(function () {
        $('.one').show();
        $('.two').hide();

    });
    $('.second').click(function () {
        $('.two').show(),
            $('.one').hide();

    });
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > 500) {
            $('.header').slideDown();
        }
        else {
            $('.header').slideUp();
        }

    });
    $(".fancybox").fancybox();

   $('.onee').css('display','block');


   $('div.simple h3').click(function(){
       $(this).next().slideDown();
       $("div.simple p").not($(this).next()).slideUp();
      

   });

$('.timer').countTo();


var mixer = mixitup('.all');
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
}); 
    
});