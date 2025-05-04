
document.querySelector(".about-link").addEventListener("click", () => {
    document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".skills-link").addEventListener("click", () => {
    document.querySelector(".skill_container").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".achievements-link").addEventListener("click", () => {
    document.querySelector(".achievement_cont").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".contact-link").addEventListener("click", () => {
    document.querySelector(".cont_con").scrollIntoView({ behavior: "smooth" });
});

const elements = document.querySelectorAll(".animate");

const scrollAnimation = () => {
    elements.forEach(element => {
        let position = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateX(0)";
        }
    });
};

window.addEventListener("scroll", scrollAnimation);
scrollAnimation(); // Initial check

