window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});

$(document).ready(function () {
    //check window location to fadein or out the scroll button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //scroll to top animation
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //owl carousel
    $('.owl-carousel').owlCarousel({
        lazyLoad: true,
        loop: true,
        nav: false,
        margin: 10,
        items: 1
    });
});