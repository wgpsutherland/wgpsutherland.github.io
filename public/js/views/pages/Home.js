define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/Home.html'
], function ($, _, Backbone, HomeTemplate) {

    return Backbone.View.extend({

        className: "fill",

        template: _.template(HomeTemplate),

        initialize: function () {
            console.log('Home page initialising');
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
            _.each(wordList, _.bind(function (letter, i) {
                setTimeout(function () {
                    self.appendLetter((i === 0) ? '.type-caret' : '.name span:last-child', letter);
                }, (i + 1) * speed);
            }), this);
            setTimeout(function () {
                self.$('.type-caret').addClass('blinker');
            }, (wordList.length * speed) + 400);
        },

        appendLetter: function (className, letter) {
            this.$(className).after("<span>" + letter + "</span>");
        }
    });
});