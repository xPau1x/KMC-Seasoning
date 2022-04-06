
window.addEventListener("scroll", function(){
    const header = document.querySelector("nav");
    const dropList = document.querySelectorAll(".drop-list");
    header.classList.toggle("sticky", window.scrollY > 0);
    dropList.forEach(elem => elem.classList.toggle("sticky1", window.scrollY > 0)
)})



window.addEventListener("scroll", function(){
    const sectionOne = document.querySelector("#hslide");
    let shift = window.scrollY/7;
    sectionOne.style.backgroundPosition = 0+'% '+shift+'%';
})



const slideIn = document.querySelector(".slidein2");
const slideInR = document.querySelector("#p1");

const observer1 = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("animate-in", entry.isIntersecting)
            if (entry.isIntersecting) observer1.unobserve(entry.target)
        })
    },
    {
        rootMargin: "-110px",
        threshold: 0.5
    }
)
const observer2 = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("animate-in-r", entry.isIntersecting)
            if (entry.isIntersecting) observer2.unobserve(entry.target)
        })
    },
    {
        rootMargin: "-110px",
        threshold: 0.5
    }
)
observer1.observe(slideIn);
observer2.observe(slideInR);


