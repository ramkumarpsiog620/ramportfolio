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



const div22   = document.querySelector(".div22");
const img3    = document.querySelector(".img3");
const intrest = document.querySelector(".intrest");
const div221  = document.querySelector(".div221");
let likings   = document.querySelectorAll(".likings");
let observer1;

function openlikings() {
    img3.style.display = "none";
    intrest.style.display = "none";
    div221.style.display = "grid";
    div22.style.overflowX = "auto";
    div22.style.scrollbarWidth = "none";

    observer1 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        root: div221,
        threshold: 0.7
    });

   
        likings.forEach((item) => observer1.observe(item));
   
}

function closelikings() {
    img3.style.display = "block";
    intrest.style.display = "block";
    div221.style.display = "none";
    div22.style.overflowX = "hidden";
    div22.scrollLeft = 0;


}



const div321  = document.querySelector(".div321");
const img5    = document.querySelector(".img5");
const hobbies = document.querySelector(".hobbies");
let hobby     = document.querySelectorAll(".hobby");
let observer2;

function openhobbies() {
    img5.style.display = "none";
    hobbies.style.display = "none";
    div321.style.display = "grid";

    observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        root: div321,
        threshold: 0.7
    });

    
        hobby.forEach((item) => observer2.observe(item));
    
}

function closehobbies() {
    img5.style.display = "block";
    hobbies.style.display = "block";
    div321.style.display = "none";

}



const div311   = document.querySelector(".div311");
const img4    = document.querySelector(".img4");
const family = document.querySelector(".family");

function openfamily() {
    img4.style.display = "none";
    family.style.display = "none";
    div311.style.display = "block";
}

function closefamily() {
    img4.style.display = "block";
    family.style.display = "block";
    div311.style.display = "none";
}
/* ==========================================================================
   features.js - extra interactions required by the use-case document.
   js/main.js (the original scroll-fade, panel open/close and
   IntersectionObserver code) is left exactly as written; this file only ADDS.
   Vanilla JavaScript, no libraries.
   ========================================================================== */
