define(['marionette', 'tpl!tracks/templates/emptyTrack.tpl'], function (Marionette, emptyTrackTemplate) {

    var EmptyTrackView = Marionette.ItemView.extend({
        template: emptyTrackTemplate
    });

    return EmptyTrackView;
});
