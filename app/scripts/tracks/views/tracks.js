define(
    ['marionette', 'tracks/views/track', 'tracks/views/emptyTrack', 'tpl!tracks/templates/tracks.tpl'],
    function (Marionette, TrackView, EmptyTrackView, tracksTemplate) {

        var TracksView = Marionette.CompositeView.extend({
            template: tracksTemplate,
            itemView: TrackView,
            emptyView: EmptyTrackView,
            itemViewContainer: '.j-tracks-container',
            triggers: {
                'click .j-refresh-track': 'refresh:clicked'
            },
        });

        return TracksView;
    }
);
