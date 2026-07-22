"use strict";(()=>{var De=Object.create;var Y=Object.defineProperty;var Be=Object.getOwnPropertyDescriptor;var ge=(i,e)=>(e=Symbol[i])?e:Symbol.for("Symbol."+i),z=i=>{throw TypeError(i)};var je=(i,e,t)=>e in i?Y(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ue=(i,e)=>Y(i,"name",{value:e,configurable:!0});var me=i=>[,,,De(i?.[ge("metadata")]??null)],$e=["class","method","getter","setter","accessor","field","value","get","set"],T=i=>i!==void 0&&typeof i!="function"?z("Function expected"):i,qe=(i,e,t,s,r)=>({kind:$e[i],name:e,metadata:s,addInitializer:n=>t._?z("Already initialized"):r.push(T(n||null))}),Ie=(i,e)=>je(e,ge("metadata"),i[3]),_e=(i,e,t,s)=>{for(var r=0,n=i[e>>1],a=n&&n.length;r<a;r++)e&1?n[r].call(t):s=n[r].call(t,s);return s},ye=(i,e,t,s,r,n)=>{var a,h,l,u,p,o=e&7,d=!!(e&8),c=!!(e&16),g=o>3?i.length+1:o?d?1:2:0,ce=$e[o+5],de=o>3&&(i[g-1]=[]),ke=i[g]||(i[g]=[]),_=o&&(!c&&!d&&(r=r.prototype),o<5&&(o>3||!c)&&Be(o<4?r:{get[t](){return pe(this,n)},set[t]($){return fe(this,n,$)}},t));o?c&&o<4&&ue(n,(o>2?"set ":o>1?"get ":"")+t):ue(r,t);for(var W=s.length-1;W>=0;W--)u=qe(o,t,l={},i[3],ke),o&&(u.static=d,u.private=c,p=u.access={has:c?$=>We(r,$):$=>t in $},o^3&&(p.get=c?$=>(o^1?pe:Ve)($,r,o^4?n:_.get):$=>$[t]),o>2&&(p.set=c?($,V)=>fe($,r,V,o^4?n:_.set):($,V)=>$[t]=V)),h=(0,s[W])(o?o<4?c?n:_[ce]:o>4?void 0:{get:_.get,set:_.set}:r,u),l._=1,o^4||h===void 0?T(h)&&(o>4?de.unshift(h):o?c?n=h:_[ce]=h:r=h):typeof h!="object"||h===null?z("Object expected"):(T(a=h.get)&&(_.get=a),T(a=h.set)&&(_.set=a),T(a=h.init)&&de.unshift(a));return o||Ie(i,r),_&&Y(r,t,_),c?o^4?n:_:r};var Z=(i,e,t)=>e.has(i)||z("Cannot "+t),We=(i,e)=>Object(e)!==e?z('Cannot use the "in" operator on this value'):i.has(e),pe=(i,e,t)=>(Z(i,e,"read from private field"),t?t.call(i):e.get(i));var fe=(i,e,t,s)=>(Z(i,e,"write to private field"),s?s.call(i,t):e.set(i,t),t),Ve=(i,e,t)=>(Z(i,e,"access private method"),t);var k=globalThis,D=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),be=new WeakMap,F=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(D&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=be.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&be.set(t,e))}return e}toString(){return this.cssText}},ve=i=>new F(typeof i=="string"?i:i+"",void 0,K),G=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((s,r,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new F(t,i,K)},xe=(i,e)=>{if(D)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),r=k.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},J=D?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return ve(t)})(i):i;var{is:Ye,defineProperty:Ze,getOwnPropertyDescriptor:Ke,getOwnPropertyNames:Ge,getOwnPropertySymbols:Je,getPrototypeOf:Xe}=Object,j=globalThis,Ae=j.trustedTypes,Qe=Ae?Ae.emptyScript:"",et=j.reactiveElementPolyfillSupport,U=(i,e)=>i,B={toAttribute(i,e){switch(e){case Boolean:i=i?Qe:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},X=(i,e)=>!Ye(i,e),we={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=we){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Ze(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){let{get:r,set:n}=Ke(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){let h=r?.call(this);n?.call(this,a),this.requestUpdate(e,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??we}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let e=Xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let t=this.properties,s=[...Ge(t),...Je(t)];for(let r of s)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)t.unshift(J(r))}else e!==void 0&&t.push(J(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:B).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let n=s.getPropertyOptions(r),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:B;this._$Em=r;let h=a.fromAttribute(t,n.type);this[r]=h??this._$Ej?.get(r)??h,this._$Em=null}}requestUpdate(e,t,s,r=!1,n){if(e!==void 0){let a=this.constructor;if(r===!1&&(n=this[e]),s??=a.getPropertyOptions(e),!((s.hasChanged??X)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:n},a){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,n]of s){let{wrapped:a}=n,h=this[r];a!==!0||this._$AL.has(r)||h===void 0||this.C(r,void 0,n,h)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[U("elementProperties")]=new Map,y[U("finalized")]=new Map,et?.({ReactiveElement:y}),(j.reactiveElementVersions??=[]).push("2.1.2");var ne=globalThis,Se=i=>i,q=ne.trustedTypes,Ee=q?q.createPolicy("lit-html",{createHTML:i=>i}):void 0,Fe="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,Ue="?"+b,tt=`<${Ue}>`,w=document,O=()=>w.createComment(""),R=i=>i===null||typeof i!="object"&&typeof i!="function",oe=Array.isArray,st=i=>oe(i)||typeof i?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ce=/-->/g,Me=/>/g,x=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pe=/'/g,Te=/"/g,He=/^(?:script|style|textarea|title)$/i,ae=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),m=ae(1),_t=ae(2),yt=ae(3),S=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ze=new WeakMap,A=w.createTreeWalker(w,129);function Oe(i,e){if(!oe(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ee!==void 0?Ee.createHTML(e):e}var rt=(i,e)=>{let t=i.length-1,s=[],r,n=e===2?"<svg>":e===3?"<math>":"",a=H;for(let h=0;h<t;h++){let l=i[h],u,p,o=-1,d=0;for(;d<l.length&&(a.lastIndex=d,p=a.exec(l),p!==null);)d=a.lastIndex,a===H?p[1]==="!--"?a=Ce:p[1]!==void 0?a=Me:p[2]!==void 0?(He.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=x):p[3]!==void 0&&(a=x):a===x?p[0]===">"?(a=r??H,o=-1):p[1]===void 0?o=-2:(o=a.lastIndex-p[2].length,u=p[1],a=p[3]===void 0?x:p[3]==='"'?Te:Pe):a===Te||a===Pe?a=x:a===Ce||a===Me?a=H:(a=x,r=void 0);let c=a===x&&i[h+1].startsWith("/>")?" ":"";n+=a===H?l+tt:o>=0?(s.push(u),l.slice(0,o)+Fe+l.slice(o)+b+c):l+b+(o===-2?h:c)}return[Oe(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},N=class i{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let n=0,a=0,h=e.length-1,l=this.parts,[u,p]=rt(e,t);if(this.el=i.createElement(u,s),A.currentNode=this.el.content,t===2||t===3){let o=this.el.content.firstChild;o.replaceWith(...o.childNodes)}for(;(r=A.nextNode())!==null&&l.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(let o of r.getAttributeNames())if(o.endsWith(Fe)){let d=p[a++],c=r.getAttribute(o).split(b),g=/([.?@])?(.*)/.exec(d);l.push({type:1,index:n,name:g[2],strings:c,ctor:g[1]==="."?te:g[1]==="?"?se:g[1]==="@"?re:C}),r.removeAttribute(o)}else o.startsWith(b)&&(l.push({type:6,index:n}),r.removeAttribute(o));if(He.test(r.tagName)){let o=r.textContent.split(b),d=o.length-1;if(d>0){r.textContent=q?q.emptyScript:"";for(let c=0;c<d;c++)r.append(o[c],O()),A.nextNode(),l.push({type:2,index:++n});r.append(o[d],O())}}}else if(r.nodeType===8)if(r.data===Ue)l.push({type:2,index:n});else{let o=-1;for(;(o=r.data.indexOf(b,o+1))!==-1;)l.push({type:7,index:n}),o+=b.length-1}n++}}static createElement(e,t){let s=w.createElement("template");return s.innerHTML=e,s}};function E(i,e,t=i,s){if(e===S)return e;let r=s!==void 0?t._$Co?.[s]:t._$Cl,n=R(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,t,s)),s!==void 0?(t._$Co??=[])[s]=r:t._$Cl=r),r!==void 0&&(e=E(i,r._$AS(i,e.values),r,s)),e}var ee=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,r=(e?.creationScope??w).importNode(t,!0);A.currentNode=r;let n=A.nextNode(),a=0,h=0,l=s[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new L(n,n.nextSibling,this,e):l.type===1?u=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(u=new ie(n,this,e)),this._$AV.push(u),l=s[++h]}a!==l?.index&&(n=A.nextNode(),a++)}return A.currentNode=w,r}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},L=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),R(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):st(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=N.createElement(Oe(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(t);else{let n=new ee(r,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=ze.get(e.strings);return t===void 0&&ze.set(e.strings,t=new N(e)),t}k(e){oe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,r=0;for(let n of e)r===t.length?t.push(s=new i(this.O(O()),this.O(O()),this,this.options)):s=t[r],s._$AI(n),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=Se(e).nextSibling;Se(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},C=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(e,t=this,s,r){let n=this.strings,a=!1;if(n===void 0)e=E(this,e,t,0),a=!R(e)||e!==this._$AH&&e!==S,a&&(this._$AH=e);else{let h=e,l,u;for(e=n[0],l=0;l<n.length-1;l++)u=E(this,h[s+l],t,l),u===S&&(u=this._$AH[l]),a||=!R(u)||u!==this._$AH[l],u===f?e=f:e!==f&&(e+=(u??"")+n[l+1]),this._$AH[l]=u}a&&!r&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},te=class extends C{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}},se=class extends C{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}},re=class extends C{constructor(e,t,s,r,n){super(e,t,s,r,n),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??f)===S)return;let s=this._$AH,r=e===f&&s!==f||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==f&&(s===f||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ie=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}};var it=ne.litHtmlPolyfillSupport;it?.(N,L),(ne.litHtmlVersions??=[]).push("3.3.3");var Re=(i,e,t)=>{let s=t?.renderBefore??e,r=s._$litPart$;if(r===void 0){let n=t?.renderBefore??null;s._$litPart$=r=new L(e.insertBefore(O(),n),n,void 0,t??{})}return r._$AI(i),r};var he=globalThis,v=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Re(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};v._$litElement$=!0,v.finalized=!0,he.litElementHydrateSupport?.({LitElement:v});var nt=he.litElementPolyfillSupport;nt?.({LitElement:v});(he.litElementVersions??=[]).push("4.2.2");var Ne=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};var P="ha-fridge-card",ot=new Set(["unknown","unavailable","none"]),at=192,ht=387,lt=["default","freezer","inverted","french_door","dual_door"];function ct(i,e){let r=e/100;switch(i){case"freezer":return{freezer:{x:10,y:8,width:172,height:371}};case"default":return{freezer:{x:10,y:8,width:172,height:Math.round(371*r)},fridge:{x:10,y:8+Math.round(371*r)+4,width:172,height:Math.round(371*(1-r))-4}};case"inverted":case"french_door":return{fridge:{x:10,y:8,width:172,height:Math.round(371*(1-r))-4},freezer:{x:10,y:8+Math.round(371*(1-r)),width:172,height:Math.round(371*r)}};case"dual_door":{let n=Math.round(172*r);return{freezer:{x:8,y:8,width:n,height:371},fridge:{x:8+n+2,y:8,width:172-n-2,height:371}}}default:return{}}}function dt(i,e,t){let s=e/100,r=371,n=8,a=m`<rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />`,h=(o,d)=>m`<rect x="${o}" y="${d}" width="6" height="48" rx="3" fill="#B8C2CC" />`,l=(o,d,c,g)=>m`<line x1="${o}" y1="${d}" x2="${c}" y2="${g}" stroke="#BCC5CF" stroke-width="1.5" />`,p=t?(o,d)=>m`
    <rect x="${o}" y="${d}" width="36" height="46" rx="4" fill="#D0D5DC" />
    <rect x="${o+4}" y="${d+4}" width="28" height="18" rx="3" fill="#1a1a2e" />
    <rect x="${o+13}" y="${d+26}" width="10" height="14" rx="2" fill="#8A919A" />
    <rect x="${o+10}" y="${d+40}" width="16" height="4" rx="2" fill="#B8C2CC" />`:()=>m``;switch(i){case"freezer":{let o=r,d=10+Math.round(172/2)-18;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="10" y="${n}" width="172" height="${o}" rx="10" fill="#F4F6F8" />
        ${h(26,n+Math.round(o/2)+30)}
        ${p(d,n+Math.round(o/2)-46)}
      </svg>`}case"default":{let o=Math.round(r*s),d=Math.round(r*(1-s))-4,c=n+o,g=10+Math.round(172/2)-18;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="10" y="${n}" width="172" height="${o}" rx="10" fill="#F4F6F8" />
        ${h(26,n+Math.round(o/2)-24)}
        ${l(10,c,182,c)}
        <rect x="10" y="${c+4}" width="172" height="${d}" rx="10" fill="#F7F9FB" />
        ${h(26,c+4+Math.round(d/2)-30)}
        ${p(g,c+4+Math.round(d/2)-23)}
      </svg>`}case"inverted":{let o=Math.round(r*(1-s))-4,d=Math.round(r*s),c=n+o,g=10+Math.round(172/2)-18;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="10" y="${n}" width="172" height="${o}" rx="10" fill="#F7F9FB" />
        ${h(26,n+Math.round(o/2)-30)}
        ${p(g,n+Math.round(o/2)-23)}
        ${l(10,c,182,c)}
        <rect x="10" y="${c+4}" width="172" height="${d}" rx="10" fill="#F4F6F8" />
        ${h(26,c+4+Math.round(d/2)-24)}
      </svg>`}case"french_door":{let o=Math.round(r*(1-s))-4,d=Math.round(r*s),c=n+o,g=82;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="10" y="${n}" width="${g}" height="${o}" rx="10" fill="#F7F9FB" />
        ${h(80,n+Math.round(o/2)-24)}
        ${p(10+Math.round(g/2)-18,n+Math.round(o/2)-23)}
        <rect x="${10+g+8}" y="${n}" width="${g}" height="${o}" rx="10" fill="#F7F9FB" />
        ${h(10+g+6,n+Math.round(o/2)-24)}
        ${l(10,c,182,c)}
        <rect x="10" y="${c+4}" width="172" height="${d}" rx="10" fill="#F4F6F8" />
        ${h(26,c+4+Math.round(d/2)-24)}
      </svg>`}case"dual_door":{let o=Math.round(172*s),d=172-o-2,c=8+o+2;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="8" y="${n}" width="${o}" height="${r}" rx="10" fill="#F4F6F8" />
        ${h(8+Math.round(o/2)-3,n+Math.round(r/2)+40)}
        ${p(8+Math.round(o/2)-18,n+40)}
        ${l(c-1,n,c-1,n+r)}
        <rect x="${c}" y="${n}" width="${d}" height="${r}" rx="10" fill="#F7F9FB" />
        ${h(c+Math.round(d/2)-3,n+Math.round(r/2)-25)}
      </svg>`}default:return m``}}var Le,le,ut;Le=[Ne(P)];var M=class extends(ut=v){_config;_hass;static getConfigForm(){return{schema:[{name:"title",selector:{text:{}}},{name:"show_title",selector:{boolean:{}}},{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Freezer on top"},{value:"inverted",label:"Fridge on top"},{value:"dual_door",label:"Side by side (40/60)"},{value:"french_door",label:"French door"},{value:"freezer",label:"Freezer only"}]}}},{name:"freezer_entity",selector:{entity:{domain:"sensor"}}},{name:"fridge_entity",selector:{entity:{domain:"sensor"}}},{name:"freezer_label",selector:{text:{}}},{name:"fridge_label",selector:{text:{}}},{name:"show_dispenser",selector:{boolean:{}}},{name:"split_ratio",selector:{number:{min:20,max:80,step:1,mode:"slider",unit_of_measurement:"%"}}},{name:"card_width",selector:{number:{min:100,max:400,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"card_height",selector:{number:{min:200,max:600,step:10,mode:"slider",unit_of_measurement:"px"}}}],computeLabel:e=>{switch(e.name){case"title":return"Title";case"show_title":return"Show title";case"layout":return"Layout";case"freezer_entity":return"Freezer sensor";case"fridge_entity":return"Fridge sensor";case"freezer_label":return"Freezer label";case"fridge_label":return"Fridge label";case"show_dispenser":return"Show ice dispenser";case"split_ratio":return"Freezer / Fridge ratio";case"card_width":return"Width";case"card_height":return"Height";default:return}}}}getStubConfig(){return{type:`custom:${P}`,freezer_entity:"sensor.freezer_temperature",fridge_entity:"sensor.fridge_temperature",title:"Fridge",layout:"default"}}setConfig(e){let t=this.normalizeLayout(e.layout);this._config={title:"Fridge",...e,layout:t}}set hass(e){this._hass=e,this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 4}getGridOptions(){return{columns:6,rows:4,min_columns:4}}render(){if(!this._config)return f;let e=this.normalizeLayout(this._config.layout),t=this._config.split_ratio??30,s=ct(e,t),r=this._config.show_title!==!1&&this._config.show_title!=="false",n=this._config.show_dispenser===!0||this._config.show_dispenser==="true",a=!0,h=!!s.fridge,l=this.getDisplayState(this._config.freezer_entity),u=h?this.getDisplayState(this._config.fridge_entity):null,p=this.cardLabel(a,h),o=this._config.freezer_label||"Freezer",d=this._config.fridge_label||"Fridge",c=this._config.card_width||230,g=this._config.card_height||387;return m`
      <ha-card>
        <div class="card-shell">
          ${r?m`
            <div class="heading">
              <h3 class="title">${this._config.title}</h3>
            </div>
          `:f}
          <div class="body">
            <div class="fridge layout-${e}" role="img" aria-label=${p}>
              <div class="fridge-photo-frame" style="width:${c}px;height:${g}px;">
                ${dt(e,t,n)}
                <div class="readings">
                  ${a&&s.freezer?m`
                        <section class="reading zone-freezer"
                          style=${this.readingStyle(s.freezer)}>
                          <p class="section-label">${o}</p>
                          <div class=${this.temperatureClass(l)}>
                            <span>${l.stateText}</span>
                            ${l.unitText?m`<span class="unit">${l.unitText}</span>`:f}
                          </div>
                        </section>
                      `:f}
                  ${h&&s.fridge?m`
                        <section class="reading zone-fridge"
                          style=${this.readingStyle(s.fridge)}>
                          <p class="section-label">${d}</p>
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
    `}temperatureClass(e){return e.isPlaceholder?"temperature placeholder":"temperature"}cardLabel(e,t){return e&&t?"Fridge and freezer temperatures":e?"Freezer temperature":"Fridge temperature"}normalizeLayout(e){return e&&lt.includes(e)?e:"default"}readingStyle(e){let t=(e.x+e.width/2)/at*100,s=(e.y+e.height/2)/ht*100;return`left:${t}%;top:${s}%;`}getDisplayState(e){if(!e)return{stateText:"--",unitText:"\xB0C",isPlaceholder:!0};let t=this._hass?.states?.[e];if(!t)return{stateText:"--",unitText:"",isPlaceholder:!0};let s=t.state?.trim();if(!s||ot.has(s.toLowerCase()))return{stateText:"--",unitText:"",isPlaceholder:!0};let r=Number.parseFloat(s),n=this.getUnit(t);return Number.isNaN(r)?{stateText:s,unitText:n,isPlaceholder:!1}:{stateText:new Intl.NumberFormat(void 0,{minimumFractionDigits:1,maximumFractionDigits:1}).format(r),unitText:n,isPlaceholder:!1}}getUnit(e){let t=e.attributes.unit_of_measurement;return typeof t=="string"&&t.trim()?t:"\xB0C"}static get styles(){return G`
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
    `}};le=me(ut),M=ye(le,0,"HaFridgeCard",Le,M),_e(le,1,M);customElements.get(P)||customElements.define(P,M);window.customCards=window.customCards??[];window.customCards.some(i=>i.type===P)||window.customCards.push({type:P,name:"HA Fridge Card",description:"Fridge and freezer temperatures with multiple fridge layout options.",preview:!0});})();
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
