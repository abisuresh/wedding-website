// Avoiding console errors in browsers that lack a console.
(function() {
    var method;
    var noco = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noco;
        }
    }
}());


$(document).on('touchstart', function (event) {
    if (!$(event.target).closest('#dropdown').length) {
        if ($('#dropdown-content').is(":visible")) {
            $('#dropdown').hide();
        }
    }

});
