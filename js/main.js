$(document).ready(function(){
	var show = ".about";
	$(".option-container").on({
		'click':function(){			
			var option = $(this).attr("class").split(" ");

			switch(option[1]){
				case "about-option":
					$(show).css("display","none");
					$(".about").css("display", "block");
					show = ".about";
					break;
				case "resume-option":
					$(show).css("display","none");					
					$(".resume").css("display", "block");
					show = ".resume";
					break;
				case "projects-option":
					$(show).css("display","none");
					$(".work").css("display", "block");
					show = ".work";
					break;

			}
		}
	});
});