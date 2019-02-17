setTimeout(function () {
	var autofocusEls = document.querySelectorAll("[data-autofocus]"),
		autofocusEl = autofocusEls[autofocusEls.length - 1];

	if (autofocusEl) {
		var y = window.scrollY;
		autofocusEl.focus();
		if (!window.preventAutofocusScroll) {
			window.scrollTo(0, y);
		}
	}
}, 10);
