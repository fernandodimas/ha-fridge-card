"use strict";(()=>{var Wt=Object.create;var X=Object.defineProperty;var Gt=Object.getOwnPropertyDescriptor;var $t=(r,t)=>(t=Symbol[r])?t:Symbol.for("Symbol."+r),U=r=>{throw TypeError(r)};var xt=(r,t,e)=>t in r?X(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var mt=(r,t)=>X(r,"name",{value:t,configurable:!0});var vt=r=>[,,,Wt(r?.[$t("metadata")]??null)],bt=["class","method","getter","setter","accessor","field","value","get","set"],z=r=>r!==void 0&&typeof r!="function"?U("Function expected"):r,Kt=(r,t,e,s,i)=>({kind:bt[r],name:t,metadata:s,addInitializer:o=>e._?U("Already initialized"):i.push(z(o||null))}),Yt=(r,t)=>xt(t,$t("metadata"),r[3]),P=(r,t,e,s)=>{for(var i=0,o=r[t>>1],n=o&&o.length;i<n;i++)t&1?o[i].call(e):s=o[i].call(e,s);return s},j=(r,t,e,s,i,o)=>{var n,h,l,c,p,a=t&7,f=!!(t&8),u=!!(t&16),x=a>3?r.length+1:a?f?1:2:0,ft=bt[a+5],gt=a>3&&(r[x-1]=[]),Vt=r[x]||(r[x]=[]),m=a&&(!u&&!f&&(i=i.prototype),a<5&&(a>3||!u)&&Gt(a<4?i:{get[e](){return yt(this,o)},set[e](g){return _t(this,o,g)}},e));a?u&&a<4&&mt(o,(a>2?"set ":a>1?"get ":"")+e):mt(i,e);for(var Z=s.length-1;Z>=0;Z--)c=Kt(a,e,l={},r[3],Vt),a&&(c.static=f,c.private=u,p=c.access={has:u?g=>Zt(i,g):g=>e in g},a^3&&(p.get=u?g=>(a^1?yt:Jt)(g,i,a^4?o:m.get):g=>g[e]),a>2&&(p.set=u?(g,J)=>_t(g,i,J,a^4?o:m.set):(g,J)=>g[e]=J)),h=(0,s[Z])(a?a<4?u?o:m[ft]:a>4?void 0:{get:m.get,set:m.set}:i,c),l._=1,a^4||h===void 0?z(h)&&(a>4?gt.unshift(h):a?u?o=h:m[ft]=h:i=h):typeof h!="object"||h===null?U("Object expected"):(z(n=h.get)&&(m.get=n),z(n=h.set)&&(m.set=n),z(n=h.init)&&gt.unshift(n));return a||Yt(r,i),m&&X(i,e,m),u?a^4?o:m:i},Q=(r,t,e)=>xt(r,typeof t!="symbol"?t+"":t,e),tt=(r,t,e)=>t.has(r)||U("Cannot "+e),Zt=(r,t)=>Object(t)!==t?U('Cannot use the "in" operator on this value'):r.has(t),yt=(r,t,e)=>(tt(r,t,"read from private field"),e?e.call(r):t.get(r));var _t=(r,t,e,s)=>(tt(r,t,"write to private field"),s?s.call(r,e):t.set(r,e),e),Jt=(r,t,e)=>(tt(r,t,"access private method"),e);var I=globalThis,q=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),At=new WeakMap,k=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(q&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=At.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&At.set(e,t))}return t}toString(){return this.cssText}},wt=r=>new k(typeof r=="string"?r:r+"",void 0,et),st=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new k(e,r,et)},Ct=(r,t)=>{if(q)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=I.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},rt=q?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return wt(e)})(r):r;var{is:Xt,defineProperty:Qt,getOwnPropertyDescriptor:te,getOwnPropertyNames:ee,getOwnPropertySymbols:se,getPrototypeOf:re}=Object,V=globalThis,Et=V.trustedTypes,ie=Et?Et.emptyScript:"",oe=V.reactiveElementPolyfillSupport,R=(r,t)=>r,N={toAttribute(r,t){switch(t){case Boolean:r=r?ie:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},W=(r,t)=>!Xt(r,t),St={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:W};Symbol.metadata??=Symbol("metadata"),V.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=St){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Qt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:o}=te(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let h=i?.call(this);o?.call(this,n),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??St}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;let t=re(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){let e=this.properties,s=[...ee(e),...se(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(rt(i))}else t!==void 0&&e.push(rt(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ct(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:N).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:N;this._$Em=i;let h=n.fromAttribute(e,o.type);this[i]=h??this._$Ej?.get(i)??h,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(t!==void 0){let n=this.constructor;if(i===!1&&(o=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??W)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,o]of s){let{wrapped:n}=o,h=this[i];n!==!0||this._$AL.has(i)||h===void 0||this.C(i,void 0,o,h)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[R("elementProperties")]=new Map,_[R("finalized")]=new Map,oe?.({ReactiveElement:_}),(V.reactiveElementVersions??=[]).push("2.1.2");var ct=globalThis,Pt=r=>r,G=ct.trustedTypes,Tt=G?G.createPolicy("lit-html",{createHTML:r=>r}):void 0,Rt="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,Nt="?"+v,ne=`<${Nt}>`,E=document,B=()=>E.createComment(""),L=r=>r===null||typeof r!="object"&&typeof r!="function",dt=Array.isArray,ae=r=>dt(r)||typeof r?.[Symbol.iterator]=="function",it=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ft=/-->/g,Ot=/>/g,w=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,Ut=/"/g,Dt=/^(?:script|style|textarea|title)$/i,pt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),y=pt(1),Te=pt(2),Fe=pt(3),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),kt=new WeakMap,C=E.createTreeWalker(E,129);function Bt(r,t){if(!dt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tt!==void 0?Tt.createHTML(t):t}var he=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=D;for(let h=0;h<e;h++){let l=r[h],c,p,a=-1,f=0;for(;f<l.length&&(n.lastIndex=f,p=n.exec(l),p!==null);)f=n.lastIndex,n===D?p[1]==="!--"?n=Ft:p[1]!==void 0?n=Ot:p[2]!==void 0?(Dt.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=w):p[3]!==void 0&&(n=w):n===w?p[0]===">"?(n=i??D,a=-1):p[1]===void 0?a=-2:(a=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?w:p[3]==='"'?Ut:zt):n===Ut||n===zt?n=w:n===Ft||n===Ot?n=D:(n=w,i=void 0);let u=n===w&&r[h+1].startsWith("/>")?" ":"";o+=n===D?l+ne:a>=0?(s.push(c),l.slice(0,a)+Rt+l.slice(a)+v+u):l+v+(a===-2?h:u)}return[Bt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},M=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,h=t.length-1,l=this.parts,[c,p]=he(t,e);if(this.el=r.createElement(c,s),C.currentNode=this.el.content,e===2||e===3){let a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=C.nextNode())!==null&&l.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(let a of i.getAttributeNames())if(a.endsWith(Rt)){let f=p[n++],u=i.getAttribute(a).split(v),x=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:x[2],strings:u,ctor:x[1]==="."?nt:x[1]==="?"?at:x[1]==="@"?ht:F}),i.removeAttribute(a)}else a.startsWith(v)&&(l.push({type:6,index:o}),i.removeAttribute(a));if(Dt.test(i.tagName)){let a=i.textContent.split(v),f=a.length-1;if(f>0){i.textContent=G?G.emptyScript:"";for(let u=0;u<f;u++)i.append(a[u],B()),C.nextNode(),l.push({type:2,index:++o});i.append(a[f],B())}}}else if(i.nodeType===8)if(i.data===Nt)l.push({type:2,index:o});else{let a=-1;for(;(a=i.data.indexOf(v,a+1))!==-1;)l.push({type:7,index:o}),a+=v.length-1}o++}}static createElement(t,e){let s=E.createElement("template");return s.innerHTML=t,s}};function T(r,t,e=r,s){if(t===S)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,o=L(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=T(r,i._$AS(r,t.values),i,s)),t}var ot=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??E).importNode(e,!0);C.currentNode=i;let o=C.nextNode(),n=0,h=0,l=s[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new H(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new lt(o,this,t)),this._$AV.push(c),l=s[++h]}n!==l?.index&&(o=C.nextNode(),n++)}return C.currentNode=E,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},H=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),L(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ae(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=M.createElement(Bt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new ot(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=kt.get(t.strings);return e===void 0&&kt.set(t.strings,e=new M(t)),e}k(t){dt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new r(this.O(B()),this.O(B()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=Pt(t).nextSibling;Pt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},F=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=T(this,t,e,0),n=!L(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{let h=t,l,c;for(t=o[0],l=0;l<o.length-1;l++)c=T(this,h[s+l],e,l),c===S&&(c=this._$AH[l]),n||=!L(c)||c!==this._$AH[l],c===d?t=d:t!==d&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},nt=class extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},at=class extends F{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}},ht=class extends F{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??d)===S)return;let s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},lt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}};var le=ct.litHtmlPolyfillSupport;le?.(M,H),(ct.litHtmlVersions??=[]).push("3.3.3");var Lt=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let o=e?.renderBefore??null;s._$litPart$=i=new H(t.insertBefore(B(),o),o,void 0,e??{})}return i._$AI(r),i};var ut=globalThis,b=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};b._$litElement$=!0,b.finalized=!0,ut.litElementHydrateSupport?.({LitElement:b});var ce=ut.litElementPolyfillSupport;ce?.({LitElement:b});(ut.litElementVersions??=[]).push("4.2.2");var Mt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var de={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:W},pe=(r=de,t,e)=>{let{kind:s,metadata:i}=e,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){let{name:n}=e;return{set(h){let l=t.get.call(this);t.set.call(this,h),this.requestUpdate(n,l,r,!0,h)},init(h){return h!==void 0&&this.C(n,void 0,r,h),h}}}if(s==="setter"){let{name:n}=e;return function(h){let l=this[n];t.call(this,h),this.requestUpdate(n,l,r,!0,h)}}throw Error("Unsupported decorator location: "+s)};function K(r){return(t,e)=>typeof e=="object"?pe(r,t,e):((s,i,o)=>{let n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}var O="ha-fridge-card",ue=new Set(["unknown","unavailable","none"]),fe=192,ge=387,me=["default","freezer","inverted","french_door","dual_door"],ye={default:{freezer:{x:10,y:8,width:172,height:108},fridge:{x:10,y:124,width:172,height:253}},freezer:{freezer:{x:10,y:8,width:172,height:371}},inverted:{freezer:{x:10,y:269,width:172,height:108},fridge:{x:10,y:8,width:172,height:253}},french_door:{freezer:{x:10,y:269,width:172,height:108},fridge:{x:10,y:8,width:172,height:253}},dual_door:{freezer:{x:8,y:8,width:76,height:371},fridge:{x:88,y:8,width:100,height:371}}},_e=y`
<svg class="fridge-svg" viewBox="0 0 192 387">
  <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
  <rect x="10" y="8" width="172" height="108" rx="10" fill="#F4F6F8" />
  <rect x="26" y="38" width="6" height="48" rx="3" fill="#B8C2CC" />
  <line x1="10" y1="120" x2="182" y2="120" stroke="#BCC5CF" stroke-width="1.5" />
  <rect x="10" y="124" width="172" height="253" rx="10" fill="#F7F9FB" />
  <rect x="26" y="194" width="6" height="60" rx="3" fill="#B8C2CC" />
</svg>`,$e=y`
<svg class="fridge-svg" viewBox="0 0 192 387">
  <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
  <rect x="10" y="8" width="172" height="371" rx="10" fill="#F4F6F8" />
  <rect x="26" y="170" width="6" height="50" rx="3" fill="#B8C2CC" />
</svg>`,xe=y`
<svg class="fridge-svg" viewBox="0 0 192 387">
  <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
  <rect x="10" y="8" width="172" height="253" rx="10" fill="#F7F9FB" />
  <rect x="26" y="124" width="6" height="60" rx="3" fill="#B8C2CC" />
  <line x1="10" y1="265" x2="182" y2="265" stroke="#BCC5CF" stroke-width="1.5" />
  <rect x="10" y="269" width="172" height="108" rx="10" fill="#F4F6F8" />
  <rect x="26" y="299" width="6" height="48" rx="3" fill="#B8C2CC" />
</svg>`,ve=y`
<svg class="fridge-svg" viewBox="0 0 192 387">
  <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
  <rect x="10" y="8" width="82" height="253" rx="10" fill="#F7F9FB" />
  <rect x="80" y="108" width="6" height="48" rx="3" fill="#B8C2CC" />
  <rect x="100" y="8" width="82" height="253" rx="10" fill="#F7F9FB" />
  <rect x="106" y="108" width="6" height="48" rx="3" fill="#B8C2CC" />
  <line x1="10" y1="265" x2="182" y2="265" stroke="#BCC5CF" stroke-width="1.5" />
  <rect x="10" y="269" width="172" height="108" rx="10" fill="#F4F6F8" />
  <rect x="26" y="299" width="6" height="48" rx="3" fill="#B8C2CC" />
</svg>`,be=y`
<svg class="fridge-svg" viewBox="0 0 192 387">
  <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
  <rect x="8" y="8" width="76" height="371" rx="10" fill="#F4F6F8" />
  <rect x="76" y="170" width="6" height="50" rx="3" fill="#B8C2CC" />
  <line x1="86" y1="8" x2="86" y2="379" stroke="#BCC5CF" stroke-width="1.5" />
  <rect x="88" y="8" width="100" height="371" rx="10" fill="#F7F9FB" />
  <rect x="90" y="170" width="6" height="50" rx="3" fill="#B8C2CC" />
</svg>`,Ae={default:_e,freezer:$e,inverted:xe,french_door:ve,dual_door:be},Ht,jt,It,qt,$;qt=[Mt(O)];var A=class extends(It=b,jt=[K({attribute:!1})],Ht=[K({attribute:!1})],It){constructor(){super(...arguments);Q(this,"_config",P($,8,this)),P($,11,this);Q(this,"_hass",P($,12,this)),P($,15,this)}static getConfigForm(){return{schema:[{name:"title",selector:{text:{}}},{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"default",label:"Freezer on top"},{value:"inverted",label:"Fridge on top"},{value:"dual_door",label:"Side by side (40/60)"},{value:"french_door",label:"French door"},{value:"freezer",label:"Freezer only"}]}}},{name:"freezer_entity",selector:{entity:{domain:"sensor"}}},{name:"fridge_entity",selector:{entity:{domain:"sensor"}}}],computeLabel:e=>{switch(e.name){case"title":return"Title";case"layout":return"Layout";case"freezer_entity":return"Freezer sensor";case"fridge_entity":return"Fridge sensor";default:return}}}}getStubConfig(){return{type:`custom:${O}`,freezer_entity:"sensor.freezer_temperature",fridge_entity:"sensor.fridge_temperature",title:"Fridge",layout:"default"}}setConfig(e){let s=this.normalizeLayout(e.layout);this._config={title:"Fridge",...e,layout:s}}set hass(e){this._hass=e}get hass(){return this._hass}getCardSize(){return 4}getGridOptions(){return{columns:6,rows:4,min_columns:4}}render(){if(!this._config)return d;let e=this.normalizeLayout(this._config.layout),s=ye[e],i=!0,o=!!s.fridge,n=this.getDisplayState(this._config.freezer_entity),h=o?this.getDisplayState(this._config.fridge_entity):null,l=this.cardLabel(i,o);return y`
      <ha-card>
        <div class="card-shell">
          <div class="heading">
            <h3 class="title">${this._config.title}</h3>
          </div>
          <div class="body">
            <div class="fridge layout-${e}" role="img" aria-label=${l}>
              <div class="fridge-photo-frame">
                ${Ae[e]}
                <div class="readings">
                  ${i&&s.freezer?y`
                        <section class="reading zone-freezer"
                          style=${this.readingStyle(s.freezer)}>
                          <p class="section-label">Freezer</p>
                          <div class=${this.temperatureClass(n)}>
                            <span>${n.stateText}</span>
                            ${n.unitText?y`<span class="unit">${n.unitText}</span>`:d}
                          </div>
                        </section>
                      `:d}
                  ${o&&s.fridge?y`
                        <section class="reading zone-fridge"
                          style=${this.readingStyle(s.fridge)}>
                          <p class="section-label">Fridge</p>
                          <div class=${this.temperatureClass(h)}>
                            <span>${h.stateText}</span>
                            ${h.unitText?y`<span class="unit">${h.unitText}</span>`:d}
                          </div>
                        </section>
                      `:d}
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
    `}temperatureClass(e){return e.isPlaceholder?"temperature placeholder":"temperature"}cardLabel(e,s){return e&&s?"Fridge and freezer temperatures":e?"Freezer temperature":"Fridge temperature"}normalizeLayout(e){return e&&me.includes(e)?e:"default"}readingStyle(e){let s=(e.x+e.width/2)/fe*100,i=(e.y+e.height/2)/ge*100;return`left:${s}%;top:${i}%;`}getDisplayState(e){if(!e)return{stateText:"--",unitText:"\xB0C",isPlaceholder:!0};let s=this._hass?.states?.[e];if(!s)return{stateText:"--",unitText:"",isPlaceholder:!0};let i=s.state?.trim();if(!i||ue.has(i.toLowerCase()))return{stateText:"--",unitText:"",isPlaceholder:!0};let o=Number.parseFloat(i),n=this.getUnit(s);return Number.isNaN(o)?{stateText:i,unitText:n,isPlaceholder:!1}:{stateText:new Intl.NumberFormat(void 0,{minimumFractionDigits:1,maximumFractionDigits:1}).format(o),unitText:n,isPlaceholder:!1}}getUnit(e){let s=e.attributes.unit_of_measurement;return typeof s=="string"&&s.trim()?s:"\xB0C"}static get styles(){return st`
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
        width: 192px;
        height: 387px;
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

      .feet {
        display: flex;
        justify-content: space-between;
        width: 140px;
      }

      .foot {
        display: block;
        width: 28px;
        height: 6px;
        border-radius: 3px;
        background: linear-gradient(180deg, #c4cdd6 0%, #b0b9c4 100%);
      }

      @media (max-width: 420px) {
        .fridge-photo-frame {
          width: 176px;
          height: 355px;
        }
      }
    `}};$=vt(It),j($,5,"_config",jt,A),j($,5,"_hass",Ht,A),A=j($,0,"HaFridgeCard",qt,A),P($,1,A);customElements.get(O)||customElements.define(O,A);window.customCards=window.customCards??[];window.customCards.some(r=>r.type===O)||window.customCards.push({type:O,name:"HA Fridge Card",description:"Fridge and freezer temperatures with multiple fridge layout options.",preview:!0});})();
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
