/*global define */
define(['marionette'], function (Marionette) {
    var app = new Marionette.Application();

    app.addRegions({
        mainRegion: '.j-main-region'
    });

    return app;
});
