define(
    ['marionette', 'underscore', 'tracks/views/track', 'tracks/views/emptyTrack', 'tpl!tracks/templates/tracks.tpl', 'jquery.timeago.ua'],
    function (Marionette, _, TrackView, EmptyTrackView, tracksTemplate) {

        var TracksView = Marionette.CompositeView.extend({
            template: tracksTemplate,
            itemView: TrackView,
            emptyView: EmptyTrackView,
            itemViewContainer: '.j-tracks-container',

            ui: {
                tracksLastUpdate: '.j-tracks-last-update'
            },

            events: {
                'click .j-refresh-track-btn': 'fetchLastStatus'
            },

            collectionEvents: {
                'status:fetched': '_changeLastStatusUpdate'
            },

            fetchLastStatus: function() {
                this.collection.fetchLastStatus();
                return false;
            },

            _changeLastStatusUpdate: function() {
                var timeNow = new Date(),
                    time = $('<time>').attr('datetime', timeNow.toISOString()).text(timeNow.toLocaleString());
                this.ui.tracksLastUpdate.text('(Оновлено ').append(time).append($(document.createTextNode(')')));
                time.timeago();
            }
        });

        return TracksView;
    }
);
