define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Skills.html'
], function ($, _, Backbone, SkillsTemplate) {

    return Backbone.View.extend({

        className: "about-page-view skills",

        template: _.template(SkillsTemplate),

        initialize: function () {
            console.log('Skills view initialising');
        },

        render: function () {
            this.$el.html(this.template);
        }
    });
});
