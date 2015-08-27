define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    return Backbone.Model.extend({
        url: 'public/data/me.json',
        initialize: function() {
            this.fetch();
        },
        parse: function(response) {
            return response.info;
        }
    });
});
