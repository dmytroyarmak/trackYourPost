define(['underscore', 'backbone', 'jquery', 'tracks/models/track', 'config', 'dropboxDatastore'], function (_, Backbone, $, Track, config, DropboxDatastore) {

    var tracks = Backbone.Collection.extend({
        model: Track,
        url: config.ukrPostApiUrl,
        dropboxDatastore: new DropboxDatastore('tracks'),
        comparator: 'index',

        fetchLastStatus: function(options) {
            if (!this._statusFetching) {
                this._statusFetching = true;
                this.trigger('status:fetching', this);

                $.when.apply(null, this.map(function(track) {
                    return Backbone.ajax({
                        dataType: 'json',
                        url: this.url + '/' + track.get('barcode'),
                    }).then(function(data) {
                        track.set(data);
                    });
                }, this)).always(_.bind(function() {
                    this.trigger('status:fetched', this);
                    this._statusFetching = false;
                }, this));
            }
        }
    });

    return tracks;
});
