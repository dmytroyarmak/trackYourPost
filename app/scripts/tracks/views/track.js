define(['marionette', 'underscore', 'tpl!tracks/templates/track.tpl'], function (Marionette, _, trackTemplate) {

    var TrackView = Marionette.ItemView.extend({
        tagName: 'tr',
        template: trackTemplate,

        ui: {
            inputDescription: '.j-track-input-description',
            inputBarcode: '.j-track-input-barcode'
        },

        modelEvents: {
            'change': 'render'
        },

        events: {
            'click .j-track-destroy': 'onClickDestroy',
            'click .j-track-edit': 'onClickEdit',
            'click .j-track-save': 'onClickSave',
            'click .j-track-cancel': 'onClickCancel'
        },

        onRender: function() {
            if (this.model.isHanded()) {
                this.$el.addClass('success');
            } else if (this.model.isRegistered()) {
                this.$el.addClass('active');
            }
        },

        serializeData: function() {
            return _.defaults(Marionette.ItemView.prototype.serializeData.apply(this, arguments), {
                description: '',
                isUpdated: this.model.isUpdated(),
                state: this.model.getState(),
                editable: !!this._editable
            });
        },

        onClickDestroy: function() {
            var msg = 'Ви впевнені що хочете видалити запис з номером ' + this.model.get('barcode') + ' ?';
            if (window.confirm(msg)) {
                this.model.destroy();
            }
            return false;
        },

        onClickEdit: function() {
            this._editable = true;
            this.render();
            return false;
        },

        onClickSave: function() {
            this._editable = false;
            this.model.set({
                barcode: this.ui.inputBarcode.val().replace(/^\s+|\s+$/g, '').toUpperCase(),
                description: this.ui.inputDescription.val()
            });
            this.render();
            return false;
        },

        onClickCancel: function() {
            this._editable = false;
            this.render();
            return false;
        },

        updateIndex: function() {
            this.model.set('index', this.$el.index());
        }
    });

    return TrackView;
});
