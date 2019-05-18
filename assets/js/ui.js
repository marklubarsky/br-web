(function (window, document) {
    // window.onload="switchStories()";
    var menu = document.getElementById('menu'),
        testimonial = document.getElementById('testimonials'),
        WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

    function toggleHorizontal() {
        [].forEach.call(
            document.getElementById('menu').querySelectorAll('.menu-can-transform'),
            function(el){
                el.classList.toggle('pure-menu-horizontal');
            }
        );
    };

    function toggleMenu() {
        // set timeout so that the panel has a chance to roll up
        // before the menu switches states
        if (menu.classList.contains('open')) {
            setTimeout(toggleHorizontal, 500);
        }
        else {
            toggleHorizontal();
        }

        menu.classList.toggle('open');
        document.getElementById('toggle').classList.toggle('x');
        document.getElementById('content-wrapper').classList.toggle('x');
    };

    function closeMenu() {
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    }

    document.getElementById('toggle').addEventListener('click', function (e) {
        toggleMenu();
        e.preventDefault();
    });

    function toggleTestimonial(direction) {
        //
        var currentTestimonial = testimonials.querySelector('#current');
        var newTestimonial = null;

        var first = testimonials.querySelectorAll('p').item(0);
        var last = testimonials.querySelectorAll('p').item(testimonials.querySelectorAll('.testimonial-list p').length - 1);
        if (currentTestimonial == null) { currentTestimonial = first }

        if (direction == 'right') {
            newTestimonial = currentTestimonial.nextElementSibling;
            if (newTestimonial == null) { newTestimonial = first; }
        }

        if (direction == 'left') {
            newTestimonial = currentTestimonial.previousElementSibling;
            if (newTestimonial == null) { newTestimonial = last; }
        }

        currentTestimonial.id = '';
        // currentTestimonial.style.display = 'none';
        currentTestimonial.classList.toggle('show');
        //
        newTestimonial.id = 'current';
        newTestimonial.classList.toggle('show');



    }

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

    function switchStories() {
        var sections =  ['olga','mark'];
        shuffleArray(sections);

        var el1 = document.getElementById(sections[0]);
        var el2 =  document.getElementById(sections[1]);
        // var el3 =  document.getElementById(sections[2]);



       swapElements(el1, el2);
       // swapElements(el1, el3);
    }

    if (document.getElementById('testimonial-right') !== null) {
        document.getElementById('testimonial-right').addEventListener('click', function (e) {
            setTimeout(function() { toggleTestimonial('right') }, 100);
            e.preventDefault();
        });

        document.getElementById('testimonial-left').addEventListener('click', function (e) {
            setTimeout(function() { toggleTestimonial('left') }, 100);
            e.preventDefault();
        });
    }


    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
    window.addEventListener("load", function(){
        if (document.getElementById('olga')) {
            switchStories();
        }
    });
})(this, this.document);

