$(function () {

	$("[data-js-page]").on("touchend", function () {
		var goal_page = $(this).data("js-page");
		$(".page").removeClass("active");
		$(".page[data-page='" + goal_page + "']").addClass("active");
	});

	$(".explore").on("touchend", function () {
		$('.button.back.right.menu').css('display', 'block');
		$('#menu').css('opacity', '1');
		$('.explore').css('opacity', '0');
	});

	$(".button.back.right.menu").on("touchend", function () {
		$('.button.back.right.menu').css('display', 'none');
		$('#menu').css('opacity', '0');
		$('.explore').css('opacity', '1');
	});

	$(".hc_option").on("mouseover", function () {
		$(this).children(".hc_button").css('background-color', 'rgb(56, 56, 56)');
		$(this).children(".triangle").css('border-top', '1rem solid rgb(56, 56, 56)');
	});

	$(".hc_option").on("mouseout", function () {
		$(this).children(".hc_button").css('background-color', 'gray');
		$(this).children(".triangle").css('border-top', '1rem solid gray');
	});
});
