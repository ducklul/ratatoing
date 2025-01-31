// Ratatoing
const watchRatatoingButton = document.getElementById("watchRatatoing");
const ratatoingModal = document.getElementById("ratatoingModal");
const ratatoingVideo = document.getElementById("ratatoingVideo");
const ratatoingSpeedSlider = document.getElementById("ratatoingSpeedSlider");
const ratatoingSpeedValue = document.getElementById("ratatoingSpeedValue");

// Balloon to the Rescue
const watchBalloonToTheRescueButton = document.getElementById("watchBalloonToTheRescue");
const balloonToTheRescueModal = document.getElementById("balloonToTheRescueModal");
const balloonToTheRescueVideo = document.getElementById("balloonToTheRescueVideo");
const balloonToTheRescueSpeedSlider = document.getElementById("balloonToTheRescueSpeedSlider");
const balloonToTheRescueSpeedValue = document.getElementById("balloonToTheRescueSpeedValue");

// Close buttons for both modals
const closeButtons = document.querySelectorAll(".close");

// Open Ratatoing modal and play video
watchRatatoingButton.addEventListener("click", function () {
    ratatoingModal.style.display = "block";
    ratatoingVideo.play();
});

// Open Balloon to the Rescue modal and play video
watchBalloonToTheRescueButton.addEventListener("click", function () {
    balloonToTheRescueModal.style.display = "block";
    balloonToTheRescueVideo.play();
});

// Close modals, stop videos, and reset playback
closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const modal = button.closest(".modal");
        modal.style.display = "none";
        const video = modal.querySelector("video");
        video.pause();
        video.currentTime = 0; // Reset playback position
    });
});

// Close modals if the user clicks outside the content area
window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
        const video = event.target.querySelector("video");
        video.pause();
        video.currentTime = 0; // Reset playback position
    }
});

// Update playback speed for Ratatoing
ratatoingSpeedSlider.addEventListener("input", function () {
    let speed = parseFloat(ratatoingSpeedSlider.value);
    ratatoingVideo.playbackRate = speed;
    ratatoingSpeedValue.textContent = `${speed.toFixed(2)}x`;
});

// Update playback speed for Balloon to the Rescue
balloonToTheRescueSpeedSlider.addEventListener("input", function () {
    let speed = parseFloat(balloonToTheRescueSpeedSlider.value);
    balloonToTheRescueVideo.playbackRate = speed;
    balloonToTheRescueSpeedValue.textContent = `${speed.toFixed(2)}x`;
});
