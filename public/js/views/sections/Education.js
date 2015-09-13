define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Education.html',
    '../../collections/Educations'
], function ($, _, Backbone, EducationTemplate, EducationsCollection) {

    return Backbone.View.extend({

        className: "education full-height-view home-view",

        template: _.template(EducationTemplate),

        initialize: function () {
            console.log('Education view initialising');
            this.educationsCollection = new EducationsCollection();
            this.listenTo(this.educationsCollection, 'add', this.render);
        },

        render: function () {
            var template = this.template({
                educationsCollection: this.educationsCollection
            });
            this.$el.html(template);
        }
    });
});
