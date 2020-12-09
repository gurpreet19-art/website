$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".gs-header").addClass("fixed");
    }
    else{
       $(".gs-header").removeClass("fixed");
    }
})