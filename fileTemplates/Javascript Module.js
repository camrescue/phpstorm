(function (exports) {
    "use strict";
    var api,
        my = {};

    // public api
    api = {};

    if (typeof define === 'function') {
        define(function () {
            return api;
        });
    }

    $.extend(exports, api);

}(typeof exports === 'undefined' ? window : exports) );