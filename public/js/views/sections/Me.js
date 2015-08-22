define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Me.html'
], function ($, _, Backbone, MeTemplate) {

    return Backbone.View.extend({

        className: "about-page-view me",

        template: _.template(MeTemplate),

        initialize: function () {
            console.log('Me view initialising');
        },

        render: function () {
            this.$el.html(this.template);
        }
    });
});
