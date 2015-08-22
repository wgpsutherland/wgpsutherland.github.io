define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/HomeTitle.html'
], function ($, _, Backbone, HomeTitleTemplate) {

    return Backbone.View.extend({

        className: "title",

        template: _.template(HomeTitleTemplate),

        initialize: function () {
            console.log('Home title view initialising');
        },

        render: function () {
            this.$el.html(this.template);
            this.verticallyAlign();
            this.type();
        },

        name: 'Will Sutherland',

        homeLinks: ['about', 'projects'],

        time: 0,

        // time between each letter being printed
        speed: 100,

        verticallyAlign: function () {
            this.$('.name').css({
                'margin-top': ($('.page').outerHeight() / 2) - 100
            });
        },

        // run the typing animation
        type: function () {

            const self = this;
            const spanTag = "<span>";
            const nameTypingCaret = $(spanTag).text("|").addClass("name-type-caret");
            const linksTypingCaret = $(spanTag).text("|").addClass("links-type-caret");

            // add caret to top line
            self.$(".name").append($(spanTag).addClass("name-follow"));
            self.$(".name").append(nameTypingCaret);

            // create empty list and link shells for each link
            _.each(self.homeLinks, function (link, i) {
                self.$(".home-links").append(
                    "<li class=li-" + link + ">" +
                    "<a class=link-" + link + " href='#/" + link + "'>" +
                    "</a>" +
                    "</li>"
                );
            });

            // type out the name
            _.each(self.name.split(''), function (letter, i) {
                setTimeout(function () {
                    self.$(".name-follow").append($(spanTag).html(letter));
                }, self.time += self.speed);
            });

            // move the caret down a line
            setTimeout(function () {
                self.$('.name-type-caret').toggleClass('clear'); // hide, not delete otherwise words jump to fill void
                self.$(".home-links").append(linksTypingCaret);
            }, self.time += self.speed);

            // type out the links
            _.each(self.homeLinks, function (link, i) {
                _.each(link.split(''), function (letter) {
                    setTimeout(function () {
                        self.$(".link-" + link).append($(spanTag).html(letter));
                    }, self.time += self.speed);
                });
                if (i !== self.homeLinks.length - 1) self.addSlashes(link); // if not the last
            });

            // at the end of typing make the caret blink
            setTimeout(function () {
                self.$('.links-type-caret').toggleClass('blinker');
            }, self.time += (self.speed * 4));
        },

        // adds ' // ' after a link
        addSlashes: function (link) {
            var self = this;
            var slashLi = $("<li>");
            var list = ["&nbsp;", "/", "/", "&nbsp;"];
            setTimeout(function () {
                self.$(".li-" + link).after(slashLi);
            }, self.time);
            _.each(list, function (item) {
                setTimeout(function () {
                    slashLi.append(($("<span>").html(item)));
                }, self.time += self.speed);
            });
        }
    });
});
