const acc = document.getElementsByClassName("accordion-item");
const closeIconAr = document.getElementById("close-icon-ar");
const humbergerBtn = document.getElementById("humberger-btn");
const body = document.querySelector("body");
const navbarSupportedContent = document.getElementById(
  "navbarSupportedContent"
);
const btnTabs = document.getElementsByClassName(
  "beauty--row__col--big-div__tabs--btns"
);

$(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    smartSpeed: 300,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    lazyLoad: true,
    margin: 50,
    rtl: true,
    // nav: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  //   make same tab of accordion not closed when click twice with class .collapsing
  if (btnTabs) {
    for (let i = 0; i < btnTabs.length; i++) {
      btnTabs[i].addEventListener("click", () => {
        if (btnTabs[i].getAttribute("aria-expanded") !== "true") {
          btnTabs[i].setAttribute("aria-expanded", "true");
          btnTabs[i].classList.remove("collapsed");
          acc[i].children[0].classList.add("show");
        }
      });
    }
  }

  if (closeIconAr) {
    closeIconAr.addEventListener("click", () => {
      navbarSupportedContent.classList.remove("show");
      body.style.overflow = "auto";
    });
  }
  if (humbergerBtn) {
    humbergerBtn.addEventListener("click", () => {
      body.style.overflow = "hidden";
    });
  }
});
