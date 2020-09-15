setTimeout(function () {
	var autofocusEls = document.querySelectorAll('[data-autofocus]'),
		autofocusEl = autofocusEls[autofocusEls.length - 1];

	if (autofocusEl) {
		var y = window.scrollY;
		autofocusEl.focus();
		if (!window.preventAutofocusScroll) {
			var original = document.documentElement.style.scrollBehavior;
			document.documentElement.style.scrollBehavior = 'auto';
			window.scrollTo(0, y);
			document.documentElement.style.scrollBehavior = original;
		}
	}
}, 20);
