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

        render: function (id) {

            // if the function is called with a filtering id instead of from the event listener
            // if called from the listener then the type is 'object' and we don't want to change this.filter
            if (typeof id === 'string') this.filter = id;

            var template = this.template({
                collection: this.collection.filter(_.bind(function (model) {
                    var tags = model.get('tags');
                    return this.filter === 'all' || _.contains(tags, this.filter);
                }, this))
            });
            this.$el.html(template);
        }
    });
});
