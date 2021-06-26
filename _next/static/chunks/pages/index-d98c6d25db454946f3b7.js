(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4031:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return R}});var t,o,i=n(5893),c=n(7294),l=n(9008),s=n(282),a=n(4436),u=n(6546),d=n(6019),p=n(6479),f=n(1846),_=n(7162),h=n(433),E=n(7812),m=n(2230),j=n(4500),v=n(1314),x=n(4542),y=n.n(x),O=n(6156),T=n(6486),g=n.n(T);function C(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function I(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?C(Object(n),!0).forEach((function(r){(0,O.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function S(e){return Array.from({length:e},(function(r){return Array(e).fill(!1)}))}function w(e,r){var n=r.row,t=r.col;return e[n][t]=!e[n][t],e}function P(e,r){var n=r.row,t=r.col;w(e,{row:n,col:t});for(var o=0;o<e.length;o+=1)w(e,{row:o,col:t}),w(e,{row:n,col:o});return e}function N(e,r){switch(r.type){case o.RESET:return function(e){return I(I({},e),{},{flipped:S(e.size)})}(e);case o.FLIP:var n=g().cloneDeep(e.flipped);return I(I({},e),{},{flipped:w(n,r.payload)});case o.CROSS_FLIP:n=g().cloneDeep(e.flipped);return I(I({},e),{},{flipped:P(n,r.payload)});case o.SET_SIZE:return function(e,r){return I(I({},e),{},{size:r,flipped:S(r)})}(e,r.payload);case o.SET_MODE:return function(e,r){return I(I({},e),{},{mode:r})}(e,r.payload);case o.INIT_DATA:return function(e){for(var r=e.size,n=S(r),t=0,o=r-1;o>=0;o-=1){for(var i=Math.sqrt(o*o+t*t);i<r;)r-1<=i&&(n[o][t]=!0),t+=1,i=Math.sqrt(o*o+t*t);t-=1}return I(I({},e),{},{flipped:n})}(e);case o.INVERT:return function(e){for(var r=S(e.size),n=0;n<e.size;n+=1)for(var t=0;t<e.size;t+=1)e.flipped[n][t]&&(r=P(r,{row:n,col:t}));return I(I({},e),{},{flipped:r})}(e);default:return e}}!function(e){e.PLAY="play",e.EDIT="edit"}(t||(t={})),function(e){e[e.RESET=0]="RESET",e[e.FLIP=1]="FLIP",e[e.CROSS_FLIP=2]="CROSS_FLIP",e[e.SET_MODE=3]="SET_MODE",e[e.SET_SIZE=4]="SET_SIZE",e[e.INIT_DATA=5]="INIT_DATA",e[e.CHANGE_MODE=6]="CHANGE_MODE",e[e.INVERT=7]="INVERT"}(o||(o={}));var b=(0,c.createContext)(null),Z=(0,v.Z)((function(e){return{iconContainer:{"&:hover $icon":{color:"#666"}},icon:{color:"#333"}}})),D=function(){var e=(0,c.useContext)(b),r=e.state,n=e.dispatch,l=function(e){var c=e.row,l=e.col,s=Z();return(0,i.jsx)("div",{className:y().cell,children:(0,i.jsx)(E.Z,{size:"small",onClick:function(e){!function(e,i){r.mode===t.PLAY?n({type:o.CROSS_FLIP,payload:{row:e,col:i}}):n({type:o.FLIP,payload:{row:e,col:i}})}(c,l)},className:s.iconContainer,children:r.flipped[c][l]?(0,i.jsx)(m.Z,{className:s.icon}):(0,i.jsx)(j.Z,{className:s.icon})})})},s=function(e){for(var n=[],t=0;t<r.size;t+=1){var o=t;n.push((0,i.jsx)(l,{row:e,col:o},o))}return(0,i.jsx)("div",{className:y().row,children:n},e)};return function(){for(var e=[],n=r.size-1;n>=0;n-=1)e.push(s(n));return(0,i.jsx)("div",{className:y().grid,children:e})}()},A=n(4476),F=n.n(A);function R(){var e=(0,c.useReducer)(N,{size:5,flipped:S(5),mode:t.PLAY}),r=e[0],n=e[1],E=(0,c.useMemo)((function(){return{state:r,dispatch:n}}),[r,n]),m=Array.from({length:50},(function(e,r){return r+1}));return(0,i.jsxs)("div",{className:F().container,children:[(0,i.jsxs)(l.default,{children:[(0,i.jsx)("title",{children:"Cross Flips"}),(0,i.jsx)("meta",{name:"description",content:"An experiment for Project Euler Problem 331"})]}),(0,i.jsxs)("main",{className:F().main,children:[(0,i.jsx)("h1",{className:F().title,children:"Cross Flips"}),(0,i.jsxs)(b.Provider,{value:E,children:[(0,i.jsx)("div",{children:(0,i.jsx)(D,{})}),(0,i.jsxs)("div",{children:[(0,i.jsxs)(a.Z,{component:"fieldset",children:[(0,i.jsx)(d.Z,{component:"legend",children:"Mode"}),(0,i.jsxs)(_.Z,{"aria-label":"gender",name:"mode",value:r.mode,onChange:function(e){return n({type:o.SET_MODE,payload:e.target.value})},children:[(0,i.jsx)(u.Z,{value:t.PLAY,control:(0,i.jsx)(f.Z,{color:"primary"}),label:"Play"}),(0,i.jsx)(u.Z,{value:t.EDIT,control:(0,i.jsx)(f.Z,{color:"primary"}),label:"Edit"})]})]}),(0,i.jsx)(s.Z,{onClick:function(){return n({type:o.RESET})},children:"Reset"}),(0,i.jsx)(s.Z,{onClick:function(){return n({type:o.INVERT})},children:"Invert"}),(0,i.jsx)(s.Z,{onClick:function(){return n({type:o.INIT_DATA})},children:"Init Euler Data"}),(0,i.jsx)(h.Z,{id:"select-size",label:"Size",value:r.size,onChange:function(e){return n({type:o.SET_SIZE,payload:e.target.value})},children:m.map((function(e,r){return(0,i.jsx)(p.Z,{value:e,children:e},r)}))})]})]})]})]})}},5301:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4031)}])},4542:function(e){e.exports={grid:"CrossFlips_grid__29MHT",row:"CrossFlips_row__322id",cell:"CrossFlips_cell__2F8s9",highlightedCell:"CrossFlips_highlightedCell__1l8nn","cell-content":"CrossFlips_cell-content__1ev3s"}},4476:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}}},function(e){e.O(0,[774,662,260,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);