(function () {
    "use strict";

    function $(selector, scope) {
        return (scope || document).querySelector(selector);
    }

    function $all(selector, scope) {
        return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
    }

    /* ---------- 1. Footer: current year (auto-generated) ---------- */
    var yearEl = $("#year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    /* ---------- 2. Hamburger menu (mobile) ---------- */
    var navToggle = $(".nav-toggle");
    var navLinks = $("#nav-links");

    function setMenu(open) {
        if (!navToggle || !navLinks) {
            return;
        }
        navLinks.classList.toggle("is-open", open);
        navToggle.classList.toggle("is-open", open);
        navToggle.setAttribute("aria-expanded", String(open));
    }

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", function () {
            setMenu(!navLinks.classList.contains("is-open"));
        });
    }

    /* ---------- 3. Smooth scrolling for anchor links ----------
       The page is a stack of 100vh layers (hero -> journey/interests ->
       family/hobbies) that stick and fade over each other, so a plain
       #anchor jump can land in the wrong place. Each target is mapped to the
       scroll position of the layer it lives in. Without JS the normal
       #anchor links still work. */
    var hero = $(".div1");

    function layerHeight() {
        return hero ? hero.offsetHeight : window.innerHeight;
    }

    function targetTop(hash) {
        var unit = layerHeight();
        switch (hash) {
            case "#hero":
                return 0;
            case "#journey":
            case "#interests":
                return unit;
            case "#family":
            case "#hobbies":
                return unit * 2;
            case "#footer":
                return document.documentElement.scrollHeight - window.innerHeight;
            default:
                return null;
        }
    }

    var navAnchors = $all('.nav-links a, .nav-brand, .btn[href^="#"]');
    var menuLinks = $all(".nav-links a");

    function setActive(link) {
        menuLinks.forEach(function (item) {
            item.classList.toggle("is-active", item === link);
        });
    }

    navAnchors.forEach(function (anchor) {
        anchor.addEventListener("click", function (event) {
            var hash = anchor.getAttribute("href");
            var top = targetTop(hash);
            if (top === null) {
                return;
            }
            event.preventDefault();
            window.scrollTo({ top: top, behavior: "smooth" });
            setMenu(false);
            var match = menuLinks.filter(function (item) {
                return item.getAttribute("href") === hash;
            })[0];
            if (match) {
                setActive(match);
            }
        });
    });

    /* highlight the nav link that matches the layer currently on screen */
    function layerIndex() {
        var unit = layerHeight();
        var y = window.scrollY;
        var atBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 4;
        if (atBottom) {
            return 3;
        }
        return Math.min(2, Math.round(y / unit));
    }

    var layerHashes = [
        ["#hero"],
        ["#journey", "#interests"],
        ["#family", "#hobbies"],
        ["#footer"]
    ];

    window.addEventListener("scroll", function () {
        var group = layerHashes[layerIndex()];
        var current = menuLinks.filter(function (item) {
            return item.classList.contains("is-active");
        })[0];
        if (current && group.indexOf(current.getAttribute("href")) !== -1) {
            return;
        }
        var next = menuLinks.filter(function (item) {
            return item.getAttribute("href") === group[0];
        })[0];
        if (next) {
            setActive(next);
        }
    });

    /* ---------- 4. Keyboard support for the clickable panel headings ---------- */
    $all('[role="button"]').forEach(function (el) {
        el.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                el.click();
            }
        });
    });

    /* ---------- 5. Journey timeline: "Show more" toggle ---------- */
    $all(".step-toggle").forEach(function (button) {
        button.addEventListener("click", function () {
            var step = button.closest(".step");
            var expanded = step.classList.toggle("is-expanded");
            button.setAttribute("aria-expanded", String(expanded));
            button.textContent = expanded ? "Show less" : "Show more";
            step.scrollIntoView({ block: "nearest", behavior: "smooth" });
        });
    });

    /* ---------- 6. Family: flip cards (tap / Enter / Space; hover is CSS) ---------- */
    $all(".flip-card").forEach(function (card) {
        card.addEventListener("click", function () {
            card.classList.toggle("is-flipped");
        });
        card.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                card.classList.toggle("is-flipped");
            }
        });
    });

    /* ---------- 7. Lightbox / modal for interest + hobby cards ---------- */
    var lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Expanded view");

    var closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "lightbox-close";
    closeButton.setAttribute("aria-label", "Close expanded view");
    closeButton.innerHTML = "&times;";

    var figure = document.createElement("figure");
    figure.className = "lightbox-figure";

    var lightboxImg = document.createElement("img");
    lightboxImg.className = "lightbox-img";
    lightboxImg.alt = "";

    var caption = document.createElement("figcaption");
    caption.className = "lightbox-caption";

    var lightboxTitle = document.createElement("h3");
    lightboxTitle.className = "lightbox-title";

    var lightboxText = document.createElement("p");
    lightboxText.className = "lightbox-text";

    caption.appendChild(lightboxTitle);
    caption.appendChild(lightboxText);
    figure.appendChild(lightboxImg);
    figure.appendChild(caption);
    lightbox.appendChild(closeButton);
    lightbox.appendChild(figure);
    document.body.appendChild(lightbox);

    var lastFocused = null;

    function openLightbox(card) {
        var img = $("img", card);
        var title = $(".card-title", card);
        var text = $(".card-text", card);

        lastFocused = document.activeElement;
        lightboxImg.hidden = !img;
        if (img) {
            lightboxImg.src = img.currentSrc || img.src;
            lightboxImg.alt = img.alt;
        }
        lightboxTitle.textContent = title ? title.textContent : "";
        lightboxText.textContent = text ? text.textContent.replace(/\s+/g, " ").trim() : "";

        lightbox.classList.add("is-open");
        document.body.classList.add("no-scroll");
        closeButton.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove("is-open");
        document.body.classList.remove("no-scroll");
        if (lastFocused && lastFocused.focus) {
            lastFocused.focus();
        }
    }

    $all(".likings, .hobby").forEach(function (card) {
        card.addEventListener("click", function () {
            openLightbox(card);
        });
        card.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox(card);
            }
        });
    });

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
            closeLightbox();
        }
    });

    /* ---------- 8. Back-to-top button (footer) ---------- */
    var backToTop = $("#back-to-top");
    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActive(menuLinks[0]);
        });
    }
})();

const themeBtn = document.getElementById("theme-toggle");

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", theme);
}

setTheme(localStorage.getItem("theme") || "light");

themeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
});
