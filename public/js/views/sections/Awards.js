define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Awards.html',
    '../../collections/Awards'
], function ($, _, Backbone, AwardsTemplate, AwardsCollection) {

    return Backbone.View.extend({

        className: "awards full-height-view",

        template: _.template(AwardsTemplate),

        initialize: function () {
            console.log('Awards view initialising');
            this.awardsCollection = new AwardsCollection();
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
