define(['app', 'collections/tracks', 'views/tracks'], function (app, TracksCollection, TracksCollectionView) {
    var start = function() {
        var tracksCollection = new TracksCollection(),
            tracksCollectionView = new TracksCollectionView({collection: tracksCollection});

        tracksCollectionView.on('refresh:clicked', function(data) {
            data.collection.fetch();
        });

        app.mainRegion.show(tracksCollectionView);
    };

    return {
        start: start
    };
});
