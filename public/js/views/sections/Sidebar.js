define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Sidebar.html'
], function ($, _, Backbone, SidebarTemplate) {

    return Backbone.View.extend({

        className: "nav-container",

        template: _.template(SidebarTemplate),

        initialize: function () {
            console.log('Sidebar view initialising');
            this.listenTo(this.model, 'change', this.render);
        },

        render: function (id) {

            // if the function is called with a filtering id instead of from the event listener
            // if called from the listener then the type is 'object' and we don't want to change this.filter
            if (typeof id === 'string') this.current = id;

            var template = this.template({
                tech: this.model.get('tech'),
                types: this.model.get('project_types'),
                current: this.current
            });
            this.$el.html(template);
        },
        events: {
            'click .burger-icon': 'menuAppear'
        },
        menuAppear: function() {
            this.$('.nav-container-fixed').toggleClass('mobile-nav');
        }
    });
});
