$(document).ready(function() {
    //Scroll Effect
    $(window).on('scroll' , function() {
        if($(window).scrollTop()) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    });

    //Menu Toggle
    $('.menu-icon').on('click' , function() {
        $('nav ul').toggleClass("showing");
    });
});