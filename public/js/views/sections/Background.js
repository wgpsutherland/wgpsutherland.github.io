define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    return Backbone.View.extend({

        className: "background",

        initialize: function () {
            console.log('Background view initialising');
        },

        render: function () {}
    });
});
