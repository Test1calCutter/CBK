$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $(".overlay").toggleClass("open");
    $(".overlay a").toggleClass("open");
  $(".overlay p").toggleClass("open");
	});
  

  $('.square.blue').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass("in-view");
    } else {
      $(this).removeClass("in-view");
    }
  });
});
 
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
