const body = document.getElementsByClassName('content-wrapper')[0];
const modal = document.getElementById('modal');
const modalButton = document.getElementById('modalButton');
let forms = document.querySelectorAll(".news-letter-form");

forms.forEach(function (elem) {
  elem.addEventListener('submit', event => {
    if (event.preventDefault) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.returnValue = false;
      event.stopPropagation();
    }
    toggleMenu();
  });
});

modalButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  modal.classList.toggle('active');
  body.classList.toggle('modal-open');
}
