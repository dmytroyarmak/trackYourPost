require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        timeago: '../bower_components/jquery-timeago/jquery.timeago',
        timeagoUk: '../bower_components/jquery-timeago/locales/jquery.timeago.uk',
        bootstrapAffix: '../bower_components/sass-bootstrap/js/affix',
        bootstrapAlert: '../bower_components/sass-bootstrap/js/alert',
        bootstrapButton: '../bower_components/sass-bootstrap/js/button',
        bootstrapCarousel: '../bower_components/sass-bootstrap/js/carousel',
        bootstrapCollapse: '../bower_components/sass-bootstrap/js/collapse',
        bootstrapDropdown: '../bower_components/sass-bootstrap/js/dropdown',
        bootstrapPopover: '../bower_components/sass-bootstrap/js/popover',
        bootstrapScrollspy: '../bower_components/sass-bootstrap/js/scrollspy',
        bootstrapTab: '../bower_components/sass-bootstrap/js/tab',
        bootstrapTooltip: '../bower_components/sass-bootstrap/js/tooltip',
        bootstrapTransition: '../bower_components/sass-bootstrap/js/transition',
        backbone: '../bower_components/backbone/backbone',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
        marionette: '../bower_components/marionette/lib/core/amd/backbone.marionette',
        requirejs: '../bower_components/requirejs/require',
        'sass-bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',
        underscore: '../bower_components/underscore/underscore',
        tpl: '../bower_components/requirejs-tpl/tpl',
        dropbox: 'https://www.dropbox.com/static/api/dropbox-datastores-1.0-latest',
        dropboxDatastore: '../bower_components/backbone.dropboxDatastore/backbone.dropboxDatastore'
    },
    shim: {
        timeagoUk: {
            deps: [
                'timeago'
            ]
        },
        bootstrapAffix: {
            deps: [
                'jquery'
            ]
        },
        bootstrapAlert: {
            deps: [
                'jquery'
            ]
        },
        bootstrapButton: {
            deps: [
                'jquery'
            ]
        },
        bootstrapCarousel: {
            deps: [
                'jquery'
            ]
        },
        bootstrapCollapse: {
            deps: [
                'jquery'
            ]
        },
        bootstrapDropdown: {
            deps: [
                'jquery'
            ]
        },
        bootstrapPopover: {
            deps: [
                'jquery'
            ]
        },
        bootstrapScrollspy: {
            deps: [
                'jquery'
            ]
        },
        bootstrapTab: {
            deps: [
                'jquery'
            ]
        },
        bootstrapTooltip: {
            deps: [
                'jquery'
            ]
        },
        bootstrapTransition: {
            deps: [
                'jquery'
            ]
        },
        jquery: {
            exports: 'jQuery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'jquery',
                'underscore'
            ],
            exports: 'Backbone'
        },
        marionette: {
            deps: [
                'jquery',
                'underscore',
                'backbone'
            ],
            exports: 'Marionette'
        },
        dropbox: {
            exports: 'Dropbox'
        }
    }
});

require(['app', 'jquery', 'timeagoUk', 'bootstrapAlert', 'dropboxAuth/module', 'tracks/module', 'notifications/module'], function (app, $) {
    $(function() {
        app.start();
    });
});
