define(['backbone', 'underscore'], function (Backbone, _) {
    var track = Backbone.Model.extend({
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
            lastofficeindex: '...',
            index: 10000
        },

        initialize: function() {
            this.on('change', function() {
                this.save();
            }, this);
        },

        isUpdated: function() {
            return !_.isUndefined(this.changed.eventdescription);
        },

        getState: function() {
            if (this.get('eventdescription').match(/^ПОМИЛКА!/)) {
                return 'Уведено неправильний ідентифікатор';
            } else {
                switch(+this.get('code')){
                case 0:
                    return 'Не зареєстроване в системі';
                case 20701:
                    return 'В процесі оброблення';
                case 41002:
                    return 'Вручене адресату особисто';
                case 60701:
                    return 'Надійшло до місця міжнародного поштового обміну';
                case 80801:
                    return 'Передано для митного контролю';
                default:
                    return this.get('code');
                }
            }

        },

        isHanded: function() {
            return this.get('code') === '41002';
        },

        isRegistered: function() {
            return !!this.get('code');
        }
    });

    return track;
});
