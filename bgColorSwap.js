const rootStyles = getComputedStyle(document.documentElement);
const sliders = document.querySelectorAll("input");
const tempButton = document.getElementById("temp-button");

function updateColors() {
	const colors = [];
	sliders.forEach((e) => {
		colors.push(e.value);
	});
	document.documentElement.style.setProperty(
		"--bg1",
		`rgb(${colors[0]},${colors[1]},${colors[2]})`
	);
	document.documentElement.style.setProperty(
		"--bg2",
		`rgb(${colors[3]},${colors[4]},${colors[5]})`
	);
}

function changeColorValues(colors) {
	sliders.forEach((e, i) => {
		e.value = colors[i];
	});
	updateColors();
}

//make each slider update the bg color when moved
sliders.forEach((e) => {
	e.addEventListener("input", (event) => {
		updateColors();
	});
});

//assign each preset button to change bg on click
document
	.getElementById("default-color")
	.addEventListener("click", () =>
		changeColorValues([44, 17, 57, 0, 48, 82])
	);
document
	.getElementById("experimental-color")
	.addEventListener("click", () =>
		changeColorValues([255, 0, 128, 0, 255, 128])
	);
document
	.getElementById("cadex-color")
	.addEventListener("click", () => changeColorValues([139, 0, 0, 0, 0, 0]));
document
	.getElementById("madness-color")
	.addEventListener("click", () =>
		changeColorValues([0, 0, 255, 128, 0, 128])
	);
document
	.getElementById("grimshaw-color")
	.addEventListener("click", () =>
		changeColorValues([204, 204, 1, 105, 55, 0])
	);
