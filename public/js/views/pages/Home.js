define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/pages/Home.html',
    'views/sections/HomeTitle'
], function ($, _, Backbone, HomeTemplate, HomeTitleView) {

    return Backbone.View.extend({

        className: "full-height-view home-page",

        template: _.template(HomeTemplate),

        view: new HomeTitleView(),

        initialize: function () {
            console.log('Home page initialising');
        },

        render: function () {
            this.$el.html(this.template);
            this.view.render();
            this.$el.append(this.view.$el);
        }
    });
});
