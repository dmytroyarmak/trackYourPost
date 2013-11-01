define(
    ['app', 'nprogress', 'tracks/collections/tracks', 'tracks/views/layout', 'tracks/views/addTrack', 'tracks/views/tracks'],
    function (app, NProgress, TracksCollection, LayoutView, AddTrackView, TracksListView) {
        app.on('start', function() {
            app.vent.on('authorization:success', function() {
                var layoutView = new LayoutView(),
                    tracksCollection = new TracksCollection(),
                    addTrackView = new AddTrackView(),
                    tracksListView = new TracksListView({collection: tracksCollection});

                window.foo = tracksCollection;

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

                tracksCollection.on('status:fetching', function() {
                    NProgress.start();
                });

                tracksCollection.on('status:fetched', function() {
                    NProgress.done();
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

            app.vent.on('authorization:signOut', function() {
                app.mainRegion.close();
            });
        });
    }
);
