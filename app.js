var main=function()
{

/*$('.toresume').click(function(){
   
});*/

   $('.toproj').click(function(){
     //$('.proj').toggle();
      $('html, body').animate({
        scrollTop: $(".neighborhood-guides").offset().top
    }, 2000,'easeOutExpo');
    
      $('.proj li').hide().fadeIn(2500);
    });
    
       $('.towpresence').click(function(){
     //$('.proj').toggle();
      $('html, body').animate({
        scrollTop: $(".webpresence").offset().top
    }, 3000,'easeOutExpo');
    
    $('.webpresence h3').hide().fadeIn(9500);
    });
    
      $('.tocontact').click(function(){
     //$('.proj').toggle();
      $('html, body').animate({
        scrollTop: $(".learn-more").offset().top
    }, 3000,'easeOutExpo');
    });
    
       $('.house').click(function(){
     //$('.proj').toggle();
      $('body').hide().fadeIn(1000);
    });
    
    $('.tortb').click(function(){
     //$('.proj').toggle();
      $('html, body').animate({
        scrollTop: $(".project1").offset().top
    }, 2300,'easeOutExpo');
    });
    
     $('.torps').click(function(){
     //$('.proj').toggle();
      $('html, body').animate({
        scrollTop: $(".project2").offset().top
    }, 2500,'easeOutExpo');
    });
    
     $('.torp').click(function(){
     //$('.proj').toggle();
      $('html, body').animate({
        scrollTop: $(".project3").offset().top
    }, 2700,'easeOutExpo');
    });
    
     $('.tocd').click(function(){
     //$('.proj').toggle();
      $('html, body').animate({
        scrollTop: $(".project4").offset().top
    }, 2700,'easeOutExpo');
    });
}   
    /*$('.dropdown-toggle').click(function(){
     $('.dropdown-menu').toggle();
    });
    
    $('.arrow-next').click(function(){
    
    var currentdot=$('.active-dot');
    var nextdot=currentdot.next();
    if(nextdot.length==0)
    nextdot=$('.dot').first();
    
    currentdot.removeClass('active-dot');
    nextdot.addClass('active-dot');
    
    var currentSlide=$('.active-slide');
    var nextSlide=currentSlide.next();
    if(nextSlide.length==0)
    {
        nextSlide=$('.slide').first();
    }
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600);
    nextSlide.addClass('active-slide');
    
    
    });
    
     $('.arrow-prev').click(function(){
    
    var currentdot=$('.active-dot');
    var prevdot=currentdot.prev();
    if(prevdot.length==0)
    prevdot=$('.dot').last();
    
    currentdot.removeClass('active-dot');
    prevdot.addClass('active-dot');
    
    var currentSlide=$('.active-slide');
    var prevSlide=currentSlide.prev();
    if(prevSlide.length==0)
    {
        prevSlide=$('.slide').last();
    }
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600);
    prevSlide.addClass('active-slide');
    
    
    });*/
    


$(document).ready(main);
