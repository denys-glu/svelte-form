var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function u(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function s(e){return document.createElement(e)}function i(e){return document.createTextNode(e)}function m(){return i(" ")}function p(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function d(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e){return""===e?null:+e}function f(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function h(e,t){e.value=null==t?"":t}let v;function g(e){v=e}const y=[],N=[],$=[],k=[],x=Promise.resolve();let O=!1;function C(e){$.push(e)}let _=!1;const T=new Set;function P(){if(!_){_=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];g(t),z(t.$$)}for(g(null),y.length=0;N.length;)N.pop()();for(let e=0;e<$.length;e+=1){const t=$[e];T.has(t)||(T.add(t),t())}$.length=0}while(y.length);for(;k.length;)k.pop()();O=!1,_=!1,T.clear()}}function z(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const q=new Set;function A(e,t){e&&e.i&&(q.delete(e),e.i(t))}function D(e,n,u,a){const{fragment:l,on_mount:c,on_destroy:s,after_update:i}=e.$$;l&&l.m(n,u),a||C((()=>{const n=c.map(t).filter(r);s?s.push(...n):o(n),e.$$.on_mount=[]})),i.forEach(C)}function E(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function w(e,t){-1===e.$$.dirty[0]&&(y.push(e),O||(O=!0,x.then(P)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function S(t,r,u,a,l,s,i,m=[-1]){const p=v;g(t);const d=t.$$={fragment:null,ctx:null,props:s,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:r.target||p.$$.root};i&&i(d.root);let b=!1;if(d.ctx=u?u(t,r.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&l(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),b&&w(t,e)),n})):[],d.update(),b=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);d.fragment&&d.fragment.l(e),e.forEach(c)}else d.fragment&&d.fragment.c();r.intro&&A(t.$$.fragment),D(t,r.target,r.anchor,r.customElement),P()}g(p)}class B{$destroy(){E(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function j(t){let n,r,u,v,g,y,N,$,k,x,O,C,_,T,P,z,q,A,D,E,w,S,B,j,L,F,M,Z,H,W,G,I,J,K,Q,R,U,V,X,Y,ee,te,ne,oe,re,ue,ae,le,ce,se,ie,me,pe,de,be,fe,he,ve,ge,ye,Ne,$e,ke,xe,Oe,Ce,_e,Te,Pe,ze,qe,Ae,De,Ee,we,Se,Be,je,Le,Fe,Me,Ze=t[3].bankName+"",He=t[3].printDate+"",We=t[3].oneOone+"",Ge=t[3].zeroOneNumberCheck+"",Ie=t[3].accountNumber+"",Je=t[3].accountType+"",Ke=t[3].billPeriod+"",Qe=t[3].amount+"",Re=t[3].trustNumber+"",Ue=t[1].replace(/[_-]/g,"")+"";return{c(){n=s("form"),r=s("div"),u=s("label"),u.textContent="Bank name",v=m(),g=s("input"),y=m(),N=s("div"),$=i(Ze),k=m(),x=s("div"),O=s("label"),O.textContent="Print date",C=m(),_=s("input"),T=m(),P=s("div"),z=i(He),q=m(),A=s("div"),D=s("label"),D.textContent="101",E=m(),w=s("input"),S=m(),B=s("div"),j=i(We),L=m(),F=s("div"),M=s("label"),M.textContent="01_number_check",Z=m(),H=s("input"),W=m(),G=s("div"),I=i(Ge),J=m(),K=s("div"),Q=s("label"),Q.textContent="Account number",R=m(),U=s("input"),V=m(),X=s("div"),Y=i(Ie),ee=m(),te=s("div"),ne=s("label"),ne.textContent="Account type",oe=m(),re=s("input"),ue=m(),ae=s("div"),le=i(Je),ce=m(),se=s("div"),ie=s("label"),ie.textContent="Bill period",me=m(),pe=s("input"),de=m(),be=s("div"),fe=i(Ke),he=m(),ve=s("div"),ge=s("label"),ge.textContent="Amount",ye=m(),Ne=s("input"),$e=m(),ke=s("div"),xe=i(Qe),Oe=m(),Ce=s("div"),_e=s("label"),_e.textContent="Trust number",Te=m(),Pe=s("input"),ze=m(),qe=s("div"),Ae=i(Re),De=m(),Ee=s("button"),we=i("Create String"),Be=m(),je=s("div"),Le=i(Ue),d(u,"for","first"),d(u,"class","svelte-y2to5e"),d(g,"type","text"),d(g,"placeholder","max 3"),d(g,"id","first"),d(g,"name","bankName"),g.required=!0,d(g,"class","svelte-y2to5e"),d(r,"class","input-group svelte-y2to5e"),d(N,"class","error svelte-y2to5e"),d(O,"for","first"),d(O,"class","svelte-y2to5e"),d(_,"type","date"),d(_,"placeholder","max 8"),d(_,"name","printDate"),_.required=!0,d(_,"class","svelte-y2to5e"),d(x,"class","input-group svelte-y2to5e"),d(P,"class","error svelte-y2to5e"),d(D,"for","first"),d(D,"class","svelte-y2to5e"),d(w,"type","number"),d(w,"placeholder","max 3"),d(w,"name","oneOone"),w.required=!0,d(w,"class","svelte-y2to5e"),d(A,"class","input-group svelte-y2to5e"),d(B,"class","error svelte-y2to5e"),d(M,"for","first"),d(M,"class","svelte-y2to5e"),d(H,"type","number"),d(H,"placeholder","max 2"),d(H,"name","zeroOneNumberCheck"),H.required=!0,d(H,"class","svelte-y2to5e"),d(F,"class","input-group svelte-y2to5e"),d(G,"class","error svelte-y2to5e"),d(Q,"for","first"),d(Q,"class","svelte-y2to5e"),d(U,"type","number"),d(U,"placeholder","max 10"),d(U,"name","accountNumber"),U.required=!0,d(U,"class","svelte-y2to5e"),d(K,"class","input-group svelte-y2to5e"),d(X,"class","error svelte-y2to5e"),d(ne,"for","first"),d(ne,"class","svelte-y2to5e"),d(re,"type","text"),d(re,"placeholder","max 1"),d(re,"name","accountType"),re.required=!0,d(re,"class","svelte-y2to5e"),d(te,"class","input-group svelte-y2to5e"),d(ae,"class","error svelte-y2to5e"),d(ie,"for","first"),d(ie,"class","svelte-y2to5e"),d(pe,"type","number"),d(pe,"placeholder","max 6"),d(pe,"name","billPeriod"),pe.required=!0,d(pe,"class","svelte-y2to5e"),d(se,"class","input-group svelte-y2to5e"),d(be,"class","error svelte-y2to5e"),d(ge,"for","first"),d(ge,"class","svelte-y2to5e"),d(Ne,"type","number"),d(Ne,"placeholder","max 10"),d(Ne,"name","amount"),Ne.required=!0,d(Ne,"class","svelte-y2to5e"),d(ve,"class","input-group svelte-y2to5e"),d(ke,"class","error svelte-y2to5e"),d(_e,"for","first"),d(_e,"class","svelte-y2to5e"),d(Pe,"type","number"),d(Pe,"placeholder","max 3"),d(Pe,"name","trustNumber"),Pe.required=!0,d(Pe,"class","svelte-y2to5e"),d(Ce,"class","input-group svelte-y2to5e"),d(qe,"class","error svelte-y2to5e"),Ee.disabled=Se=!t[2],d(Ee,"class","svelte-y2to5e"),d(n,"class","svelte-y2to5e"),d(je,"class","output svelte-y2to5e")},m(e,o){l(e,n,o),a(n,r),a(r,u),a(r,v),a(r,g),h(g,t[0].bankName),a(n,y),a(n,N),a(N,$),a(n,k),a(n,x),a(x,O),a(x,C),a(x,_),h(_,t[0].printDate),a(n,T),a(n,P),a(P,z),a(n,q),a(n,A),a(A,D),a(A,E),a(A,w),h(w,t[0].oneOone),a(n,S),a(n,B),a(B,j),a(n,L),a(n,F),a(F,M),a(F,Z),a(F,H),h(H,t[0].zeroOneNumberCheck),a(n,W),a(n,G),a(G,I),a(n,J),a(n,K),a(K,Q),a(K,R),a(K,U),h(U,t[0].accountNumber),a(n,V),a(n,X),a(X,Y),a(n,ee),a(n,te),a(te,ne),a(te,oe),a(te,re),h(re,t[0].accountType),a(n,ue),a(n,ae),a(ae,le),a(n,ce),a(n,se),a(se,ie),a(se,me),a(se,pe),h(pe,t[0].billPeriod),a(n,de),a(n,be),a(be,fe),a(n,he),a(n,ve),a(ve,ge),a(ve,ye),a(ve,Ne),h(Ne,t[0].amount),a(n,$e),a(n,ke),a(ke,xe),a(n,Oe),a(n,Ce),a(Ce,_e),a(Ce,Te),a(Ce,Pe),h(Pe,t[0].trustNumber),a(n,ze),a(n,qe),a(qe,Ae),a(n,De),a(n,Ee),a(Ee,we),l(e,Be,o),l(e,je,o),a(je,Le),Fe||(Me=[p(g,"input",t[6]),p(_,"input",t[7]),p(w,"input",t[8]),p(H,"input",t[9]),p(U,"input",t[10]),p(re,"input",t[11]),p(pe,"input",t[12]),p(Ne,"input",t[13]),p(Pe,"input",t[14]),p(n,"submit",t[5]),p(n,"input",t[4])],Fe=!0)},p(e,[t]){1&t&&g.value!==e[0].bankName&&h(g,e[0].bankName),8&t&&Ze!==(Ze=e[3].bankName+"")&&f($,Ze),1&t&&h(_,e[0].printDate),8&t&&He!==(He=e[3].printDate+"")&&f(z,He),1&t&&b(w.value)!==e[0].oneOone&&h(w,e[0].oneOone),8&t&&We!==(We=e[3].oneOone+"")&&f(j,We),1&t&&b(H.value)!==e[0].zeroOneNumberCheck&&h(H,e[0].zeroOneNumberCheck),8&t&&Ge!==(Ge=e[3].zeroOneNumberCheck+"")&&f(I,Ge),1&t&&b(U.value)!==e[0].accountNumber&&h(U,e[0].accountNumber),8&t&&Ie!==(Ie=e[3].accountNumber+"")&&f(Y,Ie),1&t&&re.value!==e[0].accountType&&h(re,e[0].accountType),8&t&&Je!==(Je=e[3].accountType+"")&&f(le,Je),1&t&&b(pe.value)!==e[0].billPeriod&&h(pe,e[0].billPeriod),8&t&&Ke!==(Ke=e[3].billPeriod+"")&&f(fe,Ke),1&t&&b(Ne.value)!==e[0].amount&&h(Ne,e[0].amount),8&t&&Qe!==(Qe=e[3].amount+"")&&f(xe,Qe),1&t&&b(Pe.value)!==e[0].trustNumber&&h(Pe,e[0].trustNumber),8&t&&Re!==(Re=e[3].trustNumber+"")&&f(Ae,Re),4&t&&Se!==(Se=!e[2])&&(Ee.disabled=Se),2&t&&Ue!==(Ue=e[1].replace(/[_-]/g,"")+"")&&f(Le,Ue)},i:e,o:e,d(e){e&&c(n),e&&c(Be),e&&c(je),Fe=!1,o(Me)}}}function L(e){let t="";const n=10-String(e).length;for(let e=0;e<n;e++)t+="0";return t+e}function F(e,t,n){let o={bankName:"",printDate:"",oneOone:"",zeroOneNumberCheck:"",accountNumber:"",accountType:"",billPeriod:"",bunchZeroes:"000000000000000",bunchOfSpaces:"                   ",amount:"",trustNumber:""},r="",u=!1,a={bankName:"",printDate:"",oneOone:"",zeroOneNumberCheck:"",accountNumber:"",accountType:"",billPeriod:"",bunchZeroes:"",bunchOfSpaces:"",amount:"",trustNumber:""};return[o,r,u,a,function(e){"bankName"===e.target.name&&(3!==e.target.value.length?n(3,a.bankName="Bank name should be 3 characters long",a):n(3,a.bankName="",a)),"oneOone"===e.target.name&&(3!==e.target.value.length?n(3,a.oneOone="101 should be 3 characters long",a):n(3,a.oneOone="",a)),"zeroOneNumberCheck"===e.target.name&&(2!==e.target.value.length?n(3,a.zeroOneNumberCheck="zeroOneNumberCheck name should be 2 characters long",a):n(3,a.zeroOneNumberCheck="",a)),"accountNumber"===e.target.name&&(e.target.value.length>10?n(3,a.accountNumber="Account number should be 10 or less characters long",a):n(3,a.accountNumber="",a)),"accountType"===e.target.name&&(1!==e.target.value.length?n(3,a.accountType="Account type should be 1 characters long",a):n(3,a.accountType="",a)),"billPeriod"===e.target.name&&(6!==e.target.value.length?n(3,a.billPeriod="Bill period should be 6 characters long",a):n(3,a.billPeriod="",a)),"amount"===e.target.name&&(e.target.value.length>10?n(3,a.amount="Amount should be 10 or less characters long",a):n(3,a.amount="",a)),"trustNumber"===e.target.name&&(3!==e.target.value.length?n(3,a.trustNumber="Trust number should be 3 characters long",a):n(3,a.trustNumber="",a));for(const e in a)""!==a[e]?n(2,u=!1):n(2,u=!0)},function(e){e.preventDefault(),console.log("Submitting"),n(1,r="");for(const e in o)console.log(o[e]),n(1,r+="accountNumber"===e||"amount"===e?L(o[e]):o[e])},function(){o.bankName=this.value,n(0,o)},function(){o.printDate=this.value,n(0,o)},function(){o.oneOone=b(this.value),n(0,o)},function(){o.zeroOneNumberCheck=b(this.value),n(0,o)},function(){o.accountNumber=b(this.value),n(0,o)},function(){o.accountType=this.value,n(0,o)},function(){o.billPeriod=b(this.value),n(0,o)},function(){o.amount=b(this.value),n(0,o)},function(){o.trustNumber=b(this.value),n(0,o)}]}class M extends B{constructor(e){super(),S(this,e,F,j,u,{})}}function Z(t){let n,o,r,u,i;return u=new M({}),{c(){var e;n=s("main"),o=s("h2"),o.innerHTML="Wells Fargo <em>From Bank</em>",r=m(),(e=u.$$.fragment)&&e.c(),d(n,"class","svelte-7o10ad")},m(e,t){l(e,n,t),a(n,o),a(n,r),D(u,n,null),i=!0},p:e,i(e){i||(A(u.$$.fragment,e),i=!0)},o(e){!function(e,t,n,o){if(e&&e.o){if(q.has(e))return;q.add(e),(void 0).c.push((()=>{q.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}(u.$$.fragment,e),i=!1},d(e){e&&c(n),E(u)}}}return new class extends B{constructor(e){super(),S(this,e,null,Z,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
