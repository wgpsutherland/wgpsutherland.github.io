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

            this.listenTo(this.collection, 'add remove change', this.render);
        },

        render: function () {
            var template = this.template({
                collection: this.collection
            });
            this.$el.html(template);
        }
    });
});
