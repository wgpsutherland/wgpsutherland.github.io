define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/LargeNav.html'
], function ($, _, Backbone, LargeNavTemplate) {

    return Backbone.View.extend({

        className: "large-nav",

        template: _.template(LargeNavTemplate)({
            views: [
                'me',
                'awards',
                'education',
                'employment',
                'skills'
            ]
        }),

        initialize: function () {
            console.log('Large nav view initialising');
        },

        render: function () {
            this.$el.html(this.template);
        }
    });
});
