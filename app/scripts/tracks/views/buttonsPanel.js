define(['marionette', 'tpl!tracks/templates/buttonsPanel.tpl'], function(Marionette, buttonsPanelTemplate) {
    var ButtonsPanelView = Marionette.ItemView.extend({
        template: buttonsPanelTemplate,
        triggers: {
            'click .j-add-track-btn': 'click:add',
            'click .j-refresh-track-btn': 'click:refresh'
        }
    });

    return ButtonsPanelView;
});
