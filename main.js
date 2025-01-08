$(document).ready(function() {

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