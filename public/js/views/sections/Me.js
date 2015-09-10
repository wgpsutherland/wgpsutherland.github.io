define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Me.html',
    '../../models/Info'
], function ($, _, Backbone, MeTemplate, InfoModel) {

    return Backbone.View.extend({

        className: "me full-height-view home-view",

        template: _.template(MeTemplate),

        initialize: function () {
            console.log('Me view initialising');
            this.infoModel = new InfoModel();
            this.listenTo(this.infoModel, 'change', this.render);
        },

        render: function () {
            var model = this.infoModel;
            var template = this.template({
                description: model.get('description'),
                media: model.get('social_media'),
                email: model.get('email')
            });
            this.$el.html(template);
            this.scrollListen();
        },

        scrollListen: function() {

            var didScroll = false;

            var appearPoint;
            _.defer(function () {
                var height = $(window).outerHeight() / 4;
                appearPoint = this.$('.me').offset().top - (3 * height);
            });

            $(window).scroll(function () {
                didScroll = true;
            });

            setInterval(function () {
                if (didScroll) {
                    didScroll = false;
                    var windowTop = $(window).scrollTop();
                    if (windowTop >= appearPoint) {
                        this.$('.me-view-contact').addClass('appear');
                        this.$('.me-view-description').addClass('appear');
                    }
                }
            }, 250);
        }
    });
});
