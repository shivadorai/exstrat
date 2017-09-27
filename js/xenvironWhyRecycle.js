$('.carousel').carousel({
		  interval: 4500
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
	    if (isScrolledIntoView($(".data1"))) $(".data1").addClass('animated fadeInUp');
	    if (isScrolledIntoView($(".data2"))) $(".data2").addClass('animated fadeInUp');
	    if (isScrolledIntoView($(".data3"))) $(".data3").addClass('animated fadeInUp');
	    if (isScrolledIntoView($(".data4"))) $(".data4").addClass('animated fadeInUp');
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

$('#myBtn').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });




});





































/*$('.carousel').carousel({
  interval: 1500
})
*/
