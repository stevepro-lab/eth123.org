(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},11:function(e,t,n){e.exports={header:"Box_header__2eM58",header_title:"Box_header_title__KkvuV",header_logo:"Box_header_logo__1DwV-",cardSkeleton:"Box_cardSkeleton__1-4a5",cardSkeleton_card:"Box_cardSkeleton_card__2zuX2",itemSkeleton:"Box_itemSkeleton__3T6Bj",navItemCard:"Box_navItemCard__2ba-h",navItemCard_card:"Box_navItemCard_card__2Go7C",cardItem:"Box_cardItem__2TlOT",footer:"Box_footer__3nxP2",footer_title:"Box_footer_title__6Y7qN",footer_sponsored:"Box_footer_sponsored__2-_4u"}},110:function(e,t,n){"use strict";n.r(t);var a,r=n(2),c=n(0),i=n.n(c),o=n(9),s=n.n(o),l=n(33),d=n.n(l),u=n(48),j=n(15),h=n(16),f=n(19),b=n(18),g=n(142),x=n(143),m=n(148),p=n(147),O=n(111),C=n(67),v=n(141),_=n(144),y=n(145),L=n(137),k=n(146),w=n(138),N=n(134),B=n(25),I=n.n(B),S=n(61),D=n.n(S),R=n(46),T=n(69),E=function(e){var t=e.id,n=e.className,a=e.style,c=e.children,i=e.onClick,o=Object(T.a)(e,["id","className","style","children","onClick"]),s={m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft"},l=["display","flex","flexDirection","justifyContent","alignItems","backgroundColor","border","borderTop","borderRight","borderBottom","borderLeft","borderColor","borderRadius","fontWeight"],d={};try{Object.keys(s).forEach((function(e){o[e]&&(d[s[e]]=8*o[e])}))}catch(j){}var u={};try{Object.keys(o).forEach((function(e){l.indexOf(e)>-1&&(u[e]=o[e])}))}catch(j){}return Object(r.jsx)("div",{style:Object(R.a)(Object(R.a)(Object(R.a)({},u),d),a),onClick:i,id:t,className:n,children:c})},z=n.p+"static/media/logo_title_new.3cf03a5d.svg",M=n(26),P=n.n(M),V="https://expo-res.sparkpool.com/SparkPoolOfficial/eth123.org",Z="https://expo-res.sparkpool.com",H=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=[],n=0;n<e;n++)t.push(n);return t},U=function(){return"en"===window.localStorage.getItem("i18nextLng")?"en":"zh"},A=function(e,t){try{window._hmt.push(["_trackEvent",e,"click",t])}catch(n){console.log(n)}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?e.indexOf("http")>-1?e:/\S+\.svg$/.test(e)?"".concat(Z).concat(e):"".concat(Z).concat(e,"!webp"):""},W=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={sticky:!1,activeKey:"Home",top:0},e.initActiveKey=function(){var t=e.props.tagList,n=window.location.hash,a=n?n.split("#")[1]:encodeURI((t[0]||{}).tag_en);e.setState({activeKey:a})},e.onScroll=function(){var t=0,n=document.documentElement.scrollTop;a>window.innerHeight-234&&(t=n>document.body.clientHeight/2?-(n/(document.body.clientHeight/2)-1)*(a-window.innerHeight+234+166):0),e.setState({top:parseInt(t,10),sticky:n>157,activeKey:e.getCurrentAnchor()})},e.getCurrentAnchor=function(){var t=e.props.tagList,n=[];if(t.forEach((function(t){var a=encodeURI(t.tag_en),r=document.getElementById(a);if(r){var c=e.getOffsetTop(r);n.push({link:a,top:c})}})),n.length)for(var a=1;a<n.length;a++)if(n[a].top>0)return n[a-1].link;return""},e.getOffsetTop=function(e){var t=e.getBoundingClientRect();if(t.width||t.height)return t.top-e.ownerDocument.documentElement.clientTop},e.renderWebNavList=function(){var t=e.props,n=t.tagList,a=t.language,c=e.state,i=c.sticky,o=c.top,s=c.activeKey;if(!(n||[]).length){var l=+window.localStorage.getItem("tagListLength"),d=H(l||30);return Object(r.jsx)(E,{display:"flex",flexDirection:"column",pl:1,pr:1,style:{top:o},children:d.map((function(e,t){return Object(r.jsx)(E,{pt:1,pr:2,pb:1,pl:2,children:Object(r.jsx)(N.a,{variant:"text",width:80})},"".concat(e,"-").concat(t))}))})}return Object(r.jsx)(E,{pl:1,pr:1,display:"flex",flexDirection:"column",id:"NavBar",className:I()(P.a.NavBar,i?P.a.NavBa_fixed:{}),style:{top:o},children:(n||[]).map((function(e,t){var n=e.tag,c=e.tag_en,i="zh"===a?n:c;return Object(r.jsx)(L.a,{href:"#".concat(c),className:I()(P.a.link,s===encodeURI(c)?P.a.link_active:{}),color:"textPrimary",underline:"none",children:i},c)}))})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=(this.props.tagList||[]).length;e&&(window.localStorage.setItem("tagListLength",e),a=36*e,this.initActiveKey(),window.addEventListener("scroll",D()(this.onScroll,16.7)))}},{key:"render",value:function(){var e=this.props,t=e.tagList,n=e.language,a=e.drawerVisible,c=e.onClose,i=this.state.activeKey;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.a,{lgUp:!0,children:Object(r.jsx)(k.a,{open:a,onClose:c,children:Object(r.jsxs)(E,{display:"flex",flexDirection:"column",style:{height:"inherit",overflow:"hideen"},children:[Object(r.jsx)(E,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:2,children:Object(r.jsx)("img",{src:z,alt:"eth123",height:17})}),Object(r.jsx)(w.a,{}),Object(r.jsx)(E,{flex:"1",style:{overflow:"auto"},onClick:c,children:(t||[]).map((function(e,t){var a=e.tag,c=e.tag_en,o="zh"===n?a:c;return Object(r.jsx)(L.a,{href:"#".concat(c),className:I()(P.a.drawer_link,i===encodeURI(c)?P.a.drawer_link_active:{}),color:"textPrimary",underline:"none",children:Object(r.jsx)(E,{pl:4,pr:4,pt:1,pb:1,children:o})},c)}))})]})})}),Object(r.jsx)(m.a,{mdDown:!0,children:this.renderWebNavList()})]})}}]),n}(c.PureComponent),F=n(139),G=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.navList,n=e.tagList,a=e.language;if(!(n||[]).length||!(t||[]).length){var c=H();return Object(r.jsx)("div",{id:encodeURI((n[0]||{}).tag_en),style:{marginBottom:16},children:Object(r.jsx)(F.a,{container:!0,spacing:2,children:c.map((function(e,t){return Object(r.jsx)(F.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsx)("div",{className:"skeletonHotCard",style:{backgroundColor:"#fff",borderRadius:8}})},"".concat(e,"-").concat(t))}))})})}return Object(r.jsx)("div",{id:encodeURI((n[0]||{}).tag_en),style:{marginBottom:16},children:Object(r.jsx)(F.a,{container:!0,spacing:2,children:(t||[]).filter((function(e){return(e.tag_en||"").indexOf("Hot")>-1})).map((function(e,t){return Object(r.jsx)(F.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsx)(L.a,{color:"textPrimary",href:"".concat("zh"===a?e.url:e.url_en||e.url,"?utm_resource=eth123.org"),target:"_blank",underline:"none",onClick:function(){A(e.tag_en,e.name_en||e.name)},children:Object(r.jsx)(E,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",pt:2,pb:2,borderRadius:8,backgroundColor:"#fff",className:"hotCard",children:Object(r.jsx)("img",{src:K(e.image),alt:""})})})},"Hot-".concat(t))}))})})}}]),n}(c.PureComponent),J=n(11),q=n.n(J),X=function(){return(H()||[]).map((function(e,t){return Object(r.jsx)(F.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsxs)(E,{display:"flex",flexDirection:"row",className:q.a.itemSkeleton,children:[Object(r.jsx)(E,{mr:1,children:Object(r.jsx)(N.a,{variant:"circle",width:30,height:30})}),Object(r.jsxs)(E,{flex:"1",children:[Object(r.jsx)(N.a,{variant:"text"}),Object(r.jsx)(N.a,{variant:"text"})]})]})},"".concat(e,"-").concat(t))}))},Y=function(){return(H()||[]).map((function(e){return Object(r.jsxs)(E,{mb:2,backgroundColor:"white",borderRadius:16,className:q.a.cardSkeleton,children:[Object(r.jsx)(E,{pt:2,pb:2,borderBottom:"1px solid #f5f5f5",children:Object(r.jsx)(N.a,{variant:"text",width:100})}),Object(r.jsx)(E,{className:q.a.cardSkeleton_card,children:Object(r.jsx)(F.a,{container:!0,spacing:2,children:Object(r.jsx)(X,{})})})]},"".concat(e,"-index"))}))},$=n(149),Q=n(65),ee=n.n(Q),te=function(e){var t=e.item,n=t.tag_en,a=t.logo,c=t.name,i=t.name_en,o=t.desc,s=t.desc_en,l=t.url,d=t.url_en,u=t.logoWidthAuto,j=t.logoHeightAuto,h=e.language,f=30,b="zh"===h?l:d||l;return Object(r.jsx)(F.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsx)(L.a,{color:"textPrimary",href:"".concat(b,"?utm_resource=eth123.org"),target:"_blank",underline:"none",onClick:function(){A(n,i||c)},children:Object(r.jsxs)(E,{display:"flex",flexDirection:"row",classnames:I()("cardItem",q.a.cardItem),borderRadius:8,children:[Object(r.jsx)(E,{mr:1,children:Object(r.jsx)(ee.a,{height:f,style:{width:f},once:!0,children:Object(r.jsx)($.a,{alt:"zh"===h?c:i||c,src:K(a),style:{height:j?"auto":f,width:u?"auto":f},imgProps:{height:j?"auto":f,width:u?"auto":f},children:("zh"===h?c:i||c).slice(0,1)})})}),Object(r.jsxs)(E,{children:[Object(r.jsx)(O.a,{variant:"body1",className:"cardItem_title",style:{fontWeight:500},children:"zh"===h?c:i||c}),Object(r.jsx)(O.a,{variant:"caption",style:{color:"#999",wordBreak:"break-all"},children:function(){if("zh"===h&&o)return o;if("en"===h&&s)return s;var e=(b||"").replace(/htt(p|ps):\/\//,"");return"/"===e.slice("-1")&&(e=e.slice(0,e.length-1)),e}()})]})]})})})},ne=n(68),ae=n(140),re=function(e){var t=e.list,n=e.language,a=Object(c.useState)(!1),i=Object(ne.a)(a,2),o=i[0],s=i[1];return o?(t||[]).slice(7).map((function(e,t){return Object(r.jsx)(te,{item:e,language:n},t)})):Object(r.jsx)(F.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsx)(E,{display:"flex",flexDirection:"column",justifyContent:"center",className:"toggleBtnWrap",children:Object(r.jsx)(E,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",className:"toggleBtn",borderRadius:4,onClick:function(){s(!0)},children:Object(r.jsx)(ae.a,{})})})},"toggleBtnGrid")},ce=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.tag,n=e.navList,a=e.language;if(!(n||[]).length)return Object(r.jsx)(X,{});var c=(n||[]).filter((function(e){return e.tag_en.indexOf(t)>-1})),i=[],o=c.length<=8?8:7;return i=c.slice(0,o).map((function(e,t){return Object(r.jsx)(te,{item:e,language:a},t)})),c.length>8&&i.push(Object(r.jsx)(re,{list:c,language:a},"NavExpandItem")),i}}]),n}(c.PureComponent),ie=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.tagList,n=e.navList,a=e.language;return(t||[]).length?(t||[]).slice(1).map((function(e){return Object(r.jsxs)(E,{backgroundColor:"white",borderRadius:16,mb:2,id:encodeURI(e.tag_en),className:q.a.navItemCard,children:[Object(r.jsx)(E,{pt:2,pb:2,borderBottom:"1px solid #f5f5f5",children:Object(r.jsx)(O.a,{children:"zh"===a?e.tag:e.tag_en})}),Object(r.jsx)(E,{className:q.a.navItemCard_card,children:Object(r.jsx)(F.a,{container:!0,spacing:2,children:Object(r.jsx)(ce,{tag:e.tag_en,navList:n,language:a})})})]},e.tag_en)})):Object(r.jsx)(Y,{})}}]),n}(c.PureComponent),oe=n(72),se=function(e){var t=e.style;return Object(r.jsx)(oe.a,{viewBox:"0 0 220 38",version:"1.1",style:Object.assign({},{height:38,width:220},t),children:Object(r.jsx)("g",{id:"\u9875\u9762-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(r.jsx)("g",{id:"\u5bfc\u822a\u7f51\u7ad9\u5907\u4efd-2",transform:"translate(-610.000000, -50.000000)",fill:"#333333",fillRule:"nonzero",children:Object(r.jsx)("path",{d:"M628.911861,77.6834862 C630.108814,77.6834862 631.106275,76.7477064 631.106275,75.5389908 C631.106275,74.3692661 630.108814,73.3944954 628.911861,73.3944954 L614.907508,73.3944954 L614.907508,66.0642202 L626.916939,66.0642202 C628.113892,66.0642202 629.111353,65.1284404 629.111353,63.9587156 C629.111353,62.75 628.113892,61.7752294 626.916939,61.7752294 L614.907508,61.7752294 L614.907508,54.6788991 L628.712369,54.6788991 C629.909322,54.6788991 630.906783,53.7431193 630.906783,52.5344037 C630.906783,51.3646789 629.909322,50.3899083 628.712369,50.3899083 L612.473703,50.3899083 C611.077258,50.3899083 610,51.4426606 610,52.8073394 L610,75.266055 C610,76.6307339 611.077258,77.6834862 612.473703,77.6834862 L628.911861,77.6834862 Z M646.06819,77.8784404 C647.424737,77.8784404 648.541893,76.8256881 648.541893,75.5 L648.541893,54.8348624 L655.364527,54.8348624 C656.601378,54.8348624 657.598839,53.8211009 657.598839,52.6123853 C657.598839,51.4036697 656.601378,50.3899083 655.364527,50.3899083 L636.811752,50.3899083 C635.535002,50.3899083 634.537541,51.4036697 634.537541,52.6123853 C634.537541,53.8211009 635.535002,54.8348624 636.811752,54.8348624 L643.594487,54.8348624 L643.594487,75.5 C643.594487,76.8256881 644.711643,77.8784404 646.06819,77.8784404 Z M683.253536,77.8784404 C684.649982,77.8784404 685.72724,76.8256881 685.72724,75.5 L685.72724,52.5733945 C685.72724,51.2477064 684.649982,50.1949541 683.253536,50.1949541 C681.896989,50.1949541 680.819732,51.2477064 680.819732,52.5733945 L680.819732,61.7362385 L667.493653,61.7362385 L667.493653,52.5733945 C667.493653,51.2477064 666.416395,50.1949541 665.059848,50.1949541 C663.663402,50.1949541 662.586144,51.2477064 662.586144,52.5733945 L662.586144,75.5 C662.586144,76.8256881 663.663402,77.8784404 665.059848,77.8784404 C666.416395,77.8784404 667.493653,76.8256881 667.493653,75.5 L667.493653,66.1811927 L680.819732,66.1811927 L680.819732,75.5 C680.819732,76.8256881 681.896989,77.8784404 683.253536,77.8784404 Z M698.853827,77.8784404 C700.210374,77.8784404 701.287631,76.8256881 701.287631,75.5 L701.287631,52.4174312 C701.287631,51.0917431 700.250272,50.0389908 698.853827,50.0389908 L698.77403,50.0389908 C698.055858,50.0389908 697.337686,50.1949541 696.380123,50.4678899 L692.150889,51.793578 C691.153428,52.0665138 690.515053,52.8463303 690.515053,53.8600917 C690.515053,54.9518349 691.512514,55.8876147 692.669568,55.8876147 C692.908959,55.8876147 693.268045,55.8486239 693.547334,55.7706422 L696.420022,54.912844 L696.420022,75.5 C696.420022,76.8256881 697.537178,77.8784404 698.853827,77.8784404 Z M725.306493,77.6834862 C726.503446,77.6834862 727.461008,76.7477064 727.461008,75.5779817 C727.461008,74.4082569 726.503446,73.4724771 725.306493,73.4724771 L713.975336,73.4724771 L719.720711,68.793578 C724.668118,64.8555046 726.982227,62.516055 726.982227,58.2270642 L726.982227,58.1490826 C726.982227,53.2752294 723.231774,50 717.765687,50 C713.376859,50 710.78346,51.6376147 708.509249,54.4059633 C708.150163,54.8348624 707.950671,55.3807339 707.950671,55.8876147 C707.950671,57.0963303 708.948132,58.0711009 710.184984,58.0711009 C710.982952,58.0711009 711.541531,57.7201835 711.900617,57.3302752 C713.61625,55.3027523 715.172289,54.2889908 717.406601,54.2889908 C719.960102,54.2889908 721.915125,55.8486239 721.915125,58.5389908 C721.915125,60.9954128 720.51868,62.75 716.688429,65.9082569 L708.110265,73.043578 C707.272398,73.706422 706.833515,74.4862385 706.833515,75.4220183 C706.833515,76.8256881 707.950671,77.6834862 709.466812,77.6834862 L725.306493,77.6834862 Z M741.984041,78.1513761 C747.809213,78.1513761 751.759159,74.5252294 751.759159,69.4954128 L751.759159,69.4174312 C751.759159,64.3876147 747.769314,62.2821101 743.54008,61.7752294 L750.123322,55.1077982 C750.96119,54.2889908 751.519768,53.6261468 751.519768,52.4954128 C751.519768,51.2087156 750.482408,50.3899083 749.085963,50.3899083 L734.802321,50.3899083 C733.605368,50.3899083 732.647806,51.3256881 732.647806,52.4954128 C732.647806,53.6261468 733.605368,54.5619266 734.802321,54.5619266 L744.936525,54.5619266 L738.393181,61.3853211 C737.635111,62.1261468 737.355822,62.7110092 737.355822,63.3348624 C737.355822,64.4655963 738.313384,65.4013761 739.470439,65.4013761 L740.4679,65.4013761 C744.377947,65.4013761 746.891549,66.9220183 746.891549,69.6123853 L746.891549,69.690367 C746.891549,72.1857798 744.81683,73.8233945 742.063838,73.8233945 C739.470439,73.8233945 737.475517,72.9266055 735.719985,71.2110092 C735.321001,70.8600917 734.802321,70.587156 734.084149,70.587156 C732.807399,70.587156 731.730141,71.6399083 731.730141,72.8876147 C731.730141,73.5894495 732.089227,74.2522936 732.52811,74.603211 C734.802321,76.7477064 737.874501,78.1513761 741.984041,78.1513761 Z M759.619151,77.8784404 C761.215089,77.8784404 762.412042,76.7087156 762.412042,75.1880734 L762.412042,74.7981651 C762.412042,73.2775229 761.215089,72.1077982 759.619151,72.1077982 C757.983315,72.1077982 756.786362,73.2775229 756.786362,74.7981651 L756.786362,75.1880734 C756.786362,76.7087156 757.983315,77.8784404 759.619151,77.8784404 Z M777.214363,78.1513761 C783.717809,78.1513761 788.505622,73.2775229 788.505622,67.4288991 L788.505622,67.3509174 C788.505622,61.4633028 783.757708,56.6674312 777.29416,56.6674312 C770.830613,56.6674312 766.0428,61.5412844 766.0428,67.4288991 L766.0428,67.5068807 C766.0428,73.3555046 770.790715,78.1513761 777.214363,78.1513761 Z M777.29416,74.0183486 C773.543707,74.0183486 770.870511,71.016055 770.870511,67.4288991 L770.870511,67.3509174 C770.870511,63.7637615 773.344215,60.8004587 777.214363,60.8004587 C781.004715,60.8004587 783.677911,63.8027523 783.677911,67.4288991 L783.677911,67.5068807 C783.677911,71.0550459 781.204207,74.0183486 777.29416,74.0183486 Z M795.807037,77.8784404 C797.163584,77.8784404 798.240841,76.8256881 798.240841,75.5389908 L798.240841,69.456422 C798.240841,64.5825688 800.594849,62.0091743 804.026115,61.4243119 C805.103373,61.2293578 805.94124,60.4105505 805.94124,59.162844 C805.94124,57.7981651 805.063475,56.8233945 803.547334,56.8233945 C801.432717,56.8233945 799.357998,58.7729358 798.240841,61.3463303 L798.240841,59.2408257 C798.240841,57.9151376 797.163584,56.8623853 795.807037,56.8623853 C794.45049,56.8623853 793.41313,57.9151376 793.41313,59.2408257 L793.41313,75.5389908 C793.41313,76.8646789 794.490388,77.8784404 795.807037,77.8784404 Z M818.668843,84 C822.459195,84 825.411679,83.103211 827.326804,81.2316514 C829.082336,79.516055 830,76.9426606 830,73.4724771 L830,59.2408257 C830,57.9151376 828.922742,56.8623853 827.566195,56.8623853 C826.249547,56.8623853 825.172289,57.9151376 825.172289,59.2018349 L825.172289,60.1766055 C823.536453,58.266055 821.342038,56.6674312 817.791077,56.6674312 C812.883569,56.6674312 808.215452,60.2545872 808.215452,66.337156 L808.215452,66.4151376 C808.215452,72.4587156 812.843671,76.0458716 817.791077,76.0458716 C821.262242,76.0458716 823.456656,74.4862385 825.212187,72.2637615 L825.212187,73.8623853 C825.212187,77.9954128 822.858179,80.1788991 818.549148,80.1788991 C816.115343,80.1788991 814.000725,79.5940367 812.0856,78.5412844 C811.84621,78.4243119 811.566921,78.3463303 811.207835,78.3463303 C810.090678,78.3463303 809.173014,79.2431193 809.173014,80.2958716 C809.173014,81.1926606 809.691694,81.8555046 810.529561,82.1674312 C813.083061,83.3761468 815.716358,84 818.668843,84 Z M819.067827,72.0298165 C815.756257,72.0298165 813.083061,69.7293578 813.083061,66.3761468 L813.083061,66.2981651 C813.083061,62.9059633 815.716358,60.6444954 819.067827,60.6444954 C822.419296,60.6444954 825.252086,62.9449541 825.252086,66.2981651 L825.252086,66.3761468 C825.252086,69.7293578 822.419296,72.0298165 819.067827,72.0298165 Z",id:"ETH123.org"})})})})},le=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.footerVisible,n=e.t;return t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(E,{display:"flex",flexDirection:"column",alignItems:"center",className:I()("footer",q.a.footer),children:[Object(r.jsx)(E,{className:q.a.footer_title,children:Object(r.jsx)(O.a,{variant:"h5",className:"footer_title",children:n("more")})}),Object(r.jsx)(p.a,{variant:"contained",className:"submitBtn",color:"primary",style:{textTransform:"none"},onClick:function(){window.open("https://github.com/SparkPoolOfficial/eth123.org/issues")},children:n("submit")})]}),Object(r.jsxs)(E,{display:"flex",flexDirection:"row",justifyContent:"center",className:q.a.footer_sponsored,children:[Object(r.jsx)("div",{children:"Sponsored By\xa0"}),Object(r.jsx)("div",{style:{color:"#ff7828"},children:Object(r.jsx)(L.a,{href:"https://www.sparkpool.com",underline:"none",children:"SparkPool"})})]})]}):null}}]),n}(c.PureComponent),de=n(66),ue=n.n(de).a.create();function je(e,t){return ue({method:"get",url:e,params:t})}ue.interceptors.response.use((function(e){return e.data}));n(108);var he=Object(C.a)({palette:{primary:{main:"#ff7828",contrastText:"#fff"}}}),fe={zh:{subTitle:"\u4ee5\u592a\u574a\u751f\u6001\u8d44\u6e90\u5bfc\u822a",more:"\u4e00\u8d77\u53d1\u73b0\u66f4\u591a\u65b0\u4ea7\u54c1",submit:"\u63d0\u3000\u4ea4"},en:{subTitle:"A Portal to Ethereum Ecosystem",more:"Discover more new products",submit:"Submit"}},be=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={tagList:[],navList:[],language:U(),drawerVisible:!1,footerVisible:!1},e.fetchTagList=function(){var t=Object(u.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,je("".concat(V,"/main/tagList.json"));case 2:(a=t.sent)&&(a||[]).length&&e.setState({tagList:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.fetchNavList=Object(u.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(new Date).getTime(),t.next=3,je("".concat(V,"/main/resource.json"));case 3:(a=t.sent)&&(a||[]).length&&(console.log("fetch resource times:",(new Date).getTime()-n),e.setState({navList:a,footerVisible:!0}));case 5:case"end":return t.stop()}}),t)}))),e.translate=function(t){var n=e.state.language;return fe[n][t]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchTagList(),this.fetchNavList()}},{key:"render",value:function(){var e=this,t=this.state,n=t.navList,a=t.tagList,c=t.footerVisible,i=t.language,o=t.drawerVisible,s=this.translate;return Object(r.jsxs)(v.a,{theme:he,children:[Object(r.jsx)(g.a,{}),Object(r.jsxs)(x.a,{children:[Object(r.jsxs)(E,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",className:q.a.header,children:[Object(r.jsx)(m.a,{lgUp:!0,children:Object(r.jsx)(E,{style:{cursor:"pointer"},onClick:function(){e.setState({drawerVisible:!0})},children:Object(r.jsx)(_.a,{})})}),Object(r.jsx)(E,{flex:"1"}),Object(r.jsx)(p.a,{disableElevation:!0,variant:"outlined",onClick:function(){var t="zh"===i?"en":"zh";window.localStorage.setItem("i18nextLng",t),document.cookie="i18next=".concat(t,";path=/;domain=.eth123.org"),e.setState({language:t})},size:"small",startIcon:Object(r.jsx)(y.a,{}),className:"languageBtn",style:{textTransform:"none"},children:Object(r.jsx)(E,{fontWeight:"400",className:"languageBtn_text",children:"zh"===i?"English":"\u4e2d\u6587"})})]}),Object(r.jsxs)(E,{display:"flex",flexDirection:"column",alignItems:"center",className:q.a.header_title,children:[Object(r.jsx)(E,{className:q.a.header_logo,children:Object(r.jsx)(se,{})}),Object(r.jsx)(E,{children:Object(r.jsxs)(O.a,{color:"textSecondary",children:["-- ",s("subTitle")," --"]})})]}),Object(r.jsxs)(E,{display:"flex",flexDirection:"row",children:[Object(r.jsx)(W,{tagList:a,language:i,drawerVisible:o,onClose:function(){e.setState({drawerVisible:!1})}},"NavBar-".concat((a||[]).length)),Object(r.jsx)(E,{flex:"1"}),Object(r.jsxs)(E,{className:"tagContent",children:[Object(r.jsx)(G,{navList:n,tagList:a,language:i}),Object(r.jsx)(ie,{navList:n,tagList:a,language:i})]},(n||[]).length),Object(r.jsx)(m.a,{lgUp:!0,children:Object(r.jsx)(E,{flex:"1"})})]})]}),Object(r.jsx)(le,{footerVisible:c,t:s})]})}}]),n}(i.a.Component);n(109);s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(be,{})}),document.getElementById("root"))},26:function(e,t,n){e.exports={NavBa_fixed:"styles_NavBa_fixed__EbRnh",link:"styles_link__3NeEE",NavBar:"styles_NavBar__34su-",link_active:"styles_link_active__13com",drawer_link:"styles_drawer_link___-O06",drawer_link_active:"styles_drawer_link_active__1h1PE"}}},[[110,1,2]]]);
//# sourceMappingURL=main.1ebf4313.chunk.js.map