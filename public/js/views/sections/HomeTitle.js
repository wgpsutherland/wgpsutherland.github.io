define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/HomeTitle.html'
], function ($, _, Backbone, HomeTitleTemplate) {

    return Backbone.View.extend({

        className: "title-view",

        template: _.template(HomeTitleTemplate),

        initialize: function () {
            console.log('Home title view initialising');
        },

        render: function () {
            var template = this.template({
                title: this.name,
                links: this.homeLinks
            });
            this.$el.html(template);
            this.verticallyAlign();
            this.type();
        },

        name: 'Will Sutherland',

        homeLinks: ['about', 'projects'],

        time: 0,

        // time between each letter being printed
        speed: 100,

        verticallyAlign: function () {
            this.$('.home-title-name').css({
                'margin-top': ($('.page').outerHeight() / 2) - 100
            });
        },

        // run the typing animation
        type: function () {

            const self = this;

            // type out the name
            _.each(self.name, function (letter, i) {
                self.addWithTimeout(".title-letter-" + i, letter, self.speed);
            });

            // move the caret down a line (toggle visibility)
            self.toggleWithTimeout('.type-caret', 'clear', self.speed);

            // type out the links
            _.each(self.homeLinks, function (link, i) {
                _.each(link.split(''), function (letter, j) {
                    self.addWithTimeout(".link-" + link + " > .links-letter-" + j, letter, self.speed);
                });
                if (i !== self.homeLinks.length - 1) self.addSlashes(i); // if not the last
            });

            // at the end of typing make the caret blink
            self.toggleWithTimeout('.links-type-caret', 'blinker', self.speed * 4);
        },

        // adds ' // ' after a link
        addSlashes: function (i) {
            const self = this;
            var list = ["&nbsp;", "/", "/", "&nbsp;"];
            _.each(list, function (item, j) {
                self.addWithTimeout(".slash-list-" + i + " > .slash-" + j, item, self.speed);
            });
        },

        addWithTimeout: function(target, item, increment) {
            const self = this;
            setTimeout(function () {
                self.$(target).html(item);
            }, self.time += increment);
        },

        toggleWithTimeout: function(target, className, increment) {
            const self = this;
            setTimeout(function () {
                self.$(target).toggleClass(className);
            }, self.time += increment);
        }
    });
});
