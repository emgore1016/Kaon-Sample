$(function () {

	$("[data-js-page]").on("touchend", function () {
		$(".page").css("background", "red");

		// var goal_page = $(this).data("js-page");
		// $(".page").removeClass("active");
		// $(".page[data-page='" + goal_page + "']").addClass("active");
	});
});

$(function () {
	$("#explore").on("touchend", function () {
		$("#menu").css("background", "red");
	});
});