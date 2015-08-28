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
                {name: 'me', icon: 'child'},
                {name: 'awards', icon: 'trophy'},
                {name: 'education', icon: 'graduation-cap'},
                {name: 'jobs', icon: 'briefcase'},
                {name: 'skills', icon: 'code'}
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
