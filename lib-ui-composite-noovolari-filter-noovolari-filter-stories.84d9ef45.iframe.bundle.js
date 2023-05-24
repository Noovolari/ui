(self.webpackChunknew_ui=self.webpackChunknew_ui||[]).push([[830],{"./projects/ui/src/lib/ui/composite/noovolari-filter/noovolari-filter.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultSize:()=>DefaultSize,default:()=>noovolari_filter_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,noovolari_filter_componentngResource=__webpack_require__("./projects/ui/src/lib/ui/composite/noovolari-filter/noovolari-filter.component.scss?ngResource"),noovolari_filter_componentngResource_default=__webpack_require__.n(noovolari_filter_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let NoovolariFilterComponent=((_class=class NoovolariFilterComponent{constructor(){}ngOnInit(){}onApplyClick(){}onCancelClick(){}}).ctorParameters=()=>[],_class);NoovolariFilterComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lib-noovolari-filter",template:'<noovolari-chip label="Pippo Franco"></noovolari-chip>\n',styles:[noovolari_filter_componentngResource_default()]})],NoovolariFilterComponent);var client=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/animations.mjs"),noovolari_chip_component=__webpack_require__("./projects/ui/src/lib/ui/component/noovolari-chip/noovolari-chip.component.ts"),noovolari_button_component=__webpack_require__("./projects/ui/src/lib/ui/component/noovolari-button/noovolari-button.component.ts");const noovolari_filter_stories={title:"Composite/NoovolariFilter",component:NoovolariFilterComponent,argTypes:{},decorators:[(0,client.moduleMetadata)({declarations:[noovolari_chip_component.a,noovolari_button_component.D],imports:[common.CommonModule,animations.BrowserAnimationsModule]})],excludeStories:/.*Data$/},DefaultSize={args:{}}},"./projects/ui/src/lib/ui/component/noovolari-button/noovolari-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>NoovolariButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,noovolari_button_componentngResource=__webpack_require__("./projects/ui/src/lib/ui/component/noovolari-button/noovolari-button.component.scss?ngResource"),noovolari_button_componentngResource_default=__webpack_require__.n(noovolari_button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let NoovolariButtonComponent=((_class=class NoovolariButtonComponent{constructor(){this.fullSize=!1,this.primary=!1,this.label="Click me!",this.onClick=new core.EventEmitter}ngOnInit(){}get classes(){return[...this.fullSize?["full-size"]:[],...this.primary?[]:["secondary"]]}click(event){this.onClick.next(event)}}).ctorParameters=()=>[],_class.propDecorators={fullSize:[{type:core.Input}],primary:[{type:core.Input}],label:[{type:core.Input}],onClick:[{type:core.Output}]},_class);NoovolariButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"noovolari-button",template:'<button [ngClass]="classes" (click)="click($event);">\n  {{ label }}\n</button>\n',styles:[noovolari_button_componentngResource_default()]})],NoovolariButtonComponent)},"./projects/ui/src/lib/ui/component/noovolari-chip/noovolari-chip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>NoovolariChipComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,noovolari_chip_componentngResource=__webpack_require__("./projects/ui/src/lib/ui/component/noovolari-chip/noovolari-chip.component.scss?ngResource"),noovolari_chip_componentngResource_default=__webpack_require__.n(noovolari_chip_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let NoovolariChipComponent=((_class=class NoovolariChipComponent{constructor(){this.label="label",this.iconId="house",this.removable=!0,this.enabled=!1}ngOnInit(){}get classes(){return["noovolari-chip-container",...this.enabled?["enabled"]:[]]}toggle(){this.enabled=!this.enabled}}).ctorParameters=()=>[],_class.propDecorators={label:[{type:core.Input}],iconId:[{type:core.Input}],removable:[{type:core.Input}]},_class);NoovolariChipComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"noovolari-chip",template:'<div [ngClass]="classes" (click)="toggle()">\n  <i class="ph ph-{{iconId}}"></i>\n  <span>{{ label }}</span>\n  <i class="ph ph-x{{ removable ? \' hidden\' : \'\' }}"></i>\n</div>\n',styles:[noovolari_chip_componentngResource_default()]})],NoovolariChipComponent)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const core_client_1=__webpack_require__("@storybook/core-client"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,core_client_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/ui/src/lib/ui/component/noovolari-button/noovolari-button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.cdnfonts.com/css/sf-pro-display);"]),___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://unpkg.com/phosphor-icons@1.4.2/src/css/icons.css);"]),___CSS_LOADER_EXPORT___.push([module.id,'* {\n  font-family: "SF Pro Display", sans-serif;\n}\n\n/*! Light theme. */\nbutton {\n  background-color: #454082;\n  color: #FFFFFF;\n  border: none;\n  padding: 8px;\n  border-radius: 6px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\nbutton.full-size {\n  width: 100%;\n}\n\nbutton.secondary {\n  background-color: #FFFFFF;\n  color: #454082;\n  border: 1px solid #454082;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    font-size: 40px;\n  }\n}\nbutton:hover {\n  opacity: 0.9;\n  transition: ease 200ms;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/ui/src/lib/ui/component/noovolari-chip/noovolari-chip.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.cdnfonts.com/css/sf-pro-display);"]),___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://unpkg.com/phosphor-icons@1.4.2/src/css/icons.css);"]),___CSS_LOADER_EXPORT___.push([module.id,'* {\n  font-family: "SF Pro Display", sans-serif;\n}\n\n/*! Light theme. */\n.noovolari-chip-container {\n  display: inline-flex;\n  gap: 5px;\n  align-items: center;\n  border: solid 1px #DADADA;\n  background-color: #FFFFFF;\n  border-radius: 8px;\n  text-align: center;\n  padding: 8px;\n  cursor: pointer;\n}\n.noovolari-chip-container * {\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */ /* Old versions of Firefox */ /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */\n}\n.noovolari-chip-container *.hidden {\n  display: none;\n}\n\n.enabled {\n  background-color: #F3F3F3;\n  transition: ease 200ms;\n}\n\n:not(.enabled) {\n  transition: ease 200ms;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/ui/src/lib/ui/composite/noovolari-filter/noovolari-filter.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".menu-container {\n  background-color: #FFFFFF;\n  margin: -8px 0 -8px 0;\n  padding: 8px 0 8px 0;\n}\n.menu-container div {\n  padding: 16px 16px;\n}\n.menu-container div:not(:last-child) {\n  border-bottom: 1px solid #F3F3F3;\n}\n.menu-container .actions noovolari-button:first-child {\n  margin-right: 16px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);