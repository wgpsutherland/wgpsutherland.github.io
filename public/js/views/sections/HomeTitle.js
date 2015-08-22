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
            this.typeText();
        },

        // create the typing animation
        typeText: function () {

            const self = this;

            const nameTypingCaret = $("<span>").text("|").addClass("name-type-caret");
            const linksTypingCaret = $("<span>").text("|").addClass("links-type-caret");

            self.$(".name").append(nameTypingCaret);

            const speed = 100;

            var time = 0;

            var name = 'Will Sutherland';
            var homeLinks = ['about', 'projects'];
            console.log(homeLinks);

            _.each(name.split(''), function (letter, i) {
                setTimeout(function () {
                    self.appendLetter((i === 0) ? '.name-type-caret' : '.name span:last-child', letter);
                }, time += speed);
            });
            setTimeout(function () {
                // don't just delete it as the words will jump to fill the void
                self.$('.name-type-caret').toggleClass('clear');
                self.$(".home-links").append(linksTypingCaret);

                //self.$('.type-caret').toggleClass('blinker'); // save this for the end
            }, time += speed);
            _.each(homeLinks, function (link, i) {
                var list = link.split('');
                self.$(".home-links").append("<li class=li-" + link + "><a class=link-" + link + " href='#/" + link + "'></a></li>");

                _.each(list, function (letter) {
                    setTimeout(function () {
                        self.$(".link-" + link).append($("<span>").html(letter));
                    }, time += speed);
                });

                if (i !== homeLinks.length - 1) {
                    var slashLi = $("<li>");
                    setTimeout(function () {
                        self.$(".li-" + link).append(slashLi);
                    }, time);
                    setTimeout(function () {
                        slashLi.append(($("<span>").html("&nbsp;")));
                    }, time += speed);
                    setTimeout(function () {
                        slashLi.append(($("<span>").html("/")));
                    }, time += speed);
                    setTimeout(function () {
                        slashLi.append(($("<span>").html("/")));
                    }, time += speed);
                    setTimeout(function () {
                        slashLi.append(($("<span>").html("&nbsp;")));
                    }, time += speed);
                }
            });
            setTimeout(function () {
                self.$('.links-type-caret').toggleClass('blinker');
            }, time += (speed * 4));
        },

        appendLetter: function (className, letter) {
            this.$(className).before($("<span>").html(letter));
        }
    });
});
