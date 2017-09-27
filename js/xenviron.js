$('.carousel').carousel({
		  interval: 4000
		});

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	
	function isScrolledIntoView(elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	function allInView() {

//	    if (isScrolledIntoView($(".page1"))) $(".page1").css("backgroundColor", "red");
//	    else $(".page1").css("backgroundColor", "grey");
//
//	    if (isScrolledIntoView($(".page2"))) $(".page2").css("backgroundColor", "green");
//	    else $(".page2").css("backgroundColor", "#333");
//
//	    if (isScrolledIntoView($(".page3"))) $(".page3").css("backgroundColor", "yellow");
//	    else $(".page3").css("backgroundColor", "#222");
//
//	    if (isScrolledIntoView($(".page4"))) $(".page4").css("backgroundColor", "blue");
//	    else $(".page4").css("backgroundColor", "#111");
	    
	    if (isScrolledIntoView($(".oi1"))) $(".oi1").addClass('animated bounceInLeft');
	    if (isScrolledIntoView($(".oi2"))) $(".oi2").addClass('animated bounceInUp');
	    if (isScrolledIntoView($(".oi3"))) $(".oi3").addClass('animated bounceInDown');
	    if (isScrolledIntoView($(".oi4"))) $(".oi4").addClass('animated bounceInRight');
	    if (isScrolledIntoView($(".ex1"))) $(".ex1").addClass('animated fadeInUp');
	    if (isScrolledIntoView($(".ex2"))) $(".ex2").addClass('animated fadeInUp');
	    if (isScrolledIntoView($(".exi1"))) $(".exi1").addClass('animated rollIn');
	}

//Main navigation scroll spy for shadow

$(document).ready(function(){
	
	$(allInView);
	$(window).scroll(allInView);
	
	
	//window.onscroll = function() {scrollFunction()};
	
	// Custom 
	  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
	    var stickyHeight = sticky.outerHeight();
	    var stickyTop = stickyWrapper.offset().top;
	    if (scrollElement.scrollTop() >= stickyTop){
	      stickyWrapper.height(stickyHeight);
	      sticky.addClass("is-sticky");
	    }
	    else{
	      sticky.removeClass("is-sticky");
	      stickyWrapper.height('auto');
	    }
	  };
	  
	  // Find all data-toggle="sticky-onscroll" elements
	  $('[data-toggle="sticky-onscroll"]').each(function() {
	    var sticky = $(this);
	    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
	    sticky.before(stickyWrapper);
	    sticky.addClass('sticky');
	    
	    // Scroll & resize events
	    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
	      stickyToggle(sticky, stickyWrapper, $(this));
	    });
	    
	    // On page load
	    stickyToggle(sticky, stickyWrapper, $(window));
	  });
	  
	  

		$(window).scroll(function() {
			//alert('scroll');
		  var y = $(window).scrollTop();
		  if (y > 0) {
		    $("#header").addClass('shadow');
		  } else {
		    $("#header").removeClass('shadow');
		  }
		  
		  if (y > 50) {
				$('nav').addClass('shrink');
				$('#logo2').removeClass('logoshrink');
				$('#logo2').addClass('logoExpand');
				$('#logo1').addClass('logoshrink');
			  } else {
				$('nav').removeClass('shrink');
				$('#logo2').addClass('logoshrink');
				$('#logo1').removeClass('logoshrink');
				$('#logo1').addClass('logoExpand');
				
			  }
		  
		});


//Carousel Control

var $myCarousel = $('#myCarousel'),
$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

//Initialize carousel 
$myCarousel.carousel();

//Animate captions in first slide on page load 
doAnimations($firstAnimatingElems);

//Pause carousel  
//$myCarousel.carousel('pause');


//Other slides to be animated on carousel slide event 
$myCarousel.on('slide.bs.carousel', function (e) {
	var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
	doAnimations($animatingElems);
}); 





$('#myBtn').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });


$(document).ready(function() {
    $(".borderAnimationId").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    );
    
    $(".rcornersId").hover(
            function() {$(this).removeClass("rcornersLeaf"); $(this).addClass("rcorners"); },
            function() { $(this).removeClass("rcorners"); $(this).addClass("rcornersLeaf");}
        );
    
    $(".rcornersIdRight").hover(
            function() {$(this).removeClass("rcornersLeafRight"); $(this).addClass("rcorners"); },
            function() { $(this).removeClass("rcorners"); $(this).addClass("rcornersLeafRight");}
        );
});

});





































/*$('.carousel').carousel({
  interval: 1500
})
*/
