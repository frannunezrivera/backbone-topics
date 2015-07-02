define(function(require) {
    'use strict';

    var Topic = Backbone.View.extend({

        tagName: 'li',

        id: '',

        className: '',

        template: JST['client/templates/topic.jst'],

        events: {
            'click a': 'onClickTopic'
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template({
                topic: this.model
            }));
            return this;
        }
    });

    return Topic;
});