define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Awards.html'
], function ($, _, Backbone, AwardsTemplate) {

    return Backbone.View.extend({

        className: "about-page-view awards",

        template: _.template(AwardsTemplate),

        initialize: function () {
            console.log('Awards view initialising');
        },

        render: function () {
            this.$el.html(this.template);
        }
    });
});
