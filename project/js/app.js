$(function () {

	$("[data-js-page]").on("touchend", function () {
		var goal_page = $(this).data("js-page");
		$(".page").removeClass("active");
		$(".page[data-page='" + goal_page + "']").addClass("active");
	});

	$(".explore").on("touchend", function () {
		if ($('#menu').css('opacity') == 1) {

			$('#menu').css('opacity', '0');
		}
		else {
			$('#menu').css('opacity', '1');
		}
		//$("#menu").fadeToggle(2000);
	});
});
