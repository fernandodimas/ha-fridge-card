/* ha-fridge-card v2.0.0 */
"use strict";(()=>{var Bt=Object.create;var Z=Object.defineProperty;var Ht=Object.getOwnPropertyDescriptor;var gt=(r,t)=>(t=Symbol[r])?t:Symbol.for("Symbol."+r),D=r=>{throw TypeError(r)};var jt=(r,t,e)=>t in r?Z(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var pt=(r,t)=>Z(r,"name",{value:t,configurable:!0});var mt=r=>[,,,Bt(r?.[gt("metadata")]??null)],yt=["class","method","getter","setter","accessor","field","value","get","set"],k=r=>r!==void 0&&typeof r!="function"?D("Function expected"):r,qt=(r,t,e,s,i)=>({kind:yt[r],name:t,metadata:s,addInitializer:n=>e._?D("Already initialized"):i.push(k(n||null))}),It=(r,t)=>jt(t,gt("metadata"),r[3]),xt=(r,t,e,s)=>{for(var i=0,n=r[t>>1],o=n&&n.length;i<o;i++)t&1?n[i].call(e):s=n[i].call(e,s);return s},$t=(r,t,e,s,i,n)=>{var o,l,h,d,p,a=t&7,f=!!(t&8),u=!!(t&16),$=a>3?r.length+1:a?f?1:2:0,dt=yt[a+5],ct=a>3&&(r[$-1]=[]),Lt=r[$]||(r[$]=[]),m=a&&(!u&&!f&&(i=i.prototype),a<5&&(a>3||!u)&&Ht(a<4?i:{get[e](){return ut(this,n)},set[e](g){return ft(this,n,g)}},e));a?u&&a<4&&pt(n,(a>2?"set ":a>1?"get ":"")+e):pt(i,e);for(var V=s.length-1;V>=0;V--)d=qt(a,e,h={},r[3],Lt),a&&(d.static=f,d.private=u,p=d.access={has:u?g=>Vt(i,g):g=>e in g},a^3&&(p.get=u?g=>(a^1?ut:Wt)(g,i,a^4?n:m.get):g=>g[e]),a>2&&(p.set=u?(g,W)=>ft(g,i,W,a^4?n:m.set):(g,W)=>g[e]=W)),l=(0,s[V])(a?a<4?u?n:m[dt]:a>4?void 0:{get:m.get,set:m.set}:i,d),h._=1,a^4||l===void 0?k(l)&&(a>4?ct.unshift(l):a?u?n=l:m[dt]=l:i=l):typeof l!="object"||l===null?D("Object expected"):(k(o=l.get)&&(m.get=o),k(o=l.set)&&(m.set=o),k(o=l.init)&&ct.unshift(o));return a||It(r,i),m&&Z(i,e,m),u?a^4?n:m:i};var Y=(r,t,e)=>t.has(r)||D("Cannot "+e),Vt=(r,t)=>Object(t)!==t?D('Cannot use the "in" operator on this value'):r.has(t),ut=(r,t,e)=>(Y(r,t,"read from private field"),e?e.call(r):t.get(r));var ft=(r,t,e,s)=>(Y(r,t,"write to private field"),s?s.call(r,e):t.set(r,e),e),Wt=(r,t,e)=>(Y(r,t,"access private method"),e);var L=globalThis,B=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),_t=new WeakMap,U=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(B&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=_t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&_t.set(e,t))}return t}toString(){return this.cssText}},vt=r=>new U(typeof r=="string"?r:r+"",void 0,K),G=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new U(e,r,K)},wt=(r,t)=>{if(B)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=L.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},J=B?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return vt(e)})(r):r;var{is:Zt,defineProperty:Yt,getOwnPropertyDescriptor:Kt,getOwnPropertyNames:Gt,getOwnPropertySymbols:Jt,getPrototypeOf:Xt}=Object,j=globalThis,At=j.trustedTypes,Qt=At?At.emptyScript:"",te=j.reactiveElementPolyfillSupport,O=(r,t)=>r,H={toAttribute(r,t){switch(t){case Boolean:r=r?Qt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},X=(r,t)=>!Zt(r,t),bt={attribute:!0,type:String,converter:H,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;var x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=bt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Yt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:n}=Kt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let l=i?.call(this);n?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??bt}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;let t=Xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){let e=this.properties,s=[...Gt(e),...Jt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(J(i))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:H).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:H;this._$Em=i;let l=o.fromAttribute(e,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(t!==void 0){let o=this.constructor;if(i===!1&&(n=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??X)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:o}=n,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[O("elementProperties")]=new Map,x[O("finalized")]=new Map,te?.({ReactiveElement:x}),(j.reactiveElementVersions??=[]).push("2.1.2");var nt=globalThis,Ct=r=>r,q=nt.trustedTypes,Et=q?q.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ut="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,Ot="?"+_,ee=`<${Ot}>`,b=document,F=()=>b.createComment(""),R=r=>r===null||typeof r!="object"&&typeof r!="function",ot=Array.isArray,se=r=>ot(r)||typeof r?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,St=/-->/g,Pt=/>/g,w=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tt=/'/g,kt=/"/g,zt=/^(?:script|style|textarea|title)$/i,at=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),y=at(1),xe=at(2),$e=at(3),C=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),Dt=new WeakMap,A=b.createTreeWalker(b,129);function Ft(r,t){if(!ot(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Et!==void 0?Et.createHTML(t):t}var re=(r,t)=>{let e=r.length-1,s=[],i,n=t===2?"<svg>":t===3?"<math>":"",o=z;for(let l=0;l<e;l++){let h=r[l],d,p,a=-1,f=0;for(;f<h.length&&(o.lastIndex=f,p=o.exec(h),p!==null);)f=o.lastIndex,o===z?p[1]==="!--"?o=St:p[1]!==void 0?o=Pt:p[2]!==void 0?(zt.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=w):p[3]!==void 0&&(o=w):o===w?p[0]===">"?(o=i??z,a=-1):p[1]===void 0?a=-2:(a=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?w:p[3]==='"'?kt:Tt):o===kt||o===Tt?o=w:o===St||o===Pt?o=z:(o=w,i=void 0);let u=o===w&&r[l+1].startsWith("/>")?" ":"";n+=o===z?h+ee:a>=0?(s.push(d),h.slice(0,a)+Ut+h.slice(a)+_+u):h+_+(a===-2?l:u)}return[Ft(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},N=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0,l=t.length-1,h=this.parts,[d,p]=re(t,e);if(this.el=r.createElement(d,s),A.currentNode=this.el.content,e===2||e===3){let a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=A.nextNode())!==null&&h.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let a of i.getAttributeNames())if(a.endsWith(Ut)){let f=p[o++],u=i.getAttribute(a).split(_),$=/([.?@])?(.*)/.exec(f);h.push({type:1,index:n,name:$[2],strings:u,ctor:$[1]==="."?et:$[1]==="?"?st:$[1]==="@"?rt:S}),i.removeAttribute(a)}else a.startsWith(_)&&(h.push({type:6,index:n}),i.removeAttribute(a));if(zt.test(i.tagName)){let a=i.textContent.split(_),f=a.length-1;if(f>0){i.textContent=q?q.emptyScript:"";for(let u=0;u<f;u++)i.append(a[u],F()),A.nextNode(),h.push({type:2,index:++n});i.append(a[f],F())}}}else if(i.nodeType===8)if(i.data===Ot)h.push({type:2,index:n});else{let a=-1;for(;(a=i.data.indexOf(_,a+1))!==-1;)h.push({type:7,index:n}),a+=_.length-1}n++}}static createElement(t,e){let s=b.createElement("template");return s.innerHTML=t,s}};function E(r,t,e=r,s){if(t===C)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,n=R(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=E(r,i._$AS(r,t.values),i,s)),t}var tt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??b).importNode(e,!0);A.currentNode=i;let n=A.nextNode(),o=0,l=0,h=s[0];for(;h!==void 0;){if(o===h.index){let d;h.type===2?d=new M(n,n.nextSibling,this,t):h.type===1?d=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(d=new it(n,this,t)),this._$AV.push(d),h=s[++l]}o!==h?.index&&(n=A.nextNode(),o++)}return A.currentNode=b,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},M=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),R(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):se(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(Ft(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new tt(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=Dt.get(t.strings);return e===void 0&&Dt.set(t.strings,e=new N(t)),e}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new r(this.O(F()),this.O(F()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=Ct(t).nextSibling;Ct(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},S=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){let n=this.strings,o=!1;if(n===void 0)t=E(this,t,e,0),o=!R(t)||t!==this._$AH&&t!==C,o&&(this._$AH=t);else{let l=t,h,d;for(t=n[0],h=0;h<n.length-1;h++)d=E(this,l[s+h],e,h),d===C&&(d=this._$AH[h]),o||=!R(d)||d!==this._$AH[h],d===c?t=c:t!==c&&(t+=(d??"")+n[h+1]),this._$AH[h]=d}o&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},et=class extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}},st=class extends S{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}},rt=class extends S{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??c)===C)return;let s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var ie=nt.litHtmlPolyfillSupport;ie?.(N,M),(nt.litHtmlVersions??=[]).push("3.3.3");var Rt=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let n=e?.renderBefore??null;s._$litPart$=i=new M(t.insertBefore(F(),n),n,void 0,e??{})}return i._$AI(r),i};var ht=globalThis,v=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};v._$litElement$=!0,v.finalized=!0,ht.litElementHydrateSupport?.({LitElement:v});var ne=ht.litElementPolyfillSupport;ne?.({LitElement:v});(ht.litElementVersions??=[]).push("4.2.2");var Nt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var T="ha-fridge-card",oe=new Set(["unknown","unavailable","none"]),ae=192,he=387,le=["default","freezer","inverted","dual_door"],de={default:{freezer:{x:10,y:8,width:172,height:108},fridge:{x:10,y:124,width:172,height:253}},freezer:{freezer:{x:10,y:8,width:172,height:371}},inverted:{freezer:{x:10,y:269,width:172,height:108},fridge:{x:10,y:8,width:172,height:253}},dual_door:{freezer:{x:10,y:269,width:172,height:108},fridge:{x:10,y:8,width:172,height:253}}},ce={default:y`
    <svg class="fridge-svg" viewBox="0 0 192 387" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
      <rect x="10" y="8" width="172" height="108" rx="10" fill="#F4F6F8" />
      <rect x="10" y="8" width="172" height="108" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="26" y="38" width="6" height="48" rx="3" fill="#B8C2CC" />
      <line x1="10" y1="120" x2="182" y2="120" stroke="#BCC5CF" stroke-width="1.5" />
      <rect x="10" y="124" width="172" height="253" rx="10" fill="#F7F9FB" />
      <rect x="10" y="124" width="172" height="253" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="26" y="194" width="6" height="60" rx="3" fill="#B8C2CC" />
    </svg>
  `,freezer:y`
    <svg class="fridge-svg" viewBox="0 0 192 387" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
      <rect x="10" y="8" width="172" height="371" rx="10" fill="#edf1f5" />
      <rect x="10" y="8" width="172" height="371" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="26" y="140" width="6" height="70" rx="3" fill="#B8C2CC" />
    </svg>
  `,inverted:y`
    <svg class="fridge-svg" viewBox="0 0 192 387" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
      <rect x="10" y="8" width="172" height="253" rx="10" fill="#F7F9FB" />
      <rect x="10" y="8" width="172" height="253" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="26" y="80" width="6" height="60" rx="3" fill="#B8C2CC" />
      <line x1="10" y1="265" x2="182" y2="265" stroke="#BCC5CF" stroke-width="1.5" />
      <rect x="10" y="269" width="172" height="108" rx="10" fill="#F4F6F8" />
      <rect x="10" y="269" width="172" height="108" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="26" y="299" width="6" height="48" rx="3" fill="#B8C2CC" />
    </svg>
  `,dual_door:y`
    <svg class="fridge-svg" viewBox="0 0 192 387" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
      <rect x="10" y="8" width="84" height="253" rx="10" fill="#F7F9FB" />
      <rect x="10" y="8" width="84" height="253" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="82" y="80" width="6" height="60" rx="3" fill="#B8C2CC" />
      <rect x="98" y="8" width="84" height="253" rx="10" fill="#F7F9FB" />
      <rect x="98" y="8" width="84" height="253" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="104" y="80" width="6" height="60" rx="3" fill="#B8C2CC" />
      <line x1="10" y1="265" x2="182" y2="265" stroke="#BCC5CF" stroke-width="1.5" />
      <rect x="10" y="269" width="172" height="108" rx="10" fill="#F4F6F8" />
      <rect x="10" y="269" width="172" height="108" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="26" y="299" width="6" height="48" rx="3" fill="#B8C2CC" />
    </svg>
  `},Mt,lt,pe;Mt=[Nt(T)];var P=class extends(pe=v){_config;_hass;static getConfigForm(){return{schema:[{name:"title",selector:{text:{}}},{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Freezer on top"},{value:"inverted",label:"Fridge on top"},{value:"dual_door",label:"French door"},{value:"freezer",label:"Freezer only"}]}}},{name:"freezer_entity",selector:{entity:{domain:"sensor"}}},{name:"fridge_entity",selector:{entity:{domain:"sensor"}}}],computeLabel:t=>{switch(t.name){case"title":return"Title";case"layout":return"Layout";case"freezer_entity":return"Freezer sensor";case"fridge_entity":return"Fridge sensor";default:return}}}}getStubConfig(){return{type:`custom:${T}`,freezer_entity:"sensor.freezer_temperature",fridge_entity:"sensor.fridge_temperature",title:"Fridge",layout:"default"}}setConfig(t){let e=this.normalizeLayout(t.layout);this._config={title:"Fridge",...t,layout:e}}set hass(t){this._hass=t,this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 4}render(){if(!this._config)return c;let t=this.normalizeLayout(this._config.layout),e=de[t],s=!0,i=!!e.fridge,n=this.getDisplayState(this._config.freezer_entity),o=i?this.getDisplayState(this._config.fridge_entity):null,l=this.cardLabel(s,i);return y`
      <ha-card>
        <div class="card-shell">
          <div class="heading">
            <h3 class="title">${this._config.title}</h3>
          </div>

          <div class="body">
            <div class="fridge layout-${t}" role="img" aria-label=${l}>
              <div class="fridge-photo-frame">
                ${ce[t]}

                <div class="readings">
                  ${s&&e.freezer?y`
                        <section class="reading zone-freezer" style=${this.readingStyle(e.freezer)}>
                          <p class="section-label">Freezer</p>
                          <div class=${this.temperatureClass(n)}>
                            <span>${n.stateText}</span>
                            ${n.unitText?y`<span class="unit">${n.unitText}</span>`:c}
                          </div>
                        </section>
                      `:c}

                  ${i&&e.fridge?y`
                        <section class="reading zone-fridge" style=${this.readingStyle(e.fridge)}>
                          <p class="section-label">Fridge</p>
                          <div class=${this.temperatureClass(o)}>
                            <span>${o.stateText}</span>
                            ${o.unitText?y`<span class="unit">${o.unitText}</span>`:c}
                          </div>
                        </section>
                      `:c}
                </div>
              </div>

              <div class="feet" aria-hidden="true">
                <span class="foot"></span>
                <span class="foot"></span>
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `}temperatureClass(t){return t.isPlaceholder?"temperature placeholder":"temperature"}normalizeLayout(t){return t&&le.includes(t)?t:"default"}readingStyle(t){if(!t)return"";let e=(t.x+t.width/2)/ae*100,s=(t.y+t.height/2)/he*100;return`left:${e}%;top:${s}%;`}getDisplayState(t){if(!t)return{stateText:"--",unitText:"\xB0C",isPlaceholder:!0};let e=this._hass?.states?.[t];if(!e)return{stateText:"--",unitText:"",isPlaceholder:!0};let s=e.state?.trim();if(!s||oe.has(s.toLowerCase()))return{stateText:"--",unitText:"",isPlaceholder:!0};let i=Number.parseFloat(s),n=this.getUnit(e);return Number.isNaN(i)?{stateText:s,unitText:n,isPlaceholder:!1}:{stateText:new Intl.NumberFormat(void 0,{minimumFractionDigits:1,maximumFractionDigits:1}).format(i),unitText:n,isPlaceholder:!1}}getUnit(t){let e=t.attributes.unit_of_measurement;return typeof e=="string"&&e.trim()?e:"\xB0C"}cardLabel(t,e){return t&&e?"Fridge and freezer temperatures":t?"Freezer temperature":e?"Fridge temperature":"Fridge card"}static get styles(){return G`
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

      .feet {
        display: flex;
        justify-content: space-between;
        padding: 0 12px;
        margin-top: -2px;
        pointer-events: none;
      }

      .foot {
        width: 20px;
        height: 6px;
        border-radius: 0 0 6px 6px;
        background: linear-gradient(180deg, rgba(173, 182, 193, 0.98), rgba(120, 129, 140, 0.92));
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.55),
          0 1px 2px rgba(0, 0, 0, 0.2);
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
    `}};lt=mt(pe),P=$t(lt,0,"HaFridgeCard",Mt,P),xt(lt,1,P);customElements.get(T)||customElements.define(T,P);window.customCards=window.customCards??[];window.customCards.some(r=>r.type===T)||window.customCards.push({type:T,name:"HA Fridge Card",description:"Fridge and freezer temperatures with multiple fridge layout options.",preview:!0});})();
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
