setTimeout(function () {
	var autofocusEl = document.querySelector("[data-autofocus]");
	if (autofocusEl) {
		var y = window.scrollY;
		autofocusEl.focus();
		window.scrollTo(0, y);
	}
}, 10);
