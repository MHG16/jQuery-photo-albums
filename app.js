
/* User is first shown listview.  When click on an album, shown the corresponding album view.
* On the album view,  when click on a album button, that button highlights and user is shown
* to the corresponding album.  If user selects a photo, shown the corresponding photo view.
*/

/* Event listener process:  
* 1. Select the element that you want to listen for events on.
* 2. Add the event listener.
* 3. Create a function to run when that event happens
*/

var albums = [
	{
	    title: 'Chicago',
	    photos: 
	    [
	      {
	        title: 'cat in a box',
	        url: './images/Chicago/Chicago1.jpeg'
	      },

	      {
	      	title: '',
	      	url: './images/Chicago/Chicago2.jpeg'

	      },

	      {
	      	title: '',
	      	url: '.images/Chicago/Chicago3.jpeg'
	      }

	    ]  
    
    }	
]



//adds an event handler on the album buttons and then renders the clicked Album based on the albumNumber.

$('albumSelector button').on('click', function(e){
	var albumNumber = $(e.target).data('albumNumber');
	renderAlbum(albumNumber);
});

//renders the Album, based on the album number.
//puts the html on the page with the data for that album
function renderAlbum (albumNumber) {
	let thisAlbum = albums[albumNumber];
	let element = $('<section/>')
  		.addClass('album')
  		.append('<header><h1>' + thisAlbum.title + '</h1></header>')
  		.append(thisAlbum.photos.map(function(photo, i) {
    return '<div class="photoholder"><img src="'+ photo.url +'"><div class="label"><a href="#">Photo '+ i + '</a></div>'
  }));

	$('body').html(element);
	//registerPhotoLabelClick();

};

















