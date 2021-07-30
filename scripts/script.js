const animateElement = (className, appearClass) => {
    $(className).each( function(){
        let elemPos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (elemPos < topOfWindow + document.documentElement.clientHeight - 150) {
            $(this).removeClass('hidden');
            $(this).addClass(appearClass);
        } else {
            $(this).removeClass(appearClass);
            $(this).addClass('hidden');            
        }
    });
};


window.addEventListener('load',() => setTimeout(() => {
    $('.journey').removeClass('hidden');
    $('.journey').addClass('zoomIn');
}, 400));

$(window).scroll( function() {
    animateElement('.future .section-title', 'fadeInDown');
    animateElement('.advantages', 'zoomIn');
    animateElement('.tickets .section-title', 'fadeInDown');
    animateElement('.first-input', 'fadeInLeft');
    animateElement('.second-input', 'fadeInRight');
    animateElement('.third-input', 'fadeInLeft');
    animateElement('.fourth-input', 'fadeInRight');
    animateElement('.tickets .btn', 'fadeInUp');
});