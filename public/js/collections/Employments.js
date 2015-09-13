define([
    'underscore',
    'backbone',
    'models/Employment'
], function(_, Backbone, EmploymentModel) {

    return Backbone.Collection.extend({
        initialize: function() {
            this.fetch();
        },
        url: function() {
            return 'public/data/me.json'
        },
        parse: function(response) {
            return response.employment;
        },
        model: EmploymentModel
    });
});