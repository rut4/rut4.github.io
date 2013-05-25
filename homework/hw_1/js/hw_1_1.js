$(function () {
	var touch = "ontouchstart" in window;
	if (touch) {
		$(".profile").addClass("no-touch");
	}
	$("#comments")
	.on("focus", "#commentsText", IncreaseHeight)
	.on("blur", "#commentsText", DecreaseHeight)
	.on("click", "#addAnswer", AddAnswer);

})

function IncreaseHeight() {
	$(this).animate({"height": $(this).height()*2 + "px"});
}

function DecreaseHeight() {
	$(this).animate({"height": $(this).height()/2 + "px"});
}

function AddAnswer(event) {
	event.preventDefault();
	$("#oldComments").find(".form_comment").animate({"height": 0}, function () { $(this).remove(); });
	var formComment = $("#newComment").children(".form_comment");
	var height = formComment.height();
	formComment = formComment.clone(true, true);
	formComment.css("height", 0);
	$(this).after(formComment);
	formComment.animate({"height": height + "px"});
}