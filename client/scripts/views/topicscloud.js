define(function(require) {
    'use strict';
    var TopicView = require('./topic');
    var TopicsCloud = Backbone.View.extend({

        tagName: 'div',

        id: '',

        className: '',

        el: '#topics-cloud',

        template: JST['client/templates/topicscloud.jst'],

        events: {},

        initialize: function() {
            this.render();

            this.listenTo(this.collection, 'add', this.addTopic);
            this.listenTo(this.collection, 'reset', this.addAllTopics);
        },

        render: function() {
            this.$el.html(this.template({
                topics: this.collection.toJSON()
            }));
            return this;
        },
        addTopic: function(topic) {
            var view = new TopicView({
                model: topic
            });
            this.$('ul#topics-list').append(view.render().el);
        },

        addAllTopics: function() {
            this.render();
            _.each(this.collection.toJSON(), this.addTopic, this);
        },

    });

    return TopicsCloud;
});