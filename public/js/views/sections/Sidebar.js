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
        },

        render: function () {
            this.$el.html(this.template);
        }
    });
});
