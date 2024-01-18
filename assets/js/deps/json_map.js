"use strict";(self.webpackChunk_am5mapeditor=self.webpackChunk_am5mapeditor||[]).push([[750],{3778:function(t,e,r){r.d(e,{ClusteredPointSeries:function(){return g},GraticuleSeries:function(){return n.d},MapChart:function(){return s.T},MapLine:function(){return i.o},MapLineSeries:function(){return u.S},MapPointSeries:function(){return a.l},MapPolygon:function(){return o.o},MapPolygonSeries:function(){return c.W},MapSeries:function(){return y.U},ZoomControl:function(){return m.L}});var n=r(8088),s=r(3726),i=r(8609),u=r(2515),a=r(2473),o=r(5268),c=r(6228),l=r(3483),f=r(2059),h=r(5559),d=r(5566),p=r(2308),x=r(15),_=r(5325);class g extends a.l{constructor(){super(...arguments),Object.defineProperty(this,"_dataItem",{enumerable:!0,configurable:!0,writable:!0,value:this.makeDataItem({})}),Object.defineProperty(this,"_clusterIndex",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_clusters",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"clusteredDataItems",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_scatterIndex",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_scatters",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_packLayout",{enumerable:!0,configurable:!0,writable:!0,value:x.Z()}),Object.defineProperty(this,"_spiral",{enumerable:!0,configurable:!0,writable:!0,value:[]})}_afterNew(){this.fields.push("groupId"),this._setRawDefault("groupIdField","groupId"),super._afterNew()}_updateChildren(){super._updateChildren(),this.isDirty("scatterRadius")&&(this._spiral=_.Rs(0,0,300,300,0,3,3,0,0));const t={};d.S6(this.dataItems,(e=>{const r=e.get("groupId","_default");t[r]||(t[r]=[]),t[r].push(e)})),this._scatterIndex=-1,this._scatters=[],this._clusterIndex=-1,this._clusters=[],d.S6(this.clusteredDataItems,(t=>{t.setRaw("children",void 0)})),d.S6(this.dataItems,(t=>{t.setRaw("cluster",void 0)})),p.S6(t,((t,e)=>{this._scatterGroup(e)})),p.S6(t,((t,e)=>{this._clusterGroup(e)})),d.S6(this.dataItems,(t=>{if(!t.get("cluster")){const e=t.bullets;e&&d.S6(e,(t=>{const e=t.get("sprite");e&&e.set("forceHidden",!1)}))}}))}zoomToCluster(t,e){this.zoomToDataItems(t.get("children",[]),e)}_clusterGroup(t){const e=this.chart;if(e&&e.get("zoomLevel",1)>=e.get("maxZoomLevel",100)*this.get("stopClusterZoom",.95));else for(;t.length>0;){this._clusterIndex++,this._clusters[this._clusterIndex]=[];const e=this._clusters[this._clusterIndex],r=t[0];e.push(r),d.Od(t,r),this._clusterDataItem(r,t)}let r=0;d.S6(this._clusters,(t=>{let e=0,n=0,s=t.length;if(s>1){let i=this.clusteredDataItems[r];if(!i){i=new l.z(this,void 0,{});const t=this.get("clusteredBullet");if(t){const e=i.set("bullet",t(this._root,this,i));if(e){const t=e.get("sprite");t&&(this.bulletsContainer.children.push(t),t._setDataItem(i))}}this.clusteredDataItems.push(i)}d.S6(t,(t=>{t.setRaw("cluster",i);const r=t.get("point");r&&(e+=r.x,n+=r.y);const s=t.bullets;s&&d.S6(s,(t=>{const e=t.get("sprite");e&&e.set("forceHidden",!0)}))}));let u=e/s,a=n/s;i.setRaw("children",t);const o=i.get("value");i.setRaw("value",s);const c=i.get("bullet");if(c){const t=c.get("sprite");t&&(t.set("forceHidden",!1),t.setAll({x:u,y:a}),o!=s&&t instanceof f.W&&t.walkChildren((t=>{t instanceof h._&&t.text.markDirtyText()})))}r++}})),d.S6(this.clusteredDataItems,(t=>{let e=t.get("children");if(!e||0==e.length){const e=t.get("bullet");if(e){const t=e.get("sprite");t&&t.set("forceHidden",!0)}}}))}_onDataClear(){super._onDataClear(),d.S6(this.clusteredDataItems,(t=>{const e=t.get("bullet");if(e){const t=e.get("sprite");t&&t.dispose()}})),this.clusteredDataItems=[]}_clusterDataItem(t,e){const r=t.get("point");r&&d.S6(e,(t=>{if(t&&!t.get("clipped")){const n=t.get("point");n&&Math.hypot(n.x-r.x,n.y-r.y)<this.get("minDistance",20)&&(this._clusters[this._clusterIndex].push(t),d.Od(e,t),this._clusterDataItem(t,e))}}))}_scatterGroup(t){const e=this.chart;if(e&&e.get("zoomLevel",1)>=e.get("maxZoomLevel",100)*this.get("stopClusterZoom",.95)){for(;t.length>0;){this._scatterIndex++,this._scatters[this._scatterIndex]=[];const e=this._scatters[this._scatterIndex],r=t[0];e.push(r),d.Od(t,r),this._scatterDataItem(r,t)}d.S6(this._scatters,(t=>{if(t.length>1){let e=[],r=0,n=this.get("scatterRadius",8);d.S6(t,(t=>{let s=this._spiral[r],i=!0;if(e.length>0)for(;i;)d.S6(e,(t=>{for(i=!1;_._G({x:s.x,y:s.y,radius:n},t);)r++,null==this._spiral[r]?i=!1:(i=!0,s=this._spiral[r])}));const u=s.x,a=s.y;e.push({x:u,y:a,radius:n}),t.set("dx",u),t.set("dy",a);const o=t.bullets;o&&d.S6(o,(t=>{const e=t.get("sprite");e&&e.setAll({dx:u,dy:a})}))}))}}))}}_scatterDataItem(t,e){const r=t.get("point");r&&d.S6(e,(t=>{if(t&&!t.get("clipped")){const n=t.get("point");n&&Math.hypot(n.x-r.x,n.y-r.y)<this.get("scatterDistance",5)&&(this._scatters[this._scatterIndex].push(t),d.Od(e,t),this._scatterDataItem(t,e))}}))}}Object.defineProperty(g,"className",{enumerable:!0,configurable:!0,writable:!0,value:"ClusteredPointSeries"}),Object.defineProperty(g,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:a.l.classNames.concat([g.className])});var y=r(4693),m=r(1311)},6198:function(t,e,r){function n(t){return null==t?null:s(t)}function s(t){if("function"!=typeof t)throw new Error;return t}r.d(e,{C:function(){return s},j:function(){return n}})},3656:function(t,e,r){function n(){return 0}function s(t){return function(){return t}}r.d(e,{G:function(){return n},Z:function(){return s}})},15:function(t,e,r){r.d(e,{Z:function(){return v}});var n=r(6198),s=r(3656);const i=1664525,u=1013904223,a=4294967296;function o(t,e){var r,n;if(f(e,t))return[e];for(r=0;r<t.length;++r)if(c(e,t[r])&&f(d(t[r],e),t))return[t[r],e];for(r=0;r<t.length-1;++r)for(n=r+1;n<t.length;++n)if(c(d(t[r],t[n]),e)&&c(d(t[r],e),t[n])&&c(d(t[n],e),t[r])&&f(p(t[r],t[n],e),t))return[t[r],t[n],e];throw new Error}function c(t,e){var r=t.r-e.r,n=e.x-t.x,s=e.y-t.y;return r<0||r*r<n*n+s*s}function l(t,e){var r=t.r-e.r+1e-9*Math.max(t.r,e.r,1),n=e.x-t.x,s=e.y-t.y;return r>0&&r*r>n*n+s*s}function f(t,e){for(var r=0;r<e.length;++r)if(!l(t,e[r]))return!1;return!0}function h(t){switch(t.length){case 1:return function(t){return{x:t.x,y:t.y,r:t.r}}(t[0]);case 2:return d(t[0],t[1]);case 3:return p(t[0],t[1],t[2])}}function d(t,e){var r=t.x,n=t.y,s=t.r,i=e.x,u=e.y,a=e.r,o=i-r,c=u-n,l=a-s,f=Math.sqrt(o*o+c*c);return{x:(r+i+o/f*l)/2,y:(n+u+c/f*l)/2,r:(f+s+a)/2}}function p(t,e,r){var n=t.x,s=t.y,i=t.r,u=e.x,a=e.y,o=e.r,c=r.x,l=r.y,f=r.r,h=n-u,d=n-c,p=s-a,x=s-l,_=o-i,g=f-i,y=n*n+s*s-i*i,m=y-u*u-a*a+o*o,b=y-c*c-l*l+f*f,v=d*p-h*x,I=(p*b-x*m)/(2*v)-n,w=(x*_-p*g)/v,S=(d*m-h*b)/(2*v)-s,D=(h*g-d*_)/v,M=w*w+D*D-1,C=2*(i+I*w+S*D),P=I*I+S*S-i*i,O=-(Math.abs(M)>1e-6?(C+Math.sqrt(C*C-4*M*P))/(2*M):P/C);return{x:n+I+w*O,y:s+S+D*O,r:O}}function x(t,e,r){var n,s,i,u,a=t.x-e.x,o=t.y-e.y,c=a*a+o*o;c?(s=e.r+r.r,s*=s,u=t.r+r.r,s>(u*=u)?(n=(c+u-s)/(2*c),i=Math.sqrt(Math.max(0,u/c-n*n)),r.x=t.x-n*a-i*o,r.y=t.y-n*o+i*a):(n=(c+s-u)/(2*c),i=Math.sqrt(Math.max(0,s/c-n*n)),r.x=e.x+n*a-i*o,r.y=e.y+n*o+i*a)):(r.x=e.x+r.r,r.y=e.y)}function _(t,e){var r=t.r+e.r-1e-6,n=e.x-t.x,s=e.y-t.y;return r>0&&r*r>n*n+s*s}function g(t){var e=t._,r=t.next._,n=e.r+r.r,s=(e.x*r.r+r.x*e.r)/n,i=(e.y*r.r+r.y*e.r)/n;return s*s+i*i}function y(t){this._=t,this.next=null,this.previous=null}function m(t,e){if(!(u=(r=t,t="object"==typeof r&&"length"in r?r:Array.from(r)).length))return 0;var r,n,s,i,u,a,c,f,d,p,m,b;if((n=t[0]).x=0,n.y=0,!(u>1))return n.r;if(s=t[1],n.x=-s.r,s.x=n.r,s.y=0,!(u>2))return n.r+s.r;x(s,n,i=t[2]),n=new y(n),s=new y(s),i=new y(i),n.next=i.previous=s,s.next=n.previous=i,i.next=s.previous=n;t:for(f=3;f<u;++f){x(n._,s._,i=t[f]),i=new y(i),d=s.next,p=n.previous,m=s._.r,b=n._.r;do{if(m<=b){if(_(d._,i._)){s=d,n.next=s,s.previous=n,--f;continue t}m+=d._.r,d=d.next}else{if(_(p._,i._)){(n=p).next=s,s.previous=n,--f;continue t}b+=p._.r,p=p.previous}}while(d!==p.next);for(i.previous=n,i.next=s,n.next=s.previous=s=i,a=g(n);(i=i.next)!==s;)(c=g(i))<a&&(n=i,a=c);s=n.next}for(n=[s._],i=s;(i=i.next)!==s;)n.push(i._);for(i=function(t,e){for(var r,n,s=0,i=(t=function(t,e){let r,n,s=t.length;for(;s;)n=e()*s--|0,r=t[s],t[s]=t[n],t[n]=r;return t}(Array.from(t),e)).length,u=[];s<i;)r=t[s],n&&l(n,r)?++s:(n=h(u=o(u,r)),s=0);return n}(n,e),f=0;f<u;++f)(n=t[f]).x-=i.x,n.y-=i.y;return i.r}function b(t){return Math.sqrt(t.value)}function v(){var t=null,e=1,r=1,o=s.G;function c(n){const c=function(){let t=1;return()=>(t=(i*t+u)%a)/a}();return n.x=e/2,n.y=r/2,t?n.eachBefore(I(t)).eachAfter(w(o,.5,c)).eachBefore(S(1)):n.eachBefore(I(b)).eachAfter(w(s.G,1,c)).eachAfter(w(o,n.r/Math.min(e,r),c)).eachBefore(S(Math.min(e,r)/(2*n.r))),n}return c.radius=function(e){return arguments.length?(t=(0,n.j)(e),c):t},c.size=function(t){return arguments.length?(e=+t[0],r=+t[1],c):[e,r]},c.padding=function(t){return arguments.length?(o="function"==typeof t?t:(0,s.Z)(+t),c):o},c}function I(t){return function(e){e.children||(e.r=Math.max(0,+t(e)||0))}}function w(t,e,r){return function(n){if(s=n.children){var s,i,u,a=s.length,o=t(n)*e||0;if(o)for(i=0;i<a;++i)s[i].r+=o;if(u=m(s,r),o)for(i=0;i<a;++i)s[i].r-=o;n.r=u+o}}}function S(t){return function(e){var r=e.parent;e.r*=t,r&&(e.x=r.x+t*e.x,e.y=r.y+t*e.y)}}}}]);