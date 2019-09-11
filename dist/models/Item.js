'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _slicedToArray=function(){function a(b,c){var d=[],e=!0,f=!1,g=void 0;try{for(var j,h=b[Symbol.iterator]();!(e=(j=h.next()).done)&&(d.push(j.value),!(c&&d.length===c));e=!0);}catch(k){f=!0,g=k}finally{try{!e&&h['return']&&h['return']()}finally{if(f)throw g}}return d}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),_createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_Model2=require('./Model'),_Model3=_interopRequireDefault(_Model2);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var Item=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'update',value:function update(c){this.api.items.update(this.id,c),Object.assign(this.data,c)}},{key:'delete',value:function _delete(){this.api.items.delete([this.id]),this.is_deleted=1}},{key:'move',value:function move(c){this.api.items.move(_defineProperty({},this.project_id,[this.id]),c),this.project_id=c}},{key:'close',value:function close(){this.api.items.close(this.id)}},{key:'complete',value:function complete(){var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.api.items.complete([this.id],c),this.checked=1,this.in_history=c}},{key:'uncomplete',value:function uncomplete(){var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(this.api.items.uncomplete([this.id],c,d),this.checked=0,this.in_history=0,d[this.id]){var e=_slicedToArray(d[this.id],4);this.in_history=e[0],this.checked=e[1],this.item_order=e[2],this.indent=e[3]}}},{key:'update_date_complete',value:function update_date_complete(){var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'',d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'',e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;this.api.items.update_date_complete(this.id,c,d,e),this.due_date_utc=c||this.due_date_utc,this.date_string=d||this.date_string}},{key:'definition',get:function get(){return{id:0,user_id:0,project_id:0,content:'',date_string:'',date_lang:'',due_date_utc:null,indent:0,priority:0,item_order:0,day_order:0,collapsed:0,children:null,labels:[],assigned_by_uid:0,responsible_uid:null,checked:0,in_history:0,is_deleted:0,is_archived:0,sync_id:null,date_added:''}}}]),b}(_Model3.default);exports.default=Item;
//# sourceMappingURL=Item.js.map