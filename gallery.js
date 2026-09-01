/* =========================================================
   RADHIKA'S SALON & ACADEMY
   FULL GALLERY
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxVideo = document.getElementById("lightboxVideo");

const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const galleryItems = document.querySelectorAll(".gallery-item");


/* =========================================================
   GALLERY DATA
========================================================= */

const mediaItems = Array.from(galleryItems).map((item) => {

    const image = item.querySelector("img");
    const video = item.querySelector("video");

    if (video) {

        const source = video.querySelector("source");

        return {
            type: "video",
            src: source ? source.src : video.currentSrc
        };

    }

    if (image) {

        return {
            type: "image",
            src: image.src,
            alt: image.alt
        };

    }

    return null;

}).filter(Boolean);


/* =========================================================
   CURRENT ITEM
========================================================= */

let currentIndex = 0;


/* =========================================================
   OPEN LIGHTBOX
========================================================= */

function openLightbox(index) {

    if (!mediaItems.length) return;

    currentIndex = index;

    const item = mediaItems[currentIndex];

    lightbox.classList.add("active");

    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";


    /* -----------------------------------------
       IMAGE
    ----------------------------------------- */

    if (item.type === "image") {

        lightboxImage.src = item.src;
        lightboxImage.alt = item.alt || "Radhika's Salon";

        lightboxImage.style.display = "block";

        lightboxVideo.pause();
        lightboxVideo.removeAttribute("src");
        lightboxVideo.load();

        lightboxVideo.style.display = "none";

    }


    /* -----------------------------------------
       VIDEO
    ----------------------------------------- */

    if (item.type === "video") {

        lightboxImage.style.display = "none";

        lightboxImage.removeAttribute("src");

        lightboxVideo.style.display = "block";

        lightboxVideo.src = item.src;

        lightboxVideo.currentTime = 0;

        lightboxVideo.play().catch(() => {});

    }

}


/* =========================================================
   CLOSE LIGHTBOX
========================================================= */

function closeLightbox() {

    lightbox.classList.remove("active");

    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    lightboxVideo.pause();

    lightboxVideo.removeAttribute("src");

    lightboxVideo.load();

    lightboxImage.removeAttribute("src");

}


/* =========================================================
   NEXT
========================================================= */

function showNext() {

    currentIndex =
        (currentIndex + 1) % mediaItems.length;

    openLightbox(currentIndex);

}


/* =========================================================
   PREVIOUS
========================================================= */

function showPrevious() {

    currentIndex =
        (currentIndex - 1 + mediaItems.length)
        % mediaItems.length;

    openLightbox(currentIndex);

}


/* =========================================================
   CLICK GALLERY ITEM
========================================================= */

galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        openLightbox(index);

    });

});


/* =========================================================
   BUTTONS
========================================================= */

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


if (lightboxNext) {

    lightboxNext.addEventListener(
        "click",
        showNext
    );

}


if (lightboxPrev) {

    lightboxPrev.addEventListener(
        "click",
        showPrevious
    );

}


/* =========================================================
   CLICK OUTSIDE MEDIA
========================================================= */

if (lightbox) {

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }


    if (event.key === "Escape") {

        closeLightbox();

    }


    if (event.key === "ArrowRight") {

        showNext();

    }


    if (event.key === "ArrowLeft") {

        showPrevious();

    }

});