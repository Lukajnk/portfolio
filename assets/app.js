$(document).ready(function() {

    $(window).on("mousewheel", function(e){
        e.preventDefault();
    });

    document.body.onmousedown = function(e) {
        if (e.button === 1) return false;
    }

    $("#up").click(function() {
        if (($(document).scrollTop() / $(window).height()) % 1 == 0){
            $('html, body').animate({
                scrollTop: $(document).scrollTop() - $(window).height() }, 350);
        } else {
            $('html, body').animate({
                scrollTop: (Math.floor($(document).scrollTop() / $(window).height())) * $(window).height() }, 350);
        }
    });

    $("#down").click(function() {
        if (($(document).scrollTop() / $(window).height()) % 1 == 0){
            $('html, body').animate({
                scrollTop: $(document).scrollTop() + $(window).height() }, 350);
        } else {
            $('html, body').animate({
                scrollTop: (Math.floor($(document).scrollTop() / $(window).height()) +1) * $(window).height() }, 350);
        }
    });

});
