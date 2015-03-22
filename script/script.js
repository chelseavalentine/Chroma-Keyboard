//Have balls bounce

function bounce () {
	var height = -320
	// for (var i = 0; i < )
	// $(".ball")
	// 	.transition( {y: -320}, 2000)

	$(".ball")
		.velocity({ top: "-320px"}, 
			{duration: 1000})
}

function pianokeys (){
	var windowwidth = window.width;
	for (var i = 0; i < 16; i++){
		$("span")
			.appendTo(".piano")
			.css({
				"position": "relative",
				"display": "inline-block",
				"margin": "0",
				"width": "50px",
				"height": "150px",
				"background": "red"
			})
	}
}
$(document).ready(
	bounce()
	pianokeys()
)
