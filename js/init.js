$(document).ready(function() {
// SLIDING MENU INITIALIZATION	
  $('#simple-menu').sidr();


});


$('#imagesloaded').imagesLoaded( function() {
	// HOVER DETAILS INITIALIZATION
  $('#h1, #h2, #a1, #a2, #c1, #c2, #f1, #f2').contenthover({
    overlay_background:'#3d4852',
    overlay_opacity:0.8
}); 
});
