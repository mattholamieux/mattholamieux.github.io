let scroll;
let bgSize = 90;
let lastScroll = 0;
let scrollDir = 1;
let scaleFactor = 0.9;


$(document).ready(function() {
    window.scroll(0, 0);
    const body = document.getElementById('body');
    body.style.backgroundSize = `${bgSize}%`;
    const nav = document.getElementById('nav')
    let viewportHeight = window.innerHeight; // may need to change to window.screen.height for mobile?
    const audioSection = document.getElementById('audio');
    const webSection = document.getElementById('web');
    const teachingSection = document.getElementById('teaching');
    const otherSection = document.getElementById('other');
    const audioButton = document.getElementById('audio-button');
    const webButton = document.getElementById('web-button');
    const teachingButton = document.getElementById('teaching-button');
    const otherButton = document.getElementById('other-button');
    const downArrow = document.getElementById('down-arrow');

    let audioSectionOffset = audioSection.getBoundingClientRect();
    let audioSectionTop = audioSectionOffset.top.toFixed();
    let audioSectionBottom = audioSectionOffset.bottom.toFixed();
    let webSectionOffset = webSection.getBoundingClientRect();
    let webSectionTop = webSectionOffset.top.toFixed();
    let webSectionBottom = webSectionOffset.bottom.toFixed();
    let teachingSectionOffset = teachingSection.getBoundingClientRect();
    let teachingSectionTop = teachingSectionOffset.top.toFixed();
    let teachingSectionBottom = teachingSectionOffset.bottom.toFixed();
    let otherSectionOffset = otherSection.getBoundingClientRect();
    let otherSectionTop = otherSectionOffset.top.toFixed();
    let otherSectionBottom = otherSectionOffset.bottom.toFixed();
    const webSectionScrollTarget = audioSectionOffset.bottom.toFixed();
    const teachingSectionScrollTarget = webSectionOffset.bottom.toFixed();
    const otherSectionScrollTarget = teachingSectionOffset.bottom.toFixed();
    console.log(viewportHeight)


    window.onscroll = function(e) {
        scroll = window.scrollY // Get scroll position
            // body.style.backgroundSize = `${bgSize}%`;

        audioSectionOffset = audioSection.getBoundingClientRect();
        audioSectionTop = audioSectionOffset.top.toFixed();
        audioSectionBottom = audioSectionOffset.bottom.toFixed();

        webSectionOffset = webSection.getBoundingClientRect();
        webSectionTop = webSectionOffset.top.toFixed();
        webSectionBottom = webSectionOffset.bottom.toFixed();

        teachingSectionOffset = teachingSection.getBoundingClientRect();
        teachingSectionTop = teachingSectionOffset.top.toFixed();
        teachingSectionBottom = teachingSectionOffset.bottom.toFixed();

        otherSectionOffset = otherSection.getBoundingClientRect();
        otherSectionTop = otherSectionOffset.top.toFixed();
        otherSectionBottom = otherSectionOffset.bottom.toFixed();


        if (audioSectionTop < viewportHeight && audioSectionBottom > viewportHeight / 2) {
            body.style.backgroundImage = "url(assets/audio.svg)"
            body.style.backgroundColor = '#2727e6';
            nav.style.backgroundColor = '#2727e6b0';
            // downArrow.style.display = "none";
            if (audioSectionTop > viewportHeight / 2) {
                scaleFactor = audioSectionTop / viewportHeight
            }
        } else if (webSectionTop < viewportHeight && webSectionBottom > viewportHeight / 2) {
            body.style.backgroundImage = "url(assets/web.svg)"
            body.style.backgroundColor = '#6600ff';
            nav.style.backgroundColor = '#6600ffb0';
            if (webSectionTop > viewportHeight / 2) {
                scaleFactor = (1.5 + ((webSectionTop / viewportHeight) * -1));
            }
        } else if (teachingSectionTop < viewportHeight && teachingSectionBottom > viewportHeight / 2) {
            body.style.backgroundImage = "url(assets/teaching.svg)";
            body.style.backgroundColor = '#666699';
            nav.style.backgroundColor = '#666699b0';
            if (teachingSectionTop > viewportHeight / 2) {
                scaleFactor = (teachingSectionTop / viewportHeight);
            }
        } else if (otherSectionTop < viewportHeight && otherSectionBottom > viewportHeight / 2) {
            body.style.backgroundImage = "url(assets/other.svg)"
            body.style.backgroundColor = '#009999';
            nav.style.backgroundColor = '#009999b0';
            if (otherSectionTop > viewportHeight / 2) {
                scaleFactor = (1.5 + ((otherSectionTop / viewportHeight) * -1));
            }
        }
        // console.log(audioSectionTop)
        if (audioSectionTop < viewportHeight - 100) {
            downArrow.style.visibility = "hidden";
        } else {
            // console.log('visible')
            downArrow.style.visibility = "visible";
        }

        if (scaleFactor > 0.4) {
            bgSize = scaleFactor * 90;
        }
        body.style.backgroundSize = `${bgSize}%`;
    }

    audioButton.addEventListener('click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
    webButton.addEventListener('click', () => {
        // webScrollTarget.scrollIntoView({ behavior: 'smooth', block: 'end' });
        window.scroll({
            top: webSectionScrollTarget,
            left: 0,
            behavior: 'smooth'
        });
    })
    teachingButton.addEventListener('click', () => {
        // webScrollTarget.scrollIntoView({ behavior: 'smooth', block: 'end' });
        window.scroll({
            top: teachingSectionScrollTarget,
            left: 0,
            behavior: 'smooth'
        });
    })

    otherButton.addEventListener('click', () => {
        // webScrollTarget.scrollIntoView({ behavior: 'smooth', block: 'end' });
        window.scroll({
            top: otherSectionScrollTarget,
            left: 0,
            behavior: 'smooth'
        });
    })


})