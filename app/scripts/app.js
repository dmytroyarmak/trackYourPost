/*global define */
define(['marionette'], function (Marionette) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        mainRegion: '.main-region'
    });

    return app;
});
