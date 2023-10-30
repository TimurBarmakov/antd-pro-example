"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[432],{81643:function($e,Z,o){o.d(Z,{Z:function(){return d}});const d=E=>E?typeof E=="function"?E():E:null},7134:function($e,Z,o){o.d(Z,{C:function(){return Ee}});var d=o(67294),E=o(94184),a=o.n(E),x=o(48555),K=o(42550),te=o(74443),W=o(53124),ne=o(98675),oe=o(25378),f=d.createContext({}),g=o(14747),i=o(67968),u=o(45503);const v=p=>{const{antCls:y,componentCls:P,iconCls:C,avatarBg:z,avatarColor:se,containerSize:V,containerSizeLG:A,containerSizeSM:Q,textFontSize:w,textFontSizeLG:re,textFontSizeSM:ue,borderRadius:_,borderRadiusLG:Y,borderRadiusSM:le,lineWidth:ie,lineType:ge}=p,J=(U,T,ce)=>({width:U,height:U,lineHeight:`${U-ie*2}px`,borderRadius:"50%",[`&${P}-square`]:{borderRadius:ce},[`${P}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${P}-icon`]:{fontSize:T,[`> ${C}`]:{margin:0}}});return{[P]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,g.Wf)(p)),{position:"relative",display:"inline-block",overflow:"hidden",color:se,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:z,border:`${ie}px ${ge} transparent`,["&-image"]:{background:"transparent"},[`${y}-image-img`]:{display:"block"}}),J(V,w,_)),{["&-lg"]:Object.assign({},J(A,re,Y)),["&-sm"]:Object.assign({},J(Q,ue,le)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},m=p=>{const{componentCls:y,groupBorderColor:P,groupOverlapping:C,groupSpace:z}=p;return{[`${y}-group`]:{display:"inline-flex",[`${y}`]:{borderColor:P},["> *:not(:first-child)"]:{marginInlineStart:C}},[`${y}-group-popover`]:{[`${y} + ${y}`]:{marginInlineStart:z}}}};var M=(0,i.Z)("Avatar",p=>{const{colorTextLightSolid:y,colorTextPlaceholder:P}=p,C=(0,u.TS)(p,{avatarBg:P,avatarColor:y});return[v(C),m(C)]},p=>{const{controlHeight:y,controlHeightLG:P,controlHeightSM:C,fontSize:z,fontSizeLG:se,fontSizeXL:V,fontSizeHeading3:A,marginXS:Q,marginXXS:w,colorBorderBg:re}=p;return{containerSize:y,containerSizeLG:P,containerSizeSM:C,textFontSize:Math.round((se+V)/2),textFontSizeLG:A,textFontSizeSM:z,groupSpace:w,groupOverlapping:-Q,groupBorderColor:re}}),D=function(p,y){var P={};for(var C in p)Object.prototype.hasOwnProperty.call(p,C)&&y.indexOf(C)<0&&(P[C]=p[C]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var z=0,C=Object.getOwnPropertySymbols(p);z<C.length;z++)y.indexOf(C[z])<0&&Object.prototype.propertyIsEnumerable.call(p,C[z])&&(P[C[z]]=p[C[z]]);return P};const G=(p,y)=>{const[P,C]=d.useState(1),[z,se]=d.useState(!1),[V,A]=d.useState(!0),Q=d.useRef(null),w=d.useRef(null),re=(0,K.sQ)(y,Q),{getPrefixCls:ue,avatar:_}=d.useContext(W.E_),Y=d.useContext(f),le=()=>{if(!w.current||!Q.current)return;const b=w.current.offsetWidth,O=Q.current.offsetWidth;if(b!==0&&O!==0){const{gap:B=4}=p;B*2<O&&C(O-B*2<b?(O-B*2)/b:1)}};d.useEffect(()=>{se(!0)},[]),d.useEffect(()=>{A(!0),C(1)},[p.src]),d.useEffect(le,[p.gap]);const ie=()=>{const{onError:b}=p;(b==null?void 0:b())!==!1&&A(!1)},{prefixCls:ge,shape:J,size:U,src:T,srcSet:ce,icon:R,className:me,rootClassName:be,alt:e,draggable:t,children:n,crossOrigin:r}=p,s=D(p,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),c=(0,ne.Z)(b=>{var O,B;return(B=(O=U!=null?U:Y==null?void 0:Y.size)!==null&&O!==void 0?O:b)!==null&&B!==void 0?B:"default"}),$=Object.keys(typeof c=="object"?c||{}:{}).some(b=>["xs","sm","md","lg","xl","xxl"].includes(b)),h=(0,oe.Z)($),l=d.useMemo(()=>{if(typeof c!="object")return{};const b=te.c4.find(B=>h[B]),O=c[b];return O?{width:O,height:O,lineHeight:`${O}px`,fontSize:O&&(R||n)?O/2:18}:{}},[h,c]),S=ue("avatar",ge),[I,N]=M(S),H=a()({[`${S}-lg`]:c==="large",[`${S}-sm`]:c==="small"}),he=d.isValidElement(T),q=J||(Y==null?void 0:Y.shape)||"circle",k=a()(S,H,_==null?void 0:_.className,`${S}-${q}`,{[`${S}-image`]:he||T&&V,[`${S}-icon`]:!!R},me,be,N),Ce=typeof c=="number"?{width:c,height:c,lineHeight:`${c}px`,fontSize:R?c/2:18}:{};let ee;if(typeof T=="string"&&V)ee=d.createElement("img",{src:T,draggable:t,srcSet:ce,onError:ie,alt:e,crossOrigin:r});else if(he)ee=T;else if(R)ee=R;else if(z||P!==1){const b=`scale(${P}) translateX(-50%)`,O={msTransform:b,WebkitTransform:b,transform:b},B=typeof c=="number"?{lineHeight:`${c}px`}:{};ee=d.createElement(x.Z,{onResize:le},d.createElement("span",{className:`${S}-string`,ref:w,style:Object.assign(Object.assign({},B),O)},n))}else ee=d.createElement("span",{className:`${S}-string`,style:{opacity:0},ref:w},n);return delete s.onError,delete s.gap,I(d.createElement("span",Object.assign({},s,{style:Object.assign(Object.assign(Object.assign(Object.assign({},Ce),l),_==null?void 0:_.style),s.style),className:k,ref:re}),ee))};var F=d.forwardRef(G),ae=o(50344),de=o(55241),X=o(96159);const pe=p=>{const{size:y,shape:P}=d.useContext(f),C=d.useMemo(()=>({size:p.size||y,shape:p.shape||P}),[p.size,p.shape,y,P]);return d.createElement(f.Provider,{value:C},p.children)};var Se=p=>{const{getPrefixCls:y,direction:P}=d.useContext(W.E_),{prefixCls:C,className:z,rootClassName:se,style:V,maxCount:A,maxStyle:Q,size:w,shape:re,maxPopoverPlacement:ue="top",maxPopoverTrigger:_="hover",children:Y}=p,le=y("avatar",C),ie=`${le}-group`,[ge,J]=M(le),U=a()(ie,{[`${ie}-rtl`]:P==="rtl"},z,se,J),T=(0,ae.Z)(Y).map((R,me)=>(0,X.Tm)(R,{key:`avatar-key-${me}`})),ce=T.length;if(A&&A<ce){const R=T.slice(0,A),me=T.slice(A,ce);return R.push(d.createElement(de.Z,{key:"avatar-popover-key",content:me,trigger:_,placement:ue,overlayClassName:`${ie}-popover`},d.createElement(F,{style:Q},`+${ce-A}`))),ge(d.createElement(pe,{shape:re,size:w},d.createElement("div",{className:U,style:V},R)))}return ge(d.createElement(pe,{shape:re,size:w},d.createElement("div",{className:U,style:V},T)))};const fe=F;fe.Group=Se;var Ee=fe},60590:function($e,Z,o){o.d(Z,{t5:function(){return j}});var d=o(94184),E=o.n(d),a=o(92419),x=o(67294),K=o(53124),te=o(81643),W=o(20136),ne=function(g,i){var u={};for(var v in g)Object.prototype.hasOwnProperty.call(g,v)&&i.indexOf(v)<0&&(u[v]=g[v]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,v=Object.getOwnPropertySymbols(g);m<v.length;m++)i.indexOf(v[m])<0&&Object.prototype.propertyIsEnumerable.call(g,v[m])&&(u[v[m]]=g[v[m]]);return u};const oe=(g,i,u)=>{if(!(!i&&!u))return x.createElement(x.Fragment,null,i&&x.createElement("div",{className:`${g}-title`},(0,te.Z)(i)),x.createElement("div",{className:`${g}-inner-content`},(0,te.Z)(u)))},j=g=>{const{hashId:i,prefixCls:u,className:v,style:m,placement:M="top",title:D,content:G,children:L}=g;return x.createElement("div",{className:E()(i,u,`${u}-pure`,`${u}-placement-${M}`,v),style:m},x.createElement("div",{className:`${u}-arrow`}),x.createElement(a.G,Object.assign({},g,{className:i,prefixCls:u}),L||oe(u,D,G)))},f=g=>{const{prefixCls:i}=g,u=ne(g,["prefixCls"]),{getPrefixCls:v}=x.useContext(K.E_),m=v("popover",i),[M,D]=(0,W.Z)(m);return M(x.createElement(j,Object.assign({},u,{prefixCls:m,hashId:D})))};Z.ZP=f},55241:function($e,Z,o){var d=o(94184),E=o.n(d),a=o(67294),x=o(81643),K=o(33603),te=o(53124),W=o(83062),ne=o(60590),oe=o(20136),j=function(i,u){var v={};for(var m in i)Object.prototype.hasOwnProperty.call(i,m)&&u.indexOf(m)<0&&(v[m]=i[m]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,m=Object.getOwnPropertySymbols(i);M<m.length;M++)u.indexOf(m[M])<0&&Object.prototype.propertyIsEnumerable.call(i,m[M])&&(v[m[M]]=i[m[M]]);return v};const f=i=>{let{title:u,content:v,prefixCls:m}=i;return a.createElement(a.Fragment,null,u&&a.createElement("div",{className:`${m}-title`},(0,x.Z)(u)),a.createElement("div",{className:`${m}-inner-content`},(0,x.Z)(v)))},g=a.forwardRef((i,u)=>{const{prefixCls:v,title:m,content:M,overlayClassName:D,placement:G="top",trigger:L="hover",mouseEnterDelay:F=.1,mouseLeaveDelay:ae=.1,overlayStyle:de={}}=i,X=j(i,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:pe}=a.useContext(te.E_),ve=pe("popover",v),[Se,fe]=(0,oe.Z)(ve),Ee=pe(),p=E()(D,fe);return Se(a.createElement(W.Z,Object.assign({placement:G,trigger:L,mouseEnterDelay:F,mouseLeaveDelay:ae,overlayStyle:de},X,{prefixCls:ve,overlayClassName:p,ref:u,overlay:m||M?a.createElement(f,{prefixCls:ve,title:m,content:M}):null,transitionName:(0,K.m)(Ee,"zoom-big",X.transitionName),"data-popover-inject":!0})))});g._InternalPanelDoNotUseOrYouWillBeFired=ne.ZP,Z.Z=g},20136:function($e,Z,o){var d=o(14747),E=o(50438),a=o(97414),x=o(8796),K=o(67968),te=o(45503);const W=j=>{const{componentCls:f,popoverColor:g,titleMinWidth:i,fontWeightStrong:u,popoverPadding:v,boxShadowSecondary:m,colorTextHeading:M,borderRadiusLG:D,zIndexPopup:G,marginXS:L,colorBgElevated:F,popoverBg:ae}=j;return[{[f]:Object.assign(Object.assign({},(0,d.Wf)(j)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:G,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":F,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${f}-content`]:{position:"relative"},[`${f}-inner`]:{backgroundColor:ae,backgroundClip:"padding-box",borderRadius:D,boxShadow:m,padding:v},[`${f}-title`]:{minWidth:i,marginBottom:L,color:M,fontWeight:u},[`${f}-inner-content`]:{color:g}})},(0,a.ZP)(j,{colorBg:"var(--antd-arrow-background-color)"}),{[`${f}-pure`]:{position:"relative",maxWidth:"none",margin:j.sizePopupArrow,display:"inline-block",[`${f}-content`]:{display:"inline-block"}}}]},ne=j=>{const{componentCls:f}=j;return{[f]:x.i.map(g=>{const i=j[`${g}6`];return{[`&${f}-${g}`]:{"--antd-arrow-background-color":i,[`${f}-inner`]:{backgroundColor:i},[`${f}-arrow`]:{background:"transparent"}}}})}},oe=j=>{const{componentCls:f,lineWidth:g,lineType:i,colorSplit:u,paddingSM:v,controlHeight:m,fontSize:M,lineHeight:D,padding:G}=j,L=m-Math.round(M*D),F=L/2,ae=L/2-g,de=G;return{[f]:{[`${f}-inner`]:{padding:0},[`${f}-title`]:{margin:0,padding:`${F}px ${de}px ${ae}px`,borderBottom:`${g}px ${i} ${u}`},[`${f}-inner-content`]:{padding:`${v}px ${de}px`}}}};Z.Z=(0,K.Z)("Popover",j=>{const{colorBgElevated:f,colorText:g,wireframe:i}=j,u=(0,te.TS)(j,{popoverPadding:12,popoverBg:f,popoverColor:g});return[W(u),ne(u),i&&oe(u),(0,E._y)(u,"zoom-big")]},j=>({width:177,minWidth:177,titleMinWidth:177,zIndexPopup:j.zIndexPopupBase+30}),{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})},99559:function($e,Z,o){o.d(Z,{Z:function(){return be}});var d=o(94184),E=o.n(d),a=o(67294),x=o(53124),K=o(98423),W=e=>{const{prefixCls:t,className:n,style:r,size:s,shape:c}=e,$=E()({[`${t}-lg`]:s==="large",[`${t}-sm`]:s==="small"}),h=E()({[`${t}-circle`]:c==="circle",[`${t}-square`]:c==="square",[`${t}-round`]:c==="round"}),l=a.useMemo(()=>typeof s=="number"?{width:s,height:s,lineHeight:`${s}px`}:{},[s]);return a.createElement("span",{className:E()(t,$,h,n),style:Object.assign(Object.assign({},l),r)})},ne=o(77794),oe=o(67968),j=o(45503);const f=new ne.E4("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),g=e=>({height:e,lineHeight:`${e}px`}),i=e=>Object.assign({width:e},g(e)),u=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:f,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),v=e=>Object.assign({width:e*5,minWidth:e*5},g(e)),m=e=>{const{skeletonAvatarCls:t,gradientFromColor:n,controlHeight:r,controlHeightLG:s,controlHeightSM:c}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},i(r)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},i(s)),[`${t}${t}-sm`]:Object.assign({},i(c))}},M=e=>{const{controlHeight:t,borderRadiusSM:n,skeletonInputCls:r,controlHeightLG:s,controlHeightSM:c,gradientFromColor:$}=e;return{[`${r}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:$,borderRadius:n},v(t)),[`${r}-lg`]:Object.assign({},v(s)),[`${r}-sm`]:Object.assign({},v(c))}},D=e=>Object.assign({width:e},g(e)),G=e=>{const{skeletonImageCls:t,imageSizeBase:n,gradientFromColor:r,borderRadiusSM:s}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:r,borderRadius:s},D(n*2)),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},D(n)),{maxWidth:n*4,maxHeight:n*4}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},L=(e,t,n)=>{const{skeletonButtonCls:r}=e;return{[`${n}${r}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${r}-round`]:{borderRadius:t}}},F=e=>Object.assign({width:e*2,minWidth:e*2},g(e)),ae=e=>{const{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:r,controlHeightLG:s,controlHeightSM:c,gradientFromColor:$}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:$,borderRadius:t,width:r*2,minWidth:r*2},F(r))},L(e,r,n)),{[`${n}-lg`]:Object.assign({},F(s))}),L(e,s,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},F(c))}),L(e,c,`${n}-sm`))},de=e=>{const{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:r,skeletonParagraphCls:s,skeletonButtonCls:c,skeletonInputCls:$,skeletonImageCls:h,controlHeight:l,controlHeightLG:S,controlHeightSM:I,gradientFromColor:N,padding:H,marginSM:he,borderRadius:q,titleHeight:k,blockRadius:Ce,paragraphLiHeight:ee,controlHeightXS:b,paragraphMarginTop:O}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:H,verticalAlign:"top",[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:N},i(l)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},i(S)),[`${n}-sm`]:Object.assign({},i(I))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${r}`]:{width:"100%",height:k,background:N,borderRadius:Ce,[`+ ${s}`]:{marginBlockStart:I}},[`${s}`]:{padding:0,"> li":{width:"100%",height:ee,listStyle:"none",background:N,borderRadius:Ce,"+ li":{marginBlockStart:b}}},[`${s}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${r}, ${s} > li`]:{borderRadius:q}}},[`${t}-with-avatar ${t}-content`]:{[`${r}`]:{marginBlockStart:he,[`+ ${s}`]:{marginBlockStart:O}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},ae(e)),m(e)),M(e)),G(e)),[`${t}${t}-block`]:{width:"100%",[`${c}`]:{width:"100%"},[`${$}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${r},
        ${s} > li,
        ${n},
        ${c},
        ${$},
        ${h}
      `]:Object.assign({},u(e))}}};var X=(0,oe.Z)("Skeleton",e=>{const{componentCls:t}=e,n=(0,j.TS)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:e.controlHeight*1.5,borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[de(n)]},e=>{const{colorFillContent:t,colorFill:n}=e,r=t,s=n;return{color:r,colorGradientEnd:s,gradientFromColor:r,gradientToColor:s,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),ve=e=>{const{prefixCls:t,className:n,rootClassName:r,active:s,shape:c="circle",size:$="default"}=e,{getPrefixCls:h}=a.useContext(x.E_),l=h("skeleton",t),[S,I]=X(l),N=(0,K.Z)(e,["prefixCls","className"]),H=E()(l,`${l}-element`,{[`${l}-active`]:s},n,r,I);return S(a.createElement("div",{className:H},a.createElement(W,Object.assign({prefixCls:`${l}-avatar`,shape:c,size:$},N))))},fe=e=>{const{prefixCls:t,className:n,rootClassName:r,active:s,block:c=!1,size:$="default"}=e,{getPrefixCls:h}=a.useContext(x.E_),l=h("skeleton",t),[S,I]=X(l),N=(0,K.Z)(e,["prefixCls"]),H=E()(l,`${l}-element`,{[`${l}-active`]:s,[`${l}-block`]:c},n,r,I);return S(a.createElement("div",{className:H},a.createElement(W,Object.assign({prefixCls:`${l}-button`,size:$},N))))};const Ee="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";var y=e=>{const{prefixCls:t,className:n,rootClassName:r,style:s,active:c}=e,{getPrefixCls:$}=a.useContext(x.E_),h=$("skeleton",t),[l,S]=X(h),I=E()(h,`${h}-element`,{[`${h}-active`]:c},n,r,S);return l(a.createElement("div",{className:I},a.createElement("div",{className:E()(`${h}-image`,n),style:s},a.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${h}-image-svg`},a.createElement("path",{d:Ee,className:`${h}-image-path`})))))},C=e=>{const{prefixCls:t,className:n,rootClassName:r,active:s,block:c,size:$="default"}=e,{getPrefixCls:h}=a.useContext(x.E_),l=h("skeleton",t),[S,I]=X(l),N=(0,K.Z)(e,["prefixCls"]),H=E()(l,`${l}-element`,{[`${l}-active`]:s,[`${l}-block`]:c},n,r,I);return S(a.createElement("div",{className:H},a.createElement(W,Object.assign({prefixCls:`${l}-input`,size:$},N))))},z=o(87462),se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},V=se,A=o(93771),Q=function(t,n){return a.createElement(A.Z,(0,z.Z)({},t,{ref:n,icon:V}))},w=a.forwardRef(Q),ue=e=>{const{prefixCls:t,className:n,rootClassName:r,style:s,active:c,children:$}=e,{getPrefixCls:h}=a.useContext(x.E_),l=h("skeleton",t),[S,I]=X(l),N=E()(l,`${l}-element`,{[`${l}-active`]:c},I,n,r),H=$!=null?$:a.createElement(w,null);return S(a.createElement("div",{className:N},a.createElement("div",{className:E()(`${l}-image`,n),style:s},H)))},_=o(74902),le=e=>{const t=h=>{const{width:l,rows:S=2}=e;if(Array.isArray(l))return l[h];if(S-1===h)return l},{prefixCls:n,className:r,style:s,rows:c}=e,$=(0,_.Z)(Array(c)).map((h,l)=>a.createElement("li",{key:l,style:{width:t(l)}}));return a.createElement("ul",{className:E()(n,r),style:s},$)},ge=e=>{let{prefixCls:t,className:n,width:r,style:s}=e;return a.createElement("h3",{className:E()(t,n),style:Object.assign({width:r},s)})};function J(e){return e&&typeof e=="object"?e:{}}function U(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function T(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function ce(e,t){const n={};return(!e||!t)&&(n.width="61%"),!e&&t?n.rows=3:n.rows=2,n}const R=e=>{const{prefixCls:t,loading:n,className:r,rootClassName:s,style:c,children:$,avatar:h=!1,title:l=!0,paragraph:S=!0,active:I,round:N}=e,{getPrefixCls:H,direction:he,skeleton:q}=a.useContext(x.E_),k=H("skeleton",t),[Ce,ee]=X(k);if(n||!("loading"in e)){const b=!!h,O=!!l,B=!!S;let ye;if(b){const Oe=Object.assign(Object.assign({prefixCls:`${k}-avatar`},U(O,B)),J(h));ye=a.createElement("div",{className:`${k}-header`},a.createElement(W,Object.assign({},Oe)))}let Pe;if(O||B){let Oe;if(O){const xe=Object.assign(Object.assign({prefixCls:`${k}-title`},T(b,B)),J(l));Oe=a.createElement(ge,Object.assign({},xe))}let je;if(B){const xe=Object.assign(Object.assign({prefixCls:`${k}-paragraph`},ce(b,O)),J(S));je=a.createElement(le,Object.assign({},xe))}Pe=a.createElement("div",{className:`${k}-content`},Oe,je)}const Me=E()(k,{[`${k}-with-avatar`]:b,[`${k}-active`]:I,[`${k}-rtl`]:he==="rtl",[`${k}-round`]:N},q==null?void 0:q.className,r,s,ee);return Ce(a.createElement("div",{className:Me,style:Object.assign(Object.assign({},q==null?void 0:q.style),c)},ye,Pe))}return typeof $!="undefined"?$:null};R.Button=fe,R.Avatar=ve,R.Input=C,R.Image=y,R.Node=ue;var me=R,be=me}}]);
