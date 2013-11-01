define(['marionette', 'underscore', 'tpl!tracks/templates/track.tpl'], function (Marionette, _, trackTemplate) {

    var TrackView = Marionette.ItemView.extend({
        tagName: 'tr',
        template: trackTemplate,
        modelEvents: {
            'change': 'render'
        },

        events: {
            'click .j-track-destroy': 'destroyTrack'
        },

        onRender: function() {
            if (this.model.get('code')) {
                this.$el.addClass('warning');
            }
        },

        serializeData: function() {
            return _.defaults(Marionette.ItemView.prototype.serializeData.apply(this, arguments), {
                description: '',
                isUpdated: this.model.isUpdated(),
                state: this.model.getState()
            });
        },

        destroyTrack: function() {
            var msg = 'Ви впевнені що хочете видалити запис з номером ' + this.model.get('barcode') + ' ?';
            if (window.confirm(msg)) {
                this.model.destroy();
            }
            return false;
        }
    });

    return TrackView;
});
