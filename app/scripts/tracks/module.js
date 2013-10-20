define(
    ['app', 'tracks/collections/tracks', 'tracks/views/layout', 'tracks/views/addTrack', 'tracks/views/tracks'],
    function (app, TracksCollection, LayoutView, AddTrackView, TracksListView) {
        app.on('start', function() {
            app.vent.on('authorization:success', function() {
                var layoutView = new LayoutView(),
                    tracksCollection = new TracksCollection(),
                    addTrackView = new AddTrackView(),
                    tracksListView = new TracksListView({collection: tracksCollection});

                tracksCollection.fetch({
                    success: function() {
                        tracksCollection.fetchLastStatus();
                        tracksCollection.on('add', function() {
                            tracksCollection.fetchLastStatus();
                        });
                    }
                });

                tracksCollection.on('change:eventdescription', function(track) {
                    app.execute('notify:info', {
                        title: track.get('description'),
                        message: track.get('eventdescription')
                    });
                });

                addTrackView.on('submit:form', function(data) {
                    tracksCollection.create({
                        barcode: data.barcode,
                        description: data.description
                    });
                });

                layoutView.on('show', function() {
                    layoutView.addTrackRegion.show(addTrackView);
                    layoutView.tracksListRegion.show(tracksListView);
                });

                app.mainRegion.show(layoutView);
            });
        });
    }
);
