/* ha-fridge-card v2.1.1 */
"use strict";(()=>{var Nt=Object.create;var X=Object.defineProperty;var Lt=Object.getOwnPropertyDescriptor;var gt=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),P=i=>{throw TypeError(i)};var Yt=(i,t,e)=>t in i?X(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ut=(i,t)=>X(i,"name",{value:t,configurable:!0});var $t=i=>[,,,Nt(i?.[gt("metadata")]??null)],mt=["class","method","getter","setter","accessor","field","value","get","set"],M=i=>i!==void 0&&typeof i!="function"?P("Function expected"):i,jt=(i,t,e,r,s)=>({kind:mt[i],name:t,metadata:r,addInitializer:o=>e._?P("Already initialized"):s.push(M(o||null))}),qt=(i,t)=>Yt(t,gt("metadata"),i[3]),yt=(i,t,e,r)=>{for(var s=0,o=i[t>>1],n=o&&o.length;s<n;s++)t&1?o[s].call(e):r=o[s].call(e,r);return r},xt=(i,t,e,r,s,o)=>{var n,l,a,c,u,h=t&7,f=!!(t&8),p=!!(t&16),x=h>3?i.length+1:h?f?1:2:0,ct=mt[h+5],dt=h>3&&(i[x-1]=[]),Rt=i[x]||(i[x]=[]),m=h&&(!p&&!f&&(s=s.prototype),h<5&&(h>3||!p)&&Lt(h<4?s:{get[e](){return pt(this,o)},set[e](g){return ft(this,o,g)}},e));h?p&&h<4&&ut(o,(h>2?"set ":h>1?"get ":"")+e):ut(s,e);for(var I=r.length-1;I>=0;I--)c=jt(h,e,a={},i[3],Rt),h&&(c.static=f,c.private=p,u=c.access={has:p?g=>It(s,g):g=>e in g},h^3&&(u.get=p?g=>(h^1?pt:Wt)(g,s,h^4?o:m.get):g=>g[e]),h>2&&(u.set=p?(g,W)=>ft(g,s,W,h^4?o:m.set):(g,W)=>g[e]=W)),l=(0,r[I])(h?h<4?p?o:m[ct]:h>4?void 0:{get:m.get,set:m.set}:s,c),a._=1,h^4||l===void 0?M(l)&&(h>4?dt.unshift(l):h?p?o=l:m[ct]=l:s=l):typeof l!="object"||l===null?P("Object expected"):(M(n=l.get)&&(m.get=n),M(n=l.set)&&(m.set=n),M(n=l.init)&&dt.unshift(n));return h||qt(i,s),m&&X(s,e,m),p?h^4?o:m:s};var V=(i,t,e)=>t.has(i)||P("Cannot "+e),It=(i,t)=>Object(t)!==t?P('Cannot use the "in" operator on this value'):i.has(t),pt=(i,t,e)=>(V(i,t,"read from private field"),e?e.call(i):t.get(i));var ft=(i,t,e,r)=>(V(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e),Wt=(i,t,e)=>(V(i,t,"access private method"),e);var R=globalThis,N=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),_t=new WeakMap,T=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(N&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=_t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&_t.set(e,t))}return t}toString(){return this.cssText}},wt=i=>new T(typeof i=="string"?i:i+"",void 0,Z),K=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new T(e,i,Z)},At=(i,t)=>{if(N)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),s=R.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},J=N?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return wt(e)})(i):i;var{is:Xt,defineProperty:Vt,getOwnPropertyDescriptor:Zt,getOwnPropertyNames:Kt,getOwnPropertySymbols:Jt,getPrototypeOf:Gt}=Object,Y=globalThis,vt=Y.trustedTypes,Qt=vt?vt.emptyScript:"",te=Y.reactiveElementPolyfillSupport,H=(i,t)=>i,L={toAttribute(i,t){switch(t){case Boolean:i=i?Qt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},G=(i,t)=>!Xt(i,t),Ct={attribute:!0,type:String,converter:L,reflect:!1,useDefault:!1,hasChanged:G};Symbol.metadata??=Symbol("metadata"),Y.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ct){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Vt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){let{get:s,set:o}=Zt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let l=s?.call(this);o?.call(this,n),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ct}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;let t=Gt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){let e=this.properties,r=[...Kt(e),...Jt(e)];for(let s of r)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let s of r)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return At(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:L).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){let r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let o=r.getPropertyOptions(s),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:L;this._$Em=s;let l=n.fromAttribute(e,o.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,r,s=!1,o){if(t!==void 0){let n=this.constructor;if(s===!1&&(o=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??G)(o,e)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:o},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[s,o]of r){let{wrapped:n}=o,l=this[s];n!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[H("elementProperties")]=new Map,y[H("finalized")]=new Map,te?.({ReactiveElement:y}),(Y.reactiveElementVersions??=[]).push("2.1.2");var ot=globalThis,bt=i=>i,j=ot.trustedTypes,Et=j?j.createPolicy("lit-html",{createHTML:i=>i}):void 0,Tt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,Ht="?"+_,ee=`<${Ht}>`,C=document,B=()=>C.createComment(""),z=i=>i===null||typeof i!="object"&&typeof i!="function",nt=Array.isArray,re=i=>nt(i)||typeof i?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,St=/-->/g,Dt=/>/g,A=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kt=/'/g,Mt=/"/g,Ft=/^(?:script|style|textarea|title)$/i,at=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),$=at(1),ye=at(2),xe=at(3),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Pt=new WeakMap,v=C.createTreeWalker(C,129);function Bt(i,t){if(!nt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Et!==void 0?Et.createHTML(t):t}var se=(i,t)=>{let e=i.length-1,r=[],s,o=t===2?"<svg>":t===3?"<math>":"",n=F;for(let l=0;l<e;l++){let a=i[l],c,u,h=-1,f=0;for(;f<a.length&&(n.lastIndex=f,u=n.exec(a),u!==null);)f=n.lastIndex,n===F?u[1]==="!--"?n=St:u[1]!==void 0?n=Dt:u[2]!==void 0?(Ft.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=A):u[3]!==void 0&&(n=A):n===A?u[0]===">"?(n=s??F,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?A:u[3]==='"'?Mt:kt):n===Mt||n===kt?n=A:n===St||n===Dt?n=F:(n=A,s=void 0);let p=n===A&&i[l+1].startsWith("/>")?" ":"";o+=n===F?a+ee:h>=0?(r.push(c),a.slice(0,h)+Tt+a.slice(h)+_+p):a+_+(h===-2?l:p)}return[Bt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},U=class i{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[c,u]=se(t,e);if(this.el=i.createElement(c,r),v.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=v.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(Tt)){let f=u[n++],p=s.getAttribute(h).split(_),x=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:x[2],strings:p,ctor:x[1]==="."?et:x[1]==="?"?rt:x[1]==="@"?st:S}),s.removeAttribute(h)}else h.startsWith(_)&&(a.push({type:6,index:o}),s.removeAttribute(h));if(Ft.test(s.tagName)){let h=s.textContent.split(_),f=h.length-1;if(f>0){s.textContent=j?j.emptyScript:"";for(let p=0;p<f;p++)s.append(h[p],B()),v.nextNode(),a.push({type:2,index:++o});s.append(h[f],B())}}}else if(s.nodeType===8)if(s.data===Ht)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:o}),h+=_.length-1}o++}}static createElement(t,e){let r=C.createElement("template");return r.innerHTML=t,r}};function E(i,t,e=i,r){if(t===b)return t;let s=r!==void 0?e._$Co?.[r]:e._$Cl,o=z(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??=[])[r]=s:e._$Cl=s),s!==void 0&&(t=E(i,s._$AS(i,t.values),s,r)),t}var tt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??C).importNode(e,!0);v.currentNode=s;let o=v.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new O(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new it(o,this,t)),this._$AV.push(c),a=r[++l]}n!==a?.index&&(o=v.nextNode(),n++)}return v.currentNode=C,s}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},O=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),z(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):re(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=U.createElement(Bt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(e);else{let o=new tt(s,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=Pt.get(t.strings);return e===void 0&&Pt.set(t.strings,e=new U(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,s=0;for(let o of t)s===e.length?e.push(r=new i(this.O(B()),this.O(B()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=bt(t).nextSibling;bt(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},S=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,e=this,r,s){let o=this.strings,n=!1;if(o===void 0)t=E(this,t,e,0),n=!z(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{let l=t,a,c;for(t=o[0],a=0;a<o.length-1;a++)c=E(this,l[r+a],e,a),c===b&&(c=this._$AH[a]),n||=!z(c)||c!==this._$AH[a],c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},et=class extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},rt=class extends S{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}},st=class extends S{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===b)return;let r=this._$AH,s=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==d&&(r===d||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var ie=ot.litHtmlPolyfillSupport;ie?.(U,O),(ot.litHtmlVersions??=[]).push("3.3.3");var zt=(i,t,e)=>{let r=e?.renderBefore??t,s=r._$litPart$;if(s===void 0){let o=e?.renderBefore??null;r._$litPart$=s=new O(t.insertBefore(B(),o),o,void 0,e??{})}return s._$AI(i),s};var ht=globalThis,w=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return b}};w._$litElement$=!0,w.finalized=!0,ht.litElementHydrateSupport?.({LitElement:w});var oe=ht.litElementPolyfillSupport;oe?.({LitElement:w});(ht.litElementVersions??=[]).push("4.2.2");var Ut=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var k="ha-fridge-card",ne=new Set(["unknown","unavailable","none"]),ae=192,he=387,le=["default","freezer","inverted","french_door","dual_door"];function ce(i){switch(i){case"freezer":return{freezer:{x:12,y:12,width:168,height:363}};case"default":return{freezer:{x:12,y:12,width:168,height:Math.round(363*.3)},fridge:{x:12,y:12+Math.round(363*.3)+2,width:168,height:Math.round(363*(1-.3))-2}};case"inverted":case"french_door":return{fridge:{x:12,y:12,width:168,height:Math.round(363*(1-.3))-2},freezer:{x:12,y:12+Math.round(363*(1-.3)),width:168,height:Math.round(363*.3)}};case"dual_door":return{freezer:{x:12,y:12,width:82,height:363},fridge:{x:98,y:12,width:82,height:363}};default:return{}}}function de(i){switch(i){case"freezer":{let s=12+Math.round(181.5)-26;return $`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="12" y="${12}" width="168" height="${363}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="20" y="${12+Math.round(363/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="76" y="${s}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
        <rect x="80" y="${s+4}" width="32" height="20" rx="3" fill="#2C2C3A" />
        <rect x="90" y="${s+28}" width="12" height="14" rx="2" fill="#8A919A" />
        <rect x="86" y="${s+44}" width="20" height="5" rx="2" fill="#A0A8B4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
      </svg>`}case"default":{let o=Math.round(108.89999999999999),n=Math.round(363*(1-.3))-2,l=12+o,a=l+2+Math.round(n/2)-26;return $`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="12" y="${12}" width="168" height="${o}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="20" y="${12+Math.round(o/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="12" y="${l}" width="168" height="2" rx="1" fill="#D6DCE4" />
        <rect x="12" y="${l+2}" width="168" height="${n}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="20" y="${l+2+Math.round(n/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="76" y="${a}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
        <rect x="80" y="${a+4}" width="32" height="20" rx="3" fill="#2C2C3A" />
        <rect x="90" y="${a+28}" width="12" height="14" rx="2" fill="#8A919A" />
        <rect x="86" y="${a+44}" width="20" height="5" rx="2" fill="#A0A8B4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
      </svg>`}case"inverted":{let o=Math.round(254.1)-2,n=Math.round(363*.3),l=12+o,a=12+Math.round(o/2)-26;return $`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="12" y="${12}" width="168" height="${o}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="20" y="${12+Math.round(o/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="76" y="${a}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
        <rect x="80" y="${a+4}" width="32" height="20" rx="3" fill="#2C2C3A" />
        <rect x="90" y="${a+28}" width="12" height="14" rx="2" fill="#8A919A" />
        <rect x="86" y="${a+44}" width="20" height="5" rx="2" fill="#A0A8B4" />
        <rect x="12" y="${l}" width="168" height="2" rx="1" fill="#D6DCE4" />
        <rect x="12" y="${l+2}" width="168" height="${n}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="20" y="${l+2+Math.round(n/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
      </svg>`}case"french_door":{let o=Math.round(254.1)-2,n=Math.round(363*.3),l=12+o,a=78,c=12+Math.round(o/2)-26;return $`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="12" y="${12}" width="${a}" height="${o}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="82" y="${12+Math.round(o/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="76" y="${c}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
        <rect x="80" y="${c+4}" width="32" height="20" rx="3" fill="#2C2C3A" />
        <rect x="90" y="${c+28}" width="12" height="14" rx="2" fill="#8A919A" />
        <rect x="86" y="${c+44}" width="20" height="5" rx="2" fill="#A0A8B4" />
        <rect x="92" y="${12}" width="2" height="${o}" rx="1" fill="#D6DCE4" />
        <rect x="96" y="${12}" width="${a}" height="${o}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="100" y="${12+Math.round(o/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="12" y="${l}" width="168" height="2" rx="1" fill="#D6DCE4" />
        <rect x="12" y="${l+2}" width="168" height="${n}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="76" y="${l+10}" width="36" height="4" rx="2" fill="#B0B8C4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
      </svg>`}case"dual_door":return $`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="${12}" y="${12}" width="${82}" height="${363}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="${94}" y="${12+Math.round(363/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="${12+Math.round(82/2)-20}" y="${52}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
        <rect x="${12+Math.round(82/2)-16}" y="${56}" width="32" height="20" rx="3" fill="#2C2C3A" />
        <rect x="${12+Math.round(82/2)-6}" y="${80}" width="12" height="14" rx="2" fill="#8A919A" />
        <rect x="${12+Math.round(82/2)-10}" y="${96}" width="20" height="5" rx="2" fill="#A0A8B4" />
        <rect x="${96}" y="${12}" width="2" height="${363}" rx="1" fill="#D6DCE4" />
        <rect x="${98}" y="${12}" width="${82}" height="${363}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="${102}" y="${12+Math.round(363/2)-18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
      </svg>`;default:return $``}}var Ot,lt,ue;Ot=[Ut(k)];var D=class extends(ue=w){_config;_hass;static getConfigForm(){return{schema:[{name:"title",selector:{text:{}}},{name:"show_title",selector:{select:{mode:"dropdown",options:[{value:"true",label:"Yes"},{value:"false",label:"No"}]}}},{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Freezer on top"},{value:"inverted",label:"Fridge on top"},{value:"dual_door",label:"Side by side"},{value:"french_door",label:"French door"},{value:"freezer",label:"Freezer only"}]}}},{name:"freezer_entity",selector:{entity:{domain:"sensor"}}},{name:"fridge_entity",selector:{entity:{domain:"sensor"}}},{name:"freezer_label",selector:{text:{}}},{name:"fridge_label",selector:{text:{}}}],computeLabel:t=>{switch(t.name){case"title":return"Title";case"show_title":return"Show title";case"layout":return"Layout";case"freezer_entity":return"Freezer sensor";case"fridge_entity":return"Fridge sensor";case"freezer_label":return"Freezer label";case"fridge_label":return"Fridge label";default:return}}}}getStubConfig(){return{type:`custom:${k}`,freezer_entity:"sensor.freezer_temperature",fridge_entity:"sensor.fridge_temperature",title:"Fridge",layout:"default"}}setConfig(t){let e=this.normalizeLayout(t.layout);this._config={title:"Fridge",...t,layout:e}}set hass(t){this._hass=t,this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 4}render(){if(!this._config)return d;let t=this.normalizeLayout(this._config.layout),e=ce(t),r=this._config.show_title!=="false"&&this._config.show_title!==!1,s=!0,o=!!e.fridge,n=this.getDisplayState(this._config.freezer_entity),l=o?this.getDisplayState(this._config.fridge_entity):null,a=this.cardLabel(s,o),c=this._config.freezer_label||"Freezer",u=this._config.fridge_label||"Fridge";return $`
      <ha-card>
        <div class="card-shell">
          ${r?$`
            <div class="heading">
              <h3 class="title">${this._config.title}</h3>
            </div>
          `:d}
          <div class="body">
            <div class="fridge layout-${t}" role="img" aria-label=${a}>
              <div class="fridge-photo-frame">
                ${de(t)}
                <div class="readings">
                  ${s&&e.freezer?$`
                        <section class="reading zone-freezer"
                          style=${this.readingStyle(e.freezer)}>
                          <p class="section-label">${c}</p>
                          <div class=${this.temperatureClass(n)}>
                            <span>${n.stateText}</span>
                            ${n.unitText?$`<span class="unit">${n.unitText}</span>`:d}
                          </div>
                        </section>
                      `:d}
                  ${o&&e.fridge?$`
                        <section class="reading zone-fridge"
                          style=${this.readingStyle(e.fridge)}>
                          <p class="section-label">${u}</p>
                          <div class=${this.temperatureClass(l)}>
                            <span>${l.stateText}</span>
                            ${l.unitText?$`<span class="unit">${l.unitText}</span>`:d}
                          </div>
                        </section>
                      `:d}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `}temperatureClass(t){return t.isPlaceholder?"temperature placeholder":"temperature"}normalizeLayout(t){return t&&le.includes(t)?t:"default"}readingStyle(t){if(!t)return"";let e=(t.x+t.width/2)/ae*100,r=(t.y+t.height/2)/he*100;return`left:${e}%;top:${r}%;`}getDisplayState(t){if(!t)return{stateText:"--",unitText:"\xB0C",isPlaceholder:!0};let e=this._hass?.states?.[t];if(!e)return{stateText:"--",unitText:"",isPlaceholder:!0};let r=e.state?.trim();if(!r||ne.has(r.toLowerCase()))return{stateText:"--",unitText:"",isPlaceholder:!0};let s=Number.parseFloat(r),o=this.getUnit(e);return Number.isNaN(s)?{stateText:r,unitText:o,isPlaceholder:!1}:{stateText:new Intl.NumberFormat(void 0,{minimumFractionDigits:1,maximumFractionDigits:1}).format(s),unitText:o,isPlaceholder:!1}}getUnit(t){let e=t.attributes.unit_of_measurement;return typeof e=="string"&&e.trim()?e:"\xB0C"}cardLabel(t,e){return t&&e?"Fridge and freezer temperatures":t?"Freezer temperature":e?"Fridge temperature":"Fridge card"}static get styles(){return K`
      :host {
        display: block;
      }

      ha-card {
        position: relative;
        overflow: hidden;
        padding: 20px 18px 18px;
      }

      .card-shell {
        display: grid;
        gap: 18px;
      }

      .heading {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
      }

      .title {
        margin: 0;
        color: var(--primary-text-color);
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.01em;
        text-align: center;
      }

      .body {
        display: grid;
        place-items: center;
      }

      .fridge {
        position: relative;
        color: #132030;
      }

      .fridge-photo-frame {
        position: relative;
        width: min(100%, 192px);
        height: 387px;
        border-radius: 18px 18px 12px 12px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.92);
        box-shadow:
          0 12px 30px rgba(0, 0, 0, 0.16),
          inset 0 0 0 1px rgba(116, 135, 158, 0.12);
      }

      .fridge-svg {
        width: 100%;
        height: 100%;
        display: block;
      }

      .readings {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      .reading {
        position: absolute;
        width: 96px;
        transform: translate(-50%, -50%);
        display: grid;
        justify-items: center;
        gap: 6px;
        padding: 8px 10px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.55);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
      }

      .section-label {
        margin: 0;
        color: rgba(19, 32, 48, 0.72);
        font-size: 0.52rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.55);
      }

      .temperature {
        display: inline-flex;
        align-items: flex-start;
        gap: 4px;
        color: #102031;
        font-size: clamp(1.45rem, 4vw, 1.95rem);
        font-weight: 700;
        line-height: 0.95;
        letter-spacing: -0.03em;
        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);
      }

      .temperature.placeholder {
        color: rgba(16, 32, 49, 0.42);
      }

      .unit {
        color: rgba(16, 32, 49, 0.7);
        font-size: 0.92rem;
        font-weight: 600;
        letter-spacing: 0;
        transform: translateY(0.22rem);
      }

      .reading.zone-freezer .temperature {
        color: #0f3f75;
      }

      .reading.zone-fridge .temperature {
        color: #125b6d;
      }

      @media (max-width: 420px) {
        ha-card {
          padding-inline: 14px;
        }

        .fridge-photo-frame {
          width: min(100%, 176px);
          height: 356px;
        }
      }
    `}};lt=$t(ue),D=xt(lt,0,"HaFridgeCard",Ot,D),yt(lt,1,D);customElements.get(k)||customElements.define(k,D);window.customCards=window.customCards??[];window.customCards.some(i=>i.type===k)||window.customCards.push({type:k,name:"HA Fridge Card",description:"Fridge and freezer temperatures with multiple fridge layout options.",preview:!0});})();
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
