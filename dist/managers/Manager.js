'use strict';var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports,'__esModule',{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var Manager=function(){function a(b){_classCallCheck(this,a),this.api=b}return _createClass(a,[{key:'get_by_id',value:function get_by_id(b){var c=1<arguments.length&&void 0!==arguments[1]&&arguments[1],d=null;return this.api.state[this.state_name].find(function(e){(e.id===b||e.temp_id==b)&&(d=e)}),d||c||!this.object_type||(d=this.api[this.state_name].get(b)),Promise.resolve(d)}},{key:'queueCmd',value:function queueCmd(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=Object.assign({uuid:this.api.generate_uuid()},'string'==typeof b?{type:b}:b,{args:c});return this.api.queue.push(d),d}},{key:'state_name',get:function get(){return''}},{key:'object_type',get:function get(){return''}}]),a}();exports.default=Manager;
//# sourceMappingURL=Manager.js.map