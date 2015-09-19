define([
    'underscore',
    'backbone',
    'models/Project'
], function(_, Backbone, ProjectModel) {

    return Backbone.Collection.extend({
        initialize: function() {
            this.fetch();
        },
        url: function() {
            return 'public/data/me.json'
        },
        parse: function(response) {
            return response.projects;
        },
        model: ProjectModel
    });
});