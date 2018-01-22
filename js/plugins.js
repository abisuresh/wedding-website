
//Closing dropdown menu on touch elsewhere on a touchscreen device

$(document).on('touchstart', function (event) {
    if (!$(event.target).closest('#dropdown').length) {
        if ($('#dropdown-content').is(":visible")) {
            $('#dropdown').hide();
        }
    }

});
