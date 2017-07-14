// $( document ).ready(function(){

// 	$( ".profilepic" ).animate({marginTop: '+=20px', opacity: 1}, t_wait,
// 		function(){

// 	$( ".banner-right" ).animate({marginTop: '+=20px', opacity: 1}, t_wait);
	

// 	});

// });

about_load = false;
career_load = false;
projects_load = false;
t_wait = 1000;

window.onload = function(){
	$( ".faded" ).animate({marginTop: '-=20px'}, 0);
	$( ".profilepic" ).animate({marginTop: '+=20px', opacity: 1}, t_wait, function(){
		$( ".banner-right" ).animate({marginTop: '+=20px', opacity: 1}, t_wait, function(){
			$( ".smallintro" ).animate({marginTop: '+=20px', opacity: 1}, t_wait, function(){
				$( ".topcv" ).animate({marginTop: '+=20px', opacity: 1}, t_wait, function(){					
				});
			});
		});
		$("#about").waypoint(function(){
			if(!about_load){
				about_load = true;
				$( ".about-title" ).animate({marginTop: '+=20px', opacity: 1}, t_wait, function(){

					$( ".about-text p" ).each(function(i){
						delay=(i)*250
						$(this).delay(delay).animate({marginTop: '+=20px', opacity: 1}, t_wait, function(){
							if(i==4){
								$(".socialmedia").animate({marginTop: '+=20px', opacity: 1}, t_wait)
							}
						});
					});
				});
			}
		}, { offset: '75%'});

		$("#career").waypoint(function(){
			if(!career_load){
				career_load = true;
				$( ".work-info" ).animate({marginTop: '+=20px', opacity: 1}, t_wait, function(){

					$( ".work-grid" ).each(function(i){
						delay=(i)*t_wait
						$(this).delay(delay).animate({marginTop: '+=20px', opacity: 1}, t_wait)
					});
				});
			}
		}, { offset: '75%'});

		$("#projects").waypoint(function(){
			if(!projects_load){
				projects_load = true;
				$( ".projects-title" ).animate({marginTop: '+=20px', opacity: 1}, t_wait, function(){
					$( ".projects-desc" ).animate({marginTop: '+=20px', opacity: 1}, t_wait, function(){
						$( ".project-item" ).each(function(i){
							delay=(i)*250
							$(this).delay(delay).animate({marginTop: '+=20px', opacity: 1}, t_wait)
						});
					});

				});
			}
		}, { offset: '75%'});



	});

};

