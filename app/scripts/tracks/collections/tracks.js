define(['underscore', 'backbone', 'tracks/models/track', 'config', 'dropboxDatastore'], function (_, Backbone, Track, config, DropboxDatastore) {

    var tracks = Backbone.Collection.extend({
        model: Track,
        url: config.ukrPostApiUrl,
        dropboxDatastore: new DropboxDatastore('tracks'),
        fetchLastStatus: function(options) {
            if (!this._statusFetching) {
                this._statusFetching = true;
                Backbone.ajax({
                    dataType: 'json',
                    url: this.url,
                    data: {
                        ids: this.pluck('barcode').join(',')
                    },
                    success: function(data) {
                        this.set(data, {parse: true});
                        this.trigger('status:fetched', this);
                        this._statusFetching = false;
                    },
                    context: this
                });
            }
        }
    });

    return tracks;
});
