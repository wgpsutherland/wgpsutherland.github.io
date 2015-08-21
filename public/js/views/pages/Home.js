define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/pages/Home.html',
    'views/sections/HomeTitle'
], function ($, _, Backbone, HomeTemplate, HomeTitleView) {

    return Backbone.View.extend({

        className: "fill background",

        template: _.template(HomeTemplate),

        initialize: function () {
            console.log('Home page initialising');
            this.homeTitleView = new HomeTitleView();
        },

        render: function () {

            // add page template to the DOM
            this.$el.html(this.template);

            // render and add views to the DOM
            this.homeTitleView.render();
            this.$el.append(this.homeTitleView.$el);
        }
    });
});
