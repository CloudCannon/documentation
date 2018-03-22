function changePeriod(el) {
	var target = el.target,
		selected = document.querySelectorAll(".period a.selected")[0],
		monthly = document.querySelectorAll(".price .monthly"),
		annually = document.querySelectorAll(".price .annually"),
		i;

	el.preventDefault();

	if (selected === target) {
		return;
	}

	if (selected) {
		selected.classList.remove("selected");
	}

	target.classList.add("selected");

	if (target.classList.contains("monthly")) {
		for (i = 0; i < monthly.length; i++) {
			monthly[i].style.display = "inline";
		}
		for (i = 0; i < annually.length; i++) {
			annually[i].style.display = "none";
		}
	} else {
		for (i = 0; i < annually.length; i++) {
			annually[i].style.display = "inline";
		}
		for (i = 0; i < monthly.length; i++) {
			monthly[i].style.display = "none";
		}
	}
}

var links = document.querySelectorAll(".period a");

for (var j = 0; j < links.length; j++) {
	links[j].addEventListener("click", changePeriod);
}
