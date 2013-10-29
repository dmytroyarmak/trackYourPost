define(['marionette', 'underscore', 'tpl!dropboxAuth/templates/authPanel.tpl'], function (Marionette, _, authPanelTemplate) {
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
            this.dropboxClient.signOut({}, _.bind(this._onSignOut, this));
        },

        _onSignOut: function() {
            this.render();
            this.trigger('signOut');
        }
    });

    return AuthPanelView;
});
