(function (window) {
	window.eventsWrapper = {
		record: function (eventName) {
			ga("send", {
				hitType: "event",
				eventCategory: eventName,
				eventAction: "event actioned"
			});
		}
	};
}(window));

var recordThemeClick = function () {
	var attribute = this.getAttribute("data-theme-name"),
		action = this.getAttribute("class") === "download-link" ? "Downloaded " : "GitHub ";

	window.eventsWrapper.record(action + attribute);
};

var recordServiceClick = function () {
	var attribute = this.getAttribute("data-service-name");

	window.eventsWrapper.record("Clicked Service " + attribute);
};

var downloadLinks = document.getElementsByClassName("download-link");
for (var i = 0; i < downloadLinks.length; i++){
	downloadLinks[i].addEventListener("click", recordThemeClick);
}

var githubLinks = document.getElementsByClassName("github-link");
for (var i = 0; i < githubLinks.length; i++){
	githubLinks[i].addEventListener("click", recordThemeClick);
}

var serviceLinks = document.getElementsByClassName("service-link");
for (var i = 0; i < serviceLinks.length; i++){
	serviceLinks[i].addEventListener("click", recordServiceClick);
}
