define(['marionette', 'underscore', 'tpl!tracks/templates/track.tpl'], function (Marionette, _, trackTemplate) {

    var TrackView = Marionette.ItemView.extend({
        template: trackTemplate,
        modelEvents: {
            'change': 'render'
        },

        events: {
            'click .j-track-destroy': 'destroyTrack'
        },

        serializeData: function() {
            return _.defaults(Marionette.ItemView.prototype.serializeData.apply(this, arguments), {
                description: ''
            });
        },

        destroyTrack: function() {
            this.model.destroy();
        }
    });

    return TrackView;
});
