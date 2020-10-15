$(document).ready(function() {

    /* For Sticky Navigation */
    $('.js-section-feature').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '70px;'
    });

    /* Scroll on buttons */
    $('.js-scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
    });

    $('.js-scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-feature').offset().top}, 1000);
    });

    /* Smooth Scroll */

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
            }
        }
    });
    
    /* Animations on scroll */
    $('.js-waypoint-feature-animation').waypoint(function(direction) {
        $('.js-waypoint-feature-animation').addClass('animate__animated animate__fadeIn')
    }, {
        offset: '50%;'
    });

    $('.js-waypoint-work-animation').waypoint(function(direction) {
        $('.js-waypoint-work-animation').addClass('animate__animated animate__fadeInUp')
    }, {
        offset: '50%;'
    });

    $('.js-waypoint-city-animation').waypoint(function(direction) {
        $('.js-waypoint-city-animation').addClass('animate__animated animate__fadeIn')
    }, {
        offset: '50%;'
    });

    $('.js-waypoint-plans-animation').waypoint(function(direction) {
        $('.js-waypoint-plans-animation').addClass('animate__animated animate__pulse')
    }, {
        offset: '25%;'
    });

    /* Mobile nav Animation */
    $('.js-nav-icon').click(function() {
        var nav = $('.js-main-nav');
        var icon= $('.js-nav-icon ion-icon');
        nav.slideToggle(200);
        
        if (icon.attr("name") === 'menu') {
                    icon.attr("name", 'close');
                } else {
                    icon.attr("name", 'menu');
                }
    /* Window resizing and nav display */
        $(window).resize(function(){
 
            if ($(window).width() > 767){
                nav.css("display", "block");
            } 
            else {
                nav.css("display", "none");
                icon.attr("name", 'menu')
            }
        });
    });
});