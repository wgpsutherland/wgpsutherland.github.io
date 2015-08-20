require.config({
    paths: {
        'jquery': [
            "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min",
            "./assets/jquery-2.1.4.min"
        ],
        'underscore': [
            "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
            "./assets/underscore-min"
        ],
        'backbone': [
            "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.1/backbone-min",
            "./assets/backbone-min"
        ],
        'text': "./assets/text",
        'templates': "../html"
    },
    shim: {
        backbone: {
            deps: ['underscore']
        },
        underscore: {
            exports: '_'
        }
    }
});

require(['jquery'], function ($) {
});
require(['underscore'], function ($) {
});
require(['backbone'], function ($) {
});
require(['app'], function (App) {
        App.initialize();
    }
);