/* ha-fridge-card v1.5.2 */
"use strict";(()=>{var De=Object.create;var V=Object.defineProperty;var Be=Object.getOwnPropertyDescriptor;var me=(i,e)=>(e=Symbol[i])?e:Symbol.for("Symbol."+i),z=i=>{throw TypeError(i)};var je=(i,e,t)=>e in i?V(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ue=(i,e)=>V(i,"name",{value:e,configurable:!0});var ge=i=>[,,,De(i?.[me("metadata")]??null)],$e=["class","method","getter","setter","accessor","field","value","get","set"],T=i=>i!==void 0&&typeof i!="function"?z("Function expected"):i,qe=(i,e,t,s,r)=>({kind:$e[i],name:e,metadata:s,addInitializer:n=>t._?z("Already initialized"):r.push(T(n||null))}),Ie=(i,e)=>je(e,me("metadata"),i[3]),_e=(i,e,t,s)=>{for(var r=0,n=i[e>>1],a=n&&n.length;r<a;r++)e&1?n[r].call(t):s=n[r].call(t,s);return s},ye=(i,e,t,s,r,n)=>{var a,l,c,u,h,o=e&7,d=!!(e&8),p=!!(e&16),_=o>3?i.length+1:o?d?1:2:0,ce=$e[o+5],de=o>3&&(i[_-1]=[]),ke=i[_]||(i[_]=[]),$=o&&(!p&&!d&&(r=r.prototype),o<5&&(o>3||!p)&&Be(o<4?r:{get[t](){return pe(this,n)},set[t](g){return fe(this,n,g)}},t));o?p&&o<4&&ue(n,(o>2?"set ":o>1?"get ":"")+t):ue(r,t);for(var W=s.length-1;W>=0;W--)u=qe(o,t,c={},i[3],ke),o&&(u.static=d,u.private=p,h=u.access={has:p?g=>We(r,g):g=>t in g},o^3&&(h.get=p?g=>(o^1?pe:Ye)(g,r,o^4?n:$.get):g=>g[t]),o>2&&(h.set=p?(g,Y)=>fe(g,r,Y,o^4?n:$.set):(g,Y)=>g[t]=Y)),l=(0,s[W])(o?o<4?p?n:$[ce]:o>4?void 0:{get:$.get,set:$.set}:r,u),c._=1,o^4||l===void 0?T(l)&&(o>4?de.unshift(l):o?p?n=l:$[ce]=l:r=l):typeof l!="object"||l===null?z("Object expected"):(T(a=l.get)&&($.get=a),T(a=l.set)&&($.set=a),T(a=l.init)&&de.unshift(a));return o||Ie(i,r),$&&V(r,t,$),p?o^4?n:$:r};var Z=(i,e,t)=>e.has(i)||z("Cannot "+t),We=(i,e)=>Object(e)!==e?z('Cannot use the "in" operator on this value'):i.has(e),pe=(i,e,t)=>(Z(i,e,"read from private field"),t?t.call(i):e.get(i));var fe=(i,e,t,s)=>(Z(i,e,"write to private field"),s?s.call(i,t):e.set(i,t),t),Ye=(i,e,t)=>(Z(i,e,"access private method"),t);var k=globalThis,D=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),ve=new WeakMap,F=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(D&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=ve.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ve.set(t,e))}return e}toString(){return this.cssText}},be=i=>new F(typeof i=="string"?i:i+"",void 0,K),G=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((s,r,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new F(t,i,K)},xe=(i,e)=>{if(D)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),r=k.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},J=D?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return be(t)})(i):i;var{is:Ve,defineProperty:Ze,getOwnPropertyDescriptor:Ke,getOwnPropertyNames:Ge,getOwnPropertySymbols:Je,getPrototypeOf:Xe}=Object,j=globalThis,Ae=j.trustedTypes,Qe=Ae?Ae.emptyScript:"",et=j.reactiveElementPolyfillSupport,U=(i,e)=>i,B={toAttribute(i,e){switch(e){case Boolean:i=i?Qe:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},X=(i,e)=>!Ve(i,e),we={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=we){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Ze(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){let{get:r,set:n}=Ke(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){let l=r?.call(this);n?.call(this,a),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??we}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let e=Xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let t=this.properties,s=[...Ge(t),...Je(t)];for(let r of s)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)t.unshift(J(r))}else e!==void 0&&t.push(J(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:B).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let n=s.getPropertyOptions(r),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:B;this._$Em=r;let l=a.fromAttribute(t,n.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(e,t,s,r=!1,n){if(e!==void 0){let a=this.constructor;if(r===!1&&(n=this[e]),s??=a.getPropertyOptions(e),!((s.hasChanged??X)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:n},a){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,n]of s){let{wrapped:a}=n,l=this[r];a!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,n,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[U("elementProperties")]=new Map,y[U("finalized")]=new Map,et?.({ReactiveElement:y}),(j.reactiveElementVersions??=[]).push("2.1.2");var ne=globalThis,Se=i=>i,q=ne.trustedTypes,Ee=q?q.createPolicy("lit-html",{createHTML:i=>i}):void 0,Fe="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,Ue="?"+v,tt=`<${Ue}>`,w=document,O=()=>w.createComment(""),R=i=>i===null||typeof i!="object"&&typeof i!="function",oe=Array.isArray,st=i=>oe(i)||typeof i?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ce=/-->/g,Me=/>/g,x=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pe=/'/g,Te=/"/g,He=/^(?:script|style|textarea|title)$/i,ae=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),m=ae(1),_t=ae(2),yt=ae(3),S=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ze=new WeakMap,A=w.createTreeWalker(w,129);function Oe(i,e){if(!oe(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ee!==void 0?Ee.createHTML(e):e}var rt=(i,e)=>{let t=i.length-1,s=[],r,n=e===2?"<svg>":e===3?"<math>":"",a=H;for(let l=0;l<t;l++){let c=i[l],u,h,o=-1,d=0;for(;d<c.length&&(a.lastIndex=d,h=a.exec(c),h!==null);)d=a.lastIndex,a===H?h[1]==="!--"?a=Ce:h[1]!==void 0?a=Me:h[2]!==void 0?(He.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=x):h[3]!==void 0&&(a=x):a===x?h[0]===">"?(a=r??H,o=-1):h[1]===void 0?o=-2:(o=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?x:h[3]==='"'?Te:Pe):a===Te||a===Pe?a=x:a===Ce||a===Me?a=H:(a=x,r=void 0);let p=a===x&&i[l+1].startsWith("/>")?" ":"";n+=a===H?c+tt:o>=0?(s.push(u),c.slice(0,o)+Fe+c.slice(o)+v+p):c+v+(o===-2?l:p)}return[Oe(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},N=class i{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let n=0,a=0,l=e.length-1,c=this.parts,[u,h]=rt(e,t);if(this.el=i.createElement(u,s),A.currentNode=this.el.content,t===2||t===3){let o=this.el.content.firstChild;o.replaceWith(...o.childNodes)}for(;(r=A.nextNode())!==null&&c.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let o of r.getAttributeNames())if(o.endsWith(Fe)){let d=h[a++],p=r.getAttribute(o).split(v),_=/([.?@])?(.*)/.exec(d);c.push({type:1,index:n,name:_[2],strings:p,ctor:_[1]==="."?te:_[1]==="?"?se:_[1]==="@"?re:C}),r.removeAttribute(o)}else o.startsWith(v)&&(c.push({type:6,index:n}),r.removeAttribute(o));if(He.test(r.tagName)){let o=r.textContent.split(v),d=o.length-1;if(d>0){r.textContent=q?q.emptyScript:"";for(let p=0;p<d;p++)r.append(o[p],O()),A.nextNode(),c.push({type:2,index:++n});r.append(o[d],O())}}}else if(r.nodeType===8)if(r.data===Ue)c.push({type:2,index:n});else{let o=-1;for(;(o=r.data.indexOf(v,o+1))!==-1;)c.push({type:7,index:n}),o+=v.length-1}n++}}static createElement(e,t){let s=w.createElement("template");return s.innerHTML=e,s}};function E(i,e,t=i,s){if(e===S)return e;let r=s!==void 0?t._$Co?.[s]:t._$Cl,n=R(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,t,s)),s!==void 0?(t._$Co??=[])[s]=r:t._$Cl=r),r!==void 0&&(e=E(i,r._$AS(i,e.values),r,s)),e}var ee=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,r=(e?.creationScope??w).importNode(t,!0);A.currentNode=r;let n=A.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new L(n,n.nextSibling,this,e):c.type===1?u=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(u=new ie(n,this,e)),this._$AV.push(u),c=s[++l]}a!==c?.index&&(n=A.nextNode(),a++)}return A.currentNode=w,r}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},L=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),R(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):st(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=N.createElement(Oe(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(t);else{let n=new ee(r,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=ze.get(e.strings);return t===void 0&&ze.set(e.strings,t=new N(e)),t}k(e){oe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,r=0;for(let n of e)r===t.length?t.push(s=new i(this.O(O()),this.O(O()),this,this.options)):s=t[r],s._$AI(n),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=Se(e).nextSibling;Se(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},C=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(e,t=this,s,r){let n=this.strings,a=!1;if(n===void 0)e=E(this,e,t,0),a=!R(e)||e!==this._$AH&&e!==S,a&&(this._$AH=e);else{let l=e,c,u;for(e=n[0],c=0;c<n.length-1;c++)u=E(this,l[s+c],t,c),u===S&&(u=this._$AH[c]),a||=!R(u)||u!==this._$AH[c],u===f?e=f:e!==f&&(e+=(u??"")+n[c+1]),this._$AH[c]=u}a&&!r&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},te=class extends C{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}},se=class extends C{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}},re=class extends C{constructor(e,t,s,r,n){super(e,t,s,r,n),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??f)===S)return;let s=this._$AH,r=e===f&&s!==f||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==f&&(s===f||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ie=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}};var it=ne.litHtmlPolyfillSupport;it?.(N,L),(ne.litHtmlVersions??=[]).push("3.3.3");var Re=(i,e,t)=>{let s=t?.renderBefore??e,r=s._$litPart$;if(r===void 0){let n=t?.renderBefore??null;s._$litPart$=r=new L(e.insertBefore(O(),n),n,void 0,t??{})}return r._$AI(i),r};var he=globalThis,b=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Re(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};b._$litElement$=!0,b.finalized=!0,he.litElementHydrateSupport?.({LitElement:b});var nt=he.litElementPolyfillSupport;nt?.({LitElement:b});(he.litElementVersions??=[]).push("4.2.2");var Ne=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};var P="ha-fridge-card",ot=new Set(["unknown","unavailable","none"]),at=192,ht=387,lt=["default","freezer","inverted","french_door","dual_door"];function ct(i,e){let r=e/100;switch(i){case"freezer":return{freezer:{x:10,y:8,width:172,height:371}};case"default":return{freezer:{x:10,y:8,width:172,height:Math.round(371*r)},fridge:{x:10,y:8+Math.round(371*r)+4,width:172,height:Math.round(371*(1-r))-4}};case"inverted":case"french_door":return{fridge:{x:10,y:8,width:172,height:Math.round(371*(1-r))-4},freezer:{x:10,y:8+Math.round(371*(1-r)),width:172,height:Math.round(371*r)}};case"dual_door":{let n=Math.round(172*r);return{freezer:{x:8,y:8,width:n,height:371},fridge:{x:8+n+2,y:8,width:172-n-2,height:371}}}default:return{}}}function dt(i,e,t){let s=e/100,r=371,n=8,a=m`<rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />`,l=(h,o)=>m`<rect x="${h}" y="${o}" width="6" height="48" rx="3" fill="#B8C2CC" />`,c=(h,o,d,p)=>m`<line x1="${h}" y1="${o}" x2="${d}" y2="${p}" stroke="#BCC5CF" stroke-width="1.5" />`,u=(h,o)=>m`
    <rect x="${h}" y="${o}" width="36" height="46" rx="4" fill="#D0D5DC" />
    <rect x="${h+4}" y="${o+4}" width="28" height="18" rx="3" fill="#1a1a2e" />
    <rect x="${h+13}" y="${o+26}" width="10" height="14" rx="2" fill="#8A919A" />
    <rect x="${h+10}" y="${o+40}" width="16" height="4" rx="2" fill="#B8C2CC" />`;switch(i){case"freezer":{let h=r,o=10+Math.round(172/2)-18;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="10" y="${n}" width="172" height="${h}" rx="10" fill="#F4F6F8" />
        ${l(26,n+Math.round(h/2)+30)}
        ${t?u(o,n+Math.round(h/2)-46):f}
      </svg>`}case"default":{let h=Math.round(r*s),o=Math.round(r*(1-s))-4,d=n+h,p=10+Math.round(172/2)-18;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="10" y="${n}" width="172" height="${h}" rx="10" fill="#F4F6F8" />
        ${l(26,n+Math.round(h/2)-24)}
        ${c(10,d,182,d)}
        <rect x="10" y="${d+4}" width="172" height="${o}" rx="10" fill="#F7F9FB" />
        ${l(26,d+4+Math.round(o/2)-30)}
        ${t?u(p,d+4+Math.round(o/2)-23):f}
      </svg>`}case"inverted":{let h=Math.round(r*(1-s))-4,o=Math.round(r*s),d=n+h,p=10+Math.round(172/2)-18;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="10" y="${n}" width="172" height="${h}" rx="10" fill="#F7F9FB" />
        ${l(26,n+Math.round(h/2)-30)}
        ${t?u(p,n+Math.round(h/2)-23):f}
        ${c(10,d,182,d)}
        <rect x="10" y="${d+4}" width="172" height="${o}" rx="10" fill="#F4F6F8" />
        ${l(26,d+4+Math.round(o/2)-24)}
      </svg>`}case"french_door":{let h=Math.round(r*(1-s))-4,o=Math.round(r*s),d=n+h,p=82;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="10" y="${n}" width="${p}" height="${h}" rx="10" fill="#F7F9FB" />
        ${l(80,n+Math.round(h/2)-24)}
        ${t?u(10+Math.round(p/2)-18,n+Math.round(h/2)-23):f}
        <rect x="${10+p+8}" y="${n}" width="${p}" height="${h}" rx="10" fill="#F7F9FB" />
        ${l(10+p+6,n+Math.round(h/2)-24)}
        ${c(10,d,182,d)}
        <rect x="10" y="${d+4}" width="172" height="${o}" rx="10" fill="#F4F6F8" />
        ${l(26,d+4+Math.round(o/2)-24)}
      </svg>`}case"dual_door":{let h=Math.round(172*s),o=172-h-2,d=8+h+2;return m`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="8" y="${n}" width="${h}" height="${r}" rx="10" fill="#F4F6F8" />
        ${l(8+Math.round(h/2)-3,n+Math.round(r/2)+40)}
        ${t?u(8+Math.round(h/2)-18,n+40):f}
        ${c(d-1,n,d-1,n+r)}
        <rect x="${d}" y="${n}" width="${o}" height="${r}" rx="10" fill="#F7F9FB" />
        ${l(d+Math.round(o/2)-3,n+Math.round(r/2)-25)}
      </svg>`}default:return m``}}var Le,le,ut;Le=[Ne(P)];var M=class extends(ut=b){_config;_hass;static getConfigForm(){return{schema:[{name:"title",selector:{text:{}}},{name:"show_title",selector:{select:{mode:"dropdown",options:[{value:"true",label:"Yes"},{value:"false",label:"No"}]}}},{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Freezer on top"},{value:"inverted",label:"Fridge on top"},{value:"dual_door",label:"Side by side"},{value:"french_door",label:"French door"},{value:"freezer",label:"Freezer only"}]}}},{name:"freezer_entity",selector:{entity:{domain:"sensor"}}},{name:"fridge_entity",selector:{entity:{domain:"sensor"}}},{name:"freezer_label",selector:{text:{}}},{name:"fridge_label",selector:{text:{}}},{name:"show_dispenser",selector:{select:{mode:"dropdown",options:[{value:"true",label:"Yes"},{value:"false",label:"No"}]}}},{name:"split_ratio",selector:{number:{min:20,max:80,step:1,mode:"slider",unit_of_measurement:"%"}}},{name:"card_width",selector:{number:{min:100,max:400,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"card_height",selector:{number:{min:200,max:600,step:10,mode:"slider",unit_of_measurement:"px"}}}],computeLabel:e=>{switch(e.name){case"title":return"Title";case"show_title":return"Show title";case"layout":return"Layout";case"freezer_entity":return"Freezer sensor";case"fridge_entity":return"Fridge sensor";case"freezer_label":return"Freezer label";case"fridge_label":return"Fridge label";case"show_dispenser":return"Show ice dispenser";case"split_ratio":return"Freezer / Fridge ratio";case"card_width":return"Width";case"card_height":return"Height";default:return}}}}getStubConfig(){return{type:`custom:${P}`,freezer_entity:"sensor.freezer_temperature",fridge_entity:"sensor.fridge_temperature",title:"Fridge",layout:"default"}}setConfig(e){let t=this.normalizeLayout(e.layout);this._config={title:"Fridge",...e,layout:t}}set hass(e){this._hass=e,this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 4}getGridOptions(){return{columns:6,rows:4,min_columns:4}}render(){if(!this._config)return f;let e=this.normalizeLayout(this._config.layout),t=this._config.split_ratio??30,s=ct(e,t),r=this._config.show_title!=="false",n=this._config.show_dispenser==="true",a=!0,l=!!s.fridge,c=this.getDisplayState(this._config.freezer_entity),u=l?this.getDisplayState(this._config.fridge_entity):null,h=this.cardLabel(a,l),o=this._config.freezer_label||"Freezer",d=this._config.fridge_label||"Fridge",p=this._config.card_width||230,_=this._config.card_height||387;return m`
      <ha-card>
        <div class="card-shell">
          ${r?m`
            <div class="heading">
              <h3 class="title">${this._config.title}</h3>
            </div>
          `:f}
          <div class="body">
            <div class="fridge layout-${e}" role="img" aria-label=${h}>
              <div class="fridge-photo-frame" style="width:${p}px;height:${_}px;">
                ${dt(e,t,n)}
                <div class="readings">
                  ${a&&s.freezer?m`
                        <section class="reading zone-freezer"
                          style=${this.readingStyle(s.freezer)}>
                          <p class="section-label">${o}</p>
                          <div class=${this.temperatureClass(c)}>
                            <span>${c.stateText}</span>
                            ${c.unitText?m`<span class="unit">${c.unitText}</span>`:f}
                          </div>
                        </section>
                      `:f}
                  ${l&&s.fridge?m`
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
    `}};le=ge(ut),M=ye(le,0,"HaFridgeCard",Le,M),_e(le,1,M);customElements.get(P)||customElements.define(P,M);window.customCards=window.customCards??[];window.customCards.some(i=>i.type===P)||window.customCards.push({type:P,name:"HA Fridge Card",description:"Fridge and freezer temperatures with multiple fridge layout options.",preview:!0});})();
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
