(function($) {
	$.fn.border = function(options) {
		// there's no need to do $(this) because "this" is already a jquery
		// object
		// $(this) would be the same as $($('#element'));

		// $.extend(defaults, options); // ({}, defaults, options)
		// return this.each(function() {// plugin code here});

		switch (options) {
		case undefined:
			return this.css('border');
		case null:
			var defaults = {
				// The "border-color" property does not work if it is used
				// alone.
				// Use the "border-style" property to set the borders first.
				'border-style' : 'solid',
				'border-width' : '2px',
				'border-color' : 'chartreuse',
				'border-radius' : '1px'
			};

			this.css(defaults);
			return this;
		default:
			if (jQuery.type(options) === 'string') {
				this.css('border', options);
			} else {
				// var opts = $.extend(defaults, options);
				// this.css(options);
				this.css({
					'border-style' : 'solid',
					'border-width' : options.width,
					'border-color' : options.color,
					'border-radius' : options.radius
				});

			}
			return this;
		}

	};
})(jQuery);
