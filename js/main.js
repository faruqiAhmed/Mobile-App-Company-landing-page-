$(document).ready(function(){

	
 

	const videoSrc = $("#player-1").attr("src");
	$("video-play-btn, .video-popup").on("click", function(){
		if($(".video-popup").hasClass("open")){
			$(".video-popup").removeClass("open");
			$("#player-1").attr("src","");

		}
        else {
        	$(".video-popup").AddClass("open");
        	if($("#player-1").attr("src")==''){

        	$("#player-1").attr("src",videoSrc);

        	}
        	
        }
	}):

// 	$('.features-carousel').owlCarousel({
//     loop:true,
//     margin:0,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
            
//         },
//         600:{
//             items:2,
            
//         },
//         1000:{
//             items:4,
            
            
//         }
//     }
// });



});