!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n,r,o,i,a,c="object",u=function(t){return t&&t.Math==Math&&t},f=u(typeof globalThis==c&&globalThis)||u(typeof window==c&&window)||u(typeof self==c&&self)||u(typeof t==c&&t)||Function("return this")(),l=function(t){try{return!!t()}catch(t){return!0}},d=!l(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),s={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,g={f:p&&!s.call({1:2},1)?function(t){var e=p(this,t);return!!e&&e.enumerable}:s},m=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},h={}.toString,b=function(t){return h.call(t).slice(8,-1)},v="".split,y=l(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==b(t)?v.call(t,""):Object(t)}:Object,w=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},x=function(t){return y(w(t))},S=function(t){return"object"==typeof t?null!==t:"function"==typeof t},k=function(t,e){if(!S(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!S(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!S(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!S(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},O={}.hasOwnProperty,E=function(t,e){return O.call(t,e)},F=f.document,N=S(F)&&S(F.createElement),L=!d&&!l(function(){return 7!=Object.defineProperty((t="div",N?F.createElement(t):{}),"a",{get:function(){return 7}}).a;var t}),j=Object.getOwnPropertyDescriptor,P={f:d?j:function(t,e){if(t=x(t),e=k(e,!0),L)try{return j(t,e)}catch(t){}if(E(t,e))return m(!g.f.call(t,e),t[e])}},C=function(t){if(!S(t))throw TypeError(String(t)+" is not an object");return t},M=Object.defineProperty,T={f:d?M:function(t,e,n){if(C(t),e=k(e,!0),C(n),L)try{return M(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},z=d?function(t,e,n){return T.f(t,e,m(1,n))}:function(t,e,n){return t[e]=n,t},G=function(e,n){try{z(f,e,n)}catch(t){f[e]=n}return n},H=e(function(t){var e="__core-js_shared__",n=f[e]||G(e,{});(t.exports=function(t,e){return n[t]||(n[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),I=H("native-function-to-string",Function.toString),R=f.WeakMap,q="function"==typeof R&&/native code/.test(I.call(R)),A=0,V=Math.random(),D=H("keys"),W={},U=f.WeakMap;if(q){var B=new U,J=B.get,K=B.has,Y=B.set;n=function(t,e){return Y.call(B,t,e),e},r=function(t){return J.call(B,t)||{}},o=function(t){return K.call(B,t)}}else{var Q=D[i="state"]||(D[i]=(a=i,"Symbol("+String(void 0===a?"":a)+")_"+(++A+V).toString(36)));W[Q]=!0,n=function(t,e){return z(t,Q,e),e},r=function(t){return E(t,Q)?t[Q]:{}},o=function(t){return E(t,Q)}}var X={set:n,get:r,has:o,enforce:function(t){return o(t)?r(t):n(t,{})},getterFor:function(n){return function(t){var e;if(!S(t)||(e=r(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return e}}},Z=e(function(t){var e=X.get,c=X.enforce,u=String(I).split("toString");H("inspectSource",function(t){return I.call(t)}),(t.exports=function(t,e,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof e||E(n,"name")||z(n,"name",e),c(n).source=u.join("string"==typeof e?e:"")),t!==f?(o?!a&&t[e]&&(i=!0):delete t[e],i?t[e]=n:z(t,e,n)):i?t[e]=n:G(e,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&e(this).source||I.call(this)})}),$=f,tt=function(t){return"function"==typeof t?t:void 0},et=Math.ceil,nt=Math.floor,rt=function(t){return isNaN(t=+t)?0:(0<t?nt:et)(t)},ot=Math.min,it=Math.max,at=Math.min,ct=function(f){return function(t,e,n){var r,o,i,a,c=x(t),u=0<(r=c.length)?ot(rt(r),9007199254740991):0,l=(o=u,(i=rt(n))<0?it(i+o,0):at(i,o));if(f&&e!=e){for(;l<u;)if((a=c[l++])!=a)return!0}else for(;l<u;l++)if((f||l in c)&&c[l]===e)return f||l||0;return!f&&-1}},ut={includes:ct(!0),indexOf:ct(!1)}.indexOf,lt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),ft={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=x(t),o=0,i=[];for(n in r)!E(W,n)&&E(r,n)&&i.push(n);for(;e.length>o;)E(r,n=e[o++])&&(~ut(i,n)||i.push(n));return i}(t,lt)}},dt={f:Object.getOwnPropertySymbols},st=function(t,e){return arguments.length<2?tt($[t])||tt(f[t]):$[t]&&$[t][e]||f[t]&&f[t][e]}("Reflect","ownKeys")||function(t){var e=ft.f(C(t)),n=dt.f;return n?e.concat(n(t)):e},pt=function(t,e){for(var n=st(e),r=T.f,o=P.f,i=0;i<n.length;i++){var a=n[i];E(t,a)||r(t,a,o(e,a))}},gt=/#|\.prototype\./,mt=function(t,e){var n=bt[ht(t)];return n==yt||n!=vt&&("function"==typeof e?l(e):!!e)},ht=mt.normalize=function(t){return String(t).replace(gt,".").toLowerCase()},bt=mt.data={},vt=mt.NATIVE="N",yt=mt.POLYFILL="P",wt=mt,xt=P.f,St=function(t,e){var n,r,o,i,a,c=t.target,u=t.global,l=t.stat;if(n=u?f:l?f[c]||G(c,{}):(f[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=xt(n,r))&&a.value:n[r],!wt(u?r:c+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;pt(i,o)}(t.sham||o&&o.sham)&&z(i,"sham",!0),Z(n,r,i,t)}},_t="".repeat||function(t){var e=String(w(this)),n="",r=rt(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;0<r;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n},kt=1..toFixed,Ot=Math.floor,Et=function(t,e,n){return 0===e?n:e%2==1?Et(t,e-1,n*t):Et(t*t,e/2,n)};St({target:"Number",proto:!0,forced:kt&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l(function(){kt.call({})})},{toFixed:function(t){var e,n,r,o,i=function(t){if("number"!=typeof t&&"Number"!=b(t))throw TypeError("Incorrect invocation");return+t}(this),a=rt(t),c=[0,0,0,0,0,0],u="",l="0",f=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*c[n],c[n]=r%1e7,r=Ot(r/1e7)},d=function(t){for(var e=6,n=0;0<=--e;)n+=c[e],c[e]=Ot(n/t),n=n%t*1e7},s=function(){for(var t=6,e="";0<=--t;)if(""!==e||0===t||0!==c[t]){var n=String(c[t]);e=""===e?n:e+_t.call("0",7-n.length)+n}return e};if(a<0||20<a)throw RangeError("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||1e21<=i)return String(i);if(i<0&&(u="-",i=-i),1e-21<i)if(n=(e=function(t){for(var e=0,n=t;4096<=n;)e+=12,n/=4096;for(;2<=n;)e+=1,n/=2;return e}(i*Et(2,69,1))-69)<0?i*Et(2,-e,1):i/Et(2,e,1),n*=4503599627370496,0<(e=52-e)){for(f(0,n),r=a;7<=r;)f(1e7,0),r-=7;for(f(Et(10,r,1),0),r=e-1;23<=r;)d(1<<23),r-=23;d(1<<r),f(1,1),d(2),l=s()}else f(0,n),f(1<<-e,0),l=s()+_t.call("0",a);return l=0<a?u+((o=l.length)<=a?"0."+_t.call("0",a-o)+l:l.slice(0,o-a)+"."+l.slice(o-a)):u+l}});var Ft,Nt=/"/g;St({target:"String",proto:!0,forced:(Ft="fixed",l(function(){var t=""[Ft]('"');return t!==t.toLowerCase()||3<t.split('"').length}))},{fixed:function(){return t="tt",n=e="",r=String(w(this)),o="<"+t,""!==e&&(o+=" "+e+'="'+String(n).replace(Nt,"&quot;")+'"'),o+">"+r+"</"+t+">";var t,e,n,r,o}});var Lt=function(t,e){if(t instanceof NodeList)for(var n=0;n<t.length;n++)t[n].classList.add(e);else(t instanceof Node||t instanceof Element)&&t.classList.add(e)},jt=function(t,e){var n=e.split(" ");if(t instanceof NodeList)for(var r=0;r<t.length;r++)for(var o=0;o<n.length;o++)t[r].classList.remove(n[o]);else if(t instanceof Node||t instanceof Element)for(var i=0;i<n.length;i++)t.classList.remove(n[i])};function Pt(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=document.querySelector("#"+t+"-css-style");n||((n=document.createElement("style")).setAttribute("id",t+"-css-style"),n.setAttribute("type","text/css"),document.querySelector("head").appendChild(n)),n.innerHTML=e}window.addEventListener("load",function(){document.addEventListener("header_builder_panel_changed",function(t){return"hfg_header_layout_partial"===t.detail.partial_id?(window.HFG.init(),console.log("Reinitialize HFG with sidebar."),!1):"nav-icon_partial"===t.detail.partial_id?(window.HFG.init(!0),console.log("Reinitialize HFG with skip."),!1):void 0}),document.addEventListener("customize_control_sidebar",function(t){"open"===t.detail&&window.HFG.toggleMenuSidebar(!0),"close"===t.detail&&window.HFG.toggleMenuSidebar(!1)}.bind(this)),document.addEventListener("customize_section_opened",function(t){"header_sidebar"===t.detail&&window.HFG.toggleMenuSidebar(!0)}.bind(this));var s={mobile:"max-width: 576px",tablet:"min-width: 576px",desktop:"min-width: 961px"};_.each(neveHFGPreview,function(t,d){_.each(t,function(l,f){wp.customize(f,function(t){t.bind(function(e){var t="";switch(d){case"neve_background_control":if("color"===e.type){t+="body "+l.selector+"{background-image: none !important;}";var n="undefined"!==e.colorValue?e.colorValue:"inherit";return t+="body "+l.selector+"{background-color: "+n+" !important; }",t+=l.selector+":before{ content: none !important; }",Pt(f,t),!1}t+=l.selector+"{",t+=e.imageUrl?'background-image: url("'+e.imageUrl+'") !important;':"background-image: none !important;",t+=!0===e.fixed?"background-attachment: fixed !important;":"background-attachment: initial !important;",t+="background-position:"+(100*e.focusPoint.x).toFixed(2)+"% "+(100*e.focusPoint.y).toFixed(2)+"% !important;",t+="background-size: cover !important;",document.querySelector(".header-menu-sidebar").classList.contains("dropdown")||(t+="position: absolute;"),t+='top: 0; bottom: 0; width: 100%; content:"";',t+="}";var r="undefined"!==e.overlayColorValue?e.overlayColorValue:"inherit";t+=l.selector+':before { content: "";position: absolute; top: 0; bottom: 0; width: 100%;background-color: '+r+" !important;opacity: "+e.overlayOpacity/100+"!important;}",t+=l.selector+"{ background-color: transparent !important; }",Pt(f,t);break;case"\\Neve\\Customizer\\Controls\\Button_Group":var o=document.querySelectorAll(l.selector);_.each(o,function(t){jt(t.parentNode,"hfg-item-center hfg-item-right hfg-item-left"),Lt(t.parentNode,"hfg-item-"+e)});break;case"\\Neve\\Customizer\\Controls\\Radio_Image":var i=document.querySelectorAll(l.selector);jt(i,"dark-mode light-mode"),Lt(i,e);break;case"\\Neve\\Customizer\\Controls\\Range":var a=JSON.parse(e);0<a.mobile?t+="@media (max-width: 576px) { body "+l.selector+"{ "+l.additional.prop+":"+a.mobile+l.additional.unit+";}}":t+="@media (max-width: 576px) { body "+l.selector+"{ "+l.additional.prop+":unset;}}",0<a.tablet?t+="@media (min-width: 576px) { body "+l.selector+"{ "+l.additional.prop+":"+a.tablet+l.additional.unit+";}}":t+="@media (min-width: 576px) { body "+l.selector+"{ "+l.additional.prop+":unset;}}",0<a.desktop?t+="@media (min-width: 961px) { body "+l.selector+"{ "+l.additional.prop+":"+a.desktop+l.additional.unit+";}}":t+="@media (min-width: 961px) { body "+l.selector+"{ "+l.additional.prop+":unset;}}",Pt(f,t);break;case"\\Neve\\Customizer\\Controls\\React\\Spacing":for(var c in s){for(var u in t+="@media ("+s[c]+") { body "+l.selector+"{",e[c])""!==e[c][u]?t+=l.additional.prop+"-"+u+":"+e[c][u]+e[c+"-unit"]+";":t+=l.additional.prop+"-"+u+": unset;";t+="}}"}Pt(f,t)}})})})})})}();