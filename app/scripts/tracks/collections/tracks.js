define(['underscore', 'backbone', 'tracks/models/track', 'config'], function (_, Backbone, Track, config) {

    var tracks = Backbone.Collection.extend({
        model: Track,
        url: config.ukrPostApiUrl,
        fetch: function(options) {
            options = _.extend(options || {}, {
                data: {
                    ids: this.pluck('barcode').join(',')
                }
            });
            Backbone.Collection.prototype.fetch.call(this, options);
        }
    });

    return tracks;
});
