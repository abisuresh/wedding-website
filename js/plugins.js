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

// $(function() {
//     var touched = false,
//         previous_touched;
//
//     function updatePreviousTouched(e){
//         if(typeof previous_touched !== 'undefined' && previous_touched !== null && !previous_touched.is($(e.target))){
//             previous_touched.data('clicked_once', false);
//         }
//
//         previous_touched = $(e.target);
//     }
//
//     $(".dropdown").on({
//         touchstart:function(e) {
//             touched=true;
//         },
//         click:function(e);
//     var $this = $(this);
//
//     updatePreviousTouched(e);
//
//     if(touched) {
//         if ($this.data('clicked_once')) {
//             $this.data('clicked_once', false);
//             return true;
//         } else {
//             e.preventDefault();
//             $this.trigger("mouseenter").data('clicked_once', true);
//         }
//     }
//
//     touched = false;
// }
// },'.dropdown .has_children');
//
// $("html").on({
//     touchstart:function(e){
//         touched=false;
//     },
//     click:updatePreviousTouched
// });
// });

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
