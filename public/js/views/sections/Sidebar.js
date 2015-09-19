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

        render: function () {
            var template = this.template({
                tech: this.model.get('tech')
            });
            this.$el.html(template);
        }
    });
});