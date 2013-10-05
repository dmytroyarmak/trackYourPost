define(['marionette', 'views/track', 'tpl!templates/tracks.tpl'], function (Marionette, TrackView, tracksTemplate) {

    var tracks = Marionette.CompositeView.extend({
        template: tracksTemplate,
        itemView: TrackView,
        itemViewContainer: '.j-tracks-container',
        triggers: {
            'click .j-refresh-track': 'refresh:clicked'
        },
    });

    return tracks;
});
