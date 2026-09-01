/* =========================================================
   RADHIKA'S SALON
   Website Interactions
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

   /* =====================================================
   INTRO VIDEO
   SHOW ONLY ONCE PER SESSION
===================================================== */

const introScreen = document.getElementById("introScreen");
const introVideo = document.getElementById("introVideo");

const introSeen =
    sessionStorage.getItem("radhikaIntroSeen");


function finishIntro() {

    if (!introScreen) return;

    introScreen.classList.add("intro-finished");

    document.body.classList.remove("intro-active");
    document.body.classList.add("intro-complete");

    sessionStorage.setItem(
        "radhikaIntroSeen",
        "true"
    );

    setTimeout(() => {

        introScreen.style.display = "none";

    }, 1100);
}


/* =====================================================
   IF INTRO WAS ALREADY SHOWN
===================================================== */

if (introSeen === "true") {

    if (introScreen) {
        introScreen.style.display = "none";
    }

    document.body.classList.remove("intro-active");
    document.body.classList.add("intro-complete");

}


/* =====================================================
   FIRST VISIT
===================================================== */

else {

    document.body.classList.add("intro-active");


    if (introVideo) {

        /* Video finished naturally */

        introVideo.addEventListener(
            "ended",
            finishIntro
        );


        /* Try autoplay */

        const playPromise =
            introVideo.play();


        if (playPromise !== undefined) {

            playPromise.catch(() => {

                finishIntro();

            });

        }


        /* Safety fallback */

        setTimeout(() => {

            if (
                introScreen &&
                !introScreen.classList.contains(
                    "intro-finished"
                )
            ) {

                finishIntro();

            }

        }, 10000);

    }

    else {

        finishIntro();

    }

}


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });


        navItems.forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");

            });

        });

    }


    /* =====================================================
       NAVBAR ON SCROLL
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".intro-content, .why-card, .service-card, .founder-image, .founder-content, .gallery-item, .review-card"
    );


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll("section[id]");


    const sectionObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");

                    navItems.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${currentId}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },
        {
            threshold: 0.35
        }
    );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });


    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function(event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    targetId === "#" ||
                    targetId === ""
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }


                event.preventDefault();


                const navbarHeight =
                    navbar ? navbar.offsetHeight : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            });

        });

});