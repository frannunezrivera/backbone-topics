/*jshint expr: true*/

define(function(require) {
    'use strict';

    var TopicsCloud = require('client/scripts/views/topicscloud');
    var TopicsCollection = require('client/scripts/collections/topics');

    describe('TopicsCloud View', function() {

        beforeEach(function() {
            this.topicsCloud = new TopicsCloud({
                collection: new TopicsCollection()
            });
        });

        it('Should run a few assertions', function() {

        });

    });

});