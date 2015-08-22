define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/pages/About.html',
    'views/sections/Me',
    'views/sections/Awards',
    'views/sections/Education',
    'views/sections/Employment',
    'views/sections/Skills'
], function ($, _, Backbone, AboutTemplate, MeView, AwardsView, EducationView, EmploymentView, SkillsView) {

    return Backbone.View.extend({

        className: "fill background",

        template: _.template(AboutTemplate),

        views: {
            me: new MeView(),
            awards: new AwardsView(),
            education: new EducationView(),
            employment: new EmploymentView(),
            skills: new SkillsView()
        },

        initialize: function () {
            console.log('About page initialising');
        },

        render: function () {

            // add page template to the DOM
            this.$el.html(this.template);

            // render and add views to the DOM
            _.each(this.views, function(view) {
                view.render();
                this.$el.append(view.$el);
            }, this);
        }
    });
});