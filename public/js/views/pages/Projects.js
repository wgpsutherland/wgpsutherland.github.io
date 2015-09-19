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

        initialize: function (options) {

            console.log('Projects page initialising');

            this.projectsCollection = options.projectsCollection;
            this.infoModel = options.infoModel;

            this.sidebar = new Sidebar({
                model: this.infoModel
            });
            this.projectGridView = new ProjectGridView({
                collection: this.projectsCollection
            });

            //this.listenTo(this.projectsCollection, 'add', this.render);
        },

        render: function () {

            this.$el.html(this.template);

            this.sidebar.render();
            this.projectGridView.render();

            this.$el.prepend(this.sidebar.$el);
            this.$('.content-container').append(this.projectGridView.$el);
        }
    });
});