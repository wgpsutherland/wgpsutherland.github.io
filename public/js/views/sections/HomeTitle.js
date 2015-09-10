define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sections/HomeTitle.html',
    'views/sections/Nav'
], function ($, _, Backbone, HomeTitleTemplate, Nav) {

    return Backbone.View.extend({

        className: "title-view full-height-view",

        template: _.template(HomeTitleTemplate),

        initialize: function () {
            console.log('Home title view initialising');
            this.nav = new Nav();
        },

        render: function () {
            var template = this.template({
                title: this.name,
                links: this.homeLinks
            });
            this.$el.html(template);

            this.nav.render();
            this.$el.append(this.nav.$el);

            this.verticallyAlign();
            this.type();
        },

        name: 'Will Sutherland',

        homeLinks: ['projects'],

        time: 300,

        // time between each letter being printed
        speed: 100,

        verticallyAlign: function () {
            this.$('.home-title-name').css({
                'margin-top': ($('.page').outerHeight() / 2) - 100
            });
        },

        // run the typing animation
        type: function () {

            // type out the name
            _.each(this.name, function (letter, i) {
                this.addWithTimeout(".title-letter-" + i, letter, this.speed);
            }, this);

            // visually move the caret down a line
            this.removeWithTimeout('.home-title-name-type-caret', 0);
            this.toggleWithTimeout('.links-type-caret', 'clear', this.speed);

            // type out the links
            _.each(this.homeLinks, function (link, i) {
                _.each(link.split(''), function (letter, j) {
                    this.addWithTimeout(".link-" + link + " > .links-letter-" + j, letter, this.speed);
                }, this);
                if (i !== this.homeLinks.length - 1) this.addSlashes(i); // if not the last
            }, this);

            // at the end of typing make the caret blink
            this.toggleWithTimeout('.links-type-caret', 'blinker', this.speed * 4);
        },

        // adds ' // ' after a link
        addSlashes: function (i) {
            var list = ["&nbsp;", "/", "/", "&nbsp;"];
            _.each(list, function (item, j) {
                this.addWithTimeout(".slash-list-" + i + " > .slash-" + j, item, this.speed);
            }, this);
        },

        addWithTimeout: function(target, item, increment) {
            setTimeout(_.bind(function () {
                this.$(target).html(item);
            },this), this.time += increment);
        },

        toggleWithTimeout: function(target, className, increment) {
            setTimeout(_.bind(function () {
                this.$(target).toggleClass(className);
            }, this), this.time += increment);
        },

        removeWithTimeout: function(target, increment) {
            setTimeout(_.bind(function() {
                this.$(target).remove();
            }, this), this.time += increment);
        }
    });
});
