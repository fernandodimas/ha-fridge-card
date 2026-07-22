/* ha-fridge-card v1.6.0 */
"use strict";(()=>{var Fe=Object.create;var K=Object.defineProperty;var Be=Object.getOwnPropertyDescriptor;var me=(i,e)=>(e=Symbol[i])?e:Symbol.for("Symbol."+i),O=i=>{throw TypeError(i)};var je=(i,e,t)=>e in i?K(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ue=(i,e)=>K(i,"name",{value:e,configurable:!0});var ge=i=>[,,,Fe(i?.[me("metadata")]??null)],$e=["class","method","getter","setter","accessor","field","value","get","set"],H=i=>i!==void 0&&typeof i!="function"?O("Function expected"):i,Ie=(i,e,t,s,r)=>({kind:$e[i],name:e,metadata:s,addInitializer:n=>t._?O("Already initialized"):r.push(H(n||null))}),qe=(i,e)=>je(e,me("metadata"),i[3]),_e=(i,e,t,s)=>{for(var r=0,n=i[e>>1],o=n&&n.length;r<o;r++)e&1?n[r].call(t):s=n[r].call(t,s);return s},ye=(i,e,t,s,r,n)=>{var o,c,h,u,p,a=e&7,$=!!(e&8),l=!!(e&16),d=a>3?i.length+1:a?$?1:2:0,g=$e[a+5],b=a>3&&(i[d-1]=[]),ke=i[d]||(i[d]=[]),y=a&&(!l&&!$&&(r=r.prototype),a<5&&(a>3||!l)&&Be(a<4?r:{get[t](){return pe(this,n)},set[t](_){return fe(this,n,_)}},t));a?l&&a<4&&ue(n,(a>2?"set ":a>1?"get ":"")+t):ue(r,t);for(var W=s.length-1;W>=0;W--)u=Ie(a,t,h={},i[3],ke),a&&(u.static=$,u.private=l,p=u.access={has:l?_=>Ve(r,_):_=>t in _},a^3&&(p.get=l?_=>(a^1?pe:Ye)(_,r,a^4?n:y.get):_=>_[t]),a>2&&(p.set=l?(_,Z)=>fe(_,r,Z,a^4?n:y.set):(_,Z)=>_[t]=Z)),c=(0,s[W])(a?a<4?l?n:y[g]:a>4?void 0:{get:y.get,set:y.set}:r,u),h._=1,a^4||c===void 0?H(c)&&(a>4?b.unshift(c):a?l?n=c:y[g]=c:r=c):typeof c!="object"||c===null?O("Object expected"):(H(o=c.get)&&(y.get=o),H(o=c.set)&&(y.set=o),H(o=c.init)&&b.unshift(o));return a||qe(i,r),y&&K(r,t,y),l?a^4?n:y:r};var G=(i,e,t)=>e.has(i)||O("Cannot "+t),Ve=(i,e)=>Object(e)!==e?O('Cannot use the "in" operator on this value'):i.has(e),pe=(i,e,t)=>(G(i,e,"read from private field"),t?t.call(i):e.get(i));var fe=(i,e,t,s)=>(G(i,e,"write to private field"),s?s.call(i,t):e.set(i,t),t),Ye=(i,e,t)=>(G(i,e,"access private method"),t);var B=globalThis,j=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),be=new WeakMap,U=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(j&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=be.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&be.set(t,e))}return e}toString(){return this.cssText}},ve=i=>new U(typeof i=="string"?i:i+"",void 0,J),X=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new U(t,i,J)},xe=(i,e)=>{if(j)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),r=B.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},Q=j?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return ve(t)})(i):i;var{is:We,defineProperty:Ze,getOwnPropertyDescriptor:Ke,getOwnPropertyNames:Ge,getOwnPropertySymbols:Je,getPrototypeOf:Xe}=Object,q=globalThis,Ae=q.trustedTypes,Qe=Ae?Ae.emptyScript:"",et=q.reactiveElementPolyfillSupport,R=(i,e)=>i,I={toAttribute(i,e){switch(e){case Boolean:i=i?Qe:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ee=(i,e)=>!We(i,e),we={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:ee};Symbol.metadata??=Symbol("metadata"),q.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=we){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Ze(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){let{get:r,set:n}=Ke(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:r,set(o){let c=r?.call(this);n?.call(this,o),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??we}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;let e=Xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){let t=this.properties,s=[...Ge(t),...Je(t)];for(let r of s)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)t.unshift(Q(r))}else e!==void 0&&t.push(Q(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:I).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let n=s.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:I;this._$Em=r;let c=o.fromAttribute(t,n.type);this[r]=c??this._$Ej?.get(r)??c,this._$Em=null}}requestUpdate(e,t,s,r=!1,n){if(e!==void 0){let o=this.constructor;if(r===!1&&(n=this[e]),s??=o.getPropertyOptions(e),!((s.hasChanged??ee)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:n},o){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,n]of s){let{wrapped:o}=n,c=this[r];o!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,n,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[R("elementProperties")]=new Map,v[R("finalized")]=new Map,et?.({ReactiveElement:v}),(q.reactiveElementVersions??=[]).push("2.1.2");var ae=globalThis,Ee=i=>i,V=ae.trustedTypes,Se=V?V.createPolicy("lit-html",{createHTML:i=>i}):void 0,He="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,Oe="?"+x,tt=`<${Oe}>`,S=document,N=()=>S.createComment(""),L=i=>i===null||typeof i!="object"&&typeof i!="function",le=Array.isArray,st=i=>le(i)||typeof i?.[Symbol.iterator]=="function",te=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ce=/-->/g,Me=/>/g,w=RegExp(`>|${te}(?:([^\\s"'>=/]+)(${te}*=${te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pe=/'/g,Te=/"/g,Ue=/^(?:script|style|textarea|title)$/i,he=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),m=he(1),_t=he(2),yt=he(3),C=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ze=new WeakMap,E=S.createTreeWalker(S,129);function Re(i,e){if(!le(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Se!==void 0?Se.createHTML(e):e}var rt=(i,e)=>{let t=i.length-1,s=[],r,n=e===2?"<svg>":e===3?"<math>":"",o=D;for(let c=0;c<t;c++){let h=i[c],u,p,a=-1,$=0;for(;$<h.length&&(o.lastIndex=$,p=o.exec(h),p!==null);)$=o.lastIndex,o===D?p[1]==="!--"?o=Ce:p[1]!==void 0?o=Me:p[2]!==void 0?(Ue.test(p[2])&&(r=RegExp("</"+p[2],"g")),o=w):p[3]!==void 0&&(o=w):o===w?p[0]===">"?(o=r??D,a=-1):p[1]===void 0?a=-2:(a=o.lastIndex-p[2].length,u=p[1],o=p[3]===void 0?w:p[3]==='"'?Te:Pe):o===Te||o===Pe?o=w:o===Ce||o===Me?o=D:(o=w,r=void 0);let l=o===w&&i[c+1].startsWith("/>")?" ":"";n+=o===D?h+tt:a>=0?(s.push(u),h.slice(0,a)+He+h.slice(a)+x+l):h+x+(a===-2?c:l)}return[Re(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},k=class i{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let n=0,o=0,c=e.length-1,h=this.parts,[u,p]=rt(e,t);if(this.el=i.createElement(u,s),E.currentNode=this.el.content,t===2||t===3){let a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(r=E.nextNode())!==null&&h.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(let a of r.getAttributeNames())if(a.endsWith(He)){let $=p[o++],l=r.getAttribute(a).split(x),d=/([.?@])?(.*)/.exec($);h.push({type:1,index:n,name:d[2],strings:l,ctor:d[1]==="."?re:d[1]==="?"?ie:d[1]==="@"?ne:P}),r.removeAttribute(a)}else a.startsWith(x)&&(h.push({type:6,index:n}),r.removeAttribute(a));if(Ue.test(r.tagName)){let a=r.textContent.split(x),$=a.length-1;if($>0){r.textContent=V?V.emptyScript:"";for(let l=0;l<$;l++)r.append(a[l],N()),E.nextNode(),h.push({type:2,index:++n});r.append(a[$],N())}}}else if(r.nodeType===8)if(r.data===Oe)h.push({type:2,index:n});else{let a=-1;for(;(a=r.data.indexOf(x,a+1))!==-1;)h.push({type:7,index:n}),a+=x.length-1}n++}}static createElement(e,t){let s=S.createElement("template");return s.innerHTML=e,s}};function M(i,e,t=i,s){if(e===C)return e;let r=s!==void 0?t._$Co?.[s]:t._$Cl,n=L(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,t,s)),s!==void 0?(t._$Co??=[])[s]=r:t._$Cl=r),r!==void 0&&(e=M(i,r._$AS(i,e.values),r,s)),e}var se=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,r=(e?.creationScope??S).importNode(t,!0);E.currentNode=r;let n=E.nextNode(),o=0,c=0,h=s[0];for(;h!==void 0;){if(o===h.index){let u;h.type===2?u=new F(n,n.nextSibling,this,e):h.type===1?u=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(u=new oe(n,this,e)),this._$AV.push(u),h=s[++c]}o!==h?.index&&(n=E.nextNode(),o++)}return E.currentNode=S,r}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},F=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),L(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):st(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=k.createElement(Re(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(t);else{let n=new se(r,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=ze.get(e.strings);return t===void 0&&ze.set(e.strings,t=new k(e)),t}k(e){le(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,r=0;for(let n of e)r===t.length?t.push(s=new i(this.O(N()),this.O(N()),this,this.options)):s=t[r],s._$AI(n),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=Ee(e).nextSibling;Ee(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},P=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(e,t=this,s,r){let n=this.strings,o=!1;if(n===void 0)e=M(this,e,t,0),o=!L(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{let c=e,h,u;for(e=n[0],h=0;h<n.length-1;h++)u=M(this,c[s+h],t,h),u===C&&(u=this._$AH[h]),o||=!L(u)||u!==this._$AH[h],u===f?e=f:e!==f&&(e+=(u??"")+n[h+1]),this._$AH[h]=u}o&&!r&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},re=class extends P{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}},ie=class extends P{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}},ne=class extends P{constructor(e,t,s,r,n){super(e,t,s,r,n),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??f)===C)return;let s=this._$AH,r=e===f&&s!==f||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==f&&(s===f||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},oe=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}};var it=ae.litHtmlPolyfillSupport;it?.(k,F),(ae.litHtmlVersions??=[]).push("3.3.3");var De=(i,e,t)=>{let s=t?.renderBefore??e,r=s._$litPart$;if(r===void 0){let n=t?.renderBefore??null;s._$litPart$=r=new F(e.insertBefore(N(),n),n,void 0,t??{})}return r._$AI(i),r};var ce=globalThis,A=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};A._$litElement$=!0,A.finalized=!0,ce.litElementHydrateSupport?.({LitElement:A});var nt=ce.litElementPolyfillSupport;nt?.({LitElement:A});(ce.litElementVersions??=[]).push("4.2.2");var Ne=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};var z="ha-fridge-card",ot=new Set(["unknown","unavailable","none"]),at=192,lt=387,ht=["default","freezer","inverted","french_door","dual_door"];function ct(i,e){let r=e/100;switch(i){case"freezer":return{freezer:{x:16,y:12,width:160,height:365}};case"default":return{freezer:{x:16,y:12,width:160,height:Math.round(365*r)},fridge:{x:16,y:12+Math.round(365*r)+2,width:160,height:Math.round(365*(1-r))-2}};case"inverted":case"french_door":return{fridge:{x:16,y:12,width:160,height:Math.round(365*(1-r))-2},freezer:{x:16,y:12+Math.round(365*(1-r)),width:160,height:Math.round(365*r)}};case"dual_door":{let n=Math.round(160*r);return{freezer:{x:12,y:12,width:n,height:365},fridge:{x:12+n+4,y:12,width:160-n,height:365}}}default:return{}}}function dt(i,e,t){let s=e/100,r=365,n=12,o=(l,d,g,b)=>m`<rect x="${l}" y="${d}" width="${g}" height="${b}" rx="8" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1" />`,c=(l,d,g,b)=>m`<rect x="${l}" y="${d}" width="${g}" height="${b}" rx="6" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />`,h=(l,d)=>m`<rect x="${l}" y="${d}" width="4" height="36" rx="2" fill="#B0B8C4" />`,u=l=>m`<rect x="14" y="${l}" width="164" height="2" rx="1" fill="#D6DCE4" />`,p=l=>m`<rect x="${l}" y="${n}" width="2" height="${r}" rx="1" fill="#D6DCE4" />`,a=m`
    <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
    <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />`,$=(l,d)=>m`
    <rect x="${l}" y="${d}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
    <rect x="${l+4}" y="${d+4}" width="32" height="20" rx="3" fill="#2C2C3A" />
    <rect x="${l+14}" y="${d+28}" width="12" height="14" rx="2" fill="#8A919A" />
    <rect x="${l+10}" y="${d+44}" width="20" height="5" rx="2" fill="#A0A8B4" />`;switch(i){case"freezer":return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${o(4,4,184,379)}
        ${c(16,n,160,r)}
        ${h(24,n+Math.round(r/2)-18)}
        ${a}
        ${t?$(76,n+Math.round(r/2)-26):m``}
      </svg>`;case"default":{let l=Math.round(r*s),d=Math.round(r*(1-s))-2,g=n+l;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${o(4,4,184,379)}
        ${c(16,n,160,l)}
        ${h(24,n+Math.round(l/2)-18)}
        ${u(g)}
        ${c(16,g+2,160,d)}
        ${h(24,g+2+Math.round(d/2)-18)}
        ${a}
        ${t?$(76,g+2+Math.round(d/2)-26):m``}
      </svg>`}case"inverted":{let l=Math.round(r*(1-s))-2,d=Math.round(r*s),g=n+l;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${o(4,4,184,379)}
        ${c(16,n,160,l)}
        ${h(24,n+Math.round(l/2)-18)}
        ${t?$(76,n+Math.round(l/2)-26):m``}
        ${u(g)}
        ${c(16,g+2,160,d)}
        ${h(24,g+2+Math.round(d/2)-18)}
        ${a}
      </svg>`}case"french_door":{let l=Math.round(r*(1-s))-2,d=Math.round(r*s),g=n+l,b=78;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${o(4,4,184,379)}
        ${c(16,n,b,l)}
        ${h(80,n+Math.round(l/2)-18)}
        ${t?$(16+Math.round(b/2)-20,n+Math.round(l/2)-26):m``}
        ${p(96)}
        ${c(98,n,b,l)}
        ${h(162,n+Math.round(l/2)-18)}
        ${u(g)}
        ${c(16,g+2,160,d)}
        ${h(24,g+2+Math.round(d/2)-18)}
        ${a}
      </svg>`}case"dual_door":{let l=Math.round(160*s),d=160-l,g=12+l+4;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${o(4,4,184,379)}
        ${c(12,n,l,r)}
        ${h(12+Math.round(l/2)-2,n+Math.round(r/2)-18)}
        ${t?$(12+Math.round(l/2)-20,n+40):m``}
        ${p(g-2)}
        ${c(g,n,d,r)}
        ${h(g+Math.round(d/2)-2,n+Math.round(r/2)-18)}
        ${a}
      </svg>`}default:return m``}}var Le,de,ut;Le=[Ne(z)];var T=class extends(ut=A){_config;_hass;static getConfigForm(){return{schema:[{name:"title",selector:{text:{}}},{name:"show_title",selector:{select:{mode:"dropdown",options:[{value:"true",label:"Yes"},{value:"false",label:"No"}]}}},{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Freezer on top"},{value:"inverted",label:"Fridge on top"},{value:"dual_door",label:"Side by side"},{value:"french_door",label:"French door"},{value:"freezer",label:"Freezer only"}]}}},{name:"freezer_entity",selector:{entity:{domain:"sensor"}}},{name:"fridge_entity",selector:{entity:{domain:"sensor"}}},{name:"freezer_label",selector:{text:{}}},{name:"fridge_label",selector:{text:{}}},{name:"show_dispenser",selector:{select:{mode:"dropdown",options:[{value:"true",label:"Yes"},{value:"false",label:"No"}]}}},{name:"split_ratio",selector:{number:{min:20,max:80,step:1,mode:"slider",unit_of_measurement:"%"}}},{name:"card_width",selector:{number:{min:100,max:400,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"card_height",selector:{number:{min:200,max:600,step:10,mode:"slider",unit_of_measurement:"px"}}}],computeLabel:e=>{switch(e.name){case"title":return"Title";case"show_title":return"Show title";case"layout":return"Layout";case"freezer_entity":return"Freezer sensor";case"fridge_entity":return"Fridge sensor";case"freezer_label":return"Freezer label";case"fridge_label":return"Fridge label";case"show_dispenser":return"Show ice dispenser";case"split_ratio":return"Freezer / Fridge ratio";case"card_width":return"Width";case"card_height":return"Height";default:return}}}}getStubConfig(){return{type:`custom:${z}`,freezer_entity:"sensor.freezer_temperature",fridge_entity:"sensor.fridge_temperature",title:"Fridge",layout:"default"}}setConfig(e){let t=this.normalizeLayout(e.layout);this._config={title:"Fridge",...e,layout:t}}set hass(e){this._hass=e,this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 4}getGridOptions(){return{columns:6,rows:4,min_columns:4}}render(){if(!this._config)return f;let e=this.normalizeLayout(this._config.layout),t=this._config.split_ratio??30,s=ct(e,t),r=this._config.show_title!=="false",n=this._config.show_dispenser==="true",o=!0,c=!!s.fridge,h=this.getDisplayState(this._config.freezer_entity),u=c?this.getDisplayState(this._config.fridge_entity):null,p=this.cardLabel(o,c),a=this._config.freezer_label||"Freezer",$=this._config.fridge_label||"Fridge",l=this._config.card_width||230,d=this._config.card_height||387;return m`
      <ha-card>
        <div class="card-shell">
          ${r?m`
            <div class="heading">
              <h3 class="title">${this._config.title}</h3>
            </div>
          `:f}
          <div class="body">
            <div class="fridge layout-${e}" role="img" aria-label=${p}>
              <div class="fridge-photo-frame" style="width:${l}px;height:${d}px;">
                ${dt(e,t,n)}
                <div class="readings">
                  ${o&&s.freezer?m`
                        <section class="reading zone-freezer"
                          style=${this.readingStyle(s.freezer)}>
                          <p class="section-label">${a}</p>
                          <div class=${this.temperatureClass(h)}>
                            <span>${h.stateText}</span>
                            ${h.unitText?m`<span class="unit">${h.unitText}</span>`:f}
                          </div>
                        </section>
                      `:f}
                  ${c&&s.fridge?m`
                        <section class="reading zone-fridge"
                          style=${this.readingStyle(s.fridge)}>
                          <p class="section-label">${$}</p>
                          <div class=${this.temperatureClass(u)}>
                            <span>${u.stateText}</span>
                            ${u.unitText?m`<span class="unit">${u.unitText}</span>`:f}
                          </div>
                        </section>
                      `:f}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `}temperatureClass(e){return e.isPlaceholder?"temperature placeholder":"temperature"}cardLabel(e,t){return e&&t?"Fridge and freezer temperatures":e?"Freezer temperature":"Fridge temperature"}normalizeLayout(e){return e&&ht.includes(e)?e:"default"}readingStyle(e){let t=(e.x+e.width/2)/at*100,s=(e.y+e.height/2)/lt*100;return`left:${t}%;top:${s}%;`}getDisplayState(e){if(!e)return{stateText:"--",unitText:"\xB0C",isPlaceholder:!0};let t=this._hass?.states?.[e];if(!t)return{stateText:"--",unitText:"",isPlaceholder:!0};let s=t.state?.trim();if(!s||ot.has(s.toLowerCase()))return{stateText:"--",unitText:"",isPlaceholder:!0};let r=Number.parseFloat(s),n=this.getUnit(t);return Number.isNaN(r)?{stateText:s,unitText:n,isPlaceholder:!1}:{stateText:new Intl.NumberFormat(void 0,{minimumFractionDigits:1,maximumFractionDigits:1}).format(r),unitText:n,isPlaceholder:!1}}getUnit(e){let t=e.attributes.unit_of_measurement;return typeof t=="string"&&t.trim()?t:"\xB0C"}static get styles(){return X`
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
    `}};de=ge(ut),T=ye(de,0,"HaFridgeCard",Le,T),_e(de,1,T);customElements.get(z)||customElements.define(z,T);window.customCards=window.customCards??[];window.customCards.some(i=>i.type===z)||window.customCards.push({type:z,name:"HA Fridge Card",description:"Fridge and freezer temperatures with multiple fridge layout options.",preview:!0});})();
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
