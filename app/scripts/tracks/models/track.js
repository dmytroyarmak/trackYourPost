define(['backbone', 'underscore'], function (Backbone, _) {
    var track = Backbone.Model.extend({
        idAttribute: 'barcode',
        // Attributes:
        //   - My Attributes:
        //      - description
        //   - Ukrainian post API response attributes:
        //      - barcode
        //      - code
        //      - eventdate
        //      - eventdescription
        //      - lastoffice
        //      - lastofficeindex

        defaults: {
            barcode: '',
            code: '...',
            eventdate: '...',
            eventdescription: '...',
            lastoffice: '...',
            lastofficeindex: '...'
        },

        initialize: function() {
            this.on('change', function() {
                this.save();
            }, this);
        },

        isUpdated: function() {
            return !_.isUndefined(this.changed.eventdescription);
        }
    });

    return track;
});
