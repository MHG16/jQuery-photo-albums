
/* User is first shown listview.  When click on an album, shown the corresponding album view.
* Three parts of event handling:
* 1. Select the element that you want to listen for events on.
* 2. Add the event listener.
* 3. Create a function to run when that event happens
*/

//first hide the other sections when page loads

$(window).load(function() {
  	$('.albumview').hide();
	$('.photoview').hide();  

});

$('a').on('click', function(e) {


	$('.listview').hide();
	$('.albumview').show();

})

//This is example from this week, Nav Bar
// $('.links a').click(function(e) {
// 	e.preventDefault();
// 	console.dir(e.target);
// 	$('.links a').css({'background-color': 'transparent'});
// 	$(e.target).css({'background-color': 'white'});
		
// })




/* User is shown the album view.  When click on a album button, that button highlights and user is taken
* to the corresponding album.  If user selects a photo, taken to corresponding photo view.
*/




