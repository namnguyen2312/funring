$(function() {
	'use strict';
	// Do our DOM lookups beforehand
	var nav_container = $("nav");
	var nav = $("#main-menu");

	nav_container.waypoint({
		handler: function(event, direction) {
			nav.toggleClass('sticky', direction=='down');
			
			if (direction == 'down') nav_container.css({ 'height':nav.outerHeight() });
			else nav_container.css({ 'height':'auto' });
		},
		offset: 10
	});
	
});