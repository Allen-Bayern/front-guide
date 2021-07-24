// use jQuery

// Requirements one: show and hide the left navigation bar.

// variations
const $openGuide = $('#openGuide');
const $naviContents = $('.navi');
const $hideGuide = $('#backTo');

const $showWeather = $('#weather');

// show the bar
$openGuide.on('click', () => {
    $naviContents.show();
    $openGuide.hide();

    // Add media query
    if($(window).width() <= 500){
        // Let the navigation bar cover all the screen of your phone.
        $('body').css('grid-template-columns', '100% 0% 0%'); 
    }
});


// hide the bar
$hideGuide.on('click', () => {
    $naviContents.hide();
    $openGuide.show();

    // Add media query
    if($(window).width() <= 500){
        $('body').css('grid-template-columns', '10% 80% 10%');
    }
});