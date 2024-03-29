/*! For license information please see trendchart.js.LICENSE.txt */
(()=>{"use strict";function t(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var h;const l=window,c=l.trustedTypes,p=c?c.emptyScript:"",u=l.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),$={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:v},y="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=$){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:d).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:d;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var m;f[y]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(h=l.reactiveElementVersions)&&void 0!==h?h:l.reactiveElementVersions=[]).push("1.6.3");const g=window,_=g.trustedTypes,A=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,S="?"+b,w=`<${S}>`,E=document,C=()=>E.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,M="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,F=/>/g,z=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,O=/"/g,T=/^(?:script|style|textarea|title)$/i,H=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),L=H(1),j=H(2),D=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),G=new WeakMap,B=E.createTreeWalker(E,129,null,!1);function I(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const W=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",n=R;for(let e=0;e<i;e++){const i=t[e];let a,h,l=-1,c=0;for(;c<i.length&&(n.lastIndex=c,h=n.exec(i),null!==h);)c=n.lastIndex,n===R?"!--"===h[1]?n=U:void 0!==h[1]?n=F:void 0!==h[2]?(T.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=z):void 0!==h[3]&&(n=z):n===z?">"===h[0]?(n=null!=o?o:R,l=-1):void 0===h[1]?l=-2:(l=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?z:'"'===h[3]?O:N):n===O||n===N?n=z:n===U||n===F?n=R:(n=z,o=void 0);const p=n===z&&t[e+1].startsWith("/>")?" ":"";r+=n===R?i+w:l>=0?(s.push(a),i.slice(0,l)+x+i.slice(l)+b+p):i+b+(-2===l?(s.push(void 0),e):p)}return[I(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[h,l]=W(t,e);if(this.el=q.createElement(h,i),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=B.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(x)||e.startsWith(b)){const i=l[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+x).split(b),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?tt:"@"===e[1]?et:X})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(T.test(s.tagName)){const t=s.textContent.split(b),e=t.length-1;if(e>0){s.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),B.nextNode(),a.push({type:2,index:++o});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===S)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(b,t+1));)a.push({type:7,index:o}),t+=b.length-1}o++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){var o,r,n,a;if(e===D)return e;let h=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const l=k(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==l&&(null===(r=null==h?void 0:h._$AO)||void 0===r||r.call(h,!1),void 0===l?h=void 0:(h=new l(t),h._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Co)&&void 0!==n?n:a._$Co=[])[s]=h:i._$Cl=h),void 0!==h&&(e=Z(t,h._$AS(t,e.values),h,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(i,!0);B.currentNode=o;let r=B.nextNode(),n=0,a=0,h=s[0];for(;void 0!==h;){if(n===h.index){let e;2===h.type?e=new J(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new it(r,this,t)),this._$AV.push(e),h=s[++a]}n!==(null==h?void 0:h.index)&&(r=B.nextNode(),n++)}return B.currentNode=E,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{constructor(t,e,i,s){var o;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),k(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>P(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(I(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new K(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new q(t)),e}T(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new J(this.k(C()),this.k(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=Z(this,t,e,0),r=!k(t)||t!==this._$AH&&t!==D,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Z(this,s[i+n],e,n),a===D&&(a=this._$AH[n]),r||(r=!k(a)||a!==this._$AH[n]),a===V?t=V:t!==V&&(t+=(null!=a?a:"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}const Q=_?_.emptyScript:"";class tt extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class et extends X{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Z(this,t,e,0))&&void 0!==i?i:V)===D)return;const s=this._$AH,o=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==V&&(s===V||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const st=g.litHtmlPolyfillSupport;var ot,rt;null==st||st(q,J),(null!==(m=g.litHtmlVersions)&&void 0!==m?m:g.litHtmlVersions=[]).push("2.8.0");class nt extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new J(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}}nt.finalized=!0,nt._$litElement$=!0,null===(ot=globalThis.litElementHydrateSupport)||void 0===ot||ot.call(globalThis,{LitElement:nt});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:nt}),(null!==(rt=globalThis.litElementVersions)&&void 0!==rt?rt:globalThis.litElementVersions=[]).push("3.3.3");const ht=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},ct=(t,e,i)=>{e.constructor.createProperty(i,t)};function pt(t){return(e,i)=>void 0!==i?ct(t,e,i):lt(t,e)}function ut(t){return pt({...t,state:!0})}var dt;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements;class vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const $t="important",yt=" !"+$t,ft=(mt=class extends vt{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];if(null!=s){this.ht.add(t);const e="string"==typeof s&&s.endsWith(yt);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?$t:""):i[t]=s}}return D}},(...t)=>({_$litDirective$:mt,values:t}));var mt;class gt extends nt{constructor(){super(...arguments),this.values=[],this.labels=[],this.min=null,this.max=null,this.static=!1,this.tooltip="@L @V",this.width=0,this.height=0,this.valueShapeFocused=null,this.valueShapes=[]}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((t=>{t.forEach((t=>{this.width=t.contentRect.width,this.height=t.contentRect.height}))})),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}willUpdate(t){this.width&&this.height&&(t.has("labels")&&(this.labels=this.labels.map((t=>null!=t?""+t:""))),["width","height","values","labels","min","max","shapeSize","shapeGap","shapeRadius"].some((e=>t.has(e)))&&this.computeChartData())}render(){var t,e;return L`
            <div class="wrapper">
                ${null!==(t=this.chartTemplate())&&void 0!==t?t:V}
                ${null!==(e=this.tooltipTemplate())&&void 0!==e?e:V}
            </div>
        `}tooltipTemplate(){if(!this.valueShapeFocused)return null;const t=this.tooltipAnchorPositionFor(this.valueShapeFocused),e=this.tooltip.replace(/@V/g,this.valueShapeFocused.value.toLocaleString()).replace(/@L/g,this.valueShapeFocused.label?this.valueShapeFocused.label:"").trim();return L`
            <div class="tooltip" style="${ft(t)}">${e}</div>
        `}firstUpdated(){if(!this.static){const t=this.renderRoot.querySelector(".wrapper");t.addEventListener("mousemove",(t=>{this.valueShapeFocused=this.findValueShapeAtPosition(t.offsetX,t.offsetY)})),t.addEventListener("mouseleave",(()=>{this.valueShapeFocused=null}))}}updated(){if(this.valueShapeFocused){const t=10,e=this.renderRoot.querySelector(".tooltip"),i=e.getBoundingClientRect();let s=parseFloat(e.style.left);i.left<t?s+=t-Math.floor(i.left):i.right>document.documentElement.offsetWidth-t&&(s+=document.documentElement.offsetWidth-t-Math.ceil(i.right)),e.style.left=`${s}px`}}}gt.styles=n`
        :host {
            --shape-color: #597BFC;
            --shape-opacity: 1;
            --shape-focused-opacity: 0.5;
            --area-color: var(--shape-color);
            --area-opacity: 0;
            --tooltip-font-color: white;
            --tooltip-font-size: 0.875em;
            --tooltip-font-weight: bold;
            --tooltip-radius: 3px;
            --tooltip-padding: 3px 4px;
            --tooltip-background: black;
            --tooltip-shadow: none;
            display: inline-block;
            width: 120px;
            height: 60px;
        }
        .wrapper {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            box-sizing: border-box;
            border-radius: inherit;
        }
        .wrapper * {
            box-sizing: border-box;
        }
        .chart {
            display: block;
            position: relative;
            z-index: 1;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: inherit
        }
        .chart .area {
            fill: var(--area-color);
            opacity: var(--area-opacity);
            stroke: none;
        }
        .chart > .shape {
            fill: var(--shape-color);
            opacity: var(--shape-opacity);
            stroke: none;
        }
        .chart .shape.is-focused {
            opacity: var(--shape-focused-opacity);
        }
        .tooltip {
            position: absolute;
            z-index: 10;
            font-size: var(--tooltip-font-size);
            font-weight: var(--tooltip-font-weight);
            line-height: 1;
            text-align: center;
            white-space: nowrap;
            color: var(--tooltip-font-color);
            padding: var(--tooltip-padding);
            pointer-events: none;
            border-radius: var(--tooltip-radius);
            background-color: var(--tooltip-background);
            box-shadow: var(--tooltip-shadow);
        }
    `,t([pt({type:Array})],gt.prototype,"values",void 0),t([pt({type:Array})],gt.prototype,"labels",void 0),t([pt({type:Number})],gt.prototype,"min",void 0),t([pt({type:Number})],gt.prototype,"max",void 0),t([pt({type:Boolean,reflect:!0})],gt.prototype,"static",void 0),t([pt({type:String})],gt.prototype,"tooltip",void 0),t([ut()],gt.prototype,"width",void 0),t([ut()],gt.prototype,"height",void 0),t([ut()],gt.prototype,"valueShapeFocused",void 0);let _t=class extends gt{constructor(){super(...arguments),this.shapeGap=1,this.shapeRadius=1}computeChartData(){this.valueShapes=[];let t=Math.min(...this.values);null!==this.min&&(t=Math.min(t,this.min));let e=Math.max(...this.values);null!==this.max&&(e=Math.max(e,this.max));const i=e-t,s=(this.height-this.shapeGap*(this.values.length-1))/this.values.length,o=e=>i?(e-t)/i*this.width:1;this.values.forEach(((r,n)=>{var a;let h=(s+this.shapeGap)*n,l=o(r<0?r:Math.max(t,0)),c=o(r<0?Math.min(e,0):r)-l;0==c&&(c=1,e<0&&i&&l--),this.valueShapes.push({index:n,value:r,label:null!==(a=this.labels[n])&&void 0!==a?a:null,origin:{x:l,y:h},width:c,height:s})}))}chartTemplate(){if(this.valueShapes.length<1)return null;const t=Math.min(this.shapeRadius,this.valueShapes[0].height/2);return L`
            <svg class="chart" width="100%" height="100%">
                ${this.valueShapes.map(((e,i)=>{var s;return j`
                    <rect class="area"
                        x="0"
                        y="${e.origin.y}"
                        width="100%"
                        height="${e.height}"
                        rx="${t}" ry="${t}"
                    />
                    <rect class="shape ${(null===(s=this.valueShapeFocused)||void 0===s?void 0:s.index)===i?"is-focused":""}"
                        x="${e.origin.x}"
                        y="${e.origin.y}"
                        width="${e.width}"
                        height="${e.height}"
                        rx="${t}" ry="${t}"
                    />
                `}))}
            </svg>
        `}tooltipAnchorPositionFor(t){const e={left:t.origin.x+t.width+"px",top:t.origin.y-2+"px",transform:"translate(-50%, -100%)"};return(t.value<0||0===Math.max(...this.values))&&(e.left=t.origin.x+"px"),e}findValueShapeAtPosition(t,e){var i;return null!==(i=this.valueShapes.find((t=>{const i=t.origin.y-this.shapeGap/2,s=t.origin.y+t.height+this.shapeGap/2;return e>=i&&e<=s})))&&void 0!==i?i:null}};_t.styles=[gt.styles,n``],t([pt({type:Number,attribute:"shape-gap"})],_t.prototype,"shapeGap",void 0),t([pt({type:Number,attribute:"shape-radius"})],_t.prototype,"shapeRadius",void 0),_t=t([ht("tc-bar")],_t);let At=class extends gt{constructor(){super(...arguments),this.shapeGap=1,this.shapeRadius=1}computeChartData(){this.valueShapes=[];let t=Math.min(...this.values);null!==this.min&&(t=Math.min(t,this.min));let e=Math.max(...this.values);null!==this.max&&(e=Math.max(e,this.max));const i=e-t,s=(this.width-this.shapeGap*(this.values.length-1))/this.values.length,o=e=>this.height-(i?(e-t)/i*this.height:1);this.values.forEach(((r,n)=>{var a;let h=(s+this.shapeGap)*n,l=o(r<0?Math.min(e,0):r),c=o(r<0?r:Math.max(t,0))-l;0==c&&(c=1,e>0&&i&&l--),this.valueShapes.push({index:n,value:r,label:null!==(a=this.labels[n])&&void 0!==a?a:null,origin:{x:h,y:l},width:s,height:c})}))}chartTemplate(){if(this.valueShapes.length<1)return null;const t=Math.min(this.shapeRadius,this.valueShapes[0].width/2);return L`
            <svg class="chart" width="100%" height="100%">
                ${this.valueShapes.map(((e,i)=>{var s;return j`
                    <rect class="area"
                        x="${e.origin.x}"
                        y="0"
                        width="${e.width}"
                        height="100%"
                        rx="${t}" ry="${t}"
                    />
                    <rect class="shape ${(null===(s=this.valueShapeFocused)||void 0===s?void 0:s.index)===i?"is-focused":""}"
                        x="${e.origin.x}"
                        y="${e.origin.y}"
                        width="${e.width}"
                        height="${e.height}"
                        rx="${t}" ry="${t}"
                    />
                `}))}
            </svg>
        `}tooltipAnchorPositionFor(t){const e={left:t.origin.x+t.width/2+"px",top:t.origin.y-2+"px",transform:"translate(-50%, -100%)"};return(t.value<0||0===Math.max(...this.values))&&(e.top=t.origin.y+t.height+2+"px",e.transform="translate(-50%, 0%)"),e}findValueShapeAtPosition(t,e){var i;return null!==(i=this.valueShapes.find((e=>{const i=e.origin.x-this.shapeGap/2,s=e.origin.x+e.width+this.shapeGap/2;return t>=i&&t<=s})))&&void 0!==i?i:null}};At.styles=[gt.styles,n``],t([pt({type:Number,attribute:"shape-gap"})],At.prototype,"shapeGap",void 0),t([pt({type:Number,attribute:"shape-radius"})],At.prototype,"shapeRadius",void 0),At=t([ht("tc-column")],At);let xt=class extends gt{constructor(){super(...arguments),this.shapeSize=2}computeChartData(){this.valueShapes=[];let t=Math.min(...this.values);null!==this.min&&(t=Math.min(t,this.min));let e=Math.max(...this.values);null!==this.max&&(e=Math.max(e,this.max));const i=e-t,s=t=>t*((this.width-this.shapeSize)/(this.values.length-1))+this.shapeSize/2,o=e=>{const s=this.height-this.shapeSize;let o=s;return i&&(o-=(e-t)/i*s),o+this.shapeSize/2};this.values.forEach(((t,e)=>{var i;this.valueShapes.push({index:e,value:t,label:null!==(i=this.labels[e])&&void 0!==i?i:null,center:{x:s(e),y:o(t)},radius:Math.floor((this.shapeSize+6)/2)})})),this.linePath=this.valueShapes.map(((t,e)=>(0===e?"M":"L")+t.center.x+","+t.center.y)).join(" "),this.areaPath=this.linePath.concat("L"+this.valueShapes[this.valueShapes.length-1].center.x+","+o(Math.max(t,0))+" ").concat("L"+this.valueShapes[0].center.x+","+o(Math.max(t,0))+" ").concat("Z")}chartTemplate(){if(this.valueShapes.length<2)return null;const t={display:"none"};return this.valueShapeFocused&&(t.display="block",t.left=this.valueShapeFocused.center.x+"px",t.top=this.valueShapeFocused.center.y+"px",t.width=2*this.valueShapeFocused.radius+"px",t.height=2*this.valueShapeFocused.radius+"px"),L`
            <svg class="chart">
                <mask id="mask">
                    <path d="${this.areaPath}" stroke-width="${this.shapeSize}" stroke="#FFFFFF" fill="#FFFFFF" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/>
                </mask>
                <rect class="area" x="0" y="0" width="100%" height="100%" mask="url(#mask)"/>
                <path class="shape" d="${this.linePath}" stroke-width="${this.shapeSize}" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="point" style="${ft(t)}"></div>
        `}tooltipAnchorPositionFor(t){const e={left:t.center.x+"px",top:t.center.y-t.radius-2+"px",transform:"translate(-50%, -100%)"};return(t.value<0||0===Math.max(...this.values))&&(e.top=t.center.y+t.radius+2+"px",e.transform="translate(-50%, 0%)"),e}findValueShapeAtPosition(t,e){return this.valueShapes.reduce(((e,i)=>Math.abs(i.center.x-t)<Math.abs(e.center.x-t)?i:e))}};xt.styles=[gt.styles,n`
            :host {
                --point-color: var(--shape-color);
                --point-opacity: 1;
                --point-shadow: none;
            }
            .point {
                position: absolute;
                z-index: 2;
                pointer-events: none;
                border-radius: 100%;
                background-color: var(--point-color);
                opacity: var(--point-opacity);
                box-shadow: var(--point-shadow);
                transform: translate(-50%, -50%);
            }
            .chart > .shape {
                fill: none;
                stroke: var(--shape-color);
            }
        `],t([pt({type:Number,attribute:"shape-size"})],xt.prototype,"shapeSize",void 0),xt=t([ht("tc-line")],xt);let bt=class extends gt{constructor(){super(...arguments),this.shapeSize=null,this.shapeGap=1}computeChartData(){var t;this.valueShapes=[],this.gapLines=[],this.areaPath="";const e={x:this.width/2,y:this.height/2},i=Math.min(e.x,e.y),s=this.values.reduce(((t,e)=>t+e),0),o=null!==this.max?Math.max(s,this.max):s;let r=0;const n=(t,i)=>{const s=t/o*Math.PI*2-Math.PI/2;return{x:i*Math.cos(s)+e.x,y:i*Math.sin(s)+e.y}},a=t=>{const s=t/o*100,a=n(r,i),h=n(r+t,i);let l="";return l+="M"+a.x+","+a.y+" ",l+=100===s?"A"+[i,i,"0","1","1",h.x-.001,h.y].join(",")+" ":"A"+[i,i,"0",s>50?"1":"0","1",h.x,h.y].join(",")+" ",l+="L"+[e.x,e.y].join(",")+" ",l+="Z",l};this.cutoutCircle={center:e,radius:i-Math.min(null!==(t=this.shapeSize)&&void 0!==t?t:1/0,i)},this.values.forEach(((t,s)=>{var o;const h=n(r+t/2,i-(i-this.cutoutCircle.radius)/2);this.valueShapes.push({index:s,value:t,label:null!==(o=this.labels[s])&&void 0!==o?o:null,center:h,path:a(t)});const l=n(r,i);this.gapLines.push({start:l,end:e}),r+=t}));const h=o-s;if(h){this.areaPath=a(h);const t=n(r,i);this.gapLines.push({start:t,end:e})}1!==this.values.length||h||(this.gapLines=[])}chartTemplate(){return this.valueShapes.length<1?null:L`
            <svg class="chart" width="100%" height="100%">
                <mask id="mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" stroke="none"/>
                    <circle cx="${this.cutoutCircle.center.x}" cy="${this.cutoutCircle.center.y}" r="${this.cutoutCircle.radius}" fill="#000000"/>
                    ${this.gapLines.map((t=>j`
                        <line x1="${t.start.x}" y1="${t.start.y}"
                            x2="${t.end.x}" y2="${t.end.y}"
                            stroke-width="${this.shapeGap}" stroke="#000000" stroke-linecap="round"
                        />
                    `))}
                </mask>
                <g mask="url(#mask)">
                    <path class="area" d="${this.areaPath}"/>
                    ${this.valueShapes.map(((t,e)=>{var i;return j`
                        <path class="shape ${(null===(i=this.valueShapeFocused)||void 0===i?void 0:i.index)===e?"is-focused":""}"
                            d="${t.path}"
                            style="fill: var(--shape-color-${e+1}, var(--shape-color))"
                        />
                    `}))}
                </g>
            </svg>
        `}tooltipAnchorPositionFor(t){return{left:t.center.x+"px",top:t.center.y+"px",transform:"translate(-50%, -50%)"}}findValueShapeAtPosition(t,e){const i=this.renderRoot.querySelector(".chart"),s=i.createSVGPoint();s.x=t,s.y=e;const o=Array.from(i.querySelectorAll(".shape")).findIndex((t=>t.isPointInFill(s)));return-1===o?null:this.valueShapes[o]}};bt.styles=[gt.styles,n`
            :host {
                width: 60px;
                border-radius: 100%;
            }
        `],t([pt({type:Number,attribute:"shape-size"})],bt.prototype,"shapeSize",void 0),t([pt({type:Number,attribute:"shape-gap"})],bt.prototype,"shapeGap",void 0),bt=t([ht("tc-pie")],bt)})();