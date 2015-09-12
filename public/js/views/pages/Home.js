define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/pages/Home.html',
    'views/sections/HomeTitle',
    'views/sections/Me',
    'views/sections/Awards',
    'views/sections/Education',
    'views/sections/Employment',
    'views/sections/Skills'
], function ($, _, Backbone, HomeTemplate, HomeTitleView, MeView, AwardsView, EducationView, EmploymentView, SkillsView) {

    return Backbone.View.extend({

        className: "full-height-view home-page",

        template: _.template(HomeTemplate),

        contentViews: {
            homeTitle: new HomeTitleView(),
            me: new MeView(),
            awards: new AwardsView(),
            education: new EducationView(),
            employment: new EmploymentView(),
            skills: new SkillsView()
        },

        initialize: function () {
            console.log('Home page initialising');
        },

        render: function () {

            // add page template to the DOM
            this.$el.html(this.template);

            // render and add views to the DOM
            _.each(this.contentViews, function (view) {
                view.render();
                this.$el.append(view.$el);
            }, this);
        }
    });
});
