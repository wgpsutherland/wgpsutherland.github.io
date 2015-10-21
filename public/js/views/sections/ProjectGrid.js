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

            var collection = this.collection.filter(_.bind(function (model) {
                var tags = model.get('tags');
                return this.filter === 'All' || _.contains(tags, this.filter);
            }, this));

            var template = this.template({
                collection: collection
            });

            this.$el.html(template);

            if($(window).width() >= 768) this.normalizeRowHeights(); // when the projects are 2 to a row
        },

        normalizeRowHeights: function () {
            _.defer(function() {
                var rows = this.$('.project-row');
                for (var i = 0; i < rows.length; i++) {
                    var row = rows.eq(i);
                    var projects = row.find('.project-outer-wrapper');
                    for (var j = 0; j < projects.length; j++) {
                        projects.eq(j).height(row.height() - 10 + 'px');
                    }
                }
            });
        }
    });
});
