define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Me.html',
    'models/info'
], function ($, _, Backbone, MeTemplate, infoModel) {

    return Backbone.View.extend({

        className: "about-page-view me",

        template: _.template(MeTemplate),

        infoModel: new infoModel(),

        initialize: function () {
            console.log('Me view initialising');
            this.listenTo(this.infoModel, 'change', this.render);
        },

        render: function () {
            var model = this.infoModel;
            var template = this.template({
                description: model.get('description'),
                media: model.get('social_media')
            });
            this.$el.html(template);
        }
    });
});
