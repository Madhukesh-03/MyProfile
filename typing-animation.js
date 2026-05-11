const typingText =
    document.getElementById("typing-text");

const roles = [
    "MERN Stack Developer",
    "Frontend Developer",
    "UI/UX Enthusiast",
    "Data Science Graduate",
    "Trainee Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole =
        roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.slice(0, charIndex++);

    } else {

        typingText.textContent =
            currentRole.slice(0, charIndex--);

    }

    let speed = 120;

    if (!isDeleting &&
        charIndex === currentRole.length + 1) {

        speed = 1500;
        isDeleting = true;

    } else if (
        isDeleting &&
        charIndex === 0
    ) {

        isDeleting = false;

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

    }

    setTimeout(typeEffect, speed);

}

typeEffect();