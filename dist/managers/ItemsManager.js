'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_Manager2=require('./Manager'),_Manager3=_interopRequireDefault(_Manager2),_Item=require('./../models/Item'),_Item2=_interopRequireDefault(_Item);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function _objectWithoutProperties(a,b){var c={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var ItemsManager=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'add',value:function add(c,d,e){var f=new _Item2.default({content:c,project_id:d},this.api);f.temp_id=f.id=this.api.generate_uuid(),Object.assign(f.data,e),this.api.state[this.state_name].push(f);var g=f.data,h=g.id,j=_objectWithoutProperties(g,['id']);return this.queueCmd({type:'item_add',temp_id:f.temp_id},j),f}},{key:'update',value:function update(c,d){var e=Object.assign({},d,{id:c});this.queueCmd('item_update',e)}},{key:'delete',value:function _delete(c){var d=this;this.queueCmd('item_delete',{ids:c}),c.forEach(function(e){d.get_by_id(e,!0).then(function(f){f&&(f.is_deleted=1)})})}},{key:'move',value:function move(c,d){this.queueCmd('item_move',{project_items:c,to_project:d})}},{key:'close',value:function close(c){this.queueCmd('item_close',{id:c})}},{key:'complete',value:function complete(c,d){this.queueCmd('item_complete',{ids:c,force_history:d})}},{key:'uncomplete',value:function uncomplete(c,d,e){var f={ids:c,update_item_orders:d};e&&(f.restore_state=e),this.queueCmd('item_uncomplete',f)}},{key:'update_date_complete',value:function update_date_complete(c,d,e,f){var g={id:c};d&&(g.new_date_utc=d),e&&(g.date_string=e),isNaN(f)||(g.is_forward=f),this.queueCmd('item_update_date_complete',g)}},{key:'update_orders_indents',value:function update_orders_indents(c){this.queueCmd('item_update_orders_indents',{ids_to_orders_indents:c})}},{key:'update_day_orders',value:function update_day_orders(c){this.queueCmd('item_update_day_orders',{ids_to_orders:c})}},{key:'get_completed',value:function get_completed(c,d){var e=Object.assign({},d,{project_id:c});return this.api.get('items/get_completed',e)}},{key:'get',value:function get(c){var d=this;return this.api.get('items/get',{item_id:c}).then(function(f){if(f.error)return null;var g={projects:f.project?[f.project]:[],items:f.item?[f.item]:[],notes:f.note?[].concat(_toConsumableArray(f.notes)):[]};return d.api.update_state(g),f})}},{key:'state_name',get:function get(){return'items'}},{key:'object_type',get:function get(){return'item'}}]),b}(_Manager3.default);exports.default=ItemsManager;
//# sourceMappingURL=ItemsManager.js.map