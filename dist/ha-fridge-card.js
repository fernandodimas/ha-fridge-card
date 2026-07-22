"use strict";(()=>{var Dt=Object.create;var Y=Object.defineProperty;var Bt=Object.getOwnPropertyDescriptor;var gt=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),z=i=>{throw TypeError(i)};var jt=(i,t,e)=>t in i?Y(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ut=(i,t)=>Y(i,"name",{value:t,configurable:!0});var mt=i=>[,,,Dt(i?.[gt("metadata")]??null)],$t=["class","method","getter","setter","accessor","field","value","get","set"],T=i=>i!==void 0&&typeof i!="function"?z("Function expected"):i,qt=(i,t,e,s,r)=>({kind:$t[i],name:t,metadata:s,addInitializer:n=>e._?z("Already initialized"):r.push(T(n||null))}),It=(i,t)=>jt(t,gt("metadata"),i[3]),_t=(i,t,e,s)=>{for(var r=0,n=i[t>>1],a=n&&n.length;r<a;r++)t&1?n[r].call(e):s=n[r].call(e,s);return s},yt=(i,t,e,s,r,n)=>{var a,l,c,u,h,o=t&7,d=!!(t&8),p=!!(t&16),_=o>3?i.length+1:o?d?1:2:0,ct=$t[o+5],dt=o>3&&(i[_-1]=[]),kt=i[_]||(i[_]=[]),$=o&&(!p&&!d&&(r=r.prototype),o<5&&(o>3||!p)&&Bt(o<4?r:{get[e](){return pt(this,n)},set[e](m){return ft(this,n,m)}},e));o?p&&o<4&&ut(n,(o>2?"set ":o>1?"get ":"")+e):ut(r,e);for(var W=s.length-1;W>=0;W--)u=qt(o,e,c={},i[3],kt),o&&(u.static=d,u.private=p,h=u.access={has:p?m=>Wt(r,m):m=>e in m},o^3&&(h.get=p?m=>(o^1?pt:Vt)(m,r,o^4?n:$.get):m=>m[e]),o>2&&(h.set=p?(m,V)=>ft(m,r,V,o^4?n:$.set):(m,V)=>m[e]=V)),l=(0,s[W])(o?o<4?p?n:$[ct]:o>4?void 0:{get:$.get,set:$.set}:r,u),c._=1,o^4||l===void 0?T(l)&&(o>4?dt.unshift(l):o?p?n=l:$[ct]=l:r=l):typeof l!="object"||l===null?z("Object expected"):(T(a=l.get)&&($.get=a),T(a=l.set)&&($.set=a),T(a=l.init)&&dt.unshift(a));return o||It(i,r),$&&Y(r,e,$),p?o^4?n:$:r};var Z=(i,t,e)=>t.has(i)||z("Cannot "+e),Wt=(i,t)=>Object(t)!==t?z('Cannot use the "in" operator on this value'):i.has(t),pt=(i,t,e)=>(Z(i,t,"read from private field"),e?e.call(i):t.get(i));var ft=(i,t,e,s)=>(Z(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),Vt=(i,t,e)=>(Z(i,t,"access private method"),e);var k=globalThis,D=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),bt=new WeakMap,F=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(D&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=bt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&bt.set(e,t))}return t}toString(){return this.cssText}},vt=i=>new F(typeof i=="string"?i:i+"",void 0,K),G=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((s,r,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new F(e,i,K)},xt=(i,t)=>{if(D)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=k.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},J=D?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return vt(e)})(i):i;var{is:Yt,defineProperty:Zt,getOwnPropertyDescriptor:Kt,getOwnPropertyNames:Gt,getOwnPropertySymbols:Jt,getPrototypeOf:Xt}=Object,j=globalThis,At=j.trustedTypes,Qt=At?At.emptyScript:"",te=j.reactiveElementPolyfillSupport,U=(i,t)=>i,B={toAttribute(i,t){switch(t){case Boolean:i=i?Qt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},X=(i,t)=>!Yt(i,t),wt={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=wt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Zt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:n}=Kt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:r,set(a){let l=r?.call(this);n?.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??wt}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let t=Xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let e=this.properties,s=[...Gt(e),...Jt(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(J(r))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:B).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let n=s.getPropertyOptions(r),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:B;this._$Em=r;let l=a.fromAttribute(e,n.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(t,e,s,r=!1,n){if(t!==void 0){let a=this.constructor;if(r===!1&&(n=this[t]),s??=a.getPropertyOptions(t),!((s.hasChanged??X)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:n},a){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,n]of s){let{wrapped:a}=n,l=this[r];a!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,n,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[U("elementProperties")]=new Map,y[U("finalized")]=new Map,te?.({ReactiveElement:y}),(j.reactiveElementVersions??=[]).push("2.1.2");var nt=globalThis,St=i=>i,q=nt.trustedTypes,Et=q?q.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ft="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,Ut="?"+b,ee=`<${Ut}>`,w=document,O=()=>w.createComment(""),R=i=>i===null||typeof i!="object"&&typeof i!="function",ot=Array.isArray,se=i=>ot(i)||typeof i?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ct=/-->/g,Mt=/>/g,x=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pt=/'/g,Tt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,at=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),g=at(1),_e=at(2),ye=at(3),S=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),zt=new WeakMap,A=w.createTreeWalker(w,129);function Ot(i,t){if(!ot(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Et!==void 0?Et.createHTML(t):t}var re=(i,t)=>{let e=i.length-1,s=[],r,n=t===2?"<svg>":t===3?"<math>":"",a=H;for(let l=0;l<e;l++){let c=i[l],u,h,o=-1,d=0;for(;d<c.length&&(a.lastIndex=d,h=a.exec(c),h!==null);)d=a.lastIndex,a===H?h[1]==="!--"?a=Ct:h[1]!==void 0?a=Mt:h[2]!==void 0?(Ht.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=x):h[3]!==void 0&&(a=x):a===x?h[0]===">"?(a=r??H,o=-1):h[1]===void 0?o=-2:(o=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?x:h[3]==='"'?Tt:Pt):a===Tt||a===Pt?a=x:a===Ct||a===Mt?a=H:(a=x,r=void 0);let p=a===x&&i[l+1].startsWith("/>")?" ":"";n+=a===H?c+ee:o>=0?(s.push(u),c.slice(0,o)+Ft+c.slice(o)+b+p):c+b+(o===-2?l:p)}return[Ot(i,n+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},N=class i{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let n=0,a=0,l=t.length-1,c=this.parts,[u,h]=re(t,e);if(this.el=i.createElement(u,s),A.currentNode=this.el.content,e===2||e===3){let o=this.el.content.firstChild;o.replaceWith(...o.childNodes)}for(;(r=A.nextNode())!==null&&c.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let o of r.getAttributeNames())if(o.endsWith(Ft)){let d=h[a++],p=r.getAttribute(o).split(b),_=/([.?@])?(.*)/.exec(d);c.push({type:1,index:n,name:_[2],strings:p,ctor:_[1]==="."?et:_[1]==="?"?st:_[1]==="@"?rt:C}),r.removeAttribute(o)}else o.startsWith(b)&&(c.push({type:6,index:n}),r.removeAttribute(o));if(Ht.test(r.tagName)){let o=r.textContent.split(b),d=o.length-1;if(d>0){r.textContent=q?q.emptyScript:"";for(let p=0;p<d;p++)r.append(o[p],O()),A.nextNode(),c.push({type:2,index:++n});r.append(o[d],O())}}}else if(r.nodeType===8)if(r.data===Ut)c.push({type:2,index:n});else{let o=-1;for(;(o=r.data.indexOf(b,o+1))!==-1;)c.push({type:7,index:n}),o+=b.length-1}n++}}static createElement(t,e){let s=w.createElement("template");return s.innerHTML=t,s}};function E(i,t,e=i,s){if(t===S)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl,n=R(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=r:e._$Cl=r),r!==void 0&&(t=E(i,r._$AS(i,t.values),r,s)),t}var tt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??w).importNode(e,!0);A.currentNode=r;let n=A.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new L(n,n.nextSibling,this,t):c.type===1?u=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(u=new it(n,this,t)),this._$AV.push(u),c=s[++l]}a!==c?.index&&(n=A.nextNode(),a++)}return A.currentNode=w,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},L=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),R(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):se(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(Ot(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{let n=new tt(r,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=zt.get(t.strings);return e===void 0&&zt.set(t.strings,e=new N(t)),e}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let n of t)r===e.length?e.push(s=new i(this.O(O()),this.O(O()),this,this.options)):s=e[r],s._$AI(n),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=St(t).nextSibling;St(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},C=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,r){let n=this.strings,a=!1;if(n===void 0)t=E(this,t,e,0),a=!R(t)||t!==this._$AH&&t!==S,a&&(this._$AH=t);else{let l=t,c,u;for(t=n[0],c=0;c<n.length-1;c++)u=E(this,l[s+c],e,c),u===S&&(u=this._$AH[c]),a||=!R(u)||u!==this._$AH[c],u===f?t=f:t!==f&&(t+=(u??"")+n[c+1]),this._$AH[c]=u}a&&!r&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},et=class extends C{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},st=class extends C{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},rt=class extends C{constructor(t,e,s,r,n){super(t,e,s,r,n),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??f)===S)return;let s=this._$AH,r=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==f&&(s===f||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var ie=nt.litHtmlPolyfillSupport;ie?.(N,L),(nt.litHtmlVersions??=[]).push("3.3.3");var Rt=(i,t,e)=>{let s=e?.renderBefore??t,r=s._$litPart$;if(r===void 0){let n=e?.renderBefore??null;s._$litPart$=r=new L(t.insertBefore(O(),n),n,void 0,e??{})}return r._$AI(i),r};var ht=globalThis,v=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};v._$litElement$=!0,v.finalized=!0,ht.litElementHydrateSupport?.({LitElement:v});var ne=ht.litElementPolyfillSupport;ne?.({LitElement:v});(ht.litElementVersions??=[]).push("4.2.2");var Nt=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var P="ha-fridge-card",oe=new Set(["unknown","unavailable","none"]),ae=192,he=387,le=["default","freezer","inverted","french_door","dual_door"];function ce(i,t){let r=t/100;switch(i){case"freezer":return{freezer:{x:10,y:8,width:172,height:371}};case"default":return{freezer:{x:10,y:8,width:172,height:Math.round(371*r)},fridge:{x:10,y:8+Math.round(371*r)+4,width:172,height:Math.round(371*(1-r))-4}};case"inverted":case"french_door":return{fridge:{x:10,y:8,width:172,height:Math.round(371*(1-r))-4},freezer:{x:10,y:8+Math.round(371*(1-r)),width:172,height:Math.round(371*r)}};case"dual_door":{let n=Math.round(172*r);return{freezer:{x:8,y:8,width:n,height:371},fridge:{x:8+n+2,y:8,width:172-n-2,height:371}}}default:return{}}}function de(i,t,e){let s=t/100,r=371,n=8,a=g`<rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />`,l=(h,o)=>g`<rect x="${h}" y="${o}" width="6" height="48" rx="3" fill="#B8C2CC" />`,c=(h,o,d,p)=>g`<line x1="${h}" y1="${o}" x2="${d}" y2="${p}" stroke="#BCC5CF" stroke-width="1.5" />`,u=(h,o)=>g`
    <rect x="${h}" y="${o}" width="36" height="46" rx="4" fill="#D0D5DC" />
    <rect x="${h+4}" y="${o+4}" width="28" height="18" rx="3" fill="#1a1a2e" />
    <rect x="${h+13}" y="${o+26}" width="10" height="14" rx="2" fill="#8A919A" />
    <rect x="${h+10}" y="${o+40}" width="16" height="4" rx="2" fill="#B8C2CC" />`;switch(i){case"freezer":{let h=r,o=10+Math.round(172/2)-18;return g`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="10" y="${n}" width="172" height="${h}" rx="10" fill="#F4F6F8" />
        ${l(26,n+Math.round(h/2)+30)}
        ${e?u(o,n+Math.round(h/2)-46):f}
      </svg>`}case"default":{let h=Math.round(r*s),o=Math.round(r*(1-s))-4,d=n+h,p=10+Math.round(172/2)-18;return g`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="10" y="${n}" width="172" height="${h}" rx="10" fill="#F4F6F8" />
        ${l(26,n+Math.round(h/2)-24)}
        ${c(10,d,182,d)}
        <rect x="10" y="${d+4}" width="172" height="${o}" rx="10" fill="#F7F9FB" />
        ${l(26,d+4+Math.round(o/2)-30)}
        ${e?u(p,d+4+Math.round(o/2)-23):f}
      </svg>`}case"inverted":{let h=Math.round(r*(1-s))-4,o=Math.round(r*s),d=n+h,p=10+Math.round(172/2)-18;return g`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="10" y="${n}" width="172" height="${h}" rx="10" fill="#F7F9FB" />
        ${l(26,n+Math.round(h/2)-30)}
        ${e?u(p,n+Math.round(h/2)-23):f}
        ${c(10,d,182,d)}
        <rect x="10" y="${d+4}" width="172" height="${o}" rx="10" fill="#F4F6F8" />
        ${l(26,d+4+Math.round(o/2)-24)}
      </svg>`}case"french_door":{let h=Math.round(r*(1-s))-4,o=Math.round(r*s),d=n+h,p=82;return g`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="10" y="${n}" width="${p}" height="${h}" rx="10" fill="#F7F9FB" />
        ${l(80,n+Math.round(h/2)-24)}
        ${e?u(10+Math.round(p/2)-18,n+Math.round(h/2)-23):f}
        <rect x="${10+p+8}" y="${n}" width="${p}" height="${h}" rx="10" fill="#F7F9FB" />
        ${l(10+p+6,n+Math.round(h/2)-24)}
        ${c(10,d,182,d)}
        <rect x="10" y="${d+4}" width="172" height="${o}" rx="10" fill="#F4F6F8" />
        ${l(26,d+4+Math.round(o/2)-24)}
      </svg>`}case"dual_door":{let h=Math.round(172*s),o=172-h-2,d=8+h+2;return g`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        ${a}
        <rect x="8" y="${n}" width="${h}" height="${r}" rx="10" fill="#F4F6F8" />
        ${l(8+Math.round(h/2)-3,n+Math.round(r/2)+40)}
        ${e?u(8+Math.round(h/2)-18,n+40):f}
        ${c(d-1,n,d-1,n+r)}
        <rect x="${d}" y="${n}" width="${o}" height="${r}" rx="10" fill="#F7F9FB" />
        ${l(d+Math.round(o/2)-3,n+Math.round(r/2)-25)}
      </svg>`}default:return g``}}var Lt,lt,ue;Lt=[Nt(P)];var M=class extends(ue=v){_config;_hass;static getConfigForm(){return{schema:[{name:"title",selector:{text:{}}},{name:"show_title",selector:{boolean:{}}},{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Freezer on top"},{value:"inverted",label:"Fridge on top"},{value:"dual_door",label:"Side by side (40/60)"},{value:"french_door",label:"French door"},{value:"freezer",label:"Freezer only"}]}}},{name:"freezer_entity",selector:{entity:{domain:"sensor"}}},{name:"fridge_entity",selector:{entity:{domain:"sensor"}}},{name:"freezer_label",selector:{text:{}}},{name:"fridge_label",selector:{text:{}}},{name:"show_dispenser",selector:{boolean:{}}},{name:"split_ratio",selector:{number:{min:20,max:80,step:1,mode:"slider",unit_of_measurement:"%"}}},{name:"card_width",selector:{number:{min:100,max:400,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"card_height",selector:{number:{min:200,max:600,step:10,mode:"slider",unit_of_measurement:"px"}}}],computeLabel:t=>{switch(t.name){case"title":return"Title";case"show_title":return"Show title";case"layout":return"Layout";case"freezer_entity":return"Freezer sensor";case"fridge_entity":return"Fridge sensor";case"freezer_label":return"Freezer label";case"fridge_label":return"Fridge label";case"show_dispenser":return"Show ice dispenser";case"split_ratio":return"Freezer / Fridge ratio";case"card_width":return"Width";case"card_height":return"Height";default:return}}}}getStubConfig(){return{type:`custom:${P}`,freezer_entity:"sensor.freezer_temperature",fridge_entity:"sensor.fridge_temperature",title:"Fridge",layout:"default"}}setConfig(t){let e=this.normalizeLayout(t.layout);this._config={title:"Fridge",...t,layout:e}}set hass(t){this._hass=t,this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 4}getGridOptions(){return{columns:6,rows:4,min_columns:4}}render(){if(!this._config)return f;let t=this.normalizeLayout(this._config.layout),e=this._config.split_ratio??30,s=ce(t,e),r=this._config.show_title!==!1,n=this._config.show_dispenser===!0,a=!0,l=!!s.fridge,c=this.getDisplayState(this._config.freezer_entity),u=l?this.getDisplayState(this._config.fridge_entity):null,h=this.cardLabel(a,l),o=this._config.freezer_label||"Freezer",d=this._config.fridge_label||"Fridge",p=this._config.card_width||230,_=this._config.card_height||387;return g`
      <ha-card>
        <div class="card-shell">
          ${r?g`
            <div class="heading">
              <h3 class="title">${this._config.title}</h3>
            </div>
          `:f}
          <div class="body">
            <div class="fridge layout-${t}" role="img" aria-label=${h}>
              <div class="fridge-photo-frame" style="width:${p}px;height:${_}px;">
                ${de(t,e,n)}
                <div class="readings">
                  ${a&&s.freezer?g`
                        <section class="reading zone-freezer"
                          style=${this.readingStyle(s.freezer)}>
                          <p class="section-label">${o}</p>
                          <div class=${this.temperatureClass(c)}>
                            <span>${c.stateText}</span>
                            ${c.unitText?g`<span class="unit">${c.unitText}</span>`:f}
                          </div>
                        </section>
                      `:f}
                  ${l&&s.fridge?g`
                        <section class="reading zone-fridge"
                          style=${this.readingStyle(s.fridge)}>
                          <p class="section-label">${d}</p>
                          <div class=${this.temperatureClass(u)}>
                            <span>${u.stateText}</span>
                            ${u.unitText?g`<span class="unit">${u.unitText}</span>`:f}
                          </div>
                        </section>
                      `:f}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `}temperatureClass(t){return t.isPlaceholder?"temperature placeholder":"temperature"}cardLabel(t,e){return t&&e?"Fridge and freezer temperatures":t?"Freezer temperature":"Fridge temperature"}normalizeLayout(t){return t&&le.includes(t)?t:"default"}readingStyle(t){let e=(t.x+t.width/2)/ae*100,s=(t.y+t.height/2)/he*100;return`left:${e}%;top:${s}%;`}getDisplayState(t){if(!t)return{stateText:"--",unitText:"\xB0C",isPlaceholder:!0};let e=this._hass?.states?.[t];if(!e)return{stateText:"--",unitText:"",isPlaceholder:!0};let s=e.state?.trim();if(!s||oe.has(s.toLowerCase()))return{stateText:"--",unitText:"",isPlaceholder:!0};let r=Number.parseFloat(s),n=this.getUnit(e);return Number.isNaN(r)?{stateText:s,unitText:n,isPlaceholder:!1}:{stateText:new Intl.NumberFormat(void 0,{minimumFractionDigits:1,maximumFractionDigits:1}).format(r),unitText:n,isPlaceholder:!1}}getUnit(t){let e=t.attributes.unit_of_measurement;return typeof e=="string"&&e.trim()?e:"\xB0C"}static get styles(){return G`
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
    `}};lt=mt(ue),M=yt(lt,0,"HaFridgeCard",Lt,M),_t(lt,1,M);customElements.get(P)||customElements.define(P,M);window.customCards=window.customCards??[];window.customCards.some(i=>i.type===P)||window.customCards.push({type:P,name:"HA Fridge Card",description:"Fridge and freezer temperatures with multiple fridge layout options.",preview:!0});})();
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
