(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[826],{"./node_modules/@storybook/addon-actions/dist/chunk-3CDXZIO2.mjs":(module,__unused_webpack_exports,__webpack_require__)=>{(module=__webpack_require__.nmd(module))&&module.hot},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_WLCP77WC_action});__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-3CDXZIO2.mjs");var v4=__webpack_require__("./node_modules/uuid-browser/v4.js"),v4_default=__webpack_require__.n(v4),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),chunk_WLCP77WC_config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if(e=a,Boolean("object"==typeof e&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function chunk_WLCP77WC_action(name,options={}){let actionOptions={...chunk_WLCP77WC_config,...options},handler=function(...args){let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=v4_default()(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit("storybook/actions/action-event",actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/Slider.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Slider});var _pixi_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),_pixi_display__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_pixi_graphics__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),_pixi_sprite__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs"),_pixi_text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@pixi/text/lib/index.mjs"),typed_signals__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/typed-signals/dist/index.js"),_utils_helpers_hitbox__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/helpers/hitbox.ts"),_utils_helpers_view__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/helpers/view.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var Slider=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Slider,_Container);var _super=_createSuper(Slider);function Slider(options){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Slider),_defineProperty(_assertThisInitialized(_this=_super.call(this)),"dragging",0),_defineProperty(_assertThisInitialized(_this),"percent",100),_defineProperty(_assertThisInitialized(_this),"value",0),_defineProperty(_assertThisInitialized(_this),"onChange",new typed_signals__WEBPACK_IMPORTED_MODULE_5__.MZ),_this.options=options;var bg=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_6__.X)(options.bg);if(_this.bg=new _pixi_display__WEBPACK_IMPORTED_MODULE_1__.W2,_this.bg.addChild(bg),_this.addChild(_this.bg),options.fill){var _options$fillOffset$x,_options$fillOffset,_options$fillOffset$y,_options$fillOffset2,fill=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_6__.X)(options.fill);_this.fill=new _pixi_display__WEBPACK_IMPORTED_MODULE_1__.W2,_this.fill.addChild(fill);var offsetX=null!==(_options$fillOffset$x=null===(_options$fillOffset=options.fillOffset)||void 0===_options$fillOffset?void 0:_options$fillOffset.x)&&void 0!==_options$fillOffset$x?_options$fillOffset$x:0,offsetY=null!==(_options$fillOffset$y=null===(_options$fillOffset2=options.fillOffset)||void 0===_options$fillOffset2?void 0:_options$fillOffset2.y)&&void 0!==_options$fillOffset$y?_options$fillOffset$y:0;_this.fill.x=(_this.bg.width-_this.fill.width)/2+offsetX,_this.fill.y=(_this.bg.height-_this.fill.height)/2+offsetY,_this.fillMask=new _pixi_graphics__WEBPACK_IMPORTED_MODULE_2__.TC,_this.fill.addChild(_this.fillMask),_this.fill.mask=_this.fillMask,_this.addChild(_this.fill)}var slider=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_6__.X)(options.slider);return slider.x=slider.width/2,_this.slider=new _pixi_display__WEBPACK_IMPORTED_MODULE_1__.W2,_this.slider.addChild(slider),slider instanceof _pixi_sprite__WEBPACK_IMPORTED_MODULE_3__.j&&slider.anchor.set(.5),_this.slider.y=_this.bg.height/2,_this.addChild(_this.slider),options.showValue&&(_this.valueText=new _pixi_text__WEBPACK_IMPORTED_MODULE_4__.xv("",options.valueTextStyle||{fill:16777215}),_this.valueText.anchor.set(.5),_this.addChild(_this.valueText)),_this.makeScrollable(),_this.validateSettings(),_this.update(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Slider,[{key:"validateSettings",value:function validateSettings(){var _ref,_options$value,options=this.options;options.min||(options.min=0),options.max||(options.max=100),options.value<options.min&&(options.value=options.min),options.value>options.max&&(options.value=options.max),this.value=null!==(_ref=null!==(_options$value=options.value)&&void 0!==_options$value?_options$value:options.min)&&void 0!==_ref?_ref:0,this.percent=100*this.value/options.max;var scale=options.max-options.min,scaledVal=this.value-options.min;this.percent=100*scaledVal/scale}},{key:"makeScrollable",value:function makeScrollable(){this.interactive=!0,this.slider.interactive=!0,this.bg.interactive=!0;var onSetByClick=this.onSetByClick,onDragStart=this.onDragStart,onDragMove=this.onDragMove,onDragEnd=this.onDragEnd;this.slider.on("pointerdown",onDragStart,this).on("globalpointermove",onDragMove,this).on("pointerup",onDragEnd,this).on("pointerupoutside",onDragEnd,this),this.bg.on("pointerdown",onSetByClick,this),this.on("pointerupoutside",onDragEnd,this),(0,_utils_helpers_hitbox__WEBPACK_IMPORTED_MODULE_7__.h)(this.fill,this.valueText)}},{key:"onSetByClick",value:function onSetByClick(event){var _this$onChange,pos=event.currentTarget.parent.worldTransform.applyInverse(event.global).x-this.slider.width/2;pos<0&&(pos=0),pos<0&&(pos=0);var maxPos=this.bg.width-this.slider.width;pos>maxPos&&(pos=maxPos),this.percent=Math.round(pos/maxPos*100),this.value=this.options.min+Math.round((this.options.max-this.options.min)/100*this.percent),this.update(),null===(_this$onChange=this.onChange)||void 0===_this$onChange||_this$onChange.emit(this.value)}},{key:"onDragStart",value:function onDragStart(event){var obj=event.currentTarget;obj.dragData=event,this.dragging=1,obj.dragPointerStart=obj.parent.worldTransform.applyInverse(event.global),obj.dragObjStart=new _pixi_core__WEBPACK_IMPORTED_MODULE_0__.E9,obj.dragObjStart.copyFrom(obj.position),obj.dragGlobalStart=new _pixi_core__WEBPACK_IMPORTED_MODULE_0__.E9,obj.dragGlobalStart.copyFrom(event.data.global)}},{key:"onDragMove",value:function onDragMove(event){var obj=event.currentTarget;if(this.dragging){var _obj$dragGlobalStart,_obj$dragGlobalStart2,data=obj.dragData;if(1===this.dragging)Math.abs(data.global.x-(null===(_obj$dragGlobalStart=obj.dragGlobalStart)||void 0===_obj$dragGlobalStart?void 0:_obj$dragGlobalStart.x))+Math.abs(data.global.y-(null===(_obj$dragGlobalStart2=obj.dragGlobalStart)||void 0===_obj$dragGlobalStart2?void 0:_obj$dragGlobalStart2.y))>=3&&(this.dragging=2);if(2===this.dragging){var dragPointerEnd=obj.parent.worldTransform.applyInverse(data.global),pos=obj.dragObjStart.x+(dragPointerEnd.x-obj.dragPointerStart.x);pos<0&&(pos=0);var maxPos=this.bg.width-this.slider.width;pos>maxPos&&(pos=maxPos),this.percent=Math.round(pos/maxPos*100),this.value=this.options.min+Math.round((this.options.max-this.options.min)/100*this.percent),this.update()}}}},{key:"onDragEnd",value:function onDragEnd(){var _this$onChange2;this.dragging&&(this.dragging=0,null===(_this$onChange2=this.onChange)||void 0===_this$onChange2||_this$onChange2.emit(this.value))}},{key:"update",value:function update(pos){var _this$onChange3,position=null!=pos?pos:(this.bg.width-this.slider.width)/100*this.percent;this.slider.x=position;var endPoint=this.bg.width/100*this.percent;if(this.fillMask&&this.fillMask.clear().lineStyle(0).beginFill(16777215).drawRect(0,0,endPoint-0,this.fill.height),this.options.showValue){var _this$options$valueTe,_this$options$valueTe2,_this$options$valueTe3,_this$options$valueTe4;this.valueText.text=this.value;var sliderPosX=this.slider.x+this.slider.width/2,sliderPosY=this.slider.y;this.valueText.x=sliderPosX+(null!==(_this$options$valueTe=null===(_this$options$valueTe2=this.options.valueTextOffset)||void 0===_this$options$valueTe2?void 0:_this$options$valueTe2.x)&&void 0!==_this$options$valueTe?_this$options$valueTe:0),this.valueText.y=sliderPosY+(null!==(_this$options$valueTe3=null===(_this$options$valueTe4=this.options.valueTextOffset)||void 0===_this$options$valueTe4?void 0:_this$options$valueTe4.y)&&void 0!==_this$options$valueTe3?_this$options$valueTe3:0)}null===(_this$onChange3=this.onChange)||void 0===_this$onChange3||_this$onChange3.emit(this.value)}}]),Slider}(_pixi_display__WEBPACK_IMPORTED_MODULE_1__.W2)},"./src/stories/utils/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{P:()=>argTypes,V:()=>getDefaultArgs});var controls={select:{control:{type:"select"}},check:{control:{type:"check"}},color:{control:{type:"color"}},count:{control:{type:"range"}},type:{control:{type:"radio"}},date:{control:{type:"date"}},switch:{control:{type:"boolean"}}},argTypes=function argTypes(args){var exportArgTypes={};for(var key in args)if("number"==typeof args[key]){var min=0;key.includes("font")&&(min=1),args[key]>=0?args[key]>=100?exportArgTypes[key]={control:{type:"range",min,max:1e3,step:10}}:args[key]>10?exportArgTypes[key]={control:{type:"range",min,max:100,step:1}}:0!==args[key]&&args[key]<1?exportArgTypes[key]={control:{type:"range",min:0,max:1,step:.1}}:exportArgTypes[key]={control:{type:"range",min,max:10,step:1}}:args[key]<=-100?exportArgTypes[key]={control:{type:"range",min:-1e3,max:1e3,step:10}}:args[key]<-10?exportArgTypes[key]={control:{type:"range",min:-100,max:100,step:10}}:0!==args[key]&&args[key]>-1?exportArgTypes[key]={control:{type:"range",min:-1,max:0,step:.1}}:exportArgTypes[key]={control:{type:"range",min:-10,max:10,step:1}}}else switch(getArgType(key)&&(exportArgTypes[key]=getArgType(key)),_typeof(args[key])){case"object":exportArgTypes[key]=controls.select,Array.isArray(args[key])?exportArgTypes[key].options=args[key]:exportArgTypes[key].options=Object.keys(args).map((function(key){return args[key]}));break;case"boolean":exportArgTypes[key]=controls.switch}return exportArgTypes};function getArgType(type){for(var control in controls)if(type.toLowerCase().indexOf(control)>-1)return controls[control]}var getDefaultArgs=function getDefaultArgs(args){var exportArgs={};for(var key in args)if("object"===_typeof(args[key]))Array.isArray(args[key])&&(exportArgs[key]=args[key][0]);else exportArgs[key]=args[key];return exportArgs}},"./src/utils/helpers/hitbox.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>removeHitBox});var _pixi_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs");function removeHitBox(){for(var _len=arguments.length,obj=new Array(_len),_key=0;_key<_len;_key++)obj[_key]=arguments[_key];obj.forEach((function(o){return o&&(o.hitArea=new _pixi_core__WEBPACK_IMPORTED_MODULE_0__.Ae)}))}},"./src/utils/helpers/resize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function centerElement(view,horPos,verPos){var canvas=document.getElementById("storybook-root");view.width>0?view.x=0===horPos?0:horPos?canvas.offsetWidth*horPos-view.width/2:canvas.offsetWidth/2-view.width/2:view.x=canvas.offsetWidth/2,view.height>0?view.y=0===verPos?0:verPos?canvas.offsetHeight*verPos-view.height/2:canvas.offsetHeight/2-view.height/2:view.y=canvas.offsetHeight/2}function centerView(view){var canvas=document.getElementById("storybook-root");view.x=canvas.offsetWidth/2,view.y=canvas.offsetHeight/2}__webpack_require__.d(__webpack_exports__,{C:()=>centerView,w:()=>centerElement})},"./src/utils/helpers/view.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>getView});var _pixi_sprite__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs");function getView(view){return"string"==typeof view?_pixi_sprite__WEBPACK_IMPORTED_MODULE_0__.j.from(view):view}},"./node_modules/typed-signals/dist/Collector.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Collector=void 0;exports.Collector=class Collector{constructor(signal){this.emit=(...args)=>{signal.emitCollecting(this,args)}}}},"./node_modules/typed-signals/dist/CollectorArray.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorArray=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorArray extends Collector_1.Collector{constructor(){super(...arguments),this.result=[]}handleResult(result){return this.result.push(result),!0}getResult(){return this.result}reset(){this.result.length=0}}exports.CollectorArray=CollectorArray},"./node_modules/typed-signals/dist/CollectorLast.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorLast=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorLast extends Collector_1.Collector{handleResult(result){return this.result=result,!0}getResult(){return this.result}reset(){delete this.result}}exports.CollectorLast=CollectorLast},"./node_modules/typed-signals/dist/CollectorUntil0.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorUntil0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorUntil0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorUntil0=CollectorUntil0},"./node_modules/typed-signals/dist/CollectorWhile0.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorWhile0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorWhile0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,!this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorWhile0=CollectorWhile0},"./node_modules/typed-signals/dist/Signal.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Signal=void 0;const SignalConnection_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnection.js"),SignalLink_1=__webpack_require__("./node_modules/typed-signals/dist/SignalLink.js");exports.Signal=class Signal{constructor(){this.head=new SignalLink_1.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(callback,order=0){this.connectionsCount++;const link=this.head.insert(callback,order);return this.emitDepth>0&&(this.hasNewLinks=!0,link.newLink=!0),new SignalConnection_1.SignalConnectionImpl(link,(()=>this.decrementConnectionCount()))}decrementConnectionCount(){this.connectionsCount--}disconnect(callback){for(let link=this.head.next;link!==this.head;link=link.next)if(link.callback===callback)return this.decrementConnectionCount(),link.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)link.isEnabled()&&link.callback&&link.callback.apply(null,args);this.emitDepth--,this.unsetNewLink()}emitCollecting(collector,args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)if(link.isEnabled()&&link.callback){const result=link.callback.apply(null,args);if(!collector.handleResult(result))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&0===this.emitDepth){for(let link=this.head.next;link!==this.head;link=link.next)link.newLink=!1;this.hasNewLinks=!1}}}},"./node_modules/typed-signals/dist/SignalConnection.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnectionImpl=void 0;exports.SignalConnectionImpl=class SignalConnectionImpl{constructor(link,parentCleanup){this.link=link,this.parentCleanup=parentCleanup}disconnect(){return null!==this.link&&(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0)}set enabled(enable){this.link&&this.link.setEnabled(enable)}get enabled(){return null!==this.link&&this.link.isEnabled()}}},"./node_modules/typed-signals/dist/SignalConnections.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnections=void 0;exports.SignalConnections=class SignalConnections{constructor(){this.list=[]}add(connection){this.list.push(connection)}disconnectAll(){for(const connection of this.list)connection.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return 0===this.list.length}}},"./node_modules/typed-signals/dist/SignalLink.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalLink=void 0;class SignalLink{constructor(prev=null,next=null,order=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=null!=prev?prev:this,this.next=null!=next?next:this,this.order=order}isEnabled(){return this.enabled&&!this.newLink}setEnabled(flag){this.enabled=flag}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(callback,order){let after=this.prev;for(;after!==this&&!(after.order<=order);)after=after.prev;const link=new SignalLink(after,after.next,order);return link.callback=callback,after.next=link,link.next.prev=link,link}}exports.SignalLink=SignalLink},"./node_modules/typed-signals/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";exports.MZ=void 0;var Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");var CollectorArray_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorArray.js");var CollectorLast_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorLast.js");var CollectorUntil0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorUntil0.js");var CollectorWhile0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorWhile0.js");var Signal_1=__webpack_require__("./node_modules/typed-signals/dist/Signal.js");Object.defineProperty(exports,"MZ",{enumerable:!0,get:function(){return Signal_1.Signal}});var SignalConnections_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnections.js")}}]);