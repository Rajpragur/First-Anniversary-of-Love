// Target date for the proposal
var start = new Date(2024, 11, 7, 20, 0); // 11 = December (Months are 0-indexed)
var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

function timer() {
	// Calculate time difference
	var now = new Date();
	var t = now - start;
	var d = Math.floor(t / 1000 / 60 / 60 / 24);
	var h = Math.floor((t / 1000 / 60 / 60) % 24);
	if (h < 10) {
		h = "0" + h;
	}
	var m = Math.floor((t / 1000 / 60) % 60);
	if (m < 10) {
		m = "0" + m;
	}
	var s = Math.floor((t / 1000) % 60);
	if (s < 10) {
		s = "0" + s;
	}

	// Update the countdown display
	document.getElementById("d").innerHTML = d >= 0 ? d : 0; // Prevent negative values before 7th December 2024
	document.getElementById("h").innerHTML = h;
	document.getElementById("m").innerHTML = m;
	document.getElementById("s").innerHTML = s;
}

function fadein() {
	if (val < 1) {
		val += 0.025;
		dv.style.opacity = val;
	} else {
		clearInterval(fadeinInterval);
		if (ok == 2) {
			ok += 1;
		}
	}
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function () {
	if (ok == 2) {
		clearInterval(fadeInterval);
		fadeinInterval = setInterval(fadein, 50);
	}
}, 50);
