define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Education.html'
], function ($, _, Backbone, EducationTemplate) {

    return Backbone.View.extend({

        className: "education full-height-view home-view",

        template: _.template(EducationTemplate),

        initialize: function () {
            console.log('Education view initialising');
        },

        render: function () {
            this.$el.html(this.template);
        }
    });
});
