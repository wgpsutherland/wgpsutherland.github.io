define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/Projects.html'
], function ($, _, Backbone, ProjectsTemplate) {

    return Backbone.View.extend({

        className: "fill background",

        template: _.template(ProjectsTemplate),

        initialize: function () {
            console.log('Projects page initialising');
        },

        render: function () {
            this.$el.html(this.template);
        }
    });
});