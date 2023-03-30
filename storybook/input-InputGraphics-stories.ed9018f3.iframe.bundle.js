"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[979],{"./src/stories/input/InputGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseGraphics:()=>UseGraphics,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_List__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/List.ts"),_Input__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Input.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/utils/argTypes.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_color__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/utils/color.ts"),args={text:"",placeholder:"Enter text",align:["center","left","right"],textColor:"#000000",backgroundColor:"#F1D583",borderColor:"#DCB000",maxLength:100,fontSize:24,border:5,width:320,height:70,radius:11,amount:1,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Change")},UseGraphics=function UseGraphics(_ref){var text=_ref.text,amount=_ref.amount,border=_ref.border,textColor=_ref.textColor,fontSize=_ref.fontSize,backgroundColor=_ref.backgroundColor,borderColor=_ref.borderColor,width=_ref.width,height=_ref.height,radius=_ref.radius,maxLength=_ref.maxLength,align=_ref.align,placeholder=_ref.placeholder,paddingTop=_ref.paddingTop,paddingRight=_ref.paddingRight,paddingBottom=_ref.paddingBottom,paddingLeft=_ref.paddingLeft,onChange=_ref.onChange,view=new _List__WEBPACK_IMPORTED_MODULE_2__.a({type:"vertical",elementsMargin:10});backgroundColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_3__.Lq)(backgroundColor),borderColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_3__.Lq)(borderColor),textColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_3__.Lq)(textColor);for(var _loop=function _loop(i){var input=new _Input__WEBPACK_IMPORTED_MODULE_4__.I({bg:(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC).beginFill(borderColor).drawRoundedRect(0,0,width,height,radius+border).beginFill(backgroundColor).drawRoundedRect(border,border,width-2*border,height-2*border,radius),textStyle:{fill:textColor,fontSize,fontWeight:"bold"},maxLength,align,placeholder,value:text,padding:[paddingTop,paddingRight,paddingBottom,paddingLeft]});input.onEnter.connect((function(val){return onChange("Input ".concat(i+1," (").concat(val,")"))})),view.addChild(input)},i=0;i<amount;i++)_loop(i);return{view,resize:function resize(){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__.w)(view)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Graphics } from '@pixi/graphics';\nimport { action } from '@storybook/addon-actions';\nimport { List } from '../../List';\nimport { Input } from '../../Input';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { centerElement } from '../../utils/helpers/resize';\nimport { getColor } from '../utils/color';\n\nconst args = {\n    text: '',\n    placeholder: 'Enter text',\n    align: ['center', 'left', 'right'],\n    textColor: '#000000',\n    backgroundColor: '#F1D583',\n    borderColor: '#DCB000',\n    maxLength: 100,\n    fontSize: 24,\n    border: 5,\n    width: 320,\n    height: 70,\n    radius: 11,\n    amount: 1,\n    paddingTop: 0,\n    paddingRight: 0,\n    paddingBottom: 0,\n    paddingLeft: 0,\n    onChange: action('Change')\n};\n\nexport const UseGraphics = ({\n    text,\n    amount,\n    border,\n    textColor,\n    fontSize,\n    backgroundColor,\n    borderColor,\n    width,\n    height,\n    radius,\n    maxLength,\n    align,\n    placeholder,\n    paddingTop,\n    paddingRight,\n    paddingBottom,\n    paddingLeft,\n    onChange\n}: any) =>\n{\n    const view = new List({ type: 'vertical', elementsMargin: 10 });\n\n    backgroundColor = getColor(backgroundColor);\n    borderColor = getColor(borderColor);\n    textColor = getColor(textColor);\n\n    for (let i = 0; i < amount; i++)\n    {\n    // Component usage\n        const input = new Input({\n            bg: new Graphics()\n                .beginFill(borderColor)\n                .drawRoundedRect(0, 0, width, height, radius + border)\n                .beginFill(backgroundColor)\n                .drawRoundedRect(border, border, width - (border * 2), height - (border * 2), radius),\n            textStyle: {\n                fill: textColor,\n                fontSize,\n                fontWeight: 'bold'\n            },\n            maxLength,\n            align,\n            placeholder,\n            value: text,\n            padding: [paddingTop, paddingRight, paddingBottom, paddingLeft]\n        });\n\n        input.onEnter.connect((val) => onChange(`Input ${i + 1} (${val})`));\n\n        view.addChild(input);\n    }\n\n    return { view, resize: () => centerElement(view) };\n};\n\nexport default {\n    title: 'Components/Input/Use Graphics',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args)\n};\n",locationsMap:{"use-graphics":{startLoc:{col:27,line:30},endLoc:{col:1,line:84},startBody:{col:27,line:30},endBody:{col:1,line:84}}}}},title:"Components/Input/Use Graphics",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__.P)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__.V)(args)};var __namedExportsOrder=["UseGraphics"]},"./src/stories/utils/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lq:()=>getColor});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function getColor(color){if("transparent"!==color&&void 0!==color)switch(_typeof(color)){case"string":if(color.startsWith("#")||color.startsWith("0x"))return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.string2hex(color);if(color.startsWith("rgba("))return function rgba2Hex(_ref){var _ref2=_slicedToArray(_ref,3),r=_ref2[0],g=_ref2[1],b=_ref2[2];return Number("0x".concat(getHex(r)).concat(getHex(g)).concat(getHex(b)))}(color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)})));if(color.startsWith("rgb(")){var _rgbData=color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)}));return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.rgb2hex(_rgbData)}if(color.startsWith("hsla(")){var _colorData2$map2=_slicedToArray(color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)})),3);return function hsl2Hex(h,s,l){l/=100;var a=s*Math.min(l,1-l)/100,f=function f(n){var k=(n+h/30)%12,color=l-a*Math.max(Math.min(k-3,9-k,1),-1);return Math.round(255*color).toString(16).padStart(2,"0")};return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.string2hex("#".concat(f(0)).concat(f(8)).concat(f(4)))}(_colorData2$map2[0],_colorData2$map2[1],_colorData2$map2[2])}throw new Error("Unknown color format: ".concat(color));case"number":return color;default:return parseInt(color,16)}}function getHex(n){var hex=n.toString(16);return 1===hex.length?"0".concat(hex):hex}}}]);