define([
    'jquery',
    'underscore',
    'backbone',
    'views/pages/Home',
    'views/pages/About',
    'views/pages/Projects'
], function ($, _, Backbone, HomePage, AboutPage, ProjectsPage) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'about': 'about',
            'projects': 'projects'
        }
    });

    return {

        initialize: function () {

            var router = new Router();

            var homePage = new HomePage();
            var aboutPage = new AboutPage();
            var projectsPage = new ProjectsPage();

            var pages = {
                home: homePage,
                about: aboutPage,
                projects: projectsPage
            };

            router.on('route', function (pageName) {
                renderPage(pageName);
            });

            Backbone.history.start({
                pushState: false
            });

            function renderPage(pageName) {

                // if page hasn't been rendered before
                if (!$('.page > [data-name="' + pageName + '"]').length) {
                    pages[pageName].render();
                    $('.page').append(pages[pageName].$el.attr('data-name', pageName));
                }

                _.each(pages, function (page, name) {
                    page.$el.toggle(name === pageName);
                });
            }
        }
    }
});
