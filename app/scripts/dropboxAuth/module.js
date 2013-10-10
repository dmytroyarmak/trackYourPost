/* jshint -W003 */
define(['app', 'dropbox', 'config', 'dropboxAuth/views/authPanel', 'dropboxDatastore'], function (app, Dropbox, config, AuthPanelView, DropboxDatastore) {

    app.addRegions({
        dropboxAuthRegion: '.j-dropbox-auth-region'
    });

    app.on('start', function() {
        console.log('start dropboxAuth module');
        var dropboxClient = new Dropbox.Client({key: config.dropboxAppKey});

        // Try to finish OAuth authorization.
        dropboxClient.authenticate({interactive: false}, onAuthenticateDone);

        function onAuthenticateDone (error, dropboxClient) {
            // TODO: use Logger/ pushNotifications
            if (error) {
                console.log('Authentication error: ' + error);
            }

            if (dropboxClient.isAuthenticated()) {
                dropboxClient.getAccountInfo({}, function(error, accountInfo) {
                    if (error) {
                        console.log('Get Account Info error: ' + error);
                    }
                    showAuthPanelView(dropboxClient, accountInfo);
                    DropboxDatastore.client = dropboxClient;
                    app.vent.trigger('authorization:success');
                });
            } else {
                showAuthPanelView(dropboxClient);
            }


            function showAuthPanelView (dropboxClient, accountInfo) {
                var authPanelView = new AuthPanelView({
                        dropboxClient: dropboxClient,
                        accountInfo: accountInfo || {}
                    });
                app.dropboxAuthRegion.show(authPanelView);
            }
        }
    });
});
