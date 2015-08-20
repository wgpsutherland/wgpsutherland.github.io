define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/HomeTemplate.html'
], function ($, _, Backbone, HomeTemplate) {
    return Backbone.View.extend({
        initialize: function () {
            console.log('Home page initialising');
        },
        render: function () {
            var template = _.template(HomeTemplate);
            this.$el.html(template);
            //this.$el.empty();
        }
    });
});