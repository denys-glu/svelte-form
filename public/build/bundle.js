var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function u(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function s(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function i(e){return document.createTextNode(e)}function m(){return i(" ")}function p(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function d(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function f(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function b(e,t){e.value=null==t?"":t}let h;function v(e){h=e}const g=[],y=[],N=[],$=[],k=Promise.resolve();let x=!1;function O(e){N.push(e)}let C=!1;const _=new Set;function T(){if(!C){C=!0;do{for(let e=0;e<g.length;e+=1){const t=g[e];v(t),P(t.$$)}for(v(null),g.length=0;y.length;)y.pop()();for(let e=0;e<N.length;e+=1){const t=N[e];_.has(t)||(_.add(t),t())}N.length=0}while(g.length);for(;$.length;)$.pop()();x=!1,C=!1,_.clear()}}function P(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const z=new Set;function q(e,t){e&&e.i&&(z.delete(e),e.i(t))}function A(e,n,a,u){const{fragment:l,on_mount:s,on_destroy:c,after_update:i}=e.$$;l&&l.m(n,a),u||O((()=>{const n=s.map(t).filter(r);c?c.push(...n):o(n),e.$$.on_mount=[]})),i.forEach(O)}function D(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function E(e,t){-1===e.$$.dirty[0]&&(g.push(e),x||(x=!0,k.then(T)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function w(t,r,a,u,l,c,i,m=[-1]){const p=h;v(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:r.target||p.$$.root};i&&i(d.root);let f=!1;if(d.ctx=a?a(t,r.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&l(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),f&&E(t,e)),n})):[],d.update(),f=!0,o(d.before_update),d.fragment=!!u&&u(d.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);d.fragment&&d.fragment.l(e),e.forEach(s)}else d.fragment&&d.fragment.c();r.intro&&q(t.$$.fragment),A(t,r.target,r.anchor,r.customElement),T()}v(p)}class B{$destroy(){D(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function S(t){let n,r,a,h,v,g,y,N,$,k,x,O,C,_,T,P,z,q,A,D,E,w,B,S,j,F,L,M,W,Z,H,G,I,J,K,Q,R,U,V,X,Y,ee,te,ne,oe,re,ae,ue,le,se,ce,ie,me,pe,de,fe,be,he,ve,ge,ye,Ne,$e,ke,xe,Oe,Ce,_e,Te,Pe,ze,qe,Ae,De,Ee,we,Be,Se,je,Fe,Le,Me=t[3].bankName+"",We=t[3].printDate+"",Ze=t[3].oneOone+"",He=t[3].zeroOneNumberCheck+"",Ge=t[3].accountNumber+"",Ie=t[3].accountType+"",Je=t[3].billPeriod+"",Ke=t[3].amount+"",Qe=t[3].trustNumber+"",Re=t[1].replace(/[_-]/g,"")+"";return{c(){n=c("form"),r=c("div"),a=c("label"),a.textContent="Bank name",h=m(),v=c("input"),g=m(),y=c("div"),N=i(Me),$=m(),k=c("div"),x=c("label"),x.textContent="Print date",O=m(),C=c("input"),_=m(),T=c("div"),P=i(We),z=m(),q=c("div"),A=c("label"),A.textContent="101",D=m(),E=c("input"),w=m(),B=c("div"),S=i(Ze),j=m(),F=c("div"),L=c("label"),L.textContent="01_number_check",M=m(),W=c("input"),Z=m(),H=c("div"),G=i(He),I=m(),J=c("div"),K=c("label"),K.textContent="Account number",Q=m(),R=c("input"),U=m(),V=c("div"),X=i(Ge),Y=m(),ee=c("div"),te=c("label"),te.textContent="Account type",ne=m(),oe=c("input"),re=m(),ae=c("div"),ue=i(Ie),le=m(),se=c("div"),ce=c("label"),ce.textContent="Bill period",ie=m(),me=c("input"),pe=m(),de=c("div"),fe=i(Je),be=m(),he=c("div"),ve=c("label"),ve.textContent="Amount",ge=m(),ye=c("input"),Ne=m(),$e=c("div"),ke=i(Ke),xe=m(),Oe=c("div"),Ce=c("label"),Ce.textContent="Trust number",_e=m(),Te=c("input"),Pe=m(),ze=c("div"),qe=i(Qe),Ae=m(),De=c("button"),Ee=i("Create String"),Be=m(),Se=c("div"),je=i(Re),d(a,"for","first"),d(a,"class","svelte-y2to5e"),d(v,"type","text"),d(v,"placeholder","max 3"),d(v,"id","first"),d(v,"name","bankName"),v.required=!0,d(v,"class","svelte-y2to5e"),d(r,"class","input-group svelte-y2to5e"),d(y,"class","error svelte-y2to5e"),d(x,"for","first"),d(x,"class","svelte-y2to5e"),d(C,"type","date"),d(C,"placeholder","max 8"),d(C,"name","printDate"),C.required=!0,d(C,"class","svelte-y2to5e"),d(k,"class","input-group svelte-y2to5e"),d(T,"class","error svelte-y2to5e"),d(A,"for","first"),d(A,"class","svelte-y2to5e"),d(E,"type","tel"),d(E,"placeholder","max 3"),d(E,"name","oneOone"),E.required=!0,d(E,"class","svelte-y2to5e"),d(q,"class","input-group svelte-y2to5e"),d(B,"class","error svelte-y2to5e"),d(L,"for","first"),d(L,"class","svelte-y2to5e"),d(W,"type","tel"),d(W,"placeholder","max 2"),d(W,"name","zeroOneNumberCheck"),W.required=!0,d(W,"class","svelte-y2to5e"),d(F,"class","input-group svelte-y2to5e"),d(H,"class","error svelte-y2to5e"),d(K,"for","first"),d(K,"class","svelte-y2to5e"),d(R,"type","tel"),d(R,"placeholder","max 10"),d(R,"name","accountNumber"),R.required=!0,d(R,"class","svelte-y2to5e"),d(J,"class","input-group svelte-y2to5e"),d(V,"class","error svelte-y2to5e"),d(te,"for","first"),d(te,"class","svelte-y2to5e"),d(oe,"type","text"),d(oe,"placeholder","max 1"),d(oe,"name","accountType"),oe.required=!0,d(oe,"class","svelte-y2to5e"),d(ee,"class","input-group svelte-y2to5e"),d(ae,"class","error svelte-y2to5e"),d(ce,"for","first"),d(ce,"class","svelte-y2to5e"),d(me,"type","tel"),d(me,"placeholder","max 6"),d(me,"name","billPeriod"),me.required=!0,d(me,"class","svelte-y2to5e"),d(se,"class","input-group svelte-y2to5e"),d(de,"class","error svelte-y2to5e"),d(ve,"for","first"),d(ve,"class","svelte-y2to5e"),d(ye,"type","tel"),d(ye,"placeholder","max 10"),d(ye,"name","amount"),ye.required=!0,d(ye,"class","svelte-y2to5e"),d(he,"class","input-group svelte-y2to5e"),d($e,"class","error svelte-y2to5e"),d(Ce,"for","first"),d(Ce,"class","svelte-y2to5e"),d(Te,"type","tel"),d(Te,"placeholder","max 3"),d(Te,"name","trustNumber"),Te.required=!0,d(Te,"class","svelte-y2to5e"),d(Oe,"class","input-group svelte-y2to5e"),d(ze,"class","error svelte-y2to5e"),De.disabled=we=!t[2],d(De,"class","svelte-y2to5e"),d(n,"class","svelte-y2to5e"),d(Se,"class","output svelte-y2to5e")},m(e,o){l(e,n,o),u(n,r),u(r,a),u(r,h),u(r,v),b(v,t[0].bankName),u(n,g),u(n,y),u(y,N),u(n,$),u(n,k),u(k,x),u(k,O),u(k,C),b(C,t[0].printDate),u(n,_),u(n,T),u(T,P),u(n,z),u(n,q),u(q,A),u(q,D),u(q,E),b(E,t[0].oneOone),u(n,w),u(n,B),u(B,S),u(n,j),u(n,F),u(F,L),u(F,M),u(F,W),b(W,t[0].zeroOneNumberCheck),u(n,Z),u(n,H),u(H,G),u(n,I),u(n,J),u(J,K),u(J,Q),u(J,R),b(R,t[0].accountNumber),u(n,U),u(n,V),u(V,X),u(n,Y),u(n,ee),u(ee,te),u(ee,ne),u(ee,oe),b(oe,t[0].accountType),u(n,re),u(n,ae),u(ae,ue),u(n,le),u(n,se),u(se,ce),u(se,ie),u(se,me),b(me,t[0].billPeriod),u(n,pe),u(n,de),u(de,fe),u(n,be),u(n,he),u(he,ve),u(he,ge),u(he,ye),b(ye,t[0].amount),u(n,Ne),u(n,$e),u($e,ke),u(n,xe),u(n,Oe),u(Oe,Ce),u(Oe,_e),u(Oe,Te),b(Te,t[0].trustNumber),u(n,Pe),u(n,ze),u(ze,qe),u(n,Ae),u(n,De),u(De,Ee),l(e,Be,o),l(e,Se,o),u(Se,je),Fe||(Le=[p(v,"input",t[6]),p(C,"input",t[7]),p(E,"input",t[8]),p(W,"input",t[9]),p(R,"input",t[10]),p(oe,"input",t[11]),p(me,"input",t[12]),p(ye,"input",t[13]),p(Te,"input",t[14]),p(n,"submit",t[5]),p(n,"input",t[4])],Fe=!0)},p(e,[t]){1&t&&v.value!==e[0].bankName&&b(v,e[0].bankName),8&t&&Me!==(Me=e[3].bankName+"")&&f(N,Me),1&t&&b(C,e[0].printDate),8&t&&We!==(We=e[3].printDate+"")&&f(P,We),1&t&&b(E,e[0].oneOone),8&t&&Ze!==(Ze=e[3].oneOone+"")&&f(S,Ze),1&t&&b(W,e[0].zeroOneNumberCheck),8&t&&He!==(He=e[3].zeroOneNumberCheck+"")&&f(G,He),1&t&&b(R,e[0].accountNumber),8&t&&Ge!==(Ge=e[3].accountNumber+"")&&f(X,Ge),1&t&&oe.value!==e[0].accountType&&b(oe,e[0].accountType),8&t&&Ie!==(Ie=e[3].accountType+"")&&f(ue,Ie),1&t&&b(me,e[0].billPeriod),8&t&&Je!==(Je=e[3].billPeriod+"")&&f(fe,Je),1&t&&b(ye,e[0].amount),8&t&&Ke!==(Ke=e[3].amount+"")&&f(ke,Ke),1&t&&b(Te,e[0].trustNumber),8&t&&Qe!==(Qe=e[3].trustNumber+"")&&f(qe,Qe),4&t&&we!==(we=!e[2])&&(De.disabled=we),2&t&&Re!==(Re=e[1].replace(/[_-]/g,"")+"")&&f(je,Re)},i:e,o:e,d(e){e&&s(n),e&&s(Be),e&&s(Se),Fe=!1,o(Le)}}}function j(e){let t="";const n=10-String(e).length;for(let e=0;e<n;e++)t+="0";return t+e}function F(e,t,n){let o={bankName:"WFB",printDate:"",oneOone:"",zeroOneNumberCheck:"",accountNumber:"",accountType:"",billPeriod:"",bunchZeroes:"000000000000000",bunchOfSpaces:"                   ",amount:"",trustNumber:""},r="",a=!1,u={bankName:"",printDate:"",oneOone:"",zeroOneNumberCheck:"",accountNumber:"",accountType:"",billPeriod:"",bunchZeroes:"",bunchOfSpaces:"",amount:"",trustNumber:""};return[o,r,a,u,function(e){console.log(e.target.value),"bankName"===e.target.name&&(3!==e.target.value.length?n(3,u.bankName="Bank name should be 3 characters long",u):n(3,u.bankName="",u)),"oneOone"===e.target.name&&(3!==e.target.value.length?n(3,u.oneOone="101 should be 3 characters long",u):n(3,u.oneOone="",u)),"zeroOneNumberCheck"===e.target.name&&(2!==e.target.value.length?n(3,u.zeroOneNumberCheck="zeroOneNumberCheck name should be 2 characters long",u):n(3,u.zeroOneNumberCheck="",u)),"accountNumber"===e.target.name&&(e.target.value.length>10?n(3,u.accountNumber="Account number should be 10 or less characters long",u):n(3,u.accountNumber="",u)),"accountType"===e.target.name&&(1!==e.target.value.length?n(3,u.accountType="Account type should be 1 characters long",u):n(3,u.accountType="",u)),"billPeriod"===e.target.name&&(6!==e.target.value.length?n(3,u.billPeriod="Bill period should be 6 characters long",u):n(3,u.billPeriod="",u)),"amount"===e.target.name&&(e.target.value.length>10?n(3,u.amount="Amount should be 10 or less characters long",u):n(3,u.amount="",u)),"trustNumber"===e.target.name&&(3!==e.target.value.length?n(3,u.trustNumber="Trust number should be 3 characters long",u):n(3,u.trustNumber="",u));for(const e in u)""!==u[e]?n(2,a=!1):n(2,a=!0)},function(e){e.preventDefault(),console.log("Submitting"),n(1,r="");for(const e in o)if(console.log(o[e]),"accountNumber"===e)n(1,r+=j(o[e]));else if("amount"===e)n(1,r+=j(o[e]));else if("printDate"===e){let t=o[e].split("-"),a="";a+=t[1],a+=t[2],a+=t[0],n(1,r+=a)}else n(1,r+=o[e])},function(){o.bankName=this.value,n(0,o)},function(){o.printDate=this.value,n(0,o)},function(){o.oneOone=this.value,n(0,o)},function(){o.zeroOneNumberCheck=this.value,n(0,o)},function(){o.accountNumber=this.value,n(0,o)},function(){o.accountType=this.value,n(0,o)},function(){o.billPeriod=this.value,n(0,o)},function(){o.amount=this.value,n(0,o)},function(){o.trustNumber=this.value,n(0,o)}]}class L extends B{constructor(e){super(),w(this,e,F,S,a,{})}}function M(t){let n,o,r,a,i;return a=new L({}),{c(){var e;n=c("main"),o=c("h2"),o.innerHTML="Wells Fargo <em>From Bank</em>",r=m(),(e=a.$$.fragment)&&e.c(),d(n,"class","svelte-7o10ad")},m(e,t){l(e,n,t),u(n,o),u(n,r),A(a,n,null),i=!0},p:e,i(e){i||(q(a.$$.fragment,e),i=!0)},o(e){!function(e,t,n,o){if(e&&e.o){if(z.has(e))return;z.add(e),(void 0).c.push((()=>{z.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}(a.$$.fragment,e),i=!1},d(e){e&&s(n),D(a)}}}return new class extends B{constructor(e){super(),w(this,e,null,M,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
