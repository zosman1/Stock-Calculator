(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return g});a(170);var n=a(7),r=a.n(n),l=a(0),i=a.n(l),o=a(468),c=a(469),u=a(462),s=a(460),m=a(463),p=a(461),d=a(176),h=a(174),E=a(191),f=a(193),g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={initPps:"",quantity:"",interest:"",newPps:""},t}r()(t,e);var a=t.prototype;return a.handleInput=function(e,t){var a;this.setState(((a={})[t]=e.target.value,a))},a.render=function(){var e=this,t=this.state,a=t.initPps,n=t.quantity,r=t.newPps,l=this.state.interest/100,g=!(""===a||""===n||""===r||""===l),y=a*n,v=(r-a)/a,b=y-r*n,C=b-Math.abs(b*l);return i.a.createElement(d.a,{title:"position-calc"},i.a.createElement(h.a,{title:"Short Position Calculator"}),i.a.createElement(o.a,null,i.a.createElement(c.a,{columns:2,relaxed:"very"},i.a.createElement(c.a.Column,null,i.a.createElement(u.a,null,i.a.createElement("h1",null,"Short Position Calculator"),i.a.createElement("p",null,"Enter Short Position Information Below:"),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"Stock Price:"),i.a.createElement(s.a,{value:this.state.initPps,onChange:function(t){return e.handleInput(t,"initPps")},placeholder:"Price Per Share",icon:"dollar sign"})),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"Quantity:"),i.a.createElement(s.a,{value:this.state.quantity,onChange:function(t){return e.handleInput(t,"quantity")},placeholder:"Quantity of Shares",icon:"sort amount up"})),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"Interest or Comission:"),i.a.createElement(s.a,{value:this.state.interest,onChange:function(t){return e.handleInput(t,"interest")},placeholder:"Interest or Comission",icon:"percent"})),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"New Stock Price: "),i.a.createElement(s.a,{value:this.state.newPps,onChange:function(t){return e.handleInput(t,"newPps")},placeholder:"New PPS",icon:"dollar sign"})))),i.a.createElement(c.a.Column,null,i.a.createElement(f.a,{netp:g?C:0}),i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}},i.a.createElement(m.a,{basic:"very",celled:!0,collapsing:!0},i.a.createElement(m.a.Header,null,i.a.createElement(m.a.Row,null,i.a.createElement(m.a.HeaderCell,null),i.a.createElement(m.a.HeaderCell,null,"Value"))),i.a.createElement(E.a,{label:"Borrow/Sell Amount",value:y,inputsPresent:g,dollarSign:!0}),i.a.createElement(E.a,{label:"Growth",value:100*v,inputsPresent:g,percent:!0}),i.a.createElement(E.a,{label:"Gross Profit",value:b,inputsPresent:g,dollarSign:!0}),i.a.createElement(E.a,{label:"Net Profit After Interest / Commision",value:C,inputsPresent:g,dollarSign:!0}))))),i.a.createElement(p.a,{vertical:!0},"yields")))},t}(i.a.Component)},160:function(e,t,a){var n;e.exports=(n=a(169))&&n.default||n},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Stock Calculator",menuLinks:[{name:"Profit Calculator",link:"/"},{name:"Short Position Calculator",link:"/position-calc"},{name:"Margin Trade Calculator",link:"/margin-trade"}]}}}}},169:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(55),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},174:function(e,t,a){"use strict";var n=a(175),r=a(0),l=a.n(r),i=a(4),o=a.n(i),c=a(213),u=a.n(c);function s(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,o=n.data.site,c=t||o.siteMetadata.description;return l.a.createElement(u.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=s},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Stock Calculator",description:"Stock Profit Calculator | Short Position Calculator | Margin Trade Calculator"}}}}},176:function(e,t,a){"use strict";var n=a(168),r=a(0),l=a.n(r),i=a(4),o=a.n(i),c=a(33),u=a.n(c),s=(a(160),l.a.createContext({})),m=function(e){return l.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};var p=a(194),d=(a(170),a(195),a(464)),h=function(e){var t=e.siteTitle,a=e.menuLinks,n=e.page;return l.a.createElement("header",{style:{background:"linear-gradient(to right bottom, #430089, #82ffa1)",marginBottom:"1.45rem"}},l.a.createElement("div",null,l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(u.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))),l.a.createElement(d.a,{stackable:!0},a.map(function(e){return l.a.createElement(d.a.Item,{active:"/"+n===e.link,onClick:function(){return Object(c.navigate)(e.link)}},e.name)}))))};h.propTypes={siteTitle:o.a.string},h.defaultProps={siteTitle:""};var E=h,f=(a(212),function(e){var t=e.children,a=e.title;return l.a.createElement(m,{query:"3436215879",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title,page:a}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with ♥ by"," ",l.a.createElement(p.OutboundLink,{href:"https://www.linkedin.com/in/kevin-mckigney-b59481160/"},"Kevin McKigney,"),"  ",l.a.createElement(p.OutboundLink,{href:"http://linkedin.com/in/zosman1/"},"Zach Osman,"),"  and,  ",l.a.createElement(p.OutboundLink,{href:"https://www.linkedin.com/in/chrisae9/"},"Chris Alves"))))},data:n})});f.propTypes={children:o.a.node.isRequired};t.a=f},191:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),o=a(4),c=a.n(o),u=a(463),s=a(466),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.value,a=e.label,n=e.percent,r=e.dollarSign,l=e.inputsPresent,o=Math.abs(Math.round(100*t)/100);return!isNaN(t)&&l||(o=0),i.a.createElement(u.a.Body,null,i.a.createElement(u.a.Row,null,i.a.createElement(u.a.Cell,null,i.a.createElement(s.a,{as:"h4"},i.a.createElement(s.a.Content,null,a))),i.a.createElement(u.a.Cell,null,l&&t<0&&"-",r&&"$",o,n&&"%")))},t}(i.a.Component);m.propTypes={label:c.a.string.isRequired,value:c.a.number.isRequired,inputsPresent:c.a.bool.isRequired,percent:c.a.bool,dollarSign:c.a.bool},t.a=m},193:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(7),r=a.n(n),l=a(0),i=a.n(l),o=a(4),c=a.n(o),u=a(466),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=isNaN(this.props.netp)?0:this.props.netp,t="black";return e>0&&(t="green"),e<0&&(t="red"),i.a.createElement(u.a,{as:"h1",icon:!0,textAlign:"center"},i.a.createElement(u.a.Content,null,"Total Profit"),i.a.createElement(u.a,{color:t},e<0&&"-","$",Math.abs(Math.round(100*e)/100)))},t}(i.a.Component);s.propTypes={netp:c.a.number.isRequired}}}]);
//# sourceMappingURL=component---src-pages-position-calc-js-154aa1f28b59d0637cad.js.map