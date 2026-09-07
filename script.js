document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       LOADER
    ========================= */
    const loader = document.querySelector(".loader");

    function hideLoader() {
        if (loader) {
            loader.classList.add("hide");
        }
    }

    // Hide loader after page is completely loaded
    window.addEventListener("load", () => {
        setTimeout(hideLoader, 500);
    });

    // Safety fallback: loader can NEVER remain forever
    setTimeout(hideLoader, 2000);


    /* =========================
       TYPING ANIMATION
    ========================= */
    const phrases = [
        "Cloud & DevOps Fresher",
        "AWS Learner",
        "Linux Enthusiast",
        "Future Cloud Engineer"
    ];

    const typing = document.getElementById("typing");

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeText() {

        // Stop safely if typing element doesn't exist
        if (!typing) return;

        const currentPhrase = phrases[phraseIndex];

        if (deleting) {
            typing.textContent = currentPhrase.substring(
                0,
                charIndex
            );

            charIndex--;

            if (charIndex < 0) {
                deleting = false;
                charIndex = 0;

                phraseIndex++;

                if (phraseIndex >= phrases.length) {
                    phraseIndex = 0;
                }

                setTimeout(typeText, 350);
                return;
            }

            setTimeout(typeText, 42);

        } else {

            typing.textContent = currentPhrase.substring(
                0,
                charIndex
            );

            charIndex++;

            if (charIndex > currentPhrase.length) {
                deleting = true;

                setTimeout(typeText, 1300);
                return;
            }

            setTimeout(typeText, 78);
        }
    }

    typeText();


    /* =========================
       HEADER SCROLL EFFECT
    ========================= */
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        header.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );

    }, { passive: true });


    /* =========================
       MOBILE MENU
    ========================= */
    const menu = document.getElementById("menu");
    const nav = document.getElementById("nav");

    if (menu && nav) {

        menu.addEventListener("click", () => {

            nav.classList.toggle("open");
            menu.classList.toggle("open");

        });

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");
                menu.classList.remove("open");

            });

        });
    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {

        // Fallback for old browsers
        revealElements.forEach(element => {
            element.classList.add("show");
        });

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections =
        Array.from(
            document.querySelectorAll(
                "main section[id]"
            )
        );

    const navLinks =
        Array.from(
            document.querySelectorAll(
                "#nav a"
            )
        );

    function updateActiveNavigation() {

        let currentSection = "home";

        sections.forEach(section => {

            if (
                window.scrollY >=
                section.offsetTop - 170
            ) {

                currentSection =
                    section.id;

            }

        });

        navLinks.forEach(link => {

            const href =
                link.getAttribute("href");

            link.classList.toggle(
                "active",
                href === "#" + currentSection
            );

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =========================
       FLOATING PARTICLES
    ========================= */

    const particles =
        document.getElementById("particles");

    if (particles) {

        for (let i = 0; i < 42; i++) {

            const particle =
                document.createElement("i");

            particle.className = "particle";

            particle.style.left =
                Math.random() * 100 + "%";

            particle.style.animationDuration =
                8 + Math.random() * 16 + "s";

            particle.style.animationDelay =
                -Math.random() * 18 + "s";

            particle.style.opacity =
                0.12 + Math.random() * 0.35;

            particles.appendChild(
                particle
            );
        }
    }


    /* =========================
       BACK TO TOP BUTTON
    ========================= */

    const topButton =
        document.getElementById("top");

    if (topButton) {

        window.addEventListener(
            "scroll",
            () => {

                topButton.classList.toggle(
                    "show",
                    window.scrollY > 500
                );

            },
            { passive: true }
        );

        topButton.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );
    }


    /* =========================
       FOOTER YEAR
    ========================= */

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
