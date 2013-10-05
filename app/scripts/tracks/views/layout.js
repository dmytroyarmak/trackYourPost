define(['marionette', 'tpl!tracks/templates/layout.tpl'], function (Marionette, layoutTemplate) {

    var LayoutView = Marionette.Layout.extend({
        template: layoutTemplate,
        regions: {
            buttonsPanelRegion: '.j-buttons-panel-region',
            addTrackRegion: '.j-add-track-region',
            tracksListRegion: '.j-tracks-list-region'
        }
    });

    return LayoutView;
});
