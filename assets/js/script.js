


// this is for  gallery slider
{
    const marqueeSpeed = document.querySelector('.marquee-carousel').dataset.speed || 8000;
    const marqueeCarousel = new Swiper(".marquee-carousel", {
        slidesPerView: "auto",
        spaceBetween: 24,
        loop: true,
        speed: parseInt(marqueeSpeed),
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        grabCursor: false,
    });

    // Reverse marquee
    const reverseSpeed = document.querySelector('.reverse-marquee-carousel').dataset.speed || 8000;
    const reverseCarousel = new Swiper(".reverse-marquee-carousel", {
        slidesPerView: "auto",
        spaceBetween: 24,
        loop: true,
        speed: parseInt(reverseSpeed),
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: true,
        },
        grabCursor: false,
    });

}

// this is for review slider
{
    let swiper = new Swiper(".review_slider", {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });
}

// this is for fixed on scroll
{
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 10) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
}
// this is for fixed button on scroll
{
    window.addEventListener("scroll", () => {
        const fixedBtn = document.getElementById("book_wrap_fixed");
        if (window.scrollY > 600) {
            fixedBtn.classList.add("active");
        } else {
            fixedBtn.classList.remove("active");
        }
    });
}

// this is for mobile hamburger
{
    const menu = document.getElementById("header_right");
    const hamburger = document.getElementById("hamburger");
    const header = document.getElementById("header");
    const body = document.querySelector("body");
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        header.classList.toggle("menu_active");
        hamburger.classList.toggle("menu_active");
        body.classList.toggle("menu_active");
    });
}

// this is for booking modal
{
    const popup = document.querySelector("#booking_modal");
    const body = document.querySelector("body");
    const increase = document.querySelector("#increase");
    const decrease = document.querySelector("#decrease");
    const people = document.querySelector("#people");
    const form = document.getElementById("booking_form");
    const inputs = form.querySelectorAll("input, textarea");
    const submitBtn = document.getElementById("booking_submit");

    function openModal() {
        popup.classList.add("show");
    }

    function closeModal() {
        popup.classList.remove("show");
        if (popup.classList.contains("submitted")) {
            popup.classList.remove("submitted");
        }

    }
    body.addEventListener("click", (event) => {
        if (event.target.id === "booking_modal") {
            popup.classList.remove("show");
        }
    })

    function updateButtonState() {
        if (Number(people.value) <= 1) {
            decrease.disabled = true;
        } else {
            decrease.disabled = false;
        }
    }
    updateButtonState();

    increase.addEventListener("click", () => {
        people.value = Number(people.value) + 1;
        updateButtonState();
    });

    decrease.addEventListener("click", () => {
        if (Number(people.value) > 1) {
            people.value = Number(people.value) - 1;
        }
        updateButtonState();
    });


    function checkInputs() {
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
        submitBtn.disabled = !allFilled;
    }

    inputs.forEach(input => {
        input.addEventListener("input", checkInputs);
    });
    checkInputs();

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        popup.classList.add("submitted");
        form.reset();
    });

}

// this is for magnific popup
{
    $(document).ready(function () {


        $('.gallery_sec').magnificPopup({
            delegate: 'a.lightshoot',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $('.identity_popup').magnificPopup({
            type: 'iframe'
        });
    });
}