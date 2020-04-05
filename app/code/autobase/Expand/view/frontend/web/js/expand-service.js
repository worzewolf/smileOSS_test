define([
    'jquery'
], function($) {
    'use strict';
    return function(config) {
        function ExpandClassToggle() {
            if (!config.parentElem) return false;
            $(config.expandButtonShow).click(function () {
                $(config.expandContainer).addClass('active');
                $(config.expandButtonHide).css('display','block');
                $(config.expandButtonShow).css('display','none');
            });
            $(config.expandButtonHide).click(function () {
                $(config.expandContainer).removeClass('active');
                $(config.expandButtonHide).css('display','none');
                $(config.expandButtonShow).css('display','block');
            });
        }
        ExpandClassToggle();
    }
});
