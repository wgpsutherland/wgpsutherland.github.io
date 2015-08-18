define([
    'jquery',
    'underscore',
    'backbone',
    'views/HomePage'
], function($, _, Backbone, HomePage) {

    var Router = Backbone.Router.extend({

        initialize: function() {

        },
        routes: {
            '': 'home'
        }
    });

    var initialize = function() {

        var router = new Router();

        var homePage = new HomePage();

        var pages = {
            home: homePage
        };

        router.on('route', function(pageName) {
            renderPage(pageName);
        });

        Backbone.history.start({
            pushState: false
        });

        function renderPage(pageName) {

            // checks if the page has been rendered before
            if (!$('.page > [data-name="' + pageName + '"]').length) {
                pages[pageName].render();
                $('.page').append(pages[pageName].$el.attr('data-name', pageName));
            }

            _.each(pages, function(page, name) {
                page.$el.toggle(name===pageName);
            });
        }
    };

    return {
        initialize: initialize
    }
});
