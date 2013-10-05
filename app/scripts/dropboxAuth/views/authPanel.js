define(['marionette', 'tpl!dropboxAuth/templates/authPanel.tpl'], function (Marionette, authPanelTemplate) {
    var AuthPanelView = Marionette.ItemView.extend({
        template: authPanelTemplate,

        events: {
            'click .j-sign-in-btn': 'singIn',
            'click .j-sign-out-btn': 'singOut'
        },

        initialize: function(options) {
            this.dropboxClient = options.dropboxClient;
            this.accountInfo = options.accountInfo;
        },

        serializeData: function() {
            return {
                isAuthenticated: this.dropboxClient.isAuthenticated(),
                name: this.accountInfo.name
            };
        },

        singIn: function() {
            this.dropboxClient.authenticate();
        },

        singOut: function() {
            this.dropboxClient.signOut({}, this.render);
        }
    });

    return AuthPanelView;
});
