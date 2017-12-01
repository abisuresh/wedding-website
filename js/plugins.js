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

// Place any jQuery/helper plugins in here.

// $('#dropdown').tabCollapse();

// jQuery(document).ready(function ($) {
//     if (document.documentElement.clientWidth < 767) {
//         $('#dropdown').click(function (e) {
//             e.preventDefault();
//         }
//
//         $(".collapse").collapse();
//     }
// });

// $('#nav li:has(ul)').doubleTapToGo();

$(document).click(function (event) {
    if (!$(event.target).closest('#tablinks').length) {
        if ($('#tablinks').is(":visible")) {
            $('#tablinks').hide();
        }
    }

});
