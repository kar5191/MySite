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
    
    $(".datamining").click(function(){
    
    $.fancybox.open([
    {
        href : 'http://i.imgur.com/d2kX9Pi.png',
        title : '1/7 Problem description'
        
    },
    {
        href : 'http://i.imgur.com/IY1lVDp.png',
        title : '2/7 Challenge'

    },
    {
        href : 'http://i.imgur.com/A8VLLBH.png',
        title : '3/7 A Trial Study'

    },
    {
        href : 'http://i.imgur.com/iO87Z54.png',
        title : '4/7 Classification'

    },
    {
        href : 'http://i.imgur.com/jw4vLlB.png',
        title : '5/7 Data'

    },
    {
        href : 'http://i.imgur.com/ZFjJS1b.png',
        title : '6/7 Evaluation'

    },
    {
        href : 'http://i.imgur.com/Lkxzfiw.png',
        title : '7/7 Results'

    }
    
    
], {
    padding : 0   
});
  
    
    });
    
    $(".compiler").click(function(){
    
    $.fancybox.open([
    {
        href : 'http://i.imgur.com/jUx8IwA.png',
        title : '1/5 Lexer'

    },
    {
        href : 'http://i.imgur.com/ukFf0JL.png',
        title : '2/5 Parser showing the Parse Tree'

    },
    {
        href : 'http://i.imgur.com/OwAz3fH.png',
        title : '3/5 Intermediate Code'

    },
    {
        href : 'http://i.imgur.com/yZjyQ5x.png',
        title : '4/5 Virtual Machine - Input'

    },
    {
        href : 'http://i.imgur.com/pQMesDb.png',
        title : '5/5 Virtual Machine - Output'

    }
   
    
], {
    padding : 0   
});
  
    
    });
    
    
    $(function(){
 
	$(document).on( 'scroll', function(){
 
		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
});

$(function(){
 
	$(document).on( 'scroll', function(){
 
		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
 
	$('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

//http://www.webtipblog.com/adding-scroll-top-button-website
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
    


$(document).ready(function(){
$(".iframe").fancybox();
main();
});
