function slideUpAndOut(elem) {
	// javascript function that makes an element disappear by sliding upwards
	// and out of the page, without altering the layout and positioning of other
	// elements in the page.

	elem.parent().children().toArray().reverse().forEach(function(el, i) {

		$(el).css({
			'position' : 'fixed',
			'top' : $(el).position().top,
			'left' : $(el).position().left
		});
	});

	elem.slideUp();// 'slow'
}
