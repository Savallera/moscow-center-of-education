import Calendar from "../components/calendar/calendar.js";

// Мобильное меню

const mobileMenuBtn = document.querySelector(".content-header__btn");
const mobileMenu = document.querySelector(".header");
const mobileMenuOpen = () => {
    mobileMenu.classList.add("header_open");
    mobileMenuBtn.classList.add("content-header__btn_active");
};
const mobileMenuClose = () => {
    mobileMenu.classList.remove("header_open");
    mobileMenuBtn.classList.remove("content-header__btn_active");
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

// Аккордион

const accordionContainers = document.querySelectorAll(".accordion");
const accordionOpen = (container) => {
    container.classList.add("accordion_open");
};
const accordionClose = (container) => {
    container.classList.remove("accordion_open");
};
accordionContainers.forEach((item) => {
    item.querySelector(".accordion__button").addEventListener("click", () => {
        if (item.classList.contains("accordion_open")) {
            accordionClose(item);
        } else {
            accordionOpen(item);
        }
    });
});

// Селект

const selectContainers = document.querySelectorAll(".select-field");
const selectListOpen = (container) => {
    container.classList.add("select-field_open");
};
const selectListClose = (container) => {
    container.classList.remove("select-field_open");
};
selectContainers.forEach((item) => {
    item.querySelector(".select-field__field").addEventListener("click", () => {
        if (item.classList.contains("select-field_open")) {
            selectListClose(item);
        } else {
            selectListOpen(item);
        }
    });
});

// Календарь

const calendarEvents = new Calendar("calendar");
calendarEvents.selectMonth(null, calendarEvents.currYear, calendarEvents.currMonth);
