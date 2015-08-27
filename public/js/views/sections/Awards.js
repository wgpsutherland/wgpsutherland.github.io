define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Awards.html',
    'collections/Awards'
], function ($, _, Backbone, AwardsTemplate, AwardsCollection) {

    return Backbone.View.extend({

        className: "about-page-view awards",

        template: _.template(AwardsTemplate),

        awardsCollection: new AwardsCollection(),

        initialize: function () {
            console.log('Awards view initialising');
            this.listenTo(this.awardsCollection, 'add', this.render);
        },

        render: function () {
            var template = this.template({
                awardsCollection: this.awardsCollection
            });
            this.$el.html(template);
        }
    });
});
