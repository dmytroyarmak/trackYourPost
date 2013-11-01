define(['underscore', 'backbone', 'tracks/models/track', 'config', 'dropboxDatastore'], function (_, Backbone, Track, config, DropboxDatastore) {

    var tracks = Backbone.Collection.extend({
        model: Track,
        url: config.ukrPostApiUrl,
        dropboxDatastore: new DropboxDatastore('tracks'),
        comparator: 'index',

        fetchLastStatus: function(options) {
            if (!this._statusFetching) {
                this._statusFetching = true;
                this.trigger('status:fetching', this);
                Backbone.ajax({
                    dataType: 'json',
                    url: this.url,
                    data: {
                        ids: this.pluck('barcode').join(',')
                    },
                    success: function(statuses) {
                        this.updateTrackStatus(statuses);
                        this.trigger('status:fetched', this);
                        this._statusFetching = false;
                    },
                    context: this
                });
            }
        },

        updateTrackStatus: function(statuses) {
            _.each(statuses, function(status){
                _.each(this.where({barcode: status.barcode}), function(trackModel) {
                    trackModel.set(status);
                });
            }, this);
        }
    });

    return tracks;
});
