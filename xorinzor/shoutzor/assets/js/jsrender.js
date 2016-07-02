/*! JsRender v0.9.77 (Beta): http://jsviews.com/#jsrender */
/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
!function(e,t){var n=t.jQuery;"object"==typeof exports?module.exports=n?e(t,n):function(n){if(n&&!n.fn)throw"Provide jQuery or null";return e(t,n)}:"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t,!1)}(function(e,t){"use strict";function n(e,t){return function(){var n,r=this,i=r.base;return r.base=e,n=t.apply(r,arguments),r.base=i,n}}function r(e,t){return ee(t)&&(t=n(e?e._d?e:n(s,e):s,t),t._d=1),t}function i(e,t){for(var n in t.props)Ve.test(n)&&(e[n]=r(e[n],t.props[n]))}function o(e){return e}function s(){return""}function a(e){try{throw console.log("JsRender dbg breakpoint: "+e),"dbg breakpoint"}catch(t){}return this.base?this.baseApply(arguments):e}function d(e){this.name=(t.link?"JsViews":"JsRender")+" Error",this.message=e||this.name}function u(e,t){for(var n in t)e[n]=t[n];return e}function l(e,t,n){return e?(ae.delimiters=[e,t,ge=n?n.charAt(0):ge],le=e.charAt(0),pe=e.charAt(1),ce=t.charAt(0),fe=t.charAt(1),e="\\"+le+"(\\"+ge+")?\\"+pe,t="\\"+ce+"\\"+fe,G="(?:(\\w+(?=[\\/\\s\\"+ce+"]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\"+ce+"]|\\"+ce+"(?!\\"+fe+"))*?)",se.rTag="(?:"+G+")",G=new RegExp("(?:"+e+G+"(\\/)?|\\"+le+"(\\"+ge+")?\\"+pe+"(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))"+t,"g"),W=new RegExp("<.*>|([^\\\\]|^)[{}]|"+e+".*"+t),ue):ae.delimiters}function p(e,t){t||e===!0||(t=e,e=void 0);var n,r,i,o,s=this,a=!t||"root"===t;if(e){if(o=t&&s.type===t&&s,!o)if(n=s.views,s._.useKey){for(r in n)if(o=t?n[r].get(e,t):n[r])break}else for(r=0,i=n.length;!o&&i>r;r++)o=t?n[r].get(e,t):n[r]}else if(a)for(;s.parent;)o=s,s=s.parent;else for(;s&&!o;)o=s.type===t?s:void 0,s=s.parent;return o}function c(){var e=this.get("item");return e?e.index:void 0}function f(){return this.index}function g(t){var n,r=this,i=r.linkCtx,o=(r.ctx||{})[t];return void 0===o&&i&&i.ctx&&(o=i.ctx[t]),void 0===o&&(o=ie[t]),o&&ee(o)&&!o._wrp&&(n=function(){return o.apply(this&&this!==e?this:r,arguments)},n._wrp=r,u(n,o)),n||o}function v(e){return e&&(e.fn?e:this.getRsc("templates",e)||ne(e))}function h(e,t,n,r){var o,s,a="number"==typeof n&&t.tmpl.bnds[n-1],d=t.linkCtx;return void 0!==r?n=r={props:{},args:[r]}:a&&(n=a(t.data,t,se)),s=n.args[0],(e||a)&&(o=d&&d.tag,o||(o=u(new se._tg,{_:{inline:!d,bnd:a,unlinked:!0},tagName:":",cvt:e,flow:!0,tagCtx:n}),d&&(d.tag=o,o.linkCtx=d),n.ctx=L(n.ctx,(d?d.view:t).ctx)),o._er=r&&s,i(o,n),n.view=t,o.ctx=n.ctx||o.ctx||{},n.ctx=void 0,s=o.cvtArgs("true"!==e&&e)[0],s=a&&t._.onRender?t._.onRender(s,t,o):s),void 0!=s?s:""}function m(e){var t=this,n=t.tagCtx,r=n.view,i=n.args;return e=e||t.convert,e=e&&(""+e===e?r.getRsc("converters",e)||F("Unknown converter: '"+e+"'"):e),i=i.length||n.index?e?i.slice():i:[r.data],e&&(e.depends&&(t.depends=se.getDeps(t.depends,t,e.depends,e)),i[0]=e.apply(t,i)),i}function w(e,t){for(var n,r,i=this;void 0===n&&i;)r=i.tmpl&&i.tmpl[e],n=r&&r[t],i=i.parent;return n||Y[e][t]}function x(e,t,n,r,o,s){t=t||X;var a,d,u,l,p,c,f,g,v,h,m,w,x,b,_,y,k,j,C,A="",T=t.linkCtx||0,V=t.ctx,R=n||t.tmpl,M="number"==typeof r&&t.tmpl.bnds[r-1];for("tag"===e._is?(a=e,e=a.tagName,r=a.tagCtxs,u=a.template):(d=t.getRsc("tags",e)||F("Unknown tag: {{"+e+"}} "),u=d.template),void 0!==s?(A+=s,r=s=[{props:{},args:[]}]):M&&(r=M(t.data,t,se)),g=r.length,f=0;g>f;f++)h=r[f],(!T||!T.tag||f&&!T.tag._.inline||a._er)&&((w=R.tmpls&&h.tmpl)&&(w=h.content=R.tmpls[w-1]),h.index=f,h.tmpl=w,h.render=N,h.view=t,h.ctx=L(h.ctx,V)),(n=h.props.tmpl)&&(h.tmpl=t.getTmpl(n)),a||(a=new d._ctr,x=!!a.init,a.parent=c=V&&V.tag,a.tagCtxs=r,C=a.dataMap,T&&(a._.inline=!1,T.tag=a,a.linkCtx=T),(a._.bnd=M||T.fn)?a._.arrVws={}:a.dataBoundOnly&&F("{^{"+e+"}} tag must be data-bound")),r=a.tagCtxs,C=a.dataMap,h.tag=a,C&&r&&(h.map=r[f].map),a.flow||(m=h.ctx=h.ctx||{},l=a.parents=m.parentTags=V&&L(m.parentTags,V.parentTags)||{},c&&(l[c.tagName]=c),l[a.tagName]=m.tag=a);if(!(a._er=s)){for(i(a,r[0]),a.rendering={},f=0;g>f;f++)h=a.tagCtx=r[f],k=h.props,y=a.cvtArgs(),(b=k.dataMap||C)&&(y.length||k.dataMap)&&(_=h.map,_&&_.src===y[0]&&!o||(_&&_.src&&_.unmap(),_=h.map=b.map(y[0],k,void 0,!a._.bnd)),y=[_.tgt]),a.ctx=h.ctx,f||(x&&(j=a.template,a.init(h,T,a.ctx),x=void 0),T&&(T.attr=a.attr=T.attr||a.attr),p=a.attr,a._.noVws=p&&p!==Ne),v=void 0,a.render&&(v=a.render.apply(a,y)),y.length||(y=[t]),void 0===v&&(v=h.render(y[0],!0)||(o?void 0:"")),A=A?A+(v||""):v;a.rendering=void 0}return a.tagCtx=r[0],a.ctx=a.tagCtx.ctx,a._.noVws&&a._.inline&&(A="text"===p?re.html(A):""),M&&t._.onRender?t._.onRender(A,t,a):A}function b(e,t,n,r,i,o,s,a){var d,u,l,p=this,f="array"===t;p.content=a,p.views=f?[]:{},p.parent=n,p.type=t||"top",p.data=r,p.tmpl=i,l=p._={key:0,useKey:f?0:1,id:""+Me++,onRender:s,bnds:{}},p.linked=!!s,n?(d=n.views,u=n._,u.useKey?(d[l.key="_"+u.useKey++]=p,p.index=Je,p.getIndex=c):d.length===(l.key=p.index=o)?d.push(p):d.splice(o,0,p),p.ctx=e||n.ctx):p.ctx=e}function _(e){var t,n,r,i,o,s,a;for(t in qe)if(o=qe[t],(s=o.compile)&&(n=e[t+"s"]))for(r in n)i=n[r]=s(r,n[r],e,0),i._is=t,i&&(a=se.onStore[t])&&a(r,i,s)}function y(e,t,n){function i(){var t=this;t._={inline:!0,unlinked:!0},t.tagName=e}var o,s,a,d=new se._tg;if(ee(t)?t={depends:t.depends,render:t}:""+t===t&&(t={template:t}),s=t.baseTag){t.flow=!!t.flow,t.baseTag=s=""+s===s?n&&n.tags[s]||oe[s]:s,d=u(d,s);for(a in t)d[a]=r(s[a],t[a])}else d=u(d,t);return void 0!==(o=d.template)&&(d.template=""+o===o?ne[o]||ne(o):o),d.init!==!1&&((i.prototype=d).constructor=d._ctr=i),n&&(d._parentTmpl=n),d}function k(e){return this.base.apply(this,e)}function j(e,n,r,i){function o(n){var o,a;if(""+n===n||n.nodeType>0&&(s=n)){if(!s)if(/^\.\/[^\\:*?"<>]*$/.test(n))(a=ne[e=e||n])?n=a:s=document.getElementById(n);else if(t.fn&&!W.test(n))try{s=t(document).find(n)[0]}catch(d){}s&&(i?n=s.innerHTML:(o=s.getAttribute(Ee),o?o!==Fe?(n=ne[o],delete ne[o]):t.fn&&(n=t.data(s)[Fe]):(e=e||(t.fn?Fe:n),n=j(e,s.innerHTML,r,i)),n.tmplName=e=e||o,e!==Fe&&(ne[e]=n),s.setAttribute(Ee,e),t.fn&&t.data(s,Fe,n))),s=void 0}else n.fn||(n=void 0);return n}var s,a,d=n=n||"";return 0===i&&(i=void 0,d=o(d)),i=i||(n.markup?n:{}),i.tmplName=e,r&&(i._parentTmpl=r),!d&&n.markup&&(d=o(n.markup))&&d.fn&&(d=d.markup),void 0!==d?(d.fn||n.fn?d.fn&&(a=d):(n=V(d,i),I(d.replace(ye,"\\$&"),n)),a||(_(i),a=u(function(){return n.render.apply(n,arguments)},n)),e&&!r&&e!==Fe&&(Ie[e]=a),a):void 0}function C(e,n){return t.isFunction(e)?e.call(n):e}function A(e){var t,n=[],r=e.length;for(t=0;r>t;t++)n.push(e[t].unmap());return n}function T(e,n){function r(e){l.apply(this,e)}function i(){return new r(arguments)}function o(e,t){var n,r,i,o,s,a=c.length;for(n=0;a>n;n++)o=c[n],r=void 0,o+""!==o&&(r=o,o=r.getter),void 0===(s=e[o])&&r&&void 0!==(i=r.defaultVal)&&(s=C(i,e)),t(s,r&&p[r.type],o)}function s(n){n=n+""===n?JSON.parse(n):n;var r,i,s,u=n,l=[];if(t.isArray(n)){for(n=n||[],i=n.length,r=0;i>r;r++)l.push(this.map(n[r]));return l._is=e,l.unmap=d,l.merge=a,l}if(n){o(n,function(e,t){t&&(e=t.map(e)),l.push(e)}),u=this.apply(this,l);for(s in n)b[s]||(u[s]=n[s])}return u}function a(e){e=e+""===e?JSON.parse(e):e;var n,r,s,a,d,u,l,p,c,f,v=this;if(t.isArray(v)){for(p={},f=[],s=e.length,a=v.length,n=0;s>n;n++){for(c=e[n],l=!1,r=0;a>r&&!l;r++)p[r]||(u=v[r],g&&(p[r]=l=g+""===g?c[g]&&(b[g]?u[g]():u[g])===c[g]:g(u,c)));l?(u.merge(c),f.push(u)):f.push(i.map(c))}return void(x?x(v).refresh(f):v.splice.apply(v,[0,v.length].concat(f)))}o(e,function(e,t,n){t?v[n]().merge(e):v[n](e)});for(d in e)b[d]||(v[d]=e[d])}function d(){var e,n,r,i,o,s,a=this;if(t.isArray(a))return A(a);for(e={},i=c.length,r=0;i>r;r++)n=c[r],o=void 0,n+""!==n&&(o=n,n=o.getter),s=a[n](),e[n]=o&&s&&p[o.type]?t.isArray(s)?A(s):s.unmap():s;for(n in a)"_is"===n||b[n]||"_"===n.charAt(0)&&b[n.slice(1)]||t.isFunction(a[n])||(e[n]=a[n]);return e}var u,l,p=this,c=n.getters,f=n.extend,g=n.id,v=t.extend({_is:e||"unnamed",unmap:d,merge:a},f),h="",m="",w=c?c.length:0,x=t.observable,b={};for(r.prototype=v,u=0;w>u;u++)!function(e){e=e.getter||e,b[e]=u+1;var t="_"+e;h+=(h?",":"")+e,m+="this."+t+" = "+e+";\n",v[e]=v[e]||function(n){return arguments.length?void(x?x(this).setProperty(e,n):this[t]=n):this[t]},x&&(v[e].set=v[e].set||function(e){this[t]=e})}(c[u]);return l=new Function(h,m.slice(0,-1)),l.prototype=v,v.constructor=l,i.map=s,i.getters=c,i.extend=f,i.id=g,i}function V(e,n){var r,i=de._wm||{},o=u({tmpls:[],links:{},bnds:[],_is:"template",render:N},n);return o.markup=e,n.htmlTag||(r=Ce.exec(e),o.htmlTag=r?r[1].toLowerCase():""),r=i[o.htmlTag],r&&r!==i.div&&(o.markup=t.trim(o.markup)),o}function R(e,t){function n(i,o,s){var a,d,u,l;if(i&&typeof i===Se&&!i.nodeType&&!i.markup&&!i.getTgt&&!("viewModel"===e&&i.getters||i.extend)){for(u in i)n(u,i[u],o);return o||Y}return void 0===o&&(o=i,i=void 0),i&&""+i!==i&&(s=o,o=i,i=void 0),l=s?"viewModel"===e?s:s[r]=s[r]||{}:n,d=t.compile,null===o?i&&delete l[i]:(o=d?d.call(l,i,o,s,0):o,i&&(l[i]=o)),d&&o&&(o._is=e),o&&(a=se.onStore[e])&&a(i,o,d),o}var r=e+"s";Y[r]=n}function M(e){ue[e]=function(t){return arguments.length?(ae[e]=t,ue):ae[e]}}function $(e){function t(t,n){this.tgt=e.getTgt(t,n)}return ee(e)&&(e={getTgt:e}),e.baseMap&&(e=u(u({},e.baseMap),e)),e.map=function(e,n){return new t(e,n)},e}function N(e,t,n,r,i,o){var s,a,d,u,l,p,c,f,g=r,v="";if(t===!0?(n=t,t=void 0):typeof t!==Se&&(t=void 0),(d=this.tag)?(l=this,g=g||l.view,u=g.getTmpl(d.template||l.tmpl),arguments.length||(e=g)):u=this,u){if(!g&&e&&"view"===e._is&&(g=e),g&&e===g&&(e=g.data),p=!g,he=he||p,g||((t=t||{}).root=e),!he||de.useViews||u.useViews||g&&g!==X)v=S(u,e,t,n,g,i,o,d);else{if(g?(c=g.data,f=g.index,g.index=Je):(g=X,g.data=e,g.ctx=t),te(e)&&!n)for(s=0,a=e.length;a>s;s++)g.index=s,g.data=e[s],v+=u.fn(e[s],g,se);else g.data=e,v+=u.fn(e,g,se);g.data=c,g.index=f}p&&(he=void 0)}return v}function S(e,t,n,r,i,o,s,a){function d(e){_=u({},n),_[x]=e}var l,p,c,f,g,v,h,m,w,x,_,y,k="";if(a&&(w=a.tagName,y=a.tagCtx,n=n?L(n,a.ctx):a.ctx,e===i.content?h=e!==i.ctx._wrp?i.ctx._wrp:void 0:e!==y.content?e===a.template?(h=y.tmpl,n._wrp=y.content):h=y.content||i.content:h=i.content,y.props.link===!1&&(n=n||{},n.link=!1),(x=y.props.itemVar)&&("~"!==x.charAt(0)&&J("Use itemVar='~myItem'"),x=x.slice(1))),i&&(s=s||i._.onRender,n=L(n,i.ctx)),o===!0&&(v=!0,o=0),s&&(n&&n.link===!1||a&&a._.noVws)&&(s=void 0),m=s,s===!0&&(m=void 0,s=i._.onRender),n=e.helpers?L(e.helpers,n):n,_=n,te(t)&&!r)for(c=v?i:void 0!==o&&i||new b(n,"array",i,t,e,o,s),i&&i._.useKey&&(c._.bnd=!a||a._.bnd&&a),x&&(c.it=x),x=c.it,l=0,p=t.length;p>l;l++)x&&d(t[l]),f=new b(_,"item",c,t[l],e,(o||0)+l,s,h),g=e.fn(t[l],f,se),k+=c._.onRender?c._.onRender(g,f):g;else x&&d(t),c=v?i:new b(_,w||"data",i,t,e,o,s,h),a&&!a.flow&&(c.tag=a),k+=e.fn(t,c,se);return m?m(k,c):k}function E(e,t,n){var r=void 0!==n?ee(n)?n.call(t.data,e,t):n||"":"{Error: "+e.message+"}";return ae.onError&&void 0!==(n=ae.onError.call(t.data,e,n&&r,t))&&(r=n),t&&!t.linkCtx?re.html(r):r}function F(e){throw new se.Err(e)}function J(e){F("Syntax error\n"+e)}function I(e,t,n,r,i){function o(t){t-=f,t&&v.push(e.substr(f,t).replace(be,"\\n"))}function s(t,n){t&&(t+="}}",J((n?"{{"+n+"}} block has {{/"+t+" without {{"+t:"Unmatched or missing {{/"+t)+", in template:\n"+e))}function a(a,d,c,m,w,x,b,_,y,k,j,C){(b&&d||y&&!c||_&&":"===_.slice(-1)||k)&&J(a),x&&(w=":",m=Ne),y=y||n&&!i;var A=(d||n)&&[[]],T="",V="",R="",M="",$="",N="",S="",E="",F=!y&&!w;c=c||(_=_||"#data",w),o(C),f=C+a.length,b?p&&v.push(["*","\n"+_.replace(/^:/,"ret+= ").replace(_e,"$1")+";\n"]):c?("else"===c&&(je.test(_)&&J('for "{{else if expr}}" use "{{else expr}}"'),A=h[7]&&[[]],h[8]=e.substring(h[8],C),h=g.pop(),v=h[2],F=!0),_&&K(_.replace(be," "),A,t).replace(ke,function(e,t,n,r,i,o,s,a){return r="'"+i+"':",s?(V+=o+",",M+="'"+a+"',"):n?(R+=r+o+",",N+=r+"'"+a+"',"):t?S+=o:("trigger"===i&&(E+=o),T+=r+o+",",$+=r+"'"+a+"',",l=l||Ve.test(i)),""}).slice(0,-1),A&&A[0]&&A.pop(),u=[c,m||!!r||l||"",F&&[],U(M||(":"===c?"'#data',":""),$,N),U(V||(":"===c?"data,":""),T,R),S,E,A||0],v.push(u),F&&(g.push(h),h=u,h[8]=f)):j&&(s(j!==h[0]&&"else"!==h[0]&&j,h[0]),h[8]=e.substring(h[8],C),h=g.pop()),s(!h&&j),v=h[2]}var d,u,l,p=ae.allowCode||t&&t.allowCode||ue.allowCode===!0,c=[],f=0,g=[],v=c,h=[,,c];return p&&(t.allowCode=p),n&&(void 0!==r&&(e=e.slice(0,-r.length-2)+fe),e=le+e+fe),s(g[0]&&g[0][2].pop()[0]),e.replace(G,a),o(e.length),(f=c[c.length-1])&&s(""+f!==f&&+f[8]===f[8]&&f[0]),n?(d=B(c,e,n),O(d,[c[0][7]])):d=B(c,t),d}function O(e,t){var n,r,i=0,o=t.length;for(e.deps=[];o>i;i++){r=t[i];for(n in r)"_jsvto"!==n&&r[n].length&&(e.deps=e.deps.concat(r[n]))}e.paths=r}function U(e,t,n){return[e.slice(0,-1),t.slice(0,-1),n.slice(0,-1)]}function q(e,t){return"\n	"+(t?t+":{":"")+"args:["+e[0]+"]"+(e[1]||!t?",\n	props:{"+e[1]+"}":"")+(e[2]?",\n	ctx:{"+e[2]+"}":"")}function K(e,t,n){function r(r,m,w,x,b,_,y,k,j,C,A,T,V,R,M,$,N,S,E,F){function O(e,n,r,s,a,d,p,c){var f="."===r;if(r&&(b=b.slice(n.length),/^\.?constructor$/.test(c||b)&&J(e),f||(e=(s?'view.hlp("'+s+'")':a?"view":"data")+(c?(d?"."+d:s?"":a?"":"."+r)+(p||""):(c=s?"":a?d||"":r,"")),e+=c?"."+c:"",e=n+("view.data"===e.slice(0,9)?e.slice(5):e)),u)){if(K="linkTo"===i?o=t._jsvto=t._jsvto||[]:l.bd,B=f&&K[K.length-1]){if(B._jsv){for(;B.sb;)B=B.sb;B.bnd&&(b="^"+b.slice(1)),B.sb=b,B.bnd=B.bnd||"^"===b.charAt(0)}}else K.push(b);h[g]=E+(f?1:0)}return e}x=u&&x,x&&!k&&(b=x+b),_=_||"",w=w||m||T,b=b||j,C=C||N||"";var U,q,K,B,L,Q=")";if("["===C&&(C="[j._sq(",Q=")]"),!y||d||a){if(u&&$&&!d&&!a&&(!i||s||o)&&(U=h[g-1],F.length-1>E-(U||0))){if(U=F.slice(U,E+r.length),q!==!0)if(K=o||p[g-1].bd,B=K[K.length-1],B&&B.prm){for(;B.sb&&B.sb.prm;)B=B.sb;L=B.sb={path:B.sb,bnd:B.bnd}}else K.push(L={path:K.pop()});$=pe+":"+U+" onerror=''"+ce,q=f[$],q||(f[$]=!0,f[$]=q=I($,n,!0)),q!==!0&&L&&(L._jsv=q,L.prm=l.bd,L.bnd=L.bnd||L.path&&L.path.indexOf("^")>=0)}return d?(d=!V,d?r:T+'"'):a?(a=!R,a?r:T+'"'):(w?(h[g]=E++,l=p[++g]={bd:[]},w):"")+(S?g?"":(c=F.slice(c,E),(i?(i=s=o=!1,"\b"):"\b,")+c+(c=E+r.length,u&&t.push(l.bd=[]),"\b")):k?(g&&J(e),u&&t.pop(),i=b,s=x,c=E+r.length,x&&(u=l.bd=t[i]=[]),b+":"):b?b.split("^").join(".").replace(we,O)+(C?(l=p[++g]={bd:[]},v[g]=Q,C):_):_?_:M?(M=v[g]||M,v[g]=!1,l=p[--g],M+(C?(l=p[++g],v[g]=Q,C):"")):A?(v[g]||J(e),","):m?"":(d=V,a=R,'"'))}J(e)}var i,o,s,a,d,u=t&&t[0],l={bd:u},p={0:l},c=0,f=n?n.links:u&&(u.links=u.links||{}),g=0,v={},h={},m=(e+(n?" ":"")).replace(xe,r);return!g&&m||J(e)}function B(e,t,n){var r,i,o,s,a,d,u,l,p,c,f,g,v,h,m,w,x,b,_,y,k,j,C,A,T,R,M,$,N,S,E=0,F=de.useViews||t.useViews||t.tags||t.templates||t.helpers||t.converters,I="",U={},K=e.length;for(""+t===t?(b=n?'data-link="'+t.replace(be," ").slice(1,-1)+'"':t,t=0):(b=t.tmplName||"unnamed",t.allowCode&&(U.allowCode=!0),t.debug&&(U.debug=!0),f=t.bnds,x=t.tmpls),r=0;K>r;r++)if(i=e[r],""+i===i)I+='\n+"'+i+'"';else if(o=i[0],"*"===o)I+=";\n"+i[1]+"\nret=ret";else{if(s=i[1],k=!n&&i[2],a=q(i[3],"params")+"},"+q(v=i[4]),$=i[5],S=i[6],j=i[8]&&i[8].replace(_e,"$1"),(T="else"===o)?g&&g.push(i[7]):(E=0,f&&(g=i[7])&&(g=[g],E=f.push(1))),F=F||v[1]||v[2]||g||/view.(?!index)/.test(v[0]),(R=":"===o)?s&&(o=s===Ne?">":s+o):(k&&(_=V(j,U),_.tmplName=b+"/"+o,_.useViews=_.useViews||F,B(k,_),F=_.useViews,x.push(_)),T||(y=o,F=F||o&&(!oe[o]||!oe[o].flow),A=I,I=""),C=e[r+1],C=C&&"else"===C[0]),N=$?";\ntry{\nret+=":"\n+",h="",m="",R&&(g||S||s&&s!==Ne)){if(M=new Function("data,view,j,u"," // "+b+" "+E+" "+o+"\nreturn {"+a+"};"),M._er=$,M._tag=o,n)return M;O(M,g),w='c("'+s+'",view,',c=!0,h=w+E+",",m=")"}if(I+=R?(n?($?"try{\n":"")+"return ":N)+(c?(c=void 0,F=p=!0,w+(g?(f[E-1]=M,E):"{"+a+"}")+")"):">"===o?(u=!0,"h("+v[0]+")"):(l=!0,"((v="+v[0]+')!=null?v:"")')):(d=!0,"\n{view:view,tmpl:"+(k?x.length:"0")+","+a+"},"),y&&!C){if(I="["+I.slice(0,-1)+"]",w='t("'+y+'",view,this,',n||g){if(I=new Function("data,view,j,u"," // "+b+" "+E+" "+y+"\nreturn "+I+";"),I._er=$,I._tag=y,g&&O(f[E-1]=I,g),n)return I;h=w+E+",undefined,",m=")"}I=A+N+w+(E||I)+")",g=0,y=0}$&&(F=!0,I+=";\n}catch(e){ret"+(n?"urn ":"+=")+h+"j._err(e,view,"+$+")"+m+";}"+(n?"":"ret=ret"))}I="// "+b+"\nvar v"+(d?",t=j._tag":"")+(p?",c=j._cnvt":"")+(u?",h=j._html":"")+(n?";\n":',ret=""\n')+(U.debug?"debugger;":"")+I+(n?"\n":";\nreturn ret;"),ae.debugMode!==!1&&(I="try {\n"+I+"\n}catch(e){\nreturn j._err(e, view);\n}");try{I=new Function("data,view,j,u",I)}catch(L){J("Compiled template code:\n\n"+I+'\n: "'+L.message+'"')}return t&&(t.fn=I,t.useViews=!!F),I}function L(e,t){return e&&e!==t?t?u(u({},t),e):e:t&&u({},t)}function Q(e){return $e[e]||($e[e]="&#"+e.charCodeAt(0)+";")}function H(e){var t,n,r=[];if(typeof e===Se)for(t in e)n=e[t],n&&n.toJSON&&!n.toJSON()||ee(n)||r.push({key:t,prop:n});return r}function P(e,n,r){var i=this.jquery&&(this[0]||F('Unknown template: "'+this.selector+'"')),o=i.getAttribute(Ee);return N.call(o?t.data(i)[Fe]:ne(i),e,n,r)}function D(e){return void 0!=e?Te.test(e)&&(""+e).replace(Re,Q)||e:""}var Z=t===!1;t=t&&t.fn?t:e.jQuery;var z,G,W,X,Y,ee,te,ne,re,ie,oe,se,ae,de,ue,le,pe,ce,fe,ge,ve,he,me="v0.9.77",we=/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,xe=/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,be=/[ \t]*(\r\n|\n|\r)/g,_e=/\\(['"])/g,ye=/['"\\]/g,ke=/(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,je=/^if\s/,Ce=/<(\w+)[>\s]/,Ae=/[\x00`><"'&=]/g,Te=/[\x00`><\"'&=]/,Ve=/^on[A-Z]|^convert(Back)?$/,Re=Ae,Me=0,$e={"&":"&amp;","<":"&lt;",">":"&gt;","\x00":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;","=":"&#61;"},Ne="html",Se="object",Ee="data-jsv-tmpl",Fe="jsvTmpl",Je="For #index in nested block use #getIndex().",Ie={},Oe=e.jsrender,Ue=Oe&&t&&!t.render,qe={template:{compile:j},tag:{compile:y},viewModel:{compile:T},helper:{},converter:{}};if(Y={jsviews:me,sub:{View:b,Err:d,tmplFn:I,parse:K,extend:u,extendCtx:L,syntaxErr:J,onStore:{},addSetting:M,settings:{allowCode:!1},advSet:s,_ths:i,_tg:function(){},_cnvt:h,_tag:x,_er:F,_err:E,_html:D,_sq:function(e){return"constructor"===e&&J(""),e}},settings:{delimiters:l,advanced:function(e){return e?(u(de,e),se.advSet(),ue):de}},map:$},(d.prototype=new Error).constructor=d,c.depends=function(){return[this.get("item"),"index"]},f.depends="index",b.prototype={get:p,getIndex:f,getRsc:w,getTmpl:v,hlp:g,_is:"view"},se=Y.sub,ue=Y.settings,!(Oe||t&&t.render)){for(z in qe)R(z,qe[z]);re=Y.converters,ie=Y.helpers,oe=Y.tags,se._tg.prototype={baseApply:k,cvtArgs:m},X=se.topView=new b,t?(t.fn.render=P,t.observable&&(u(se,t.views.sub),Y.map=t.views.map)):(t={},Z&&(e.jsrender=t),t.renderFile=t.__express=t.compile=function(){throw"Node.js: use npm jsrender, or jsrender-node.js"},t.isFunction=function(e){return"function"==typeof e},t.isArray=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},se._jq=function(e){e!==t&&(u(e,t),t=e,t.fn.render=P,delete t.jsrender)},t.jsrender=me),ae=se.settings,ae.allowCode=!1,ee=t.isFunction,te=t.isArray,t.render=Ie,t.views=Y,t.templates=ne=Y.templates;for(ve in ae)M(ve);(ue.debugMode=function(e){return void 0===e?ae.debugMode:(ae.debugMode=e,ae.onError=e+""===e?new Function("","return '"+e+"';"):ee(e)?e:void 0,ue)})(!1),de=ae.advanced={useViews:!1,_jsv:!1},oe({"if":{render:function(e){var t=this,n=t.tagCtx,r=t.rendering.done||!e&&(arguments.length||!n.index)?"":(t.rendering.done=!0,t.selected=n.index,n.render(n.view,!0));return r},flow:!0},"for":{render:function(e){var t,n=!arguments.length,r=this,i=r.tagCtx,o="",s=0;return r.rendering.done||(t=n?i.view.data:e,void 0!==t&&(o+=i.render(t,n),s+=te(t)?t.length:1),(r.rendering.done=s)&&(r.selected=i.index)),o},flow:!0},props:{baseTag:"for",dataMap:$(H),flow:!0},include:{flow:!0},"*":{render:o,flow:!0},":*":{render:o,flow:!0},dbg:ie.dbg=re.dbg=a}),re({html:D,attr:D,url:function(e){return void 0!=e?encodeURI(""+e):null===e?e:""}})}return ae=se.settings,ue.delimiters("{{","}}","^"),Ue&&Oe.views.sub._jq(t),t||Oe},window);
//# sourceMappingURL=jsrender.min.js.map
