define([
    'jquery',
    'underscore',
    'backbone',
    'views/pages/Home'
], function ($, _, Backbone, HomePage) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home'
        }
    });

    return {

        initialize: function () {

            var router = new Router();

            var homePage = new HomePage();

            var pages = {
                home: homePage
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
