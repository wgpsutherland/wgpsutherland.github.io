define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/ProjectGrid.html'
], function ($, _, Backbone, ProjectGridTemplate) {

    return Backbone.View.extend({

        className: "",

        template: _.template(ProjectGridTemplate),

        initialize: function () {
            console.log('ProjectGrid view initialising');
        },

        render: function () {
            this.$el.html(this.template);
        }
    });
});