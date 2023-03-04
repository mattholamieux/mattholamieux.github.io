let scroll;
let bgSize = 90;
let lastScroll = 0;
let scrollDir = 1;
let viewportHeight = window.innerHeight;



$(document).ready(function() {

    const body = document.getElementById('body');
    body.style.backgroundSize = `${bgSize}%`;

    const firstAudio = document.getElementById('first-audio');
    let firstAudioOffset = firstAudio.getBoundingClientRect();
    let firstAudioTop = firstAudioOffset.top;

    const lastAudio = document.getElementById('last-audio');
    let lastAudioOffset = lastAudio.getBoundingClientRect();
    let lastAudioTop = lastAudioOffset.top;

    const firstWeb = document.getElementById('first-web');
    let firstWebOffset = firstWeb.getBoundingClientRect();
    let firstWebTop = firstWebOffset.top;

    const lastWeb = document.getElementById('last-web');
    let lastWebOffset = lastWeb.getBoundingClientRect();
    let lastWebTop = lastWebOffset.top;

    window.onscroll = function(e) {
        scroll = window.scrollY // Get scroll position
        body.style.backgroundSize = `${bgSize}%`;

        if (scroll > 0 && lastAudioTop > 0) {
            body.style.backgroundImage = "url(assets/audio.svg)"
            if (scrollDir === 1 && bgSize > 50) {
                bgSize--;
            } else if (scrollDir === -1 && bgSize < 90 && firstAudioTop > viewportHeight) {
                bgSize++;
            }
        } else if (lastAudioTop < 0 && lastWebTop > 0) {
            body.style.backgroundImage = "url(assets/web.svg)"
        } else if (lastWebTop < 0) {
            body.style.backgroundImage = "url(assets/teaching.svg)"
        }

        firstAudioOffset = firstAudio.getBoundingClientRect();
        firstAudioTop = firstAudioOffset.top;

        lastAudioOffset = lastAudio.getBoundingClientRect();
        lastAudioTop = lastAudioOffset.top;

        firstWebOffset = firstWeb.getBoundingClientRect();
        firstWebTop = firstWebOffset.top;

        lastWebOffset = lastWeb.getBoundingClientRect();
        lastWebTop = lastWebOffset.top;

        console.log(firstWebTop);

        if (scrollY > lastScroll) {
            scrollDir = 1;
            // lastScroll = scrollY;
        } else {
            scrollDir = -1;
        }
        lastScroll = scrollY;
    }

});