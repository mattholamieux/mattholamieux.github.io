let scroll;
let bgSize = 90;
let lastScroll = 0;
let scrollDir = 1;
let scaleFactor = 0.9;


$(document).ready(function() {
    // window.scroll(0, 0);
    const body = document.getElementById('bg');
    const nav = document.getElementById('nav')
    let viewportHeight = window.innerHeight; // may need to change to window.screen.height for mobile?
    let width = $(window).width();
    const audioSection = document.getElementById('audio');
    const webSection = document.getElementById('web');
    const teachingSection = document.getElementById('teaching');
    const otherSection = document.getElementById('other');
    const aboutSection = document.getElementById('about');
    const audioButton = document.getElementById('audio-button');
    const webButton = document.getElementById('web-button');
    const teachingButton = document.getElementById('teaching-button');
    const otherButton = document.getElementById('other-button');
    const aboutButton = document.getElementById('about-button');

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
    let webSectionScrollTarget = audioSectionOffset.bottom.toFixed();
    let teachingSectionScrollTarget = webSectionOffset.bottom.toFixed();
    let otherSectionScrollTarget = teachingSectionOffset.bottom.toFixed();

    audioSection.scrollIntoView({ behavior: "smooth", block: "start" })
    audioSectionTop = audioSectionOffset.top + (viewportHeight * 0.7);
    scaleFactor = audioSectionTop / viewportHeight
    bgSize = scaleFactor * 90;
    body.style.backgroundSize = `${bgSize}%`;

    window.onscroll = function(e) {
        scroll = window.scrollY // Get scroll position
        audioSectionOffset = audioSection.getBoundingClientRect();
        audioSectionTop = audioSectionOffset.top + (viewportHeight * 0.7);
        audioSectionBottom = audioSectionOffset.bottom;

        webSectionOffset = webSection.getBoundingClientRect();
        webSectionTop = webSectionOffset.top + (viewportHeight * 0.7);
        webSectionBottom = webSectionOffset.bottom;

        teachingSectionOffset = teachingSection.getBoundingClientRect();
        teachingSectionTop = teachingSectionOffset.top + (viewportHeight * 0.7);
        teachingSectionBottom = teachingSectionOffset.bottom;

        otherSectionOffset = otherSection.getBoundingClientRect();
        otherSectionTop = otherSectionOffset.top + (viewportHeight * 0.7);
        otherSectionBottom = otherSectionOffset.bottom;


        if (audioSectionTop < viewportHeight && audioSectionBottom > viewportHeight / 2) {
            body.style.backgroundImage = "url(assets/audio.svg)"
            if (audioSectionTop > viewportHeight / 2) {
                scaleFactor = audioSectionTop / viewportHeight
            }
        } else if (webSectionTop < viewportHeight && webSectionBottom > viewportHeight / 2) {
            body.style.backgroundImage = "url(assets/web.svg)"

        } else if (teachingSectionTop < viewportHeight && teachingSectionBottom > viewportHeight / 2) {
            body.style.backgroundImage = "url(assets/teaching.svg)";

        } else if (otherSectionTop < viewportHeight && otherSectionBottom > viewportHeight / 2) {
            body.style.backgroundImage = "url(assets/other.svg)"
        } else if (otherSectionBottom < viewportHeight) {
            body.style.backgroundImage = "url(assets/about.svg)"
        }

        if (scaleFactor > 0.4) {
            bgSize = scaleFactor * 90;
        }
        body.style.backgroundSize = `${bgSize}%`;
    }

    audioButton.addEventListener('click', (e) => {
        e.preventDefault();
        audioSection.scrollIntoView({ behavior: "smooth", block: "start" })
    })
    webButton.addEventListener('click', (e) => {
        e.preventDefault();
        webSection.scrollIntoView({ behavior: "smooth", block: "start" })
    })
    teachingButton.addEventListener('click', (e) => {
        e.preventDefault();
        teachingSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    })

    otherButton.addEventListener('click', (e) => {
        e.preventDefault();
        otherSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    })

    aboutButton.addEventListener('click', (e) => {
        e.preventDefault();

        aboutSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    })

    window.addEventListener("resize", (e) => {
        e.preventDefault();
        if ($(window).width() != width) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            audioSectionTop = audioSectionOffset.top.toFixed();
            audioSectionBottom = audioSectionOffset.bottom.toFixed();
            audioSectionOffset = audioSection.getBoundingClientRect();
            webSectionOffset = webSection.getBoundingClientRect();
            webSectionTop = webSectionOffset.top.toFixed();
            webSectionBottom = webSectionOffset.bottom.toFixed();
            teachingSectionOffset = teachingSection.getBoundingClientRect();
            teachingSectionTop = teachingSectionOffset.top.toFixed();
            teachingSectionBottom = teachingSectionOffset.bottom.toFixed();
            otherSectionOffset = otherSection.getBoundingClientRect();
            otherSectionTop = otherSectionOffset.top.toFixed();
            otherSectionBottom = otherSectionOffset.bottom.toFixed();
            webSectionScrollTarget = audioSectionOffset.bottom.toFixed();
            teachingSectionScrollTarget = webSectionOffset.bottom.toFixed();
            otherSectionScrollTarget = teachingSectionOffset.bottom.toFixed();
        }
    });


})