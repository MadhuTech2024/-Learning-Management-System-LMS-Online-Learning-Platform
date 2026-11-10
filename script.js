// Mobile navigation menu
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}