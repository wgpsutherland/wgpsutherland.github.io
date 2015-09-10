define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Nav.html'
], function ($, _, Backbone, NavTemplate) {

    return Backbone.View.extend({

        className: "nav-container",

        template: _.template(NavTemplate),

        initialize: function () {
            console.log('Nav view initialising');
        },

        render: function () {
            this.$el.html(this.template);
            this.scrollListen();
        },

        scrollListen: function() {

            var hasClass = false;

            var navTop;
            _.defer(function() {
                navTop = this.$('.nav-container').offset().top;
            });

            $(window).scroll(function () {
                var windowTop = $(window).scrollTop();
                if(windowTop >= navTop && !hasClass) {
                    this.$('.nav-container').addClass('fixed-nav');
                    hasClass = true;
                } else if(windowTop < navTop && hasClass){
                    this.$('.nav-container').removeClass('fixed-nav');
                    hasClass = false;
                }
            });
        }
    });
});
