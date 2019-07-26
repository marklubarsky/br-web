const body = document.getElementsByClassName('content-wrapper')[0];
const modal = document.getElementById('modal');
const modalButton = document.getElementById('modalButton');
let forms = document.querySelectorAll(".news-letter-form");

forms.forEach(function (elem) {
    elem.addEventListener('submit', event => {
        event.preventDefault();
        toggleMenu();
    });
});

modalButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    modal.classList.toggle('active');
    body.classList.toggle('modal-open');
}