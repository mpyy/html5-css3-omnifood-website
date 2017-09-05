$(document).ready(function() {

    /* No framework class syntax: */

    var waypoint = new Waypoint({
      element: $('.js--section-features'),
      handler: function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
      },
      offset: '60px'
    });


    /* jQuery syntax */
    /*
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
    */
    
});