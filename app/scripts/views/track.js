/*global define */
define(['marionette', 'tpl!templates/track.tpl'], function (Marionette, trackTemplate) {
    'use strict';

    var track = Marionette.ItemView.extend({
        template: trackTemplate,
        modelEvents: {
            'change': 'render'
        }
    });

    return track;
});
