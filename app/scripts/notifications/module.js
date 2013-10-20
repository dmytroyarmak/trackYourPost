define(
    ['app'],
    function (app) {

        var notificationsRegion = $('.j-notifications-region');

        app.on('start', function() {
            app.commands.setHandler('notify:info', function(data) {
                var alert = $('<div>').addClass('alert').addClass('alert-warning').text(data.message);
                if (data.title) {
                    alert.prepend($('<strong>').text(data.title + ': '));
                }
                alert.prepend('<a class="close" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>');
                alert.appendTo(notificationsRegion);
            });
        });
    }
);
