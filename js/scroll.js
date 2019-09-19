const about = document.querySelector('#about');
const aboutSection = document.querySelector('#about-me');

const isInViewport = (section) => {
    const bounding = section.getBoundingClientRect();
    return (
        bounding.top >= -15 &&
        bounding.left >= 0 &&
        // bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

 const animateAbout = () => {
    window.addEventListener('scroll', () => {
        if (isInViewport(aboutSection)) {
            about.classList.remove("invisible");
            about.classList.add("visible","animated", "fadeInLeft", "slow");
        }
    }, false);
}

const technologies = document.querySelector('#technologies');


 const animateTechnologies = () => {
    window.addEventListener('scroll', () => {
        if (isInViewport(aboutSection)) {
            technologies.classList.remove("invisible");
            technologies.classList.add("visible", "animated", "fadeInRight", "slow");
        }
    }, false);
}

animateAbout();
animateTechnologies();
