(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(176),l=a(174);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist."))}},160:function(e,t,a){var n;e.exports=(n=a(169))&&n.default||n},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Stock Calculator",menuLinks:[{name:"Profit Calculator",link:"/"},{name:"Short Position Calculator",link:"/position-calc"},{name:"Margin Trade Calculator",link:"/margin-trade"}]}}}}},169:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},174:function(e,t,a){"use strict";var n=a(175),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(213),u=a.n(c);function s(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,o=n.data.site,c=t||o.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=s},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Stock Calculator",description:"Stock Profit Calculator | Short Position Calculator | Margin Trade Calculator"}}}}},176:function(e,t,a){"use strict";var n=a(168),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(33),u=a.n(c),s=(a(160),i.a.createContext({})),d=function(e){return i.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};var m=a(194),p=(a(170),a(195),a(464)),g=function(e){var t=e.siteTitle,a=e.menuLinks,n=e.page;return i.a.createElement("header",{style:{background:"linear-gradient(to right bottom, #430089, #82ffa1)",marginBottom:"1.45rem"}},i.a.createElement("div",null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))),i.a.createElement(p.a,{stackable:!0},a.map(function(e){return i.a.createElement(p.a.Item,{active:"/"+n===e.link,onClick:function(){return Object(c.navigate)(e.link)}},e.name)}))))};g.propTypes={siteTitle:o.a.string},g.defaultProps={siteTitle:""};var f=g,h=(a(212),function(e){var t=e.children,a=e.title;return i.a.createElement(d,{query:"3436215879",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title,page:a}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with ♥ by"," ",i.a.createElement(m.OutboundLink,{href:"https://www.linkedin.com/in/kevin-mckigney-b59481160/"},"Kevin McKigney,"),"  ",i.a.createElement(m.OutboundLink,{href:"http://linkedin.com/in/zosman1/"},"Zach Osman"),"  and  ",i.a.createElement(m.OutboundLink,{href:"https://www.linkedin.com/in/chrisae9/"},"Chris Alves"))))},data:n})});h.propTypes={children:o.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-404-js-c7ff1517c889ce3d7d01.js.map