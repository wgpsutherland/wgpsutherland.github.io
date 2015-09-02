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
                media: model.get('social_media')
            });
            this.$el.html(template);
        }
    });
});
