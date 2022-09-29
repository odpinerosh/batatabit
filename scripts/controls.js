const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const tablesContainer = document.getElementById('tablesContainer');
const footerYear = document.getElementById('footer-year');


window.addEventListener('DOMContentLoaded', (event) => {
    let today = new Date();
    tablesContainer.scrollLeft = 0;
    btnLeft.style.visibility = "hidden"
    btnRight.style.visibility = "visible"
    footerYear.innerText = today.getFullYear();
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
