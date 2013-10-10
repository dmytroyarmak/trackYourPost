define(
    ['app'],
    function (app) {

        var notificationsRegion = $('.j-notifications-region');

        app.on('start', function() {
            console.log('start notifications module');
            app.commands.setHandler('notify:info', function(message) {
                $('<div>').addClass('alert').addClass('alert-info').html('<a class="close" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>' + message).appendTo(notificationsRegion);
            });
        });
    }
);
