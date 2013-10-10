define(['marionette', 'tpl!tracks/templates/track.tpl'], function (Marionette, trackTemplate) {

    var TrackView = Marionette.ItemView.extend({
        template: trackTemplate,
        modelEvents: {
            'change': 'render'
        },

        events: {
            'click .j-track-destroy': 'destroyTrack'
        },

        destroyTrack: function() {
            this.model.destroy();
        }
    });

    return TrackView;
});
