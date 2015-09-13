define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/Employment.html',
    '../../collections/Employments'
], function ($, _, Backbone, EmploymentTemplate, EmploymentsCollection) {

    return Backbone.View.extend({

        className: "employment full-height-view home-view",

        template: _.template(EmploymentTemplate),

        initialize: function () {
            console.log('Employment view initialising');
            this.employmentsCollection = new EmploymentsCollection();
            this.listenTo(this.employmentsCollection, 'add', this.render);
        },

        render: function () {
            var template = this.template({
                employmentsCollection: this.employmentsCollection
            });
            this.$el.html(template);
        }
    });
});
