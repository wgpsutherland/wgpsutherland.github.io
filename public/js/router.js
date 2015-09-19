define([
    'jquery',
    'underscore',
    'backbone',
    'views/pages/Home',
    'views/pages/Projects',
    'collections/Projects'
], function ($, _, Backbone, HomePage, ProjectsPage, ProjectsCollection) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'projects': 'projects'
        }
    });

    return {

        initialize: function () {

            var router = new Router();

            var projectsCollection = new ProjectsCollection();

            var homePage = new HomePage();
            var projectsPage = new ProjectsPage({
                projectsCollection: projectsCollection
            });

            var pages = {
                home: homePage,
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
