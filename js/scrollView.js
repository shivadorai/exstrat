$(document).ready(function(){
	$(allInView);
	$(window).scroll(allInView);
});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function allInView() {

    if (isScrolledIntoView($(".page1"))) $(".page1").css("backgroundColor", "red");
    else $(".page1").css("backgroundColor", "grey");

    if (isScrolledIntoView($(".page2"))) $(".page2").css("backgroundColor", "green");
    else $(".page2").css("backgroundColor", "#333");

    if (isScrolledIntoView($(".page3"))) $(".page3").css("backgroundColor", "yellow");
    else $(".page3").css("backgroundColor", "#222");

    if (isScrolledIntoView($(".page4"))) $(".page4").css("backgroundColor", "blue");
    else $(".page4").css("backgroundColor", "#111");
    
    if (isScrolledIntoView($("#testAnim1"))) $("#testAnim1").addClass('animated bounceInRight');
}