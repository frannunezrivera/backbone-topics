/*jshint expr: true*/

define(function(require) {
    'use strict';

    var Topic = require('client/scripts/views/topic');

    describe('Topic View', function() {

        beforeEach(function() {
            this.topic = new Topic({
                model: {
                    topic: {
                        id: 'test',
                        cssClasses: 'test'
                    }
                }
            });
        });

        it('Should run a few assertions', function() {

        });

    });

});