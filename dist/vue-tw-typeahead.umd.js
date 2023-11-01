(function(a,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(a=typeof globalThis<"u"?globalThis:a||self,t(a.VueTwTypeahead={},a.Vue))})(this,function(a,t){"use strict";var p={exports:{}};(function(s,n){function i(e){return typeof e.value!="function"?(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1):!0}function u(e,c){if(!e||!c)return!1;for(var r=0,o=c.length;r<o;r++)try{if(e.contains(c[r]))return!0;if(c[r].contains(e))return!1}catch{return!1}return!1}function l(e){return typeof e.componentInstance<"u"&&e.componentInstance.$isServer}s.exports={bind:function(e,c,r){if(!i(c))return;function o(d){if(!!r.context){var h=d.path||d.composedPath&&d.composedPath();h&&h.length>0&&h.unshift(d.target),!(e.contains(d.target)||u(r.context.popupItem,h))&&e.__vueClickOutside__.callback(d)}}e.__vueClickOutside__={handler:o,callback:c.value};const f="ontouchstart"in document.documentElement?"touchstart":"click";!l(r)&&document.addEventListener(f,o)},update:function(e,c){i(c)&&(e.__vueClickOutside__.callback=c.value)},unbind:function(e,c,r){const o="ontouchstart"in document.documentElement?"touchstart":"click";!l(r)&&e.__vueClickOutside__&&document.removeEventListener(o,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}})(p);const m=p.exports,_=(s,n)=>{const i=s.__vccOpts||s;for(const[u,l]of n)i[u]=l;return i},k={name:"VueTwTypeahead",directives:{ClickOutside:m},props:{lists:{type:Array,default:[]},ignoredList:{type:Array,default:[]},clearInputWhenClicked:{type:Boolean,default:!1},placeholder:{type:String,default:"Search here..."},inputClass:{type:Array,default:["w-full","px-5","py-3","border","border-gray-400","rounded-lg","outline-none","focus:shadow-outline"]},selectClass:{type:Array,default:["bg-white","border","rounded-md","shadow-md","mt-1"]}},data(){return{search:"",selectedItem:"",showSearchItems:!1,isMouseOverList:!1,searchItemList:this.lists}},computed:{filteredList(){return this.searchItemList.filter(s=>{var n;return s.name.toLowerCase().includes((n=this.search)==null?void 0:n.toLowerCase())&&!this.checkIgnoreListItem(s.id)})},classProps(){return[...this.inputClass]},classSelectProps(){return[...this.selectClass]}},methods:{selectSearchItem(s){this.search=s.name,this.selectedItem=s.name,this.showSearchItems=!1,this.$emit("selected",s),this.clearInputWhenClicked&&(this.search="")},checkIgnoreListItem(s){return this.ignoredList.length>0?this.ignoredList.some(i=>i==s):!1},hideMenu(){this.showSearchItems==!0&&(this.showSearchItems=!1)}},created(){var s,n;if(this.selectedData!=0){const i=this.lists.filter(u=>u.id===this.selectedData);this.selectedItem=(s=i[0])==null?void 0:s.name,this.search=(n=i[0])==null?void 0:n.name}}},y={class:"w-full"},w={class:"mt-1 flex rounded-md shadow-sm"},x=["placeholder"],I={key:0,class:"absolute z-10 flex flex-col items-start w-64 {{selectClass}}",role:"menu","aria-labelledby":"menu-heading"},C={class:"flex flex-col w-full"},g=["onClick"];function v(s,n,i,u,l,e){const c=t.resolveDirective("click-outside");return t.withDirectives((t.openBlock(),t.createElementBlock("div",y,[t.createElementVNode("div",w,[t.withDirectives(t.createElementVNode("input",{type:"text",class:t.normalizeClass(e.classProps),placeholder:i.placeholder,"aria-label":"Search","onUpdate:modelValue":n[0]||(n[0]=r=>l.search=r),onInput:n[1]||(n[1]=r=>l.showSearchItems=!0),ref:"searchBox"},null,42,x),[[t.vModelText,l.search]])]),e.filteredList.length>0&&l.showSearchItems==!0?(t.openBlock(),t.createElementBlock("aside",I,[t.createElementVNode("ul",C,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.filteredList,(r,o)=>(t.openBlock(),t.createElementBlock("li",{class:"px-2 py-3 space-x-2 hover:cursor-pointer hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-none",key:o,onClick:f=>{e.selectSearchItem(r),l.showSearchItems=!1}},t.toDisplayString(r.name),9,g))),128))])])):t.createCommentVNode("",!0)])),[[c,e.hideMenu]])}const S=_(k,[["render",v]]);a.VueTwTypeahead=S,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
