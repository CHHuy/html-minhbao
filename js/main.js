// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.
import "../third_party/bootstrap/dist/js/bootstrap.bundle.min.js";

//
// Place any custom JS here
//

function bannerSwiper () {
  var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });

    var swiper2 = new Swiper(".mySwiper2", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new bootstrap.Popover(popover);
});

bannerSwiper()
