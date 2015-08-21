define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/pages/About.html'
], function ($, _, Backbone, AboutTemplate) {

    return Backbone.View.extend({

        className: "fill background",

        template: _.template(AboutTemplate),

        initialize: function () {
            console.log('About page initialising');
        },

        render: function () {

            // add page template to the DOM
            this.$el.html(this.template);
        }
    });
});