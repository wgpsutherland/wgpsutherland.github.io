define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/Home.html'
], function ($, _, Backbone, HomeTemplate) {

    return Backbone.View.extend({

        className: "fill",

        template: _.template(HomeTemplate),

        initialize: function () {
            console.log('Home page initialising');
        },

        render: function () {
            this.$el.html(this.template);
            //this.$el.empty();
        }
    });
});