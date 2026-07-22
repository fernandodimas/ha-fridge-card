/* ha-fridge-card v1.6.1 */
"use strict";(()=>{var Nt=Object.create;var V=Object.defineProperty;var Lt=Object.getOwnPropertyDescriptor;var gt=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),P=i=>{throw TypeError(i)};var jt=(i,t,e)=>t in i?V(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ut=(i,t)=>V(i,"name",{value:t,configurable:!0});var mt=i=>[,,,Nt(i?.[gt("metadata")]??null)],$t=["class","method","getter","setter","accessor","field","value","get","set"],k=i=>i!==void 0&&typeof i!="function"?P("Function expected"):i,qt=(i,t,e,r,s)=>({kind:$t[i],name:t,metadata:r,addInitializer:o=>e._?P("Already initialized"):s.push(k(o||null))}),It=(i,t)=>jt(t,gt("metadata"),i[3]),yt=(i,t,e,r)=>{for(var s=0,o=i[t>>1],n=o&&o.length;s<n;s++)t&1?o[s].call(e):r=o[s].call(e,r);return r},xt=(i,t,e,r,s,o)=>{var n,l,a,d,u,h=t&7,g=!!(t&8),p=!!(t&16),y=h>3?i.length+1:h?g?1:2:0,dt=$t[h+5],ct=h>3&&(i[y-1]=[]),Rt=i[y]||(i[y]=[]),$=h&&(!p&&!g&&(s=s.prototype),h<5&&(h>3||!p)&&Lt(h<4?s:{get[e](){return pt(this,o)},set[e](m){return ft(this,o,m)}},e));h?p&&h<4&&ut(o,(h>2?"set ":h>1?"get ":"")+e):ut(s,e);for(var W=r.length-1;W>=0;W--)d=qt(h,e,a={},i[3],Rt),h&&(d.static=g,d.private=p,u=d.access={has:p?m=>Wt(s,m):m=>e in m},h^3&&(u.get=p?m=>(h^1?pt:Yt)(m,s,h^4?o:$.get):m=>m[e]),h>2&&(u.set=p?(m,Y)=>ft(m,s,Y,h^4?o:$.set):(m,Y)=>m[e]=Y)),l=(0,r[W])(h?h<4?p?o:$[dt]:h>4?void 0:{get:$.get,set:$.set}:s,d),a._=1,h^4||l===void 0?k(l)&&(h>4?ct.unshift(l):h?p?o=l:$[dt]=l:s=l):typeof l!="object"||l===null?P("Object expected"):(k(n=l.get)&&($.get=n),k(n=l.set)&&($.set=n),k(n=l.init)&&ct.unshift(n));return h||It(i,s),$&&V(s,e,$),p?h^4?o:$:s};var Z=(i,t,e)=>t.has(i)||P("Cannot "+e),Wt=(i,t)=>Object(t)!==t?P('Cannot use the "in" operator on this value'):i.has(t),pt=(i,t,e)=>(Z(i,t,"read from private field"),e?e.call(i):t.get(i));var ft=(i,t,e,r)=>(Z(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e),Yt=(i,t,e)=>(Z(i,t,"access private method"),e);var R=globalThis,N=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),_t=new WeakMap,T=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(N&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=_t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&_t.set(e,t))}return t}toString(){return this.cssText}},wt=i=>new T(typeof i=="string"?i:i+"",void 0,K),G=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new T(e,i,K)},At=(i,t)=>{if(N)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),s=R.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},J=N?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return wt(e)})(i):i;var{is:Vt,defineProperty:Zt,getOwnPropertyDescriptor:Kt,getOwnPropertyNames:Gt,getOwnPropertySymbols:Jt,getPrototypeOf:Xt}=Object,j=globalThis,vt=j.trustedTypes,Qt=vt?vt.emptyScript:"",te=j.reactiveElementPolyfillSupport,F=(i,t)=>i,L={toAttribute(i,t){switch(t){case Boolean:i=i?Qt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},X=(i,t)=>!Vt(i,t),bt={attribute:!0,type:String,converter:L,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;var x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=bt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Zt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){let{get:s,set:o}=Kt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let l=s?.call(this);o?.call(this,n),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??bt}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;let t=Xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){let e=this.properties,r=[...Gt(e),...Jt(e)];for(let s of r)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let s of r)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return At(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:L).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){let r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let o=r.getPropertyOptions(s),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:L;this._$Em=s;let l=n.fromAttribute(e,o.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,r,s=!1,o){if(t!==void 0){let n=this.constructor;if(s===!1&&(o=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??X)(o,e)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:o},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[s,o]of r){let{wrapped:n}=o,l=this[s];n!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[F("elementProperties")]=new Map,x[F("finalized")]=new Map,te?.({ReactiveElement:x}),(j.reactiveElementVersions??=[]).push("2.1.2");var ot=globalThis,Ct=i=>i,q=ot.trustedTypes,Et=q?q.createPolicy("lit-html",{createHTML:i=>i}):void 0,Tt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,Ft="?"+_,ee=`<${Ft}>`,b=document,B=()=>b.createComment(""),U=i=>i===null||typeof i!="object"&&typeof i!="function",nt=Array.isArray,re=i=>nt(i)||typeof i?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,St=/-->/g,Mt=/>/g,A=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,kt=/"/g,zt=/^(?:script|style|textarea|title)$/i,at=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),f=at(1),ye=at(2),xe=at(3),C=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),Pt=new WeakMap,v=b.createTreeWalker(b,129);function Bt(i,t){if(!nt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Et!==void 0?Et.createHTML(t):t}var se=(i,t)=>{let e=i.length-1,r=[],s,o=t===2?"<svg>":t===3?"<math>":"",n=z;for(let l=0;l<e;l++){let a=i[l],d,u,h=-1,g=0;for(;g<a.length&&(n.lastIndex=g,u=n.exec(a),u!==null);)g=n.lastIndex,n===z?u[1]==="!--"?n=St:u[1]!==void 0?n=Mt:u[2]!==void 0?(zt.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=A):u[3]!==void 0&&(n=A):n===A?u[0]===">"?(n=s??z,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?A:u[3]==='"'?kt:Dt):n===kt||n===Dt?n=A:n===St||n===Mt?n=z:(n=A,s=void 0);let p=n===A&&i[l+1].startsWith("/>")?" ":"";o+=n===z?a+ee:h>=0?(r.push(d),a.slice(0,h)+Tt+a.slice(h)+_+p):a+_+(h===-2?l:p)}return[Bt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},H=class i{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[d,u]=se(t,e);if(this.el=i.createElement(d,r),v.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=v.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(Tt)){let g=u[n++],p=s.getAttribute(h).split(_),y=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:y[2],strings:p,ctor:y[1]==="."?et:y[1]==="?"?rt:y[1]==="@"?st:S}),s.removeAttribute(h)}else h.startsWith(_)&&(a.push({type:6,index:o}),s.removeAttribute(h));if(zt.test(s.tagName)){let h=s.textContent.split(_),g=h.length-1;if(g>0){s.textContent=q?q.emptyScript:"";for(let p=0;p<g;p++)s.append(h[p],B()),v.nextNode(),a.push({type:2,index:++o});s.append(h[g],B())}}}else if(s.nodeType===8)if(s.data===Ft)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:o}),h+=_.length-1}o++}}static createElement(t,e){let r=b.createElement("template");return r.innerHTML=t,r}};function E(i,t,e=i,r){if(t===C)return t;let s=r!==void 0?e._$Co?.[r]:e._$Cl,o=U(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??=[])[r]=s:e._$Cl=s),s!==void 0&&(t=E(i,s._$AS(i,t.values),s,r)),t}var tt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??b).importNode(e,!0);v.currentNode=s;let o=v.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new O(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new it(o,this,t)),this._$AV.push(d),a=r[++l]}n!==a?.index&&(o=v.nextNode(),n++)}return v.currentNode=b,s}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},O=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),U(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):re(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=H.createElement(Bt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(e);else{let o=new tt(s,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=Pt.get(t.strings);return e===void 0&&Pt.set(t.strings,e=new H(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,s=0;for(let o of t)s===e.length?e.push(r=new i(this.O(B()),this.O(B()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=Ct(t).nextSibling;Ct(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},S=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=c}_$AI(t,e=this,r,s){let o=this.strings,n=!1;if(o===void 0)t=E(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==C,n&&(this._$AH=t);else{let l=t,a,d;for(t=o[0],a=0;a<o.length-1;a++)d=E(this,l[r+a],e,a),d===C&&(d=this._$AH[a]),n||=!U(d)||d!==this._$AH[a],d===c?t=c:t!==c&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!s&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},et=class extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}},rt=class extends S{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}},st=class extends S{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??c)===C)return;let r=this._$AH,s=t===c&&r!==c||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==c&&(r===c||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var ie=ot.litHtmlPolyfillSupport;ie?.(H,O),(ot.litHtmlVersions??=[]).push("3.3.3");var Ut=(i,t,e)=>{let r=e?.renderBefore??t,s=r._$litPart$;if(s===void 0){let o=e?.renderBefore??null;r._$litPart$=s=new O(t.insertBefore(B(),o),o,void 0,e??{})}return s._$AI(i),s};var ht=globalThis,w=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};w._$litElement$=!0,w.finalized=!0,ht.litElementHydrateSupport?.({LitElement:w});var oe=ht.litElementPolyfillSupport;oe?.({LitElement:w});(ht.litElementVersions??=[]).push("4.2.2");var Ht=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var D="ha-fridge-card",ne=new Set(["unknown","unavailable","none"]),ae=192,he=387,le=["default","freezer","inverted","french_door","dual_door"];function de(i,t){let s=t/100;switch(i){case"freezer":return{freezer:{x:16,y:12,width:160,height:365}};case"default":return{freezer:{x:16,y:12,width:160,height:Math.round(365*s)},fridge:{x:16,y:12+Math.round(365*s)+2,width:160,height:Math.round(365*(1-s))-2}};case"inverted":case"french_door":return{fridge:{x:16,y:12,width:160,height:Math.round(365*(1-s))-2},freezer:{x:16,y:12+Math.round(365*(1-s)),width:160,height:Math.round(365*s)}};case"dual_door":{let o=Math.round(160*s);return{freezer:{x:12,y:12,width:o,height:365},fridge:{x:12+o+4,y:12,width:160-o,height:365}}}default:return{}}}function ce(i,t,e){let r=t/100,s=365,o=12;switch(i){case"freezer":return f`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="16" y="${o}" width="160" height="${s}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="24" y="${o+Math.round(s/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        ${e?f`
          <rect x="76" y="${o+Math.round(s/2)-26}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
          <rect x="80" y="${o+Math.round(s/2)-22}" width="32" height="20" rx="3" fill="#2C2C3A" />
          <rect x="90" y="${o+Math.round(s/2)+2}" width="12" height="14" rx="2" fill="#8A919A" />
          <rect x="86" y="${o+Math.round(s/2)+18}" width="20" height="5" rx="2" fill="#A0A8B4" />
        `:c}
      </svg>`;case"default":{let n=Math.round(s*r),l=Math.round(s*(1-r))-2,a=o+n;return f`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="16" y="${o}" width="160" height="${n}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="24" y="${o+Math.round(n/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="14" y="${a}" width="164" height="2" rx="1" fill="#D6DCE4" />
        <rect x="16" y="${a+2}" width="160" height="${l}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="24" y="${a+2+Math.round(l/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        ${e?f`
          <rect x="76" y="${a+2+Math.round(l/2)-26}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
          <rect x="80" y="${a+2+Math.round(l/2)-22}" width="32" height="20" rx="3" fill="#2C2C3A" />
          <rect x="90" y="${a+2+Math.round(l/2)+2}" width="12" height="14" rx="2" fill="#8A919A" />
          <rect x="86" y="${a+2+Math.round(l/2)+18}" width="20" height="5" rx="2" fill="#A0A8B4" />
        `:c}
      </svg>`}case"inverted":{let n=Math.round(s*(1-r))-2,l=Math.round(s*r),a=o+n;return f`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="16" y="${o}" width="160" height="${n}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="24" y="${o+Math.round(n/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        ${e?f`
          <rect x="76" y="${o+Math.round(n/2)-26}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
          <rect x="80" y="${o+Math.round(n/2)-22}" width="32" height="20" rx="3" fill="#2C2C3A" />
          <rect x="90" y="${o+Math.round(n/2)+2}" width="12" height="14" rx="2" fill="#8A919A" />
          <rect x="86" y="${o+Math.round(n/2)+18}" width="20" height="5" rx="2" fill="#A0A8B4" />
        `:c}
        <rect x="14" y="${a}" width="164" height="2" rx="1" fill="#D6DCE4" />
        <rect x="16" y="${a+2}" width="160" height="${l}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="24" y="${a+2+Math.round(l/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
      </svg>`}case"french_door":{let n=Math.round(s*(1-r))-2,l=Math.round(s*r),a=o+n,d=78;return f`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="16" y="${o}" width="${d}" height="${n}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="80" y="${o+Math.round(n/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        ${e?f`
          <rect x="26" y="${o+Math.round(n/2)-26}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
          <rect x="30" y="${o+Math.round(n/2)-22}" width="32" height="20" rx="3" fill="#2C2C3A" />
          <rect x="40" y="${o+Math.round(n/2)+2}" width="12" height="14" rx="2" fill="#8A919A" />
          <rect x="36" y="${o+Math.round(n/2)+18}" width="20" height="5" rx="2" fill="#A0A8B4" />
        `:c}
        <rect x="96" y="${o}" width="2" height="${n}" rx="1" fill="#D6DCE4" />
        <rect x="98" y="${o}" width="${d}" height="${n}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="162" y="${o+Math.round(n/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="14" y="${a}" width="164" height="2" rx="1" fill="#D6DCE4" />
        <rect x="16" y="${a+2}" width="160" height="${l}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="24" y="${a+2+Math.round(l/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
      </svg>`}case"dual_door":{let n=Math.round(160*r),l=160-n,a=12+n+4;return f`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="12" y="${o}" width="${n}" height="${s}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="${12+Math.round(n/2)-2}" y="${o+Math.round(s/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        ${e?f`
          <rect x="${12+Math.round(n/2)-20}" y="${o+40}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
          <rect x="${12+Math.round(n/2)-16}" y="${o+44}" width="32" height="20" rx="3" fill="#2C2C3A" />
          <rect x="${12+Math.round(n/2)-6}" y="${o+68}" width="12" height="14" rx="2" fill="#8A919A" />
          <rect x="${12+Math.round(n/2)-10}" y="${o+84}" width="20" height="5" rx="2" fill="#A0A8B4" />
        `:c}
        <rect x="${a-2}" y="${o}" width="2" height="${s}" rx="1" fill="#D6DCE4" />
        <rect x="${a}" y="${o}" width="${l}" height="${s}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="${a+Math.round(l/2)-2}" y="${o+Math.round(s/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
      </svg>`}default:return f``}}var Ot,lt,ue;Ot=[Ht(D)];var M=class extends(ue=w){_config;_hass;static getConfigForm(){return{schema:[{name:"title",selector:{text:{}}},{name:"show_title",selector:{select:{mode:"dropdown",options:[{value:"true",label:"Yes"},{value:"false",label:"No"}]}}},{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Freezer on top"},{value:"inverted",label:"Fridge on top"},{value:"dual_door",label:"Side by side"},{value:"french_door",label:"French door"},{value:"freezer",label:"Freezer only"}]}}},{name:"freezer_entity",selector:{entity:{domain:"sensor"}}},{name:"fridge_entity",selector:{entity:{domain:"sensor"}}},{name:"freezer_label",selector:{text:{}}},{name:"fridge_label",selector:{text:{}}},{name:"show_dispenser",selector:{select:{mode:"dropdown",options:[{value:"true",label:"Yes"},{value:"false",label:"No"}]}}},{name:"split_ratio",selector:{number:{min:20,max:80,step:1,mode:"slider",unit_of_measurement:"%"}}},{name:"card_width",selector:{number:{min:100,max:400,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"card_height",selector:{number:{min:200,max:600,step:10,mode:"slider",unit_of_measurement:"px"}}}],computeLabel:t=>{switch(t.name){case"title":return"Title";case"show_title":return"Show title";case"layout":return"Layout";case"freezer_entity":return"Freezer sensor";case"fridge_entity":return"Fridge sensor";case"freezer_label":return"Freezer label";case"fridge_label":return"Fridge label";case"show_dispenser":return"Show ice dispenser";case"split_ratio":return"Freezer / Fridge ratio";case"card_width":return"Width";case"card_height":return"Height";default:return}}}}getStubConfig(){return{type:`custom:${D}`,freezer_entity:"sensor.freezer_temperature",fridge_entity:"sensor.fridge_temperature",title:"Fridge",layout:"default"}}setConfig(t){let e=this.normalizeLayout(t.layout);this._config={title:"Fridge",...t,layout:e}}set hass(t){this._hass=t,this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 4}getGridOptions(){return{columns:6,rows:4,min_columns:4}}render(){if(!this._config)return c;let t=this.normalizeLayout(this._config.layout),e=this._config.split_ratio??30,r=de(t,e),s=this._config.show_title!=="false",o=this._config.show_dispenser==="true",n=!0,l=!!r.fridge,a=this.getDisplayState(this._config.freezer_entity),d=l?this.getDisplayState(this._config.fridge_entity):null,u=this.cardLabel(n,l),h=this._config.freezer_label||"Freezer",g=this._config.fridge_label||"Fridge",p=this._config.card_width||230,y=this._config.card_height||387;return f`
      <ha-card>
        <div class="card-shell">
          ${s?f`
            <div class="heading">
              <h3 class="title">${this._config.title}</h3>
            </div>
          `:c}
          <div class="body">
            <div class="fridge layout-${t}" role="img" aria-label=${u}>
              <div class="fridge-photo-frame" style="width:${p}px;height:${y}px;">
                ${ce(t,e,o)}
                <div class="readings">
                  ${n&&r.freezer?f`
                        <section class="reading zone-freezer"
                          style=${this.readingStyle(r.freezer)}>
                          <p class="section-label">${h}</p>
                          <div class=${this.temperatureClass(a)}>
                            <span>${a.stateText}</span>
                            ${a.unitText?f`<span class="unit">${a.unitText}</span>`:c}
                          </div>
                        </section>
                      `:c}
                  ${l&&r.fridge?f`
                        <section class="reading zone-fridge"
                          style=${this.readingStyle(r.fridge)}>
                          <p class="section-label">${g}</p>
                          <div class=${this.temperatureClass(d)}>
                            <span>${d.stateText}</span>
                            ${d.unitText?f`<span class="unit">${d.unitText}</span>`:c}
                          </div>
                        </section>
                      `:c}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `}temperatureClass(t){return t.isPlaceholder?"temperature placeholder":"temperature"}cardLabel(t,e){return t&&e?"Fridge and freezer temperatures":t?"Freezer temperature":"Fridge temperature"}normalizeLayout(t){return t&&le.includes(t)?t:"default"}readingStyle(t){let e=(t.x+t.width/2)/ae*100,r=(t.y+t.height/2)/he*100;return`left:${e}%;top:${r}%;`}getDisplayState(t){if(!t)return{stateText:"--",unitText:"\xB0C",isPlaceholder:!0};let e=this._hass?.states?.[t];if(!e)return{stateText:"--",unitText:"",isPlaceholder:!0};let r=e.state?.trim();if(!r||ne.has(r.toLowerCase()))return{stateText:"--",unitText:"",isPlaceholder:!0};let s=Number.parseFloat(r),o=this.getUnit(e);return Number.isNaN(s)?{stateText:r,unitText:o,isPlaceholder:!1}:{stateText:new Intl.NumberFormat(void 0,{minimumFractionDigits:1,maximumFractionDigits:1}).format(s),unitText:o,isPlaceholder:!1}}getUnit(t){let e=t.attributes.unit_of_measurement;return typeof e=="string"&&e.trim()?e:"\xB0C"}static get styles(){return G`
      :host {
        display: block;
      }

      ha-card {
        border-radius: 18px;
        overflow: hidden;
      }

      .card-shell {
        display: grid;
        grid-template-rows: auto 1fr;
        gap: 18px;
        padding: 18px;
        background: var(--card-background-color, #fff);
      }

      .heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .title {
        margin: 0;
        font-size: 1.2em;
        font-weight: 600;
        color: var(--primary-text-color, #212121);
      }

      .body {
        display: flex;
        justify-content: center;
      }

      .fridge {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      .fridge-photo-frame {
        position: relative;
        border-radius: 18px 18px 12px 12px;
        background: var(--card-background-color, #fff);
        box-shadow:
          0 1px 3px rgba(0, 0, 0, 0.08),
          0 4px 12px rgba(0, 0, 0, 0.06);
        overflow: hidden;
      }

      .fridge-svg {
        display: block;
        width: 100%;
        height: 100%;
      }

      .readings {
        position: absolute;
        inset: 0;
      }

      .reading {
        position: absolute;
        transform: translate(-50%, -50%);
        text-align: center;
        padding: 6px 10px;
        border-radius: 10px;
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        background: rgba(255, 255, 255, 0.55);
        border: 1px solid rgba(255, 255, 255, 0.3);
        pointer-events: none;
      }

      .section-label {
        margin: 0 0 2px;
        font-size: 0.6em;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        opacity: 0.7;
      }

      .zone-freezer .section-label {
        color: #0f3f75;
      }

      .zone-fridge .section-label {
        color: #125b6d;
      }

      .temperature {
        font-size: 1.1em;
        font-weight: 700;
        line-height: 1.2;
      }

      .zone-freezer .temperature {
        color: #0f3f75;
      }

      .zone-fridge .temperature {
        color: #125b6d;
      }

      .temperature .unit {
        font-size: 0.65em;
        font-weight: 500;
        margin-left: 1px;
      }

      .temperature.placeholder {
        opacity: 0.35;
      }
    `}};lt=mt(ue),M=xt(lt,0,"HaFridgeCard",Ot,M),yt(lt,1,M);customElements.get(D)||customElements.define(D,M);window.customCards=window.customCards??[];window.customCards.some(i=>i.type===D)||window.customCards.push({type:D,name:"HA Fridge Card",description:"Fridge and freezer temperatures with multiple fridge layout options.",preview:!0});})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
