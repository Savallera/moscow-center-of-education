const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".header");
const mobileMenuOpen = () => {
    mobileMenu.classList.add("header_open");
    mobileMenuBtn.classList.add("mobile-menu-btn_active");
};
const mobileMenuClose = () => {
    mobileMenu.classList.remove("header_open");
    mobileMenuBtn.classList.remove("mobile-menu-btn_active");
};
mobileMenuBtn.addEventListener("click", () => {
    if (mobileMenu.classList.contains("header_open")) {
        mobileMenuClose();
    } else {
        mobileMenuOpen();
    }
});
// Закрытие окна по нажатию на фон.
mobileMenu.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("header")) {
        mobileMenuClose();
    }
});
