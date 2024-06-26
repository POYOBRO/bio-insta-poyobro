document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById('audio-player');
    const muteButton = document.getElementById('mute-button');
    const volumeSlider = document.getElementById('volume-slider');

    // Set initial volume to match the audio player's volume
    volumeSlider.value = audioPlayer.volume;

    muteButton.addEventListener('click', function() {
        audioPlayer.muted = !audioPlayer.muted;
        muteButton.innerHTML = audioPlayer.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    });

    volumeSlider.addEventListener('input', function() {
        audioPlayer.volume = volumeSlider.value;
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel a');
    let start = null;

    function showNextImage(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
    
        // Change '300' to the width of your images
        let shift = progress * (window.innerWidth < 600 ? 100 : 300) / 1000; 
    
        carousel.style.transform = `translateX(-${shift}px)`;
    
        if (progress < 1000) {
            requestAnimationFrame(showNextImage);
        } else {
            start = null;
            carousel.appendChild(carousel.firstElementChild);
            carousel.style.transform = 'translateX(0)';
        }
    }
    
    setInterval(() => requestAnimationFrame(showNextImage), 2000);
});