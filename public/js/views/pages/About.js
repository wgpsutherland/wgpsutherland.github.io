define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/pages/About.html',
    'views/sections/Me',
    'views/sections/Awards',
    'views/sections/Education',
    'views/sections/Employment',
    'views/sections/Skills',
    'views/sections/Sidebar'
], function ($, _, Backbone, AboutTemplate, MeView, AwardsView, EducationView, EmploymentView, SkillsView, Sidebar) {

    return Backbone.View.extend({

        className: "fill background",

        template: _.template(AboutTemplate),

        views: {
            sidebar: new Sidebar(),
            content: {
                me: new MeView(),
                awards: new AwardsView(),
                education: new EducationView(),
                employment: new EmploymentView(),
                skills: new SkillsView()
            }
        },

        initialize: function () {
            console.log('About page initialising');
        },

        render: function () {

            // add page template to the DOM
            this.$el.html(this.template);


            // render and add content views
            _.each(this.views.content, function(view) {
                view.render();
                this.$('.content-container').append(view.$el);
            }, this);
        }
    });
});
