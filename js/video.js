var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// Non-Video Controls

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = (video.volume*100) + "%";
});

document.querySelector("#slider").addEventListener("change",function() {
	console.log(this);
	console.log(this.value);
	var slide_value = this.value
	video.volume = (slide_value / 100);
	let vol = document.querySelector("#volume").innerHTML = (video.volume*100) + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage Video");
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function () {
	document.querySelector("video").classList.remove("oldSchool")
	console.log("Original Styling")
})

// Video Controls

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video")
	video.pause()
})

document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow it Down!");
	video.playbackRate = video.playbackRate * 0.95
	console.log(video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed it Up!");
	video.playbackRate = video.playbackRate * 1.05
	console.log(video.playbackRate)
})

var mute = document.getElementById("mute");

mute.addEventListener("click", function () {
	console.log("Mute Video")
	if (video.muted == true) {
		this.innerHTML = "Mute"
		video.muted = false;
	}
	else {
		this.innerHTML = "Unmute";
		video.muted = true;
	}
});

skip.addEventListener("click", function () {
	console.log("Original Location " + video.currentTime)
	if (video.currentTime < video.duration - 15) {
		video.currentTime = video.currentTime + 15;
		console.log("New Location " + video.currentTime)
	}
	else {
		video.currentTime = 0;
		console.log("New Location " + video.currentTime)
	}
})


