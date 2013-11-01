define(
    ['marionette', 'underscore', 'tracks/views/track', 'tracks/views/emptyTrack', 'tpl!tracks/templates/tracks.tpl', 'jquery.timeago.ua', 'jqueryUiSortable'],
    function (Marionette, _, TrackView, EmptyTrackView, tracksTemplate) {

        var TracksView = Marionette.CompositeView.extend({
            template: tracksTemplate,
            itemView: TrackView,
            emptyView: EmptyTrackView,
            itemViewContainer: '.j-tracks-container',

            ui: {
                tbody: 'tbody',
                tracksLastUpdate: '.j-tracks-last-update'
            },

            events: {
                'click .j-refresh-track-btn': 'fetchLastStatus'
            },

            collectionEvents: {
                'status:fetched': '_changeLastStatusUpdate'
            },

            appendHtml: function(collectionView, itemView, index){
                var childrenContainer = collectionView.itemViewContainer ? collectionView.$(collectionView.itemViewContainer) : collectionView.$el;
                var children = childrenContainer.children();
                if (children.size() <= index) {
                    childrenContainer.append(itemView.el);
                } else {
                    children.eq(index).before(itemView.el);
                }
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
            },

            onShow: function() {
                this.ui.tbody.sortable({
                    axis: 'y',
                    cursor: 'move',
                    handle: '.j-track-handle',
                    stop: _.bind(this.onSortStop, this)
                });
            },

            onSortStop: function() {
                this.children.each(function(trackView) {
                    trackView.updateIndex();
                });
            }
        });

        return TracksView;
    }
);
