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

function openjourney()
{
    let img2=document.querySelector(".img2");
    let journey=document.querySelector(".journey");

    img2.style.display="none";
    journey.style.display="none";
}