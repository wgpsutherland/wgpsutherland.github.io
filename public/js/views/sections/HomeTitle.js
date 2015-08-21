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
            var self = this;
            var speed = 100;
            var wordList = 'Will Sutherland'.split('');
            _.each(wordList, function (letter, i) {
                setTimeout(function () {
                    self.appendLetter((i === 0) ? '.type-caret' : '.name span:last-child', letter);
                },(i + 1) * speed);
            });
            setTimeout(function () {
                self.$('.type-caret').toggleClass('blinker');
            }, (wordList.length * speed) + 400);
        },

        appendLetter: function (className, letter) {
            this.$(className).before("<span>" + letter + "</span>");
        }
    });
});
