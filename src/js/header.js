


const mobileMenuBtn = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuCloseBtn = document.querySelector(".mobile-close-btn");
const mobileNavigation = document.querySelectorAll(".mobile-menu-link");
const mobileOrderBtn = document.querySelector(".mobile-order-button");
const tabletAndDesktopMenu = document.querySelector(".desktop-menu-wrapper");
const tabletAndDesktopMenuLink = document.querySelector(".menu-link");


if (mobileMenuBtn && mobileMenu && mobileMenuCloseBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });

  mobileMenuCloseBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "auto";
  });
}

if (mobileNavigation.length > 0) {
  mobileNavigation.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      document.body.style.overflow = "auto";
    });
  });
}

if (mobileOrderBtn) {
  mobileOrderBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "auto";
  });
}

if (tabletAndDesktopMenuLink && tabletAndDesktopMenu) {
  tabletAndDesktopMenuLink.addEventListener("click", (event) => {
    event.preventDefault();
    if (getComputedStyle(tabletAndDesktopMenu).display === "none") {
      tabletAndDesktopMenu.style.display = "block";
    } else {
      tabletAndDesktopMenu.style.display = "none";
    }
  });
}