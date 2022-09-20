const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const tablesContainer = document.getElementById("tablesContainer");

window.addEventListener('DOMContentLoaded', (event) => {
    tablesContainer.scrollLeft = 0;
    btnLeft.style.visibility = "hidden"
    btnRight.style.visibility = "visible"
});

btnLeft.addEventListener('click', () => {
    tablesContainer.scrollLeft = 0;
    btnLeft.style.visibility = "hidden"
    btnRight.style.visibility = "visible"
})


btnRight.addEventListener('click', () => {
    tablesContainer.scrollLeft = 230;
    btnLeft.style.visibility = "visible"
    btnRight.style.visibility = "hidden"
})
