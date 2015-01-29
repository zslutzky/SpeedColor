//code for curse-o-meter Loganfranken.com. Custom function below in mouseover is original

$(function() {
    
    var $speedometer = $('#speedometer');
    var currSpeed = 0;
    
    $('.paragraph').cursometer({
        onUpdateSpeed: function(speed) {
            currSpeed = speed;
        },
        updateSpeedRate: 20
    });

    $('.paragraph').mouseover(function(){

        if(currSpeed > 0) {
         $('.paragraph').css({'background-color': '#ccc','transition': 'background-color 1s'})
        
	if(currSpeed > 1) {
	    $('.paragraph').css({'background-color': 'lightblue','transition': 'background-color 1s'})
        
	if (currSpeed > 2) {
		 $('.paragraph').css({'background-color': 'blue','transition': 'background-color 1s'})
        
	if(currSpeed > 3) {
		     $('.paragraph').css({'background-color': 'darkblue','transition': 'background-color 1s'})
		     }
		 }
	    }  	 else $('.paragraph').css({'background-color': 'white','transition': 'background-color 1s'})
}
	 else $('.paragraph').css({'background-color': 'white','transition': 'background-color 1s'})

	     }
    );

});
