(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{73:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(26),o=t.n(r),a=t(13),s=t(49),l=t(7),d=t(6),j=t(18),b=t(8),h=t(27),u="https://api.coinpaprika.com/v1";function p(){return fetch("".concat(u,"/coins")).then((function(n){return n.json()}))}function x(n){return fetch("".concat(u,"/tickers/").concat(n)).then((function(n){return n.json()}))}var O=t(43),f=t.n(O),g=t(1);var m,v,y=function(n){var e=n.coinId,t=n.isDark,c=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){return Math.floor(Date.now()/1e3),fetch("https://ohlcv-api.nomadcoders.workers.dev?coinId=".concat(n)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),i=c.isLoading,r=c.data;return Object(g.jsx)("div",{children:i?"Loading chart...":Object(g.jsx)(f.a,{type:"candlestick",series:[{data:null===r||void 0===r?void 0:r.map((function(n){return{x:1e3*n.time_close,y:[n.open,n.high,n.low,n.close]}}))}],options:{theme:{mode:t?"dark":"light"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===r||void 0===r?void 0:r.map((function(n){return 1e3*n.time_close}))}}})})},k=d.c.div(m||(m=Object(l.a)(["\n"]))),w=d.c.div(v||(v=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 5px 0;\n  font-size: 12px;\n  font-weight: 400;\n"])));var C,D,I,L,q,S,Q,z,M,T,B=function(n){var e=n.coinId,t=(n.isDark,Object(a.useQuery)(["tickers",e],(function(){return x(e)}),{refetchInterval:5e3})),c=t.isLoading,i=t.data;return Object(g.jsx)("div",{children:c?"Loading chart...":Object(g.jsxs)(k,{children:[Object(g.jsxs)(w,{children:[Object(g.jsx)("span",{children:"\uace0\uac00"}),Object(g.jsxs)("span",{children:["$",null===i||void 0===i?void 0:i.quotes.USD.ath_price.toFixed(3)]})]}),Object(g.jsxs)(w,{children:[Object(g.jsx)("span",{children:"\ud604\uc7ac\uac00"}),Object(g.jsxs)("span",{children:["$",null===i||void 0===i?void 0:i.quotes.USD.price.toFixed(3)]})]})]})})},F=d.c.h1(C||(C=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),P=d.c.div(D||(D=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  button {\n    border-radius: 12px;\n    padding: 2px 15px;\n  }\n"]))),_=d.c.span(I||(I=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),$=d.c.div(L||(L=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),A=d.c.header(q||(q=Object(l.a)(["\n  height: 13vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),H=d.c.div(S||(S=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),U=d.c.div(Q||(Q=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),J=d.c.p(z||(z=Object(l.a)(["\n  margin: 20px 0px;\n"]))),R=d.c.div(M||(M=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),E=d.c.span(T||(T=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var G,K,N,V,W,X,Y,Z,nn=function(n){var e,t,c,i=n.toggleDark,r=n.isDark,o=Object(b.h)().coinId,s=Object(b.g)().state,l=Object(b.i)("/:coinId/price"),d=Object(b.i)("/:coinId/chart"),p=Object(a.useQuery)(["info",o],(function(){return function(n){return fetch("".concat(u,"/coins/").concat(n)).then((function(n){return n.json()}))}(o)})),O=p.isLoading,f=p.data,m=Object(a.useQuery)(["tickers",o],(function(){return x(o)}),{refetchInterval:5e3}),v=m.isLoading,k=m.data,w=Object(b.f)(),C=O||v;return Object(g.jsxs)($,{children:[Object(g.jsx)(h.a,{children:Object(g.jsx)("title",{children:(null===s||void 0===s?void 0:s.name)?s.name:C?"Loading...":null===f||void 0===f?void 0:f.name})}),Object(g.jsxs)(A,{children:[Object(g.jsx)(F,{children:(null===s||void 0===s?void 0:s.name)?s.name:C?"Loading...":null===f||void 0===f?void 0:f.name}),Object(g.jsxs)(P,{children:[Object(g.jsx)("button",{onClick:function(){return w.push("/")},children:"Home"}),Object(g.jsx)("button",{onClick:i,children:"Toggle Dark Mode"})]})]}),C?Object(g.jsx)(_,{children:"Loading..."}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(H,{children:[Object(g.jsxs)(U,{children:[Object(g.jsx)("span",{children:"Rank:"}),Object(g.jsx)("span",{children:null===f||void 0===f?void 0:f.rank})]}),Object(g.jsxs)(U,{children:[Object(g.jsx)("span",{children:"Symbol:"}),Object(g.jsxs)("span",{children:["$",null===f||void 0===f?void 0:f.symbol]})]}),Object(g.jsxs)(U,{children:[Object(g.jsx)("span",{children:"Price:"}),Object(g.jsxs)("span",{children:["$",null===k||void 0===k||null===(e=k.quotes)||void 0===e||null===(t=e.USD)||void 0===t||null===(c=t.price)||void 0===c?void 0:c.toFixed(3)]})]})]}),Object(g.jsx)(J,{children:null===f||void 0===f?void 0:f.description}),Object(g.jsxs)(H,{children:[Object(g.jsxs)(U,{children:[Object(g.jsx)("span",{children:"Total Suply:"}),Object(g.jsx)("span",{children:null===k||void 0===k?void 0:k.total_supply})]}),Object(g.jsxs)(U,{children:[Object(g.jsx)("span",{children:"Max Supply:"}),Object(g.jsx)("span",{children:null===k||void 0===k?void 0:k.max_supply})]})]}),Object(g.jsxs)(R,{children:[Object(g.jsx)(E,{isActive:null!==d,children:Object(g.jsx)(j.b,{to:"/".concat(o,"/chart"),children:"Chart"})}),Object(g.jsx)(E,{isActive:null!==l,children:Object(g.jsx)(j.b,{to:"/".concat(o,"/price"),children:"Price"})})]}),Object(g.jsxs)(b.c,{children:[Object(g.jsx)(b.a,{path:"/:coinId/price",children:Object(g.jsx)(B,{isDark:r,coinId:o})}),Object(g.jsx)(b.a,{path:"/:coinId/chart",children:Object(g.jsx)(y,{isDark:r,coinId:o})})]})]})]})},en=d.c.div(G||(G=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),tn=d.c.header(K||(K=Object(l.a)(["\n  position: relative;\n  height: 13vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),cn=d.c.ul(N||(N=Object(l.a)([""]))),rn=d.c.li(V||(V=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  border: 1px solid white;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),on=d.c.h1(W||(W=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),an=d.c.div(X||(X=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n"]))),sn=d.c.span(Y||(Y=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),ln=d.c.img(Z||(Z=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var dn=function(n){var e=n.toggleDark,t=Object(a.useQuery)("allCoins",p),c=t.isLoading,i=t.data;return Object(g.jsxs)(en,{children:[Object(g.jsx)(h.a,{children:Object(g.jsx)("title",{children:"\ucf54\uc778"})}),Object(g.jsxs)(tn,{children:[Object(g.jsx)(on,{children:"\ucf54\uc778"}),Object(g.jsx)(an,{children:Object(g.jsx)("button",{onClick:e,children:"Toggle Dark Mode"})})]}),c?Object(g.jsx)(sn,{children:"Loading..."}):Object(g.jsx)(cn,{children:null===i||void 0===i?void 0:i.slice(0,100).map((function(n){return Object(g.jsx)(rn,{children:Object(g.jsxs)(j.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(g.jsx)(ln,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var jn,bn=function(n){var e=n.toggleDark,t=n.isDark;return Object(g.jsx)(j.a,{children:Object(g.jsxs)(b.c,{children:[Object(g.jsx)(b.a,{path:"/:coinId",children:Object(g.jsx)(nn,{isDark:t,toggleDark:e})}),Object(g.jsx)(b.a,{path:"/",children:Object(g.jsx)(dn,{toggleDark:e})})]})})},hn=t(48),un={bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},pn={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff",cardBgColor:"white"},xn=Object(d.b)(jn||(jn=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var On=function(){var n=Object(c.useState)(!1),e=Object(s.a)(n,2),t=e[0],i=e[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(d.a,{theme:t?un:pn,children:[Object(g.jsx)(xn,{}),Object(g.jsx)(bn,{isDark:t,toggleDark:function(){return i((function(n){return!n}))}}),Object(g.jsx)(hn.ReactQueryDevtools,{initialIsOpen:!0})]})})},fn=new a.QueryClient;o.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(a.QueryClientProvider,{client:fn,children:Object(g.jsx)(On,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.62e4ab6b.chunk.js.map