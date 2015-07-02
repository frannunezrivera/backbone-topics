define(function(require) {
    'use strict';

    var TopicDetail = Backbone.View.extend({

        tagName: 'div',

        id: '',

        className: '',

        el: '#topic-detail',

        template: JST['client/templates/topicdetail.jst'],

        events: {},

        initialize: function() {
            this.render();
        },

        render: function() {
            var model = this.model ? this.model : false;
            this.$el.html(this.template({
                topic: model
            }));
            return this;
        }

    });

    return TopicDetail;
});