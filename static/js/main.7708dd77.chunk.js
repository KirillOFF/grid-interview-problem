(this["webpackJsonpgrid-interview-problem"]=this["webpackJsonpgrid-interview-problem"]||[]).push([[0],{128:function(e,n,t){},129:function(e,n,t){},244:function(e,n,t){"use strict";t.r(n);var r,o,c,i=t(0),a=t.n(i),l=t(48),d=t.n(l),s=(t(128),t(129),t(117)),u=t(264),b=t(269),f=t(270),h=t(14),j=t(268),C=t(266),g=t(263),x=t(10),O=t(106),v=t(9);!function(e){e[e.Back=0]="Back",e[e.Forward=1]="Forward"}(r||(r={})),function(e){e[e.x=0]="x",e[e.y=1]="y"}(o||(o={})),function(e){e[e.MouseOver=0]="MouseOver",e[e.MouseOut=1]="MouseOut",e[e.Click=2]="Click"}(c||(c={}));var p,k,m,y,F,w=new function e(){var n=this;Object(O.a)(this,e),this.grid=[],this.gridRank=25,this.hoverColor={r:126,g:211,b:33,a:100},this.backgroundColor={r:74,g:144,b:226,a:100},this.previousClickedCell=void 0,this.onCellClicked=function(e,t){if(e.isFilled){var r=new Map;switch(n.findFilledCells(e).concat(e).forEach((function(e){return r.set("".concat(e.address.x,":").concat(e.address.y),e)})),t){case c.MouseOver:r.forEach((function(e){return Object(v.i)((function(){e.isSelected=!0}))}));break;case c.MouseOut:r.forEach((function(e){return Object(v.i)((function(){e.isSelected=!1}))}));break;case c.Click:Object(v.i)((function(){null!=n.previousClickedCell&&(n.previousClickedCell.content=void 0)})),e.content=r.size,Object(v.i)((function(){return n.previousClickedCell=e}))}}},this.findFilledCells=function(e){n.visitedCells.clear();var t=e.address;return[].concat(Object(x.a)(n.findFilledCellsInDirection(t,o.x,r.Back)),Object(x.a)(n.findFilledCellsInDirection(t,o.x,r.Forward)),Object(x.a)(n.findFilledCellsInDirection(t,o.y,r.Back)),Object(x.a)(n.findFilledCellsInDirection(t,o.y,r.Forward)))},this.visitedCells=new Set,this.findFilledCellsInDirection=function(e,t,c){var i="".concat(e.x,":").concat(e.y,":").concat(t,":").concat(c);if(n.visitedCells.has(i))return[];n.visitedCells.add(i);for(var a,l=function(e){return c===r.Forward?++e:--e},d=function(e){return t===o.x?{x:l(e.x),y:e.y}:{x:e.x,y:l(e.y)}},s=[],u=e;;){var b=d(u);if(b.x<0||b.x>=n.gridRank||b.y<0||b.y>=n.gridRank)break;var f=(a=b,n.grid[a.y][a.x]);if(!f.isFilled)break;s.push(f),u=f.address}var h=n.getOppositeAxis(t),j=s.flatMap((function(e){return n.findFilledCellsInDirection(e.address,h,r.Back)})),C=s.flatMap((function(e){return n.findFilledCellsInDirection(e.address,h,r.Forward)}));return s.concat(j).concat(C)},this.getOppositeAxis=function(e){return e===o.x?o.y:o.x},this.getRandomInt=function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e},this.getGrid=function(e){for(var t=Array(e),r=0;r<e;r++){for(var o=Array(e),c=0;c<e;c++)o[c]=n.getRandomInt(0,1);t[r]=o}return t},this.onGridRankChanged=Object(v.b)((function(e){"number"===typeof e&&(n.gridRank=e)})),this.onHoverColorColorChanged=Object(v.b)((function(e){n.hoverColor=e})),this.onBackgroundColorColorChanged=Object(v.b)((function(e){n.backgroundColor=e})),this.createGrid=Object(v.b)((function(){var e=n.getGrid(n.gridRank);n.grid=e.map((function(e,n){return e.map((function(e,t){return{address:{x:t,y:n},isSelected:!1,isFilled:1===e}}))}))})),Object(v.e)(this),this.createGrid(),Object(v.h)((function(){return n.gridRank}),(function(){return n.createGrid()}),{delay:500})},M=t(27),I=t(31),R=t(52),B=t(118),D=t(267),G=t(4),S=Object(M.a)((function(e){var n=e.value,t=e.sx,r=e.onCellClicked,o=e.backgroundColor,i=e.hoverColor,a=Object(B.a)(e,["value","sx","onCellClicked","backgroundColor","hoverColor"]),l=n.isSelected?"rgba(".concat(i.r,", ").concat(i.g,", ").concat(i.b,", ").concat(i.a,")"):n.isFilled?"rgba(".concat(o.r,", ").concat(o.g,", ").concat(o.b,", ").concat(o.a,")"):void 0;return Object(G.jsx)(D.a,Object(R.a)(Object(R.a)({sx:Object(R.a)({bgcolor:l,color:"white",p:1,textAlign:"center",fontSize:19,fontWeight:"700"},t),onClick:function(){return r(n,c.Click)},onMouseOver:function(){return r(n,c.MouseOver)},onMouseOut:function(){return r(n,c.MouseOut)}},a),{},{children:n.content}))})),A=Object(h.c)(S)(p||(p=Object(I.a)(["\n  display: flex;\n  border: 1px solid ",';\n  &:before {\n    content: "";\n    display: block;\n    height: 0;\n    width: 0;\n    padding-bottom: calc(100%);\n  }\n'])),(function(e){return e.theme.palette.info.dark})),z=Object(M.a)((function(e){var n=e.grid,t=e.hoverColor,r=e.backgroundColor,o=n.length;return console.log("render(). gridRank: ".concat(o,"; grid size: ").concat(n[0].length,"x").concat(n.length)),Object(G.jsx)(D.a,{sx:{display:"grid",gridTemplateColumns:"repeat(".concat(o,", calc(95vw/").concat(o,"))")},children:n.map((function(e,n){return e.map((function(e,o){return Object(G.jsx)(A,{backgroundColor:r,hoverColor:t,value:e,onCellClicked:w.onCellClicked},"".concat(o,"-").concat(n))}))}))})})),E=t(20),W=t(116),L=Object(M.a)((function(e){var n=Object(i.useState)(!1),t=Object(E.a)(n,2),r=t[0],o=t[1];return Object(G.jsxs)("div",{children:[Object(G.jsx)(P,{onClick:function(){return o(!r)},children:Object(G.jsx)(T,{value:e.value})}),r?Object(G.jsxs)(H,{children:[Object(G.jsx)(J,{onClick:function(){return o(!1)}}),Object(G.jsx)(W.a,{color:e.value,onChange:function(n){e.onColorChanged(n.rgb)}})]}):null]})})),P=h.c.div(k||(k=Object(I.a)(["\n  padding: 5px;\n  background: #fff;\n  border-radius: 1px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, .1);\n  display: inline-block;\n  cursor: pointer;\n"]))),T=h.c.div(m||(m=Object(I.a)(["\n  width: 200px;\n  height: 14px;\n  border-radius: 2px;\n  background: rgba(",", ",", ",", ",");\n"])),(function(e){return e.value.r}),(function(e){return e.value.g}),(function(e){return e.value.b}),(function(e){return e.value.a})),H=h.c.div(y||(y=Object(I.a)(["\n  position: absolute;\n  z-index: 2;\n"]))),J=h.c.div(F||(F=Object(I.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]))),N=Object(M.a)((function(){var e=w.grid,n=w.gridRank,t=w.onGridRankChanged,r=w.hoverColor,o=w.backgroundColor,c=w.onHoverColorColorChanged,i=w.onBackgroundColorColorChanged;return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(j.a,{component:"main",maxWidth:!1,sx:{pt:1,pb:6},children:[Object(G.jsxs)(C.a,{container:!0,children:[Object(G.jsx)(C.a,{item:!0,xs:6,children:Object(G.jsx)(g.a,{value:n,"aria-label":"Default",valueLabelDisplay:"auto",onChange:function(e,n){return t(n)}})}),Object(G.jsx)(C.a,{item:!0,xs:3,children:Object(G.jsx)(L,{value:r,onColorChanged:c})}),Object(G.jsx)(C.a,{item:!0,xs:3,children:Object(G.jsx)(L,{value:o,onColorChanged:i})})]}),Object(G.jsx)(z,{grid:e,hoverColor:r,backgroundColor:o})]})})})),q=function(){var e=Object(s.a)();return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(h.a,{theme:e,children:Object(G.jsxs)("div",{className:"App",children:[Object(G.jsx)(u.a,{position:"static",color:"default",elevation:0,sx:{borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:Object(G.jsx)(b.a,{sx:{flexWrap:"wrap"},children:Object(G.jsx)(f.a,{variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Grid Interview Problem"})})}),Object(G.jsx)(N,{})]})})})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,272)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),c(e),i(e)}))},Q=t(271);d.a.render(Object(G.jsxs)(a.a.StrictMode,{children:[Object(G.jsx)(Q.a,{}),Object(G.jsx)(q,{})]}),document.getElementById("root")),K()}},[[244,1,2]]]);
//# sourceMappingURL=main.7708dd77.chunk.js.map