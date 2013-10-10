define(['underscore', 'backbone', 'tracks/models/track', 'config', 'dropboxDatastore'], function (_, Backbone, Track, config, DropboxDatastore) {

    var tracks = Backbone.Collection.extend({
        model: Track,
        url: config.ukrPostApiUrl,
        dropboxDatastore: new DropboxDatastore('tracks'),
        fetchLastStatus: function(options) {
            // options = _.extend(options || {}, {
            //     data: {
            //         ids: this.pluck('barcode').join(',')
            //     }
            // });
            // Backbone.Collection.prototype.fetch.call(this, options);
        }
    });

    return tracks;
});
