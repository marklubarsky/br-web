const menu = document.getElementsByClassName('header-mid')[0];
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuButton.classList.toggle('active');
    menu.classList.toggle('hidden');
}

(function (window, document) {
    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     */
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function swapElements(obj1, obj2) {
        obj2.nextSibling === obj1
            ? obj1.parentNode.insertBefore(obj2, obj1.nextSibling)
            : obj1.parentNode.insertBefore(obj2, obj1);
    }

    function swapAttributes(obj1, obj2, attr1, attr2) {
        obj1.classList.toggle(attr1);
        obj2.classList.toggle(attr2);
    }

    function switchStories() {
        var sections =  ['olga','mark'];
        shuffleArray(sections);

        var el1 = document.getElementById(sections[0]);
        var el2 =  document.getElementById(sections[1]);
        swapElements(el1, el2);

        var el_photos = document.getElementsByClassName('section-content-photo')
        swapAttributes(el_photos[0], el_photos[1], sections[1], sections[0]);
    }

    window.addEventListener("load", function(){
        if (document.getElementById('olga')) {
            switchStories();
        }
    });
})(this, this.document);