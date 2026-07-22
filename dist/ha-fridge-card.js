/* ha-fridge-card v1.7.0 */
"use strict";(()=>{var Yt=Object.create;var Q=Object.defineProperty;var Vt=Object.getOwnPropertyDescriptor;var yt=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),R=i=>{throw TypeError(i)};var Wt=(i,t,e)=>t in i?Q(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var gt=(i,t)=>Q(i,"name",{value:t,configurable:!0});var vt=i=>[,,,Yt(i?.[yt("metadata")]??null)],bt=["class","method","getter","setter","accessor","field","value","get","set"],O=i=>i!==void 0&&typeof i!="function"?R("Function expected"):i,Zt=(i,t,e,s,r)=>({kind:bt[i],name:t,metadata:s,addInitializer:n=>e._?R("Already initialized"):r.push(O(n||null))}),Kt=(i,t)=>Wt(t,yt("metadata"),i[3]),xt=(i,t,e,s)=>{for(var r=0,n=i[t>>1],o=n&&n.length;r<o;r++)t&1?n[r].call(e):s=n[r].call(e,s);return s},At=(i,t,e,s,r,n)=>{var o,l,c,d,f,h=t&7,g=!!(t&8),a=!!(t&16),u=h>3?i.length+1:h?g?1:2:0,m=bt[h+5],y=h>3&&(i[u-1]=[]),U=i[u]||(i[u]=[]),v=h&&(!a&&!g&&(r=r.prototype),h<5&&(h>3||!a)&&Vt(h<4?r:{get[e](){return $t(this,n)},set[e]($){return _t(this,n,$)}},e));h?a&&h<4&&gt(n,(h>2?"set ":h>1?"get ":"")+e):gt(r,e);for(var J=s.length-1;J>=0;J--)d=Zt(h,e,c={},i[3],U),h&&(d.static=g,d.private=a,f=d.access={has:a?$=>Gt(r,$):$=>e in $},h^3&&(f.get=a?$=>(h^1?$t:Jt)($,r,h^4?n:v.get):$=>$[e]),h>2&&(f.set=a?($,X)=>_t($,r,X,h^4?n:v.set):($,X)=>$[e]=X)),l=(0,s[J])(h?h<4?a?n:v[m]:h>4?void 0:{get:v.get,set:v.set}:r,d),c._=1,h^4||l===void 0?O(l)&&(h>4?y.unshift(l):h?a?n=l:v[m]=l:r=l):typeof l!="object"||l===null?R("Object expected"):(O(o=l.get)&&(v.get=o),O(o=l.set)&&(v.set=o),O(o=l.init)&&y.unshift(o));return h||Kt(i,r),v&&Q(r,e,v),a?h^4?n:v:r};var tt=(i,t,e)=>t.has(i)||R("Cannot "+e),Gt=(i,t)=>Object(t)!==t?R('Cannot use the "in" operator on this value'):i.has(t),$t=(i,t,e)=>(tt(i,t,"read from private field"),e?e.call(i):t.get(i));var _t=(i,t,e,s)=>(tt(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),Jt=(i,t,e)=>(tt(i,t,"access private method"),e);var q=globalThis,Y=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),wt=new WeakMap,N=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Y&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=wt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&wt.set(e,t))}return t}toString(){return this.cssText}},Et=i=>new N(typeof i=="string"?i:i+"",void 0,et),st=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new N(e,i,et)},St=(i,t)=>{if(Y)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=q.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},rt=Y?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Et(e)})(i):i;var{is:Xt,defineProperty:Qt,getOwnPropertyDescriptor:te,getOwnPropertyNames:ee,getOwnPropertySymbols:se,getPrototypeOf:re}=Object,W=globalThis,Ct=W.trustedTypes,ie=Ct?Ct.emptyScript:"",ne=W.reactiveElementPolyfillSupport,L=(i,t)=>i,V={toAttribute(i,t){switch(t){case Boolean:i=i?ie:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},it=(i,t)=>!Xt(i,t),Tt={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:it};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;var b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Qt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:n}=te(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:r,set(o){let l=r?.call(this);n?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Tt}static _$Ei(){if(this.hasOwnProperty(L("elementProperties")))return;let t=re(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(L("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(L("properties"))){let e=this.properties,s=[...ee(e),...se(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(rt(r))}else t!==void 0&&e.push(rt(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return St(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:V).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let n=s.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:V;this._$Em=r;let l=o.fromAttribute(e,n.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(t,e,s,r=!1,n){if(t!==void 0){let o=this.constructor;if(r===!1&&(n=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??it)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,n]of s){let{wrapped:o}=n,l=this[r];o!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,n,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[L("elementProperties")]=new Map,b[L("finalized")]=new Map,ne?.({ReactiveElement:b}),(W.reactiveElementVersions??=[]).push("2.1.2");var dt=globalThis,Mt=i=>i,Z=dt.trustedTypes,Pt=Z?Z.createPolicy("lit-html",{createHTML:i=>i}):void 0,Nt="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Lt="?"+A,oe=`<${Lt}>`,C=document,k=()=>C.createComment(""),B=i=>i===null||typeof i!="object"&&typeof i!="function",ut=Array.isArray,ae=i=>ut(i)||typeof i?.[Symbol.iterator]=="function",nt=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,Ht=/>/g,E=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ut=/'/g,Ot=/"/g,Dt=/^(?:script|style|textarea|title)$/i,pt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),_=pt(1),Ae=pt(2),we=pt(3),x=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Rt=new WeakMap,S=C.createTreeWalker(C,129);function kt(i,t){if(!ut(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pt!==void 0?Pt.createHTML(t):t}var he=(i,t)=>{let e=i.length-1,s=[],r,n=t===2?"<svg>":t===3?"<math>":"",o=D;for(let l=0;l<e;l++){let c=i[l],d,f,h=-1,g=0;for(;g<c.length&&(o.lastIndex=g,f=o.exec(c),f!==null);)g=o.lastIndex,o===D?f[1]==="!--"?o=zt:f[1]!==void 0?o=Ht:f[2]!==void 0?(Dt.test(f[2])&&(r=RegExp("</"+f[2],"g")),o=E):f[3]!==void 0&&(o=E):o===E?f[0]===">"?(o=r??D,h=-1):f[1]===void 0?h=-2:(h=o.lastIndex-f[2].length,d=f[1],o=f[3]===void 0?E:f[3]==='"'?Ot:Ut):o===Ot||o===Ut?o=E:o===zt||o===Ht?o=D:(o=E,r=void 0);let a=o===E&&i[l+1].startsWith("/>")?" ":"";n+=o===D?c+oe:h>=0?(s.push(d),c.slice(0,h)+Nt+c.slice(h)+A+a):c+A+(h===-2?l:a)}return[kt(i,n+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},F=class i{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let n=0,o=0,l=t.length-1,c=this.parts,[d,f]=he(t,e);if(this.el=i.createElement(d,s),S.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=S.nextNode())!==null&&c.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let h of r.getAttributeNames())if(h.endsWith(Nt)){let g=f[o++],a=r.getAttribute(h).split(A),u=/([.?@])?(.*)/.exec(g);c.push({type:1,index:n,name:u[2],strings:a,ctor:u[1]==="."?at:u[1]==="?"?ht:u[1]==="@"?lt:M}),r.removeAttribute(h)}else h.startsWith(A)&&(c.push({type:6,index:n}),r.removeAttribute(h));if(Dt.test(r.tagName)){let h=r.textContent.split(A),g=h.length-1;if(g>0){r.textContent=Z?Z.emptyScript:"";for(let a=0;a<g;a++)r.append(h[a],k()),S.nextNode(),c.push({type:2,index:++n});r.append(h[g],k())}}}else if(r.nodeType===8)if(r.data===Lt)c.push({type:2,index:n});else{let h=-1;for(;(h=r.data.indexOf(A,h+1))!==-1;)c.push({type:7,index:n}),h+=A.length-1}n++}}static createElement(t,e){let s=C.createElement("template");return s.innerHTML=t,s}};function T(i,t,e=i,s){if(t===x)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl,n=B(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=r:e._$Cl=r),r!==void 0&&(t=T(i,r._$AS(i,t.values),r,s)),t}var ot=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??C).importNode(e,!0);S.currentNode=r;let n=S.nextNode(),o=0,l=0,c=s[0];for(;c!==void 0;){if(o===c.index){let d;c.type===2?d=new j(n,n.nextSibling,this,t):c.type===1?d=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(d=new ct(n,this,t)),this._$AV.push(d),c=s[++l]}o!==c?.index&&(n=S.nextNode(),o++)}return S.currentNode=C,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},j=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),B(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ae(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=F.createElement(kt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{let n=new ot(r,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=Rt.get(t.strings);return e===void 0&&Rt.set(t.strings,e=new F(t)),e}k(t){ut(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let n of t)r===e.length?e.push(s=new i(this.O(k()),this.O(k()),this,this.options)):s=e[r],s._$AI(n),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=Mt(t).nextSibling;Mt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},M=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,r){let n=this.strings,o=!1;if(n===void 0)t=T(this,t,e,0),o=!B(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{let l=t,c,d;for(t=n[0],c=0;c<n.length-1;c++)d=T(this,l[s+c],e,c),d===x&&(d=this._$AH[c]),o||=!B(d)||d!==this._$AH[c],d===p?t=p:t!==p&&(t+=(d??"")+n[c+1]),this._$AH[c]=d}o&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},at=class extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},ht=class extends M{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},lt=class extends M{constructor(t,e,s,r,n){super(t,e,s,r,n),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??p)===x)return;let s=this._$AH,r=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ct=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}};var le=dt.litHtmlPolyfillSupport;le?.(F,j),(dt.litHtmlVersions??=[]).push("3.3.3");var Bt=(i,t,e)=>{let s=e?.renderBefore??t,r=s._$litPart$;if(r===void 0){let n=e?.renderBefore??null;s._$litPart$=r=new j(t.insertBefore(k(),n),n,void 0,e??{})}return r._$AI(i),r};var ft=globalThis,w=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}};w._$litElement$=!0,w.finalized=!0,ft.litElementHydrateSupport?.({LitElement:w});var ce=ft.litElementPolyfillSupport;ce?.({LitElement:w});(ft.litElementVersions??=[]).push("4.2.2");var Ft=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var jt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},It=i=>(...t)=>({_$litDirective$:i,values:t}),G=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var I=class extends G{constructor(t){if(super(t),this.it=p,t.type!==jt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this._t=void 0,this.it=t;if(t===x)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};I.directiveName="unsafeHTML",I.resultType=1;var P=It(I);var H="ha-fridge-card",de=new Set(["unknown","unavailable","none"]),ue=192,pe=387,fe=["default","freezer","inverted","french_door","dual_door"];function me(i,t){let r=t/100;switch(i){case"freezer":return{freezer:{x:16,y:12,width:160,height:365}};case"default":return{freezer:{x:16,y:12,width:160,height:Math.round(365*r)},fridge:{x:16,y:12+Math.round(365*r)+2,width:160,height:Math.round(365*(1-r))-2}};case"inverted":case"french_door":return{fridge:{x:16,y:12,width:160,height:Math.round(365*(1-r))-2},freezer:{x:16,y:12+Math.round(365*(1-r)),width:160,height:Math.round(365*r)}};case"dual_door":{let n=Math.round(160*r);return{freezer:{x:12,y:12,width:n,height:365},fridge:{x:12+n+4,y:12,width:160-n,height:365}}}default:return{}}}function ge(i,t){let e=t/100,s=365,r=12,n='<rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />',o='<rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" /><rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />',l=(a,u,m,y)=>`<rect x="${a}" y="${u}" width="${m}" height="${y}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />`,c=(a,u)=>`<rect x="${a}" y="${u}" width="36" height="4" rx="2" fill="#B0B8C4" />`,d=(a,u)=>`<rect x="${a}" y="${u}" width="4" height="36" rx="2" fill="#B0B8C4" />`,f=a=>`<rect x="14" y="${a}" width="164" height="2" rx="1" fill="#D6DCE4" />`,h=a=>`<rect x="${a}" y="${r}" width="2" height="${s}" rx="1" fill="#D6DCE4" />`,g=(a,u)=>`
    <rect x="${a-20}" y="${u}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
    <rect x="${a-16}" y="${u+4}" width="32" height="20" rx="3" fill="#2C2C3A" />
    <rect x="${a-6}" y="${u+28}" width="12" height="14" rx="2" fill="#8A919A" />
    <rect x="${a-10}" y="${u+44}" width="20" height="5" rx="2" fill="#A0A8B4" />`;switch(i){case"freezer":{let u=r+Math.round(s/2)-26;return _`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${P(n+l(16,r,160,s)+d(24,r+Math.round(s/2)-18)+o+g(96,u))}
      </svg>`}case"default":{let a=Math.round(s*e),u=Math.round(s*(1-e))-2,m=r+a,y=96,U=m+2+Math.round(u/2)-26;return _`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${P(n+l(16,r,160,a)+d(24,r+Math.round(a/2)-18)+f(m)+l(16,m+2,160,u)+d(24,m+2+Math.round(u/2)-18)+o+g(y,U))}
      </svg>`}case"inverted":{let a=Math.round(s*(1-e))-2,u=Math.round(s*e),m=r+a,y=96,U=r+Math.round(a/2)-26;return _`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${P(n+l(16,r,160,a)+d(24,r+Math.round(a/2)-18)+g(y,U)+f(m)+l(16,m+2,160,u)+d(24,m+2+Math.round(u/2)-18)+o)}
      </svg>`}case"french_door":{let a=Math.round(s*(1-e))-2,u=Math.round(s*e),m=r+a,y=78;return _`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${P(n+l(16,r,y,a)+d(82,r+Math.round(a/2)-18)+g(36,r+Math.round(a/2)-26)+h(96)+l(98,r,y,a)+d(158,r+Math.round(a/2)-18)+f(m)+l(16,m+2,160,u)+c(76,m+10)+o)}
      </svg>`}case"dual_door":{let a=Math.round(160*e),u=160-a,m=12+a+4;return _`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${P(n+l(12,r,a,s)+d(m-6,r+Math.round(s/2)-18)+g(12+Math.round(a/2),r+40)+h(m-2)+l(m,r,u,s)+d(m+2,r+Math.round(s/2)-18)+o)}
      </svg>`}default:return _``}}var qt,mt,$e;qt=[Ft(H)];var z=class extends($e=w){_config;_hass;static getConfigForm(){return{schema:[{name:"title",selector:{text:{}}},{name:"show_title",selector:{select:{mode:"dropdown",options:[{value:"true",label:"Yes"},{value:"false",label:"No"}]}}},{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Freezer on top"},{value:"inverted",label:"Fridge on top"},{value:"dual_door",label:"Side by side"},{value:"french_door",label:"French door"},{value:"freezer",label:"Freezer only"}]}}},{name:"freezer_entity",selector:{entity:{domain:"sensor"}}},{name:"fridge_entity",selector:{entity:{domain:"sensor"}}},{name:"freezer_label",selector:{text:{}}},{name:"fridge_label",selector:{text:{}}},{name:"split_ratio",selector:{number:{min:20,max:80,step:1,mode:"slider",unit_of_measurement:"%"}}},{name:"card_width",selector:{number:{min:100,max:400,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"card_height",selector:{number:{min:200,max:600,step:10,mode:"slider",unit_of_measurement:"px"}}}],computeLabel:t=>{switch(t.name){case"title":return"Title";case"show_title":return"Show title";case"layout":return"Layout";case"freezer_entity":return"Freezer sensor";case"fridge_entity":return"Fridge sensor";case"freezer_label":return"Freezer label";case"fridge_label":return"Fridge label";case"split_ratio":return"Freezer / Fridge ratio";case"card_width":return"Width";case"card_height":return"Height";default:return}}}}getStubConfig(){return{type:`custom:${H}`,freezer_entity:"sensor.freezer_temperature",fridge_entity:"sensor.fridge_temperature",title:"Fridge",layout:"default"}}setConfig(t){let e=this.normalizeLayout(t.layout);this._config={title:"Fridge",...t,layout:e}}set hass(t){this._hass=t,this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 4}getGridOptions(){return{columns:6,rows:4,min_columns:4}}render(){if(!this._config)return p;let t=this.normalizeLayout(this._config.layout),e=this._config.split_ratio??30,s=me(t,e),r=this._config.show_title!=="false"&&this._config.show_title!==!1,n=!0,o=!!s.fridge,l=this.getDisplayState(this._config.freezer_entity),c=o?this.getDisplayState(this._config.fridge_entity):null,d=this.cardLabel(n,o),f=this._config.freezer_label||"Freezer",h=this._config.fridge_label||"Fridge",g=this._config.card_width||230,a=this._config.card_height||387;return _`
      <ha-card>
        <div class="card-shell">
          ${r?_`
            <div class="heading">
              <h3 class="title">${this._config.title}</h3>
            </div>
          `:p}
          <div class="body">
            <div class="fridge layout-${t}" role="img" aria-label=${d}>
              <div class="fridge-photo-frame" style="width:${g}px;height:${a}px;">
                ${ge(t,e)}
                <div class="readings">
                  ${n&&s.freezer?_`
                        <section class="reading zone-freezer"
                          style=${this.readingStyle(s.freezer)}>
                          <p class="section-label">${f}</p>
                          <div class=${this.temperatureClass(l)}>
                            <span>${l.stateText}</span>
                            ${l.unitText?_`<span class="unit">${l.unitText}</span>`:p}
                          </div>
                        </section>
                      `:p}
                  ${o&&s.fridge?_`
                        <section class="reading zone-fridge"
                          style=${this.readingStyle(s.fridge)}>
                          <p class="section-label">${h}</p>
                          <div class=${this.temperatureClass(c)}>
                            <span>${c.stateText}</span>
                            ${c.unitText?_`<span class="unit">${c.unitText}</span>`:p}
                          </div>
                        </section>
                      `:p}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `}temperatureClass(t){return t.isPlaceholder?"temperature placeholder":"temperature"}cardLabel(t,e){return t&&e?"Fridge and freezer temperatures":t?"Freezer temperature":"Fridge temperature"}normalizeLayout(t){return t&&fe.includes(t)?t:"default"}readingStyle(t){let e=(t.x+t.width/2)/ue*100,s=(t.y+20)/pe*100;return`left:${e}%;top:${s}%;`}getDisplayState(t){if(!t)return{stateText:"--",unitText:"\xB0C",isPlaceholder:!0};let e=this._hass?.states?.[t];if(!e)return{stateText:"--",unitText:"",isPlaceholder:!0};let s=e.state?.trim();if(!s||de.has(s.toLowerCase()))return{stateText:"--",unitText:"",isPlaceholder:!0};let r=Number.parseFloat(s),n=this.getUnit(e);return Number.isNaN(r)?{stateText:s,unitText:n,isPlaceholder:!1}:{stateText:new Intl.NumberFormat(void 0,{minimumFractionDigits:1,maximumFractionDigits:1}).format(r),unitText:n,isPlaceholder:!1}}getUnit(t){let e=t.attributes.unit_of_measurement;return typeof e=="string"&&e.trim()?e:"\xB0C"}static get styles(){return st`
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
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        background: rgba(255, 255, 255, 0.35);
        border: 1px solid rgba(255, 255, 255, 0.45);
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
    `}};mt=vt($e),z=At(mt,0,"HaFridgeCard",qt,z),xt(mt,1,z);customElements.get(H)||customElements.define(H,z);window.customCards=window.customCards??[];window.customCards.some(i=>i.type===H)||window.customCards.push({type:H,name:"HA Fridge Card",description:"Fridge and freezer temperatures with multiple fridge layout options.",preview:!0});})();
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

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
