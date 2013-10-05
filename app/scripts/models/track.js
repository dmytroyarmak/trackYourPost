define(['backbone'], function (Backbone) {
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
            barcode: null,
            code: '...',
            eventdate: '...',
            eventdescription: '...',
            lastoffice: '...',
            lastofficeindex: '...'
        }
    });

    return track;
});
