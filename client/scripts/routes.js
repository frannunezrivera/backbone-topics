define(function(require) {
    'use strict';
    var IndexView = require('./views/index');
    var TopicDetailView = require('./views/topicdetail');

    var currentView;
    var indexView;
    var Router = Backbone.Router.extend({

        routes: {
            '': 'index',
            'detail/:id': 'showDetail'
        },
        index: function() {
            // Render index page
            this.createIndexView();
        },
        showDetail: function(id) {
            var self = this;
            if (!indexView) {
                $.when(this.createIndexView()).done(function() {
                    self.createDetailsView(id);
                });
            } else {
                this.createDetailsView(id);
            }


        },

        createIndexView: function() {
            indexView = new IndexView();
            return indexView.topicsView.collection.fetch({
                reset: true
            });
        },

        createDetailsView: function(id) {
            var detailModel = indexView.topicsView.collection.get(id).toJSON();
            indexView.detailView.model = detailModel;
            indexView.detailView.render();
        }
    });

    return new Router();
});