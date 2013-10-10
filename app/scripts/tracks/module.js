define(
    ['app', 'tracks/collections/tracks', 'tracks/views/layout', 'tracks/views/buttonsPanel', 'tracks/views/addTrack', 'tracks/views/tracks'],
    function (app, TracksCollection, LayoutView, ButtonsPanelView, AddTrackView, TracksListView) {
        app.on('start', function() {
            console.log('start tracks module');
            app.vent.on('authorization:success', function() {
                var layoutView = new LayoutView(),
                    tracksCollection = new TracksCollection(),
                    buttonsPanelView = new ButtonsPanelView(),
                    addTrackView = new AddTrackView(),
                    tracksListView = new TracksListView({collection: tracksCollection});

                tracksCollection.fetch();

                buttonsPanelView.on('click:refresh', function() {
                    tracksCollection.fetchLastStatus();
                });

                addTrackView.on('submit:form', function(data) {
                    tracksCollection.create({
                        barcode: data.barcode,
                        description: data.description
                    });
                });

                layoutView.on('show', function() {
                    layoutView.buttonsPanelRegion.show(buttonsPanelView);
                    layoutView.addTrackRegion.show(addTrackView);
                    layoutView.tracksListRegion.show(tracksListView);
                });

                app.mainRegion.show(layoutView);
            });
        });
    }
);
