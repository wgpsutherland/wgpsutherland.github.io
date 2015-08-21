define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/About.html'
], function ($, _, Backbone, AboutTemplate) {

    return Backbone.View.extend({

        className: "fill background",

        template: _.template(AboutTemplate),

        initialize: function () {
            console.log('About page initialising');
        },

        render: function () {
            this.$el.html(this.template);
        }
    });
});