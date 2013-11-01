define(['marionette', 'tpl!tracks/templates/addTrack.tpl'], function(Marionette, addTrackTemplate) {
    var AddTrackView = Marionette.ItemView.extend({
        template: addTrackTemplate,

        ui: {
            barcodeInput: '.j-barcode-input',
            descriptionInput: '.j-description-input'
        },

        events: {
            'submit .j-add-track-from': 'onSubmit'
        },

        onSubmit: function(e) {
            e.preventDefault();
            var barcode = this.ui.barcodeInput.val(),
                description = this.ui.descriptionInput.val();
            this._resetForm();
            this.trigger('submit:form', {
                barcode: barcode.replace(/^\s+|\s+$/g, '').toUpperCase(),
                description: description
            });
        },

        _resetForm: function() {
            this.ui.barcodeInput.val('');
            this.ui.descriptionInput.val('');
        }
    });

    return AddTrackView;
});
