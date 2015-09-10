define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    return Backbone.View.extend({

        className: "background",

        initialize: function () {
            console.log('Background view initialising');
        },

        render: function () {
            this.scrollListen();
        },

        scrollListen: function () {

            var didScroll = false;

            var firstChangePoint, secondChangePoint;
            _.defer(function () {
                var bg = this.$('.background');
                var height = bg.outerHeight() / 4;
                firstChangePoint = bg.offset().top + height;
                secondChangePoint = this.$('.awards').offset().top - height;
            });

            $(window).scroll(function () {
                didScroll = true;
            });

            setInterval(function () {
                if (didScroll) {
                    didScroll = false;
                    var windowTop = $(window).scrollTop();
                    if (windowTop >= firstChangePoint && windowTop < secondChangePoint) {
                        this.$('.background').addClass('darken');
                    } else {
                        this.$('.background').removeClass('darken');
                    }
                }
            }, 250);
        }
    });
});
