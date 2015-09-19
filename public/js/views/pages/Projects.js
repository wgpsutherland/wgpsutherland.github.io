define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/pages/Projects.html',
    'views/sections/Sidebar',
    'views/sections/ProjectGrid'
], function ($, _, Backbone, ProjectsTemplate, Sidebar, ProjectGridView) {

    return Backbone.View.extend({

        className: "full-height-view",

        template: _.template(ProjectsTemplate),

        views: {
            sidebar: new Sidebar(),
            content: new ProjectGridView()
        },

        initialize: function () {
            console.log('Projects page initialising');
        },

        render: function () {

            this.$el.html(this.template);

            this.views.sidebar.render();
            this.views.content.render();

            this.$el.prepend(this.views.sidebar.$el);
            this.$('.content-container').append(this.views.content.$el);
        }
    });
});