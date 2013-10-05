/*global define */
define(['marionette'], function (Marionette) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        mainRegion: '.j-main-region'
    });

    return app;
});
