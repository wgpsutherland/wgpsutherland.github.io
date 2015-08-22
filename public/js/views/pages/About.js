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

        initialize: function () {
            console.log('About page initialising');
            this.meView = new MeView();
            this.awardsView = new AwardsView();
            this.educationView = new EducationView();
            this.employmentView = new EmploymentView();
            this.skillsView = new SkillsView();
        },

        render: function () {

            // add page template to the DOM
            this.$el.html(this.template);

            // render and add views to the DOM
            this.meView.render();
            this.awardsView.render();
            this.educationView.render();
            this.employmentView.render();
            this.skillsView.render();
            this.$el.append(
                this.meView.$el,
                this.awardsView.$el,
                this.educationView.$el,
                this.employmentView.$el,
                this.skillsView.$el
            );
        }
    });
});