define([
    'underscore',
    'backbone',
    'models/Education'
], function(_, Backbone, EducationModel) {

    return Backbone.Collection.extend({
        initialize: function() {
            this.fetch();
        },
        url: function() {
            return 'public/data/me.json'
        },
        parse: function(response) {
            return response.education;
        },
        model: EducationModel
    });
});