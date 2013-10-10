define(['underscore', 'backbone', 'tracks/models/track', 'config', 'dropboxDatastore'], function (_, Backbone, Track, config, DropboxDatastore) {

    var tracks = Backbone.Collection.extend({
        model: Track,
        url: config.ukrPostApiUrl,
        dropboxDatastore: new DropboxDatastore('tracks'),
        fetchLastStatus: function() {
            Backbone.ajax({
                dataType: 'json',
                url: this.url,
                data: {
                    ids: this.pluck('barcode').join(',')
                },
                success: function(data) {
                    this.set(data, {parse: true});
                },
                context: this
            });
        }
    });

    return tracks;
});
