define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Education.html'
], function ($, _, Backbone, EducationTemplate) {

    return Backbone.View.extend({

        className: "about-page-view education",

        template: _.template(EducationTemplate),

        initialize: function () {
            console.log('Education view initialising');
        },

        render: function () {
            this.$el.html(this.template);
        }
    });
});
