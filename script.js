const watchButton = document.getElementById("watchButton");
const videoModal = document.getElementById("videoModal");
const closeModal = document.querySelector(".close");
const video = document.getElementById("videoPlayer");
const speedSlider = document.getElementById("speedSlider");
const speedValue = document.getElementById("speedValue");

// Set the maximum value of the speed slider to 16
speedSlider.max = 16;

// Open the modal and play the video
watchButton.addEventListener("click", function () {
    videoModal.style.display = "block";
    video.play();
});

// Close the modal, stop the video, and reset playback
closeModal.addEventListener("click", function () {
    videoModal.style.display = "none";
    video.pause();
    video.currentTime = 0; // Reset playback position
});

// Close the modal if the user clicks outside the content area
window.addEventListener("click", function (event) {
    if (event.target == videoModal) {
        videoModal.style.display = "none";
        video.pause();
        video.currentTime = 0; // Reset playback position
    }
});

// Update playback speed based on slider value
speedSlider.addEventListener("input", function () {
    let speed = parseFloat(speedSlider.value);

    // Set the playback speed
    video.playbackRate = speed;
    speedValue.textContent = `${speed.toFixed(2)}x`;
});
