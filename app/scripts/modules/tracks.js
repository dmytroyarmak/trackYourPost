define(['app', 'collections/tracks', 'views/tracks'], function (app, TracksCollection, TracksCollectionView) {
    var start = function() {
        var tracksCollection = new TracksCollection([
                {
                    barcode: 'RM117463169IN',
                    description: 'Индус ч.1'
                },
                {
                    barcode: 'VR050384569KZ',
                    description: 'Киргизия'
                }
            ]),
            tracksCollectionView = new TracksCollectionView({collection: tracksCollection});

        tracksCollectionView.on('refresh:clicked', function(data) {
            data.collection.fetch();
        });

        tracksCollection.fetch();

        app.mainRegion.show(tracksCollectionView);
    };

    return {
        start: start
    };
});
