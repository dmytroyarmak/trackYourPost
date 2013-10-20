define(
    ['marionette', 'underscore', 'tracks/views/track', 'tracks/views/emptyTrack', 'tpl!tracks/templates/tracks.tpl'],
    function (Marionette, _, TrackView, EmptyTrackView, tracksTemplate) {

        var TracksView = Marionette.CompositeView.extend({
            template: tracksTemplate,
            itemView: TrackView,
            emptyView: EmptyTrackView,
            itemViewContainer: '.j-tracks-container',
            events: {
                'click .j-refresh-track': 'fetchLastStatus'
            },

            fetchLastStatus: function() {
                this.collection.fetchLastStatus();
                return false;
            }
        });

        return TracksView;
    }
);
