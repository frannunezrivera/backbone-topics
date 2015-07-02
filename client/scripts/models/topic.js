define(function(require) {
    'use strict';

    var Topic = Backbone.Model.extend({

        url: '',

        initialize: function() {},

        defaults: {},

        validate: function(attrs, options) {},

        parse: function(response, options) {
            return _.extend(response, {
                cssClasses: this.calculateCSS(response)
            });
        },

        calculateCSS: function(topic) {
            var css = [];

            //can use a switch but it's much slower in terms of performance
            if (topic.sentimentScore < 40) {
                css.push('red');
            } else if (topic.sentimentScore > 60) {
                css.push('green');
            } else {
                css.push('grey');
            }

            if (topic.volume <= 10) {
                css.push('size-1');
            } else if (topic.volume >= 60) {
                css.push('size-6');
            } else {
                var size = topic.volume.toString()[0];
                css.push('size-' + size);
            }

            return css.join(' ');
        }

    });

    return Topic;
});