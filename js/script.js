/* =========================================
   MAHAK CHAUHAN PORTFOLIO
   MAIN JAVASCRIPT
========================================= */


// =========================================
// WAIT FOR PAGE TO LOAD
// =========================================

document.addEventListener("DOMContentLoaded", function () {


    // =====================================
    // CURRENT YEAR
    // =====================================

    const copyright =
        document.querySelector(".footer-copyright");


    if (copyright) {

        const currentYear =
            new Date().getFullYear();


        copyright.textContent =
            `© ${currentYear} Mahak Chauhan. All rights reserved.`;

    }



    // =====================================
    // NAVIGATION ACTIVE STATE
    // =====================================

    const navigationLinks =
        document.querySelectorAll(".navigation a");


    navigationLinks.forEach(function (link) {


        link.addEventListener("click", function () {


            navigationLinks.forEach(function (item) {

                item.classList.remove("active");

            });


            this.classList.add("active");

        });

    });



    // =====================================
    // PROJECT CARD HOVER EFFECT
    // =====================================

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach(function (card) {


        card.addEventListener(
            "mouseenter",
            function () {

                this.classList.add("card-hover");

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                this.classList.remove("card-hover");

            }
        );

    });



    // =====================================
    // BUTTON PRESS EFFECT
    // =====================================

    const buttons =
        document.querySelectorAll(
            ".primary-button, .secondary-button, .contact-button"
        );


    buttons.forEach(function (button) {


        button.addEventListener("click", function () {


            this.classList.add("button-clicked");


            const clickedButton = this;


            setTimeout(function () {

                clickedButton.classList.remove(
                    "button-clicked"
                );

            }, 120);

        });

    });



    // =====================================
    // SCROLL REVEAL
    // =====================================

    const revealSections =
        document.querySelectorAll(
            ".project_section, .about-skills-section, .contact-section"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {


                entries.forEach(function (entry) {


                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });


            },
            {
                threshold: 0.12
            }
        );


    revealSections.forEach(function (section) {

        observer.observe(section);

    });



    // =====================================
    // SKILLS CARD CLICK EFFECT
    // =====================================

    const skillCards =
        document.querySelectorAll(".skills-card");


    skillCards.forEach(function (card) {


        card.addEventListener("click", function () {

            // Add active class when clicked
            // Remove it if clicked again

            this.classList.toggle("active");

        });

    });



    // =====================================
    // RESUME PAGE JAVASCRIPT
    // =====================================


    // =====================================
    // RESUME NAVIGATION ACTIVE STATE
    // =====================================

    const resumeNavigationLinks =
        document.querySelectorAll("header nav a");


    const currentPage =
        window.location.pathname.split("/").pop() || "home.html";


    resumeNavigationLinks.forEach(function (link) {


        const linkPage =
            link.getAttribute("href");


        if (linkPage === currentPage) {

            link.classList.add("text-[#8B5CF6]");

        }


        link.addEventListener("click", function () {


            resumeNavigationLinks.forEach(function (item) {

                item.classList.remove("text-[#8B5CF6]");

            });


            this.classList.add("text-[#8B5CF6]");

        });

    });



    // =====================================
    // TECHNICAL SKILL CLICK EFFECT
    // =====================================

    const technicalSkills =
        document.querySelectorAll(
            ".group.cursor-pointer"
        );


    technicalSkills.forEach(function (skill) {


        skill.addEventListener("click", function () {


            this.classList.toggle(
                "border-[#8B5CF6]"
            );

        });

    });



    // =====================================
    // RESUME BUTTON PRESS EFFECT
    // =====================================

    const resumeButtons =
        document.querySelectorAll(
            'a[href*="Mahak_Chauhan_Resume.pdf"], a[href*="YOUR-LINKEDIN-URL"]'
        );


    resumeButtons.forEach(function (button) {


        button.addEventListener("click", function () {


            this.classList.add("scale-95");


            const clickedButton = this;


            setTimeout(function () {

                clickedButton.classList.remove(
                    "scale-95"
                );

            }, 120);

        });

    });



    // =====================================
    // PROJECT LINK CLICK EFFECT
    // =====================================

    const projectLinks =
        document.querySelectorAll(
            'a[href*="github.com/mahakchauhan005-bit"]'
        );


    projectLinks.forEach(function (link) {


        link.addEventListener("click", function () {


            this.classList.add("opacity-70");


            const clickedLink = this;


            setTimeout(function () {

                clickedLink.classList.remove(
                    "opacity-70"
                );

            }, 150);

        });

    });



    // =====================================
    // CONTACT LINK CLICK EFFECT
    // =====================================

    const contactLinks =
        document.querySelectorAll(
            ".contact-item, a[href^='mailto:']"
        );


    contactLinks.forEach(function (link) {


        link.addEventListener("click", function () {


            this.classList.add("opacity-70");


            const clickedLink = this;


            setTimeout(function () {

                clickedLink.classList.remove(
                    "opacity-70"
                );

            }, 150);

        });

    });



       // =========================================
// CONTACT FORM
// =========================================
// Submit the form to Formspree using JavaScript,
// then redirect the visitor to the custom thank-you page.

const contactForm =
    document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        // Stop the browser from opening Formspree's default page.
        event.preventDefault();

        const formData =
            new FormData(contactForm);

        try {

            const response =
                await fetch(contactForm.action, {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                });

            if (response.ok) {

                // Redirect to your custom thank-you page.
                window.location.href =
                    "thank-you.html";

            } else {

                alert(
                    "Something went wrong while sending your message. Please try again."
                );

            }

        } catch (error) {

            alert(
                "Unable to send your message. Please check your internet connection and try again."
            );

        }

    });

}
});