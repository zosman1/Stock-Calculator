(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return g});a(172);var n=a(7),l=a.n(n),r=a(0),i=a.n(r),c=a(469),o=a(468),u=a(462),s=a(460),m=a(466),d=a(463),E=a(461),p=a(171),h=a(169),g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={initPps:null,quantity:null,interest:null,newPps:null,leverage:null,initCap:null},t}l()(t,e);var a=t.prototype;return a.handleInput=function(e,t){var a;this.setState(((a={})[t]=e.target.value,a))},a.render=function(){var e=this,t=this.state,a=t.initPps,n=t.quantity,l=t.newPps,r=t.initCap,g=this.state.interest/100,f=this.state.leverage/100,C=parseInt(r)+r*f,y=a*n,v=(l-a)/a,w=y*v,P=Math.abs(w)*g,b=w-Math.abs(P),k=C-a*n;return i.a.createElement(p.a,{title:"margin-trade"},i.a.createElement(h.a,{title:"Margin Trade Calculator"}),i.a.createElement(c.a,null,i.a.createElement(o.a,{columns:2,relaxed:"very"},i.a.createElement(o.a.Column,null,i.a.createElement(u.a,null,i.a.createElement("h1",null,"Margin Trade Calculator"),i.a.createElement("p",null,"Enter Stock Information Below:"),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"Initial Capital:"),i.a.createElement(s.a,{value:this.state.initCap,onChange:function(t){return e.handleInput(t,"initCap")},placeholder:"Initial Capital",icon:"dollar sign"})),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"Leverage: "),i.a.createElement(s.a,{value:this.state.leverage,onChange:function(t){return e.handleInput(t,"leverage")},placeholder:"Leverage",icon:"percent"})),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"Interest:"),i.a.createElement(s.a,{value:this.state.interest,onChange:function(t){return e.handleInput(t,"interest")},placeholder:"Interest Or Comission",icon:"percent"})),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"Stock Price:"),i.a.createElement(s.a,{value:this.state.initPps,onChange:function(t){return e.handleInput(t,"initPps")},placeholder:"Price Per Share",icon:"dollar sign"})),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"Quantity:"),i.a.createElement(s.a,{value:this.state.quantity,onChange:function(t){return e.handleInput(t,"quantity")},placeholder:"Quantity of Shares",icon:"sort amount up"})),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"New Stock Price: "),i.a.createElement(s.a,{value:this.state.newPps,onChange:function(t){return e.handleInput(t,"newPps")},placeholder:"New PPS",icon:"dollar sign"})))),i.a.createElement(o.a.Column,null,i.a.createElement(m.a,{as:"h1",icon:!0,textAlign:"center"},i.a.createElement(m.a.Content,null,"Total Profit"),i.a.createElement(m.a,null,"$",b)),i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}},i.a.createElement(d.a,{basic:"very",celled:!0,collapsing:!0},i.a.createElement(d.a.Body,null,i.a.createElement(d.a.Row,null,i.a.createElement(d.a.Cell,null,i.a.createElement(m.a,{as:"h4"},i.a.createElement(m.a.Content,null,"Total Buying Power"))),i.a.createElement(d.a.Cell,null,C))),i.a.createElement(d.a.Body,null,i.a.createElement(d.a.Row,null,i.a.createElement(d.a.Cell,null,i.a.createElement(m.a,{as:"h4"},i.a.createElement(m.a.Content,null,"Total Market Purchase Value"))),i.a.createElement(d.a.Cell,null,y))),i.a.createElement(d.a.Body,null,i.a.createElement(d.a.Row,null,i.a.createElement(d.a.Cell,null,i.a.createElement(m.a,{as:"h4"},i.a.createElement(m.a.Content,null,"Remaining Buying Power"))),i.a.createElement(d.a.Cell,null,k))),i.a.createElement(d.a.Body,null,i.a.createElement(d.a.Row,null,i.a.createElement(d.a.Cell,null,i.a.createElement(m.a,{as:"h4"},i.a.createElement(m.a.Content,null,"Growth "))),i.a.createElement(d.a.Cell,null,100*v,"%"))),i.a.createElement(d.a.Body,null,i.a.createElement(d.a.Row,null,i.a.createElement(d.a.Cell,null,i.a.createElement(m.a,{as:"h4"},i.a.createElement(m.a.Content,null,"Gross Profit"))),i.a.createElement(d.a.Cell,null,w))),i.a.createElement(d.a.Body,null,i.a.createElement(d.a.Row,null,i.a.createElement(d.a.Cell,null,i.a.createElement(m.a,{as:"h4"},i.a.createElement(m.a.Content,null,"Amount Owed To Broker"))),i.a.createElement(d.a.Cell,null,P))),i.a.createElement(d.a.Body,null,i.a.createElement(d.a.Row,null,i.a.createElement(d.a.Cell,null,i.a.createElement(m.a,{as:"h4"},i.a.createElement(m.a.Content,null,"Net Profit After Interest / Commision"))),i.a.createElement(d.a.Cell,null,b)))),y>C&&i.a.createElement("h4",{style:{color:"red"}},"ERROR: YOUR PURCHASE EXCEEDS BUYING POWER!!!!"," ")))),i.a.createElement(E.a,{vertical:!0},"yields")),i.a.createElement("h5",null,"This website is a work in progress..."))},t}(i.a.Component)},158:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),l=a.n(n),r=a(4),i=a.n(r),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return c.navigate});a(159);var u=l.a.createContext({}),s=function(e){return l.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},159:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Stock Calculator",menuLinks:[{name:"Home",link:"/"},{name:"Profit Calculator",link:"/profit-calc"},{name:"Short Position Calculator",link:"/position-calc"},{name:"Margin Trade Calculator",link:"/margin-trade"}]}}}}},164:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),l=a.n(n),r=a(4),i=a.n(r),c=a(55),o=a(2),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?l.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},169:function(e,t,a){"use strict";var n=a(170),l=a(0),r=a.n(l),i=a(4),c=a.n(i),o=a(194),u=a.n(o);function s(e){var t=e.description,a=e.lang,l=e.meta,i=e.title,c=n.data.site,o=t||c.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:i},{property:"og:description",content:o},{property:"og:type",content:"website"}].concat(l)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=s},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Stock Calculator",description:"This is Simple Stock Calculator!"}}}}},171:function(e,t,a){"use strict";var n=a(163),l=a(0),r=a.n(l),i=a(4),c=a.n(i),o=a(158),u=(a(172),a(189),a(465)),s=function(e){var t=e.siteTitle,a=e.menuLinks,n=e.page;return r.a.createElement("header",{style:{background:"#2E3440",marginBottom:"1.45rem"}},r.a.createElement("div",null,r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))),r.a.createElement(u.a,{stackable:!0},a.map(function(e){return r.a.createElement(u.a.Item,{active:"/"+n===e.link,onClick:function(){return Object(o.c)(e.link)}},e.name)}))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var m=s,d=(a(193),function(e){var t=e.children,a=e.title;return r.a.createElement(o.b,{query:"3436215879",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title,page:a}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});d.propTypes={children:c.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-margin-trade-js-382d7122ece1b09738f6.js.map