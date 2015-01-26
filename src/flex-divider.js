'use strict';

angular.module('flexDivider', [])
.directive('flexDivider', function($document) {
    return function(scope, elm, attr) {
        // The other components
        var prev = angular.element(elm[0].previousElementSibling);
        var next = angular.element(elm[0].nextElementSibling);
        // Mouse Event variables
        var startY=0, pH=0, nH=0;

        // Set the CSS to make it look right
        elm.css({
            flex: "none",
            cursor: 'row-resize',
        });
        prev.css({
            "flex-basis": 0
        });
        next.css({
            "flex-basis": 0
        });

        // Handle the mouse events
        elm.on('mousedown', function(event) {
            // Prevent default dragging of selected content
            event.preventDefault();
            // Make sure the numbers are all consistent
            pH = prev[0].offsetHeight;
            nH = next[0].offsetHeight;
            startY = event.screenY;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
            var diff = event.screenY - startY;
            prev.css({
                "flex-grow": Math.max(pH + diff,1),
            })
            next.css({
                "flex-grow": Math.max(nH - diff,1),
            });
        }

        function mouseup(event) {
            $document.off('mousemove', mousemove);
            $document.off('mouseup', mouseup);
        }

    };
});
