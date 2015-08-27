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

        name: 'Will Sutherland'.split(''),

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
                setTimeout(function () {
                    self.$(".title-letter-" + i).html(letter);
                }, self.time += self.speed);
            });

            // move the caret down a line (toggle visibility)
            setTimeout(function () {
                // hide, not delete otherwise words jump to fill void
                self.$('.type-caret').toggleClass('clear');
            }, self.time += self.speed);

            // type out the links
            _.each(self.homeLinks, function (link, i) {
                _.each(link.split(''), function (letter, j) {
                    setTimeout(function () {
                        self.$(".link-" + link + " > .links-letter-" + j).html(letter);
                    }, self.time += self.speed);
                });
                if (i !== self.homeLinks.length - 1) self.addSlashes(i); // if not the last
            });

            // at the end of typing make the caret blink
            setTimeout(function () {
                self.$('.links-type-caret').toggleClass('blinker');
            }, self.time += (self.speed * 4));
        },

        // adds ' // ' after a link
        addSlashes: function (i) {
            var self = this;
            var list = ["&nbsp;", "/", "/", "&nbsp;"];
            _.each(list, function (item, j) {
                setTimeout(function () {
                    self.$(".slash-list-" + i + " > .slash-" + j).html(item);
                }, self.time += self.speed);
            });
        }
    });
});
