define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Employment.html'
], function ($, _, Backbone, EmploymentTemplate) {

    return Backbone.View.extend({

        className: "",

        template: _.template(EmploymentTemplate),

        initialize: function () {
            console.log('Employment view initialising');
        },

        render: function () {
            this.$el.html(this.template);
        }
    });
});
