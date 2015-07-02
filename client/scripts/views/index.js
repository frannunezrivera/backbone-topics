define(function(require) {
    'use strict';

    var TopicsCollection = require('../collections/topics');
    var TopicsCloudView = require('./topicscloud');
    var TopicDetailView = require('./topicdetail');
    var IndexView = Backbone.View.extend({

        el: '#app-wrapper',

        template: JST['client/templates/index.jst'],

        events: {},

        initialize: function() {
            this.render();

            var topics = new TopicsCollection();
            this.topicsView = new TopicsCloudView({
                collection: topics
            });

            this.detailView = new TopicDetailView();
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        }
    });

    return IndexView;
});