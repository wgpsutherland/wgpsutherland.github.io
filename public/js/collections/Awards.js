define([
    'underscore',
    'backbone',
    'models/Award'
], function(_, Backbone, AwardModel) {

    return Backbone.Collection.extend({
        initialize: function() {
            this.fetch();
        },
        url: function() {
            return 'public/data/me.json'
        },
        parse: function(response) {
            return response.awards;
        },
        model: AwardModel
    });
});