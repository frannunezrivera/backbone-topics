define(function(require) {
    'use strict';

    var Topic = require('../models/topic');

    var Topics = Backbone.Collection.extend({

        model: Topic,

        url: './data/topics.json',

        parse: function(data) {
            //removing the spaces from the ids
            data.topics.forEach(function(a) {
                a.id = a.id.replace(/ /g, '_');
            });

            return data.topics;
        }

    });

    return Topics;
});