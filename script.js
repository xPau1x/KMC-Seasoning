
window.addEventListener("scroll", function(){
    const header = document.querySelector("nav");
    const dropList = document.querySelectorAll(".drop-list");
    header.classList.toggle("sticky", window.scrollY > 0);
    dropList.forEach(elem => elem.classList.toggle("sticky1", window.scrollY > 0)
)})



const section2 = document.querySelector(".s2");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("animate-in", entry.isIntersecting)
        })
    },
    {threshold: 0.5}
)
section2 => {observer.observe(section2)}


