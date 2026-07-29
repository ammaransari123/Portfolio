// ===========================
// Smooth Scrolling
// ===========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ===========================
// Active Navbar Link
// ===========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===========================
// Contact Form
// ===========================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if(name === "" || email === "" || message === ""){

        alert("Please fill all fields.");

        return;
    }

    alert("Message Sent Successfully!");

    form.reset();

});


// ===========================
// Scroll Animation
// ===========================

const cards = document.querySelectorAll(".card, .skill");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card=>{
    observer.observe(card);
});