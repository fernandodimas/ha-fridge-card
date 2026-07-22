"use strict";(()=>{var He=Object.create;var G=Object.defineProperty;var Me=Object.getOwnPropertyDescriptor;var ge=(r,e)=>(e=Symbol[r])?e:Symbol.for("Symbol."+r),z=r=>{throw TypeError(r)};var je=(r,e,t)=>e in r?G(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ue=(r,e)=>G(r,"name",{value:e,configurable:!0});var me=r=>[,,,He(r?.[ge("metadata")]??null)],ye=["class","method","getter","setter","accessor","field","value","get","set"],F=r=>r!==void 0&&typeof r!="function"?z("Function expected"):r,qe=(r,e,t,s,i)=>({kind:ye[r],name:e,metadata:s,addInitializer:n=>t._?z("Already initialized"):i.push(F(n||null))}),Ie=(r,e)=>je(e,ge("metadata"),r[3]),_e=(r,e,t,s)=>{for(var i=0,n=r[e>>1],o=n&&n.length;i<o;i++)e&1?n[i].call(t):s=n[i].call(t,s);return s},$e=(r,e,t,s,i,n)=>{var o,l,h,c,u,a=e&7,f=!!(e&8),p=!!(e&16),$=a>3?r.length+1:a?f?1:2:0,ce=ye[a+5],de=a>3&&(r[$-1]=[]),Be=r[$]||(r[$]=[]),m=a&&(!p&&!f&&(i=i.prototype),a<5&&(a>3||!p)&&Me(a<4?i:{get[t](){return pe(this,n)},set[t](g){return fe(this,n,g)}},t));a?p&&a<4&&ue(n,(a>2?"set ":a>1?"get ":"")+t):ue(i,t);for(var V=s.length-1;V>=0;V--)c=qe(a,t,h={},r[3],Be),a&&(c.static=f,c.private=p,u=c.access={has:p?g=>Ve(i,g):g=>t in g},a^3&&(u.get=p?g=>(a^1?pe:We)(g,i,a^4?n:m.get):g=>g[t]),a>2&&(u.set=p?(g,W)=>fe(g,i,W,a^4?n:m.set):(g,W)=>g[t]=W)),l=(0,s[V])(a?a<4?p?n:m[ce]:a>4?void 0:{get:m.get,set:m.set}:i,c),h._=1,a^4||l===void 0?F(l)&&(a>4?de.unshift(l):a?p?n=l:m[ce]=l:i=l):typeof l!="object"||l===null?z("Object expected"):(F(o=l.get)&&(m.get=o),F(o=l.set)&&(m.set=o),F(o=l.init)&&de.unshift(o));return a||Ie(r,i),m&&G(i,t,m),p?a^4?n:m:i};var K=(r,e,t)=>e.has(r)||z("Cannot "+t),Ve=(r,e)=>Object(e)!==e?z('Cannot use the "in" operator on this value'):r.has(e),pe=(r,e,t)=>(K(r,e,"read from private field"),t?t.call(r):e.get(r));var fe=(r,e,t,s)=>(K(r,e,"write to private field"),s?s.call(r,t):e.set(r,t),t),We=(r,e,t)=>(K(r,e,"access private method"),t);var B=globalThis,H=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),xe=new WeakMap,R=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(H&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&xe.set(t,e))}return e}toString(){return this.cssText}},ve=r=>new R(typeof r=="string"?r:r+"",void 0,Y),Z=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new R(t,r,Y)},be=(r,e)=>{if(H)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),i=B.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},J=H?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return ve(t)})(r):r;var{is:Ge,defineProperty:Ke,getOwnPropertyDescriptor:Ye,getOwnPropertyNames:Ze,getOwnPropertySymbols:Je,getPrototypeOf:Xe}=Object,j=globalThis,Ae=j.trustedTypes,Qe=Ae?Ae.emptyScript:"",et=j.reactiveElementPolyfillSupport,O=(r,e)=>r,M={toAttribute(r,e){switch(e){case Boolean:r=r?Qe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},X=(r,e)=>!Ge(r,e),we={attribute:!0,type:String,converter:M,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=we){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ke(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:n}=Ye(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){let l=i?.call(this);n?.call(this,o),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??we}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;let e=Xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){let t=this.properties,s=[...Ze(t),...Je(t)];for(let i of s)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(J(i))}else e!==void 0&&t.push(J(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return be(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:M).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:M;this._$Em=i;let l=o.fromAttribute(t,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){if(e!==void 0){let o=this.constructor;if(i===!1&&(n=this[e]),s??=o.getPropertyOptions(e),!((s.hasChanged??X)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:o}=n,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[O("elementProperties")]=new Map,_[O("finalized")]=new Map,et?.({ReactiveElement:_}),(j.reactiveElementVersions??=[]).push("2.1.2");var ne=globalThis,Ce=r=>r,q=ne.trustedTypes,Ee=q?q.createPolicy("lit-html",{createHTML:r=>r}):void 0,Re="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,Oe="?"+x,tt=`<${Oe}>`,w=document,k=()=>w.createComment(""),N=r=>r===null||typeof r!="object"&&typeof r!="function",oe=Array.isArray,st=r=>oe(r)||typeof r?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,Pe=/>/g,b=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Te=/'/g,Fe=/"/g,Ue=/^(?:script|style|textarea|title)$/i,ae=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),y=ae(1),At=ae(2),wt=ae(3),C=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ze=new WeakMap,A=w.createTreeWalker(w,129);function ke(r,e){if(!oe(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ee!==void 0?Ee.createHTML(e):e}var rt=(r,e)=>{let t=r.length-1,s=[],i,n=e===2?"<svg>":e===3?"<math>":"",o=U;for(let l=0;l<t;l++){let h=r[l],c,u,a=-1,f=0;for(;f<h.length&&(o.lastIndex=f,u=o.exec(h),u!==null);)f=o.lastIndex,o===U?u[1]==="!--"?o=Se:u[1]!==void 0?o=Pe:u[2]!==void 0?(Ue.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=b):u[3]!==void 0&&(o=b):o===b?u[0]===">"?(o=i??U,a=-1):u[1]===void 0?a=-2:(a=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?b:u[3]==='"'?Fe:Te):o===Fe||o===Te?o=b:o===Se||o===Pe?o=U:(o=b,i=void 0);let p=o===b&&r[l+1].startsWith("/>")?" ":"";n+=o===U?h+tt:a>=0?(s.push(c),h.slice(0,a)+Re+h.slice(a)+x+p):h+x+(a===-2?l:p)}return[ke(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},D=class r{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0,l=e.length-1,h=this.parts,[c,u]=rt(e,t);if(this.el=r.createElement(c,s),A.currentNode=this.el.content,t===2||t===3){let a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=A.nextNode())!==null&&h.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let a of i.getAttributeNames())if(a.endsWith(Re)){let f=u[o++],p=i.getAttribute(a).split(x),$=/([.?@])?(.*)/.exec(f);h.push({type:1,index:n,name:$[2],strings:p,ctor:$[1]==="."?te:$[1]==="?"?se:$[1]==="@"?re:S}),i.removeAttribute(a)}else a.startsWith(x)&&(h.push({type:6,index:n}),i.removeAttribute(a));if(Ue.test(i.tagName)){let a=i.textContent.split(x),f=a.length-1;if(f>0){i.textContent=q?q.emptyScript:"";for(let p=0;p<f;p++)i.append(a[p],k()),A.nextNode(),h.push({type:2,index:++n});i.append(a[f],k())}}}else if(i.nodeType===8)if(i.data===Oe)h.push({type:2,index:n});else{let a=-1;for(;(a=i.data.indexOf(x,a+1))!==-1;)h.push({type:7,index:n}),a+=x.length-1}n++}}static createElement(e,t){let s=w.createElement("template");return s.innerHTML=e,s}};function E(r,e,t=r,s){if(e===C)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl,n=N(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=E(r,i._$AS(r,e.values),i,s)),e}var ee=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??w).importNode(t,!0);A.currentNode=i;let n=A.nextNode(),o=0,l=0,h=s[0];for(;h!==void 0;){if(o===h.index){let c;h.type===2?c=new L(n,n.nextSibling,this,e):h.type===1?c=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(c=new ie(n,this,e)),this._$AV.push(c),h=s[++l]}o!==h?.index&&(n=A.nextNode(),o++)}return A.currentNode=w,i}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},L=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),N(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):st(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=D.createElement(ke(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let n=new ee(i,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=ze.get(e.strings);return t===void 0&&ze.set(e.strings,t=new D(e)),t}k(e){oe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let n of e)i===t.length?t.push(s=new r(this.O(k()),this.O(k()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=Ce(e).nextSibling;Ce(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},S=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,i){let n=this.strings,o=!1;if(n===void 0)e=E(this,e,t,0),o=!N(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{let l=e,h,c;for(e=n[0],h=0;h<n.length-1;h++)c=E(this,l[s+h],t,h),c===C&&(c=this._$AH[h]),o||=!N(c)||c!==this._$AH[h],c===d?e=d:e!==d&&(e+=(c??"")+n[h+1]),this._$AH[h]=c}o&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},te=class extends S{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}},se=class extends S{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}},re=class extends S{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??d)===C)return;let s=this._$AH,i=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ie=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}};var it=ne.litHtmlPolyfillSupport;it?.(D,L),(ne.litHtmlVersions??=[]).push("3.3.3");var Ne=(r,e,t)=>{let s=t?.renderBefore??e,i=s._$litPart$;if(i===void 0){let n=t?.renderBefore??null;s._$litPart$=i=new L(e.insertBefore(k(),n),n,void 0,t??{})}return i._$AI(r),i};var he=globalThis,v=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ne(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};v._$litElement$=!0,v.finalized=!0,he.litElementHydrateSupport?.({LitElement:v});var nt=he.litElementPolyfillSupport;nt?.({LitElement:v});(he.litElementVersions??=[]).push("4.2.2");var De=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var T="ha-fridge-card",ot=new Set(["unknown","unavailable","none"]),at=192,ht=387,lt=["default","freezer","inverted","french_door","dual_door"],ct={default:{freezer:{x:10,y:8,width:172,height:108},fridge:{x:10,y:124,width:172,height:253}},freezer:{freezer:{x:10,y:8,width:172,height:371}},inverted:{freezer:{x:10,y:269,width:172,height:108},fridge:{x:10,y:8,width:172,height:253}},french_door:{freezer:{x:10,y:269,width:172,height:108},fridge:{x:10,y:8,width:172,height:253}},dual_door:{freezer:{x:8,y:8,width:76,height:371},fridge:{x:88,y:8,width:100,height:371}}},dt=y`
<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
  <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
  <rect x="10" y="8" width="172" height="108" rx="10" fill="#F4F6F8" />
  <rect x="26" y="38" width="6" height="48" rx="3" fill="#B8C2CC" />
  <line x1="10" y1="120" x2="182" y2="120" stroke="#BCC5CF" stroke-width="1.5" />
  <rect x="10" y="124" width="172" height="253" rx="10" fill="#F7F9FB" />
  <rect x="26" y="194" width="6" height="60" rx="3" fill="#B8C2CC" />
</svg>`,ut=y`
<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
  <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
  <rect x="10" y="8" width="172" height="371" rx="10" fill="#F4F6F8" />
  <rect x="26" y="170" width="6" height="50" rx="3" fill="#B8C2CC" />
</svg>`,pt=y`
<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
  <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
  <rect x="10" y="8" width="172" height="253" rx="10" fill="#F7F9FB" />
  <rect x="26" y="124" width="6" height="60" rx="3" fill="#B8C2CC" />
  <line x1="10" y1="265" x2="182" y2="265" stroke="#BCC5CF" stroke-width="1.5" />
  <rect x="10" y="269" width="172" height="108" rx="10" fill="#F4F6F8" />
  <rect x="26" y="299" width="6" height="48" rx="3" fill="#B8C2CC" />
</svg>`,ft=y`
<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
  <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
  <rect x="10" y="8" width="82" height="253" rx="10" fill="#F7F9FB" />
  <rect x="80" y="108" width="6" height="48" rx="3" fill="#B8C2CC" />
  <rect x="100" y="8" width="82" height="253" rx="10" fill="#F7F9FB" />
  <rect x="106" y="108" width="6" height="48" rx="3" fill="#B8C2CC" />
  <line x1="10" y1="265" x2="182" y2="265" stroke="#BCC5CF" stroke-width="1.5" />
  <rect x="10" y="269" width="172" height="108" rx="10" fill="#F4F6F8" />
  <rect x="26" y="299" width="6" height="48" rx="3" fill="#B8C2CC" />
</svg>`,gt=y`
<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
  <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
  <rect x="8" y="8" width="76" height="371" rx="10" fill="#F4F6F8" />
  <rect x="76" y="170" width="6" height="50" rx="3" fill="#B8C2CC" />
  <line x1="86" y1="8" x2="86" y2="379" stroke="#BCC5CF" stroke-width="1.5" />
  <rect x="88" y="8" width="100" height="371" rx="10" fill="#F7F9FB" />
  <rect x="90" y="170" width="6" height="50" rx="3" fill="#B8C2CC" />
</svg>`,mt={default:dt,freezer:ut,inverted:pt,french_door:ft,dual_door:gt},Le,le,yt;Le=[De(T)];var P=class extends(yt=v){_config;_hass;static getConfigForm(){return{schema:[{name:"title",selector:{text:{}}},{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Freezer on top"},{value:"inverted",label:"Fridge on top"},{value:"dual_door",label:"Side by side (40/60)"},{value:"french_door",label:"French door"},{value:"freezer",label:"Freezer only"}]}}},{name:"freezer_entity",selector:{entity:{domain:"sensor"}}},{name:"fridge_entity",selector:{entity:{domain:"sensor"}}},{name:"freezer_label",selector:{text:{}}},{name:"fridge_label",selector:{text:{}}},{name:"card_width",selector:{number:{min:100,max:400,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"card_height",selector:{number:{min:200,max:600,step:10,mode:"slider",unit_of_measurement:"px"}}}],computeLabel:e=>{switch(e.name){case"title":return"Title";case"layout":return"Layout";case"freezer_entity":return"Freezer sensor";case"fridge_entity":return"Fridge sensor";case"freezer_label":return"Freezer label";case"fridge_label":return"Fridge label";case"card_width":return"Width";case"card_height":return"Height";default:return}}}}getStubConfig(){return{type:`custom:${T}`,freezer_entity:"sensor.freezer_temperature",fridge_entity:"sensor.fridge_temperature",title:"Fridge",layout:"default"}}setConfig(e){let t=this.normalizeLayout(e.layout);this._config={title:"Fridge",...e,layout:t}}set hass(e){this._hass=e,this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 4}getGridOptions(){return{columns:6,rows:4,min_columns:4}}render(){if(!this._config)return d;let e=this.normalizeLayout(this._config.layout),t=ct[e],s=!0,i=!!t.fridge,n=this.getDisplayState(this._config.freezer_entity),o=i?this.getDisplayState(this._config.fridge_entity):null,l=this.cardLabel(s,i),h=this._config.freezer_label||"Freezer",c=this._config.fridge_label||"Fridge",u=this._config.card_width||230,a=this._config.card_height||387;return y`
      <ha-card>
        <div class="card-shell">
          <div class="heading">
            <h3 class="title">${this._config.title}</h3>
          </div>
          <div class="body">
            <div class="fridge layout-${e}" role="img" aria-label=${l}>
              <div class="fridge-photo-frame" style="width:${u}px;height:${a}px;">
                ${mt[e]}
                <div class="readings">
                  ${s&&t.freezer?y`
                        <section class="reading zone-freezer"
                          style=${this.readingStyle(t.freezer)}>
                          <p class="section-label">${h}</p>
                          <div class=${this.temperatureClass(n)}>
                            <span>${n.stateText}</span>
                            ${n.unitText?y`<span class="unit">${n.unitText}</span>`:d}
                          </div>
                        </section>
                      `:d}
                  ${i&&t.fridge?y`
                        <section class="reading zone-fridge"
                          style=${this.readingStyle(t.fridge)}>
                          <p class="section-label">${c}</p>
                          <div class=${this.temperatureClass(o)}>
                            <span>${o.stateText}</span>
                            ${o.unitText?y`<span class="unit">${o.unitText}</span>`:d}
                          </div>
                        </section>
                      `:d}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `}temperatureClass(e){return e.isPlaceholder?"temperature placeholder":"temperature"}cardLabel(e,t){return e&&t?"Fridge and freezer temperatures":e?"Freezer temperature":"Fridge temperature"}normalizeLayout(e){return e&&lt.includes(e)?e:"default"}readingStyle(e){let t=(e.x+e.width/2)/at*100,s=(e.y+e.height/2)/ht*100;return`left:${t}%;top:${s}%;`}getDisplayState(e){if(!e)return{stateText:"--",unitText:"\xB0C",isPlaceholder:!0};let t=this._hass?.states?.[e];if(!t)return{stateText:"--",unitText:"",isPlaceholder:!0};let s=t.state?.trim();if(!s||ot.has(s.toLowerCase()))return{stateText:"--",unitText:"",isPlaceholder:!0};let i=Number.parseFloat(s),n=this.getUnit(t);return Number.isNaN(i)?{stateText:s,unitText:n,isPlaceholder:!1}:{stateText:new Intl.NumberFormat(void 0,{minimumFractionDigits:1,maximumFractionDigits:1}).format(i),unitText:n,isPlaceholder:!1}}getUnit(e){let t=e.attributes.unit_of_measurement;return typeof t=="string"&&t.trim()?t:"\xB0C"}static get styles(){return Z`
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
    `}};le=me(yt),P=$e(le,0,"HaFridgeCard",Le,P),_e(le,1,P);customElements.get(T)||customElements.define(T,P);window.customCards=window.customCards??[];window.customCards.some(r=>r.type===T)||window.customCards.push({type:T,name:"HA Fridge Card",description:"Fridge and freezer temperatures with multiple fridge layout options.",preview:!0});})();
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
