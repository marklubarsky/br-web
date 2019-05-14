(function (window, document) {
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

    document.getElementById('testimonial-right').addEventListener('click', function (e) {
        setTimeout(function() { toggleTestimonial('right') }, 100);
        e.preventDefault();
    });

    document.getElementById('testimonial-left').addEventListener('click', function (e) {
        setTimeout(function() { toggleTestimonial('left') }, 100);
        e.preventDefault();
    });


    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(this, this.document);

