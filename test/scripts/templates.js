this["JST"] = this["JST"] || {};

this["JST"]["client/templates/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="yeogurt-info">\n  <h1>My topics challenge!</h1>\n  <div id="topics-cloud"></div>\n  <div id="topic-detail"></div>\n  <p class="links">\n    <a href="/docs/styleguide/index.html" data-bypass>Styleguide</a>\n    <a href="/docs/api/index.html" data-bypass>API</a>\n  </p>\n</div>\n<code class="version">v0.14.6</code>\n';

}
return __p
};

this["JST"]["client/templates/topic.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#detail/' +
((__t = ( topic.id )) == null ? '' : __t) +
'" class="' +
((__t = ( topic.cssClasses )) == null ? '' : __t) +
'" data-id="' +
((__t = ( topic.id )) == null ? '' : __t) +
'">' +
((__t = ( topic.label )) == null ? '' : __t) +
'</a>\n';

}
return __p
};

this["JST"]["client/templates/topicdetail.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (!topic) { ;
__p += '\n\t<div>No topic selected</div>\n';
 }else{ ;
__p += '\n\t\n\t<ul>\n\t\t<li class="title">Topic: ' +
((__t = ( topic.label )) == null ? '' : __t) +
'</li>\n\t\t<li>Total Mentions: ' +
((__t = ( topic.volume )) == null ? '' : __t) +
'</li>\n\t\t<li>Positive Mentions: ' +
((__t = ( topic.sentiment.positive || 0 )) == null ? '' : __t) +
'</li>\n\t\t<li>Neutral Mentions: ' +
((__t = ( topic.sentiment.neutral || 0 )) == null ? '' : __t) +
'</li>\n\t\t<li>Negative Mentions: ' +
((__t = ( topic.sentiment.negative || 0 )) == null ? '' : __t) +
'</li>\n\t</ul>\n';
 } ;


}
return __p
};

this["JST"]["client/templates/topicscloud.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div>\n';
if (topics.length) { ;
__p += ' \n \t<ul id="topics-list"></ul>\n';
 }else{ ;
__p += '\n\tLoading topics...\n';
 } ;
__p += '\n\n</div>\n';

}
return __p
};