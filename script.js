document.addEventListener("DOMContentLoaded", function () {
    // Change header background color on click
    const header = document.querySelector("header");
    header.addEventListener("click", function () {
        header.style.backgroundColor = "#023e8a";
    });

    // Alert when a section is clicked
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("click", function () {
            alert(`You clicked on: ${section.querySelector("h2").textContent}`);
        });
    });
});