define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/pages/Home.html',
    'views/sections/HomeTitle',
    'views/sections/Me'
], function ($, _, Backbone, HomeTemplate, HomeTitleView, MeView) {

    return Backbone.View.extend({

        className: "full-height-view",

        template: _.template(HomeTemplate),

        contentViews: {
            homeTitle: new HomeTitleView(),
            me: new MeView()
        },

        initialize: function () {
            console.log('Home page initialising');
        },

        render: function () {

            // add page template to the DOM
            this.$el.html(this.template);

            // render and add views to the DOM
            _.each(this.contentViews, function(view) {
                view.render();
                this.$el.append(view.$el);
            }, this);
        }
    });
});
