/*! For license information please see LICENSES */
webpackJsonp([0],{"/JOr":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap",on:{click:function(e){t.clicked=!0}}},[i("div",{staticClass:"heart",class:{animate:t.clicked,loved:t.loved},on:{animationstart:t.save,animationend:function(e){t.clicked=!1}}}),i("span",{staticClass:"heart-text"},[t._v(t._s(t._f("num")(t.total)))])])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},"2E4k":function(t,e,i){"use strict";var n=i("xhyL"),o=i("w/Tp"),a=!1;var s=function(t){a||(i("nHuZ"),i("8DBD"))},r=i("K60R")(n.a,o.a,!1,s,null,null);r.options.__file="src/components/project.vue",e.a=r.exports},"2NXm":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("AxL4"),o=i("4OUR"),a=!1;var s=function(t){a||i("UgQc")},r=i("K60R")(n.a,o.a,!1,s,null,null);r.options.__file="src/pages/index.vue",e.default=r.exports},"4OUR":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",[i("section",{staticClass:"profile"},[i("div",{staticClass:"profile__container"},[i("img",{staticClass:"profile__avatar",attrs:{src:"https://github.com/qingwei-li.png",alt:"qingwei-li"}}),i("h1",{staticClass:"profile__name"},[t._v("Qingwei Li")]),i("blockquote",{staticClass:"profile__description"},[t._v("A Web developer who loves to create amazing things")]),t._m(0),i("div",{staticClass:"button-group"},[i("heart",{staticClass:"heart-button"})],1)])]),i("section",{staticClass:"list"},[i("h4",{staticClass:"list__title"},[t._v("⬇️ My projects ⬇️")]),i("ul",{staticClass:"projects"},t._l(t.projects,function(t){return i("li",{key:t.name,staticClass:"projects__item"},[i("project",{attrs:{data:t}})],1)})),i("a",{attrs:{target:"_blank",href:"https://github.com/QingWei-Li?utf8=%E2%9C%93&tab=repositories&q=&type=source"}},[t._v("More projects")])]),t._m(1)])};n._withStripped=!0;var o={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"links"},[e("li",{staticClass:"links__item"},[e("a",{attrs:{href:"http://twitter.com/cinwell_li"}},[this._v("Twitter")])]),e("li",{staticClass:"links__item"},[e("a",{attrs:{href:"https://github.com/qingwei-li"}},[this._v("GitHub")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("a",{attrs:{href:"http://www.beian.miit.gov.cn",target:"_blank"}},[this._v("沪ICP备19024227号-1")])])}]};e.a=o},"69xB":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".profile{text-align:center;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.profile__container{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-top:-100px}.profile__avatar{border-radius:50%;height:128px;height:8rem;width:128px;width:8rem}.profile__name{margin:16px 0;margin:1rem 0}.profile__description{color:#7f8c8d;margin:16px 64px;margin:1rem 4rem}.links{text-align:center}.links__item{display:inline-block;padding:0 6.4px;padding:0 .4rem}.list{text-align:center;margin-bottom:80px;margin-bottom:5rem;padding:0 20px;-webkit-box-sizing:border-box;box-sizing:border-box}.list__title{margin-bottom:48px;margin-bottom:3rem}.projects__item{border-bottom:1px dashed #f0f0f0;margin-bottom:32px;margin-bottom:2rem;padding-bottom:32px;padding-bottom:2rem}.projects__item:last-child{border-bottom:0}.button-group{position:relative}.heart-button{margin-top:50px;left:50%;top:50%;-webkit-transform:translate(-50%,-47.5%);transform:translate(-50%,-47.5%);position:absolute}.footer{text-align:center;margin-bottom:40px}",""])},"8DBD":function(t,e,i){var n=i("dk3W");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("0d6b68cb",n,!1,{sourceMap:!1})},AxL4:function(t,e,i){"use strict";var n=i("2E4k"),o=i("GBKx");e.a={name:"home",components:{Project:n.a,Heart:o.a},created:function(){this.projects=i("DQDF")}}},DQDF:function(t,e){t.exports=[{name:"Notea",desc:"📒 Self hosted note taking app stored on S3.",image:"https://cdn.statically.io/gh/QingWei-Li/notea/gh-pages/screen.png",links:[{name:"Website",url:"https://cinwell.com/notea"},{name:"Demo",url:"https://notea.vercel.app"}]},{name:"docsify",desc:"🃏 A magical documentation site generator.",image:"https://docsify.js.org/_media/icon.svg",links:[{name:"Documentation",url:"https://docsify.js.org/"}]},{name:"vuep",desc:"🎡 A component for rendering Vue components with live editor and preview.",image:"https://cloud.githubusercontent.com/assets/7565692/21482443/093e4970-cbaf-11e6-89f0-eae73fc49741.png",links:[{name:"Documentation",url:"https://cinwell.com/vuep/"}]},{name:"vue-trend",desc:"🌈 Simple, elegant spark lines for VueJS.",image:"https://cloud.githubusercontent.com/assets/7565692/23977197/9da0b77c-0a27-11e7-8f14-4d3845a524a0.png",links:[{name:"Live Demo",url:"https://jsfiddle.net/nyh18bLq/"}]},{name:"vue-markdown-loader",desc:"📇 Convert Markdown file to Vue component.",image:"https://user-images.githubusercontent.com/7565692/35255046-f47a5390-0027-11e8-948e-f0d5003ec3e2.png",links:[{name:"Demo",url:"glitch.com/edit/#!/vue-markdown"}]},{name:"npmarket",desc:"🛒 More efficient search for node packages",type:"website",image:"https://cloud.githubusercontent.com/assets/7565692/25064699/68349860-2232-11e7-85e9-fbdd88de317c.png",links:[{name:"Website",url:"https://npmarket.netlify.com"}]},{name:"markdone/cssume",desc:"📄 An elegant css theme for resume generated by Markdown",image:"https://user-images.githubusercontent.com/7565692/36073530-564f1a02-0f6d-11e8-803e-a34fa9366b4e.png",links:[{name:"Demo",url:"https://markdone.github.io/cssume/"}]},{name:"Laue",desc:"🖖📈 Modern charts for Vue.js",image:"https://user-images.githubusercontent.com/7565692/38164663-4632dae4-353a-11e8-9c7e-2a39bdce1f0f.png",links:[{name:"Documentation",url:"https://laue.js.org"}]},{name:"Vuep.run",desc:"🏃 An online playground for Vue",type:"website",image:"https://user-images.githubusercontent.com/7565692/38162374-906003e4-3512-11e8-8780-a22350a665fc.png",links:[{name:"Website",url:"https://vuep.run"}]},{name:"hostext",desc:"🔡 Text hosting service",type:"microservice",image:"https://user-images.githubusercontent.com/7565692/38164640-f55200c8-3539-11e8-9c45-247b430339ea.png",links:[{name:"Website",url:"https://text.cinwell.xyz"}]}]},GBKx:function(t,e,i){"use strict";var n=i("UL8Z"),o=i("/JOr"),a=!1;var s=function(t){a||i("tq8b")},r=i("K60R")(n.a,o.a,!1,s,"data-v-f971ad34",null);r.options.__file="src/components/heart.vue",e.a=r.exports},HEzy:function(t,e,i){var n=i("kxFB");(t.exports=i("FZ+f")(!1)).push([t.i,".wrap[data-v-f971ad34]{text-align:center}.heart[data-v-f971ad34]{background-image:url("+n(i("YfaA"))+");background-position:0;background-repeat:no-repeat;background-size:2900%;height:50px;width:50px;margin:auto}.heart[data-v-f971ad34]:hover{background-position:3.57142857%}.heart.animate[data-v-f971ad34]{-webkit-animation:fave-heart-data-v-f971ad34 1s steps(28);animation:fave-heart-data-v-f971ad34 1s steps(28);background-position:100%}.heart.loved[data-v-f971ad34]{background-position:100%}@-webkit-keyframes fave-heart-data-v-f971ad34{0%{background-position:0 0}to{background-position:100%}}@keyframes fave-heart-data-v-f971ad34{0%{background-position:0 0}to{background-position:100%}}",""])},"T7X/":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"img[data-action=zoom]{cursor:pointer;cursor:-webkit-zoom-in;cursor:zoom-in}.zoom-img,.zoom-img-wrap{position:relative;z-index:666;transition:-webkit-transform .3s cubic-bezier(.2,0,.2,1);-webkit-transition:-webkit-transform .3s cubic-bezier(.2,0,.2,1);transition:transform .3s cubic-bezier(.2,0,.2,1);transition:transform .3s cubic-bezier(.2,0,.2,1),-webkit-transform .3s cubic-bezier(.2,0,.2,1)}.zoom-overlay{z-index:420;background:#fff;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;opacity:0;-webkit-transition:opacity .3s;transition:opacity .3s}.zoom-overlay-open .zoom-overlay{opacity:1}.zoom-overlay-open{cursor:pointer;cursor:-webkit-zoom-out;cursor:zoom-out}.zoom-overlay-transitioning{cursor:default}.zoom-overlay-open.zoom-overlay-transitioning .zoom-overlay{opacity:0}",""])},UL8Z:function(t,e,i){"use strict";var n=i("mvHQ"),o=i.n(n),a=i("n5Qe");e.a={name:"heart",data:function(){return{clicked:!1,loved:!1,total:0}},filters:{num:function(t){return t<1?"loading":String(t).replace(/(.)(?=(.{3})+$)/g,function(t){return t+","})}},mounted:function(){this.$isServer||(this.loved=!!localStorage.getItem("LOVED"),this.get())},methods:{get:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(a.a)("/count").then(function(i){t.total=Number(i)+e})},save:function(){var t=this;this.total++,Object(a.a)("/add",{method:"POST",headers:{"content-type":"application/json"},body:o()({loved:this.loved})}).then(function(){t.get(),localStorage.setItem("LOVED",1),t.loved=!0})}}}},UgQc:function(t,e,i){var n=i("69xB");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("7ff53324",n,!1,{sourceMap:!1})},VMEh:function(t,e,i){"use strict";var n="function"==typeof fetch?fetch.bind():function(t,e){return e=e||{},new Promise(function(i,n){var o=new XMLHttpRequest;for(var a in o.open(e.method||"get",t),e.headers)o.setRequestHeader(a,e.headers[a]);function s(){var t,e=[],i=[],n={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(o,a,s){e.push(a=a.toLowerCase()),i.push([a,s]),t=n[a],n[a]=t?t+","+s:s}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:s,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return e},entries:function(){return i},get:function(t){return n[t.toLowerCase()]},has:function(t){return t.toLowerCase()in n}}}}o.withCredentials="include"==e.credentials,o.onload=function(){i(s())},o.onerror=n,o.send(e.body)})};e.a=n},YfaA:function(t,e,i){t.exports=i.p+"img/heart.3c55287.png"},dk3W:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".project{display:-webkit-box;display:-ms-flexbox;display:flex;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}.project__image{width:100px}@media screen and (max-width:600px){.project__image{width:0}}.project__info{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-left:20px}.project__name{font-size:20px;margin-bottom:8px;margin-bottom:.5rem}.project__desc{color:#7f8c8d}.project__links{margin-top:8px;margin-top:.5rem}.project__links li{display:inline-block}.project__links a{padding:0 6.4px;padding:0 .4rem}.project__tag{position:absolute;right:0;border-radius:4px;background:#f0f0f0;padding:2px 4px;top:0}",""])},ieZg:function(t,e,i){var n;n=function(){"use strict";var t=function(){return document.documentElement.clientWidth},e=function(){return document.documentElement.clientHeight},i=function(t,e){this.img=t,this.preservedTransform=t.style.transform,this.wrap=null,this.overlay=null,this.offset=e};i.prototype.forceRepaint=function(){this.img.offsetWidth},i.prototype.zoom=function(){var t=new function(t,e){this.w=t,this.h=e}(this.img.naturalWidth,this.img.naturalHeight);this.wrap=document.createElement("div"),this.wrap.classList.add("zoom-img-wrap"),this.img.parentNode.insertBefore(this.wrap,this.img),this.wrap.appendChild(this.img),this.img.classList.add("zoom-img"),this.img.setAttribute("data-action","zoom-out"),this.overlay=document.createElement("div"),this.overlay.classList.add("zoom-overlay"),document.body.appendChild(this.overlay),this.forceRepaint();var e=this.calculateScale(t);this.forceRepaint(),this.animate(e),document.body.classList.add("zoom-overlay-open")},i.prototype.calculateScale=function(i){var n=i.w/this.img.width,o=t()-this.offset,a=e()-this.offset,s=i.w/i.h,r=o/a;return i.w<o&&i.h<a?n:s<r?a/i.h*n:o/i.w*n},i.prototype.animate=function(i){var n,o,a,s,r=(n=this.img,o=n.getBoundingClientRect(),a=document.documentElement,s=window,{top:o.top+s.pageYOffset-a.clientTop,left:o.left+s.pageXOffset-a.clientLeft}),c=window.pageYOffset,l=t()/2,u=c+e()/2,p="scale("+i+")",m="translate3d("+(l-(r.left+this.img.width/2))+"px, "+(u-(r.top+this.img.height/2))+"px, 0px)";this.img.style.transform=p,this.wrap.style.transform=m},i.prototype.dispose=function(){null!==this.wrap&&null!==this.wrap.parentNode&&(this.img.classList.remove("zoom-img"),this.img.setAttribute("data-action","zoom"),this.wrap.parentNode.insertBefore(this.img,this.wrap),this.wrap.parentNode.removeChild(this.wrap),document.body.removeChild(this.overlay),document.body.classList.remove("zoom-overlay-transitioning"))},i.prototype.close=function(){var t,e,i,n,o=this;document.body.classList.add("zoom-overlay-transitioning"),this.img.style.transform=this.preservedTransform,0===this.img.style.length&&this.img.removeAttribute("style"),this.wrap.style.transform="none",t=this.img,e="transitionend",i=function(){o.dispose(),document.body.classList.remove("zoom-overlay-open")},n=function(t){t.target.removeEventListener(e,n),i()},t.addEventListener(e,n)};var n=null,o=80,a=-1,s=-1;function r(){-1===a&&(a=window.pageYOffset),Math.abs(a-window.pageYOffset)>=40&&m()}function c(t){27===t.keyCode&&m()}function l(t){var e=t.touches[0];null!==e&&(s=e.pageY,t.target.addEventListener("touchmove",u))}function u(t){var e=t.touches[0];null!==e&&Math.abs(e.pageY-s)>10&&(m(),t.target.removeEventListener("touchmove",u))}function p(){m()}function m(t){null!==n&&(t?n.dispose():n.close(),document.removeEventListener("scroll",r),document.removeEventListener("keyup",c),document.removeEventListener("touchstart",l),document.removeEventListener("click",p,!0),n=null)}function d(e){document.body.classList.contains("zoom-overlay-open")||(e.metaKey||e.ctrlKey?window.open(e.target.getAttribute("data-original")||e.target.src,"_blank"):e.target.width>=t()-o||(m(!0),(n=new i(e.target,o)).zoom(),document.addEventListener("scroll",r),document.addEventListener("keyup",c),document.addEventListener("touchstart",l),document.addEventListener("click",p,!0)))}return function(t){return t.setAttribute("data-action","zoom"),t.addEventListener("click",d),function(){return t.removeEventListener("click",d)}}},t.exports=n()},kxFB:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},n5Qe:function(t,e,i){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)("https://like.cinwell.xyz"+t,e).then(function(t){return t.text()})};var n=i("VMEh")},nHuZ:function(t,e,i){var n=i("T7X/");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("3697ce6c",n,!1,{sourceMap:!1})},tq8b:function(t,e,i){var n=i("HEzy");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("67673aae",n,!1,{sourceMap:!1})},"w/Tp":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project"},[i("img",{ref:"image",staticClass:"project__image",attrs:{src:t.data.image}}),i("div",{staticClass:"project__info"},[i("h5",{staticClass:"project__name"},[t._v(t._s(t.data.name))]),i("p",{staticClass:"project__desc"},[t._v(t._s(t.data.desc))]),t.data.type?i("div",{staticClass:"project__tag"},[t._v(t._s(t.data.type))]):t._e(),i("ul",{staticClass:"project__links"},[i("li",[i("a",{attrs:{target:"_blank",href:t._f("repo")(t.data.name)}},[t._v("GitHub")])]),t._l(t.data.links,function(e){return i("li",{key:e.name},[i("a",{attrs:{target:"_blank",href:e.url}},[t._v(t._s(e.name))])])})],2)])])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},xhyL:function(t,e,i){"use strict";var n=i("ieZg"),o=i.n(n);e.a={name:"project",props:["data"],filters:{repo:function(t){return"https://github.com/"+(-1===t.indexOf("/")?"qingwei-li/"+t:t)}},mounted:function(){this.destroyZoom=o()(this.$refs.image)},beforeDestroy:function(){this.destroyZoom()},methods:{previewImage:function(){window.open(this.data.image)}}}}});