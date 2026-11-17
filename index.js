let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");

window.addEventListener("scroll", () => {

    const innerheight = window.innerHeight;


    let opacity1 = 1 - (window.scrollY / innerheight);

    div1.style.opacity = Math.max(0, Math.min(1, opacity1));


  
    let div3Position = div3.getBoundingClientRect().top;

    let opacity2 = div3Position / innerheight;

    div2.style.opacity = Math.max(0, Math.min(1, opacity2));

});

let img2=document.querySelector(".img2");
let journey=document.querySelector(".journey");
let div212=document.querySelector(".div212");
let div21=document.querySelector(".div21");
function openjourney()
{

    img2.style.display="none";
    journey.style.display="none";
    div212.style.display="block";
    div21.style.overflowY = "auto";
    div21.style.scrollbarWidth = "none";
}
function closejourney()
{


    img2.style.display="block";
    journey.style.display="block";
    div212.style.display="none";
     div21.style.overflowY = "hidden";

}

let steps = document.querySelectorAll(".step");

let observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }

    });

}, {
    threshold: 0.7
});

steps.forEach((step) => {
    observer.observe(step);
});