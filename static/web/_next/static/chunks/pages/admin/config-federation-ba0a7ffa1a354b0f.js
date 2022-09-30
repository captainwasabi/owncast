(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2532],{18957:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-federation",function(){return s(93548)}])},80939:function(e,n,s){"use strict";s.d(n,{Q:function(){return d},Y:function(){return u}});var a=s(85893),i=s(67294),t=s(84485),r=s(20550),l=s(24389),o=s(25521),c=t.Z.Title,d="#5a67d8",u=function(e){var n=e.title,s=e.description,t=e.placeholder,u=e.maxLength,h=e.values,f=e.handleDeleteIndex,m=e.handleCreateString,p=e.submitStatus,g=e.continuousStatusMessage,v=(0,i.useState)(""),b=v[0],x=v[1];return(0,a.jsxs)("div",{className:"edit-string-array-container",children:[(0,a.jsx)(c,{level:3,className:"section-title",children:n}),(0,a.jsx)("p",{className:"description",children:s}),(0,a.jsx)("div",{className:"edit-current-strings",children:null===h||void 0===h?void 0:h.map((function(e,n){return(0,a.jsx)(r.Z,{closable:!0,onClose:function(){f(n)},color:d,children:e},"tag-".concat(e,"-").concat(n))}))}),g&&(0,a.jsx)("div",{className:"continuous-status-section",children:(0,a.jsx)(o.E,{status:g})}),(0,a.jsx)("div",{className:"add-new-string-section",children:(0,a.jsx)(l.nv,{fieldName:"string-input",value:b,onChange:function(e){var n=e.value;x(n)},onPressEnter:function(){var e=b.trim();m(e),x("")},maxLength:u,placeholder:t,status:p})})]})};u.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},3664:function(e,n,s){"use strict";s.d(n,{Z:function(){return h}});var a=s(47568),i=s(70655),t=s(85893),r=s(67294),l=s(94594),o=s(83192),c=s(25521),d=s(25964),u=s(35159),h=function(e){var n=e.apiPath,s=e.checked,h=e.reversed,f=void 0!==h&&h,m=e.configPath,p=void 0===m?"":m,g=e.disabled,v=void 0!==g&&g,b=e.fieldName,x=e.label,w=e.tip,j=e.useSubmit,y=e.onChange,k=(0,r.useState)(null),Z=k[0],N=k[1],C=null,P=((0,r.useContext)(u.aC)||{}).setFieldInConfigState,S=function(){N(null),clearTimeout(C),C=null},E=function(){var e=(0,a.Z)((function(e){var s;return(0,i.__generator)(this,(function(a){switch(a.label){case 0:return j?(N((0,o.kg)(o.Jk)),s=f?!e:e,[4,(0,d.Si)({apiPath:n,data:{value:s},onSuccess:function(){P({fieldName:b,value:s,path:p}),N((0,o.kg)(o.zv))},onError:function(e){N((0,o.kg)(o.Un,"There was an error: ".concat(e)))}})]):[3,2];case 1:a.sent(),C=setTimeout(S,d.sI),a.label=2;case 2:return y&&y(e),[2]}}))}));return function(n){return e.apply(this,arguments)}}(),_=null!==Z&&Z.type===o.Jk;return(0,t.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[x&&(0,t.jsx)("div",{className:"label-side",children:(0,t.jsx)("span",{className:"formfield-label",children:x})}),(0,t.jsxs)("div",{className:"input-side",children:[(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)(l.Z,{className:"switch field-".concat(b),loading:_,onChange:E,defaultChecked:s,checked:s,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:v}),(0,t.jsx)(c.E,{status:Z})]}),(0,t.jsx)("p",{className:"field-tip",children:w})]})]})};h.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},93548:function(e,n,s){"use strict";s.r(n);var a=s(14924),i=s(26042),t=s(69396),r=s(85893),l=s(85402),o=s(71577),c=s(84485),d=s(14670),u=s(25968),h=s(6226),f=s(67294),m=s(45697),p=s.n(m),g=s(24389),v=s(45200),b=s(3664),x=s(80939),w=s(25964),j=s(35159),y=s(83192),k=function(e){var n=e.cancelPressed,s=e.okPressed;return(0,r.jsxs)(l.Z,{width:"70%",title:"Enable Social Features",visible:!0,onCancel:n,footer:(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Z,{onClick:n,children:"Do not enable"}),(0,r.jsx)(o.Z,{type:"primary",onClick:s,children:"Enable Social Features"})]}),children:[(0,r.jsx)(c.Z.Title,{level:3,children:"How do Owncast's social features work?"}),(0,r.jsxs)(c.Z.Paragraph,{children:["Owncast's social features are accomplished by having your server join The"," ",(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",rel:"noopener noreferrer",target:"_blank",children:"Fediverse"}),", a decentralized, open, collection of independent servers, like yours."]}),"Please"," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"read more"})," ","about these features, the details behind them, and how they work.",(0,r.jsx)(c.Z.Paragraph,{}),(0,r.jsx)(c.Z.Title,{level:3,children:"What do you need to know?"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"These features are brand new. Given the variability of interfacing with the rest of the world, bugs are possible. Please report anything that you think isn't working quite right."}),(0,r.jsx)("li",{children:"You must always host your Owncast server with SSL using a https url."}),(0,r.jsx)("li",{children:"You should not change your server name URL or social username once people begin following you, as your server will be seen as a completely different user on the Fediverse, and the old user will disappear."}),(0,r.jsxs)("li",{children:["Turning on ",(0,r.jsx)("i",{children:"Private mode"})," will allow you to manually approve each follower and limit the visibility of your posts to followers only."]})]}),(0,r.jsx)(c.Z.Title,{level:3,children:"Learn more about The Fediverse"}),(0,r.jsxs)(c.Z.Paragraph,{children:["If these concepts are new you should discover more about what this functionality has to offer. Visit"," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"our documentation"})," ","to be pointed at some resources that will help get you started on The Fediverse."]})]})};k.propTypes={cancelPressed:p().func.isRequired,okPressed:p().func.isRequired};n.default=function(){var e=function(){T(null)},n=function(){try{(0,w.Si)({apiPath:w.pE,data:{value:o.blockedDomains},onSuccess:function(){S({fieldName:"forbiddenUsernames",value:o.forbiddenUsernames}),T(y.zv),setTimeout(e,w.sI)},onError:function(n){T((0,y.kg)(y.Un,n)),setTimeout(e,w.sI)}})}catch(n){console.error(n),T(y.Un)}},s=c.Z.Title,l=(0,f.useState)(null),o=l[0],m=l[1],p=(0,f.useState)(!1),Z=p[0],N=p[1],C=(0,f.useContext)(j.aC)||{},P=C.serverConfig,S=C.setFieldInConfigState,E=(0,f.useState)(null),_=E[0],T=E[1],U=P.federation,F=P.yp,L=P.instanceDetails,D=U.enabled,I=U.isPrivate,R=U.username,O=U.goLiveMessage,M=U.showEngagement,q=U.blockedDomains,Y=F.instanceUrl,V=L.nsfw,z=function(e){var n=e.fieldName,s=e.value;m((0,t.Z)((0,i.Z)({},o),(0,a.Z)({},n,s)))};if((0,f.useEffect)((function(){m({enabled:D,isPrivate:I,username:R,goLiveMessage:O,showEngagement:M,blockedDomains:q,nsfw:V,instanceUrl:F.instanceUrl})}),[P,F]),!o)return null;var K=""!==Y,W=Y.startsWith("https://"),X=!W&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{message:"You must set your server URL before you can enable this feature.",type:"warning",showIcon:!0}),(0,r.jsx)("br",{}),(0,r.jsx)(v.$7,(0,t.Z)((0,i.Z)({fieldName:"instanceUrl"},w.yi),{value:o.instanceUrl,initialValue:F.instanceUrl,type:g.xA,onChange:z,onSubmit:function(){var e=""!==o.instanceUrl,n=o.instanceUrl.startsWith("https://");e&&n||((0,w.Si)({apiPath:w.Kl.apiPath,data:{value:!1}}),m((0,t.Z)((0,i.Z)({},o),{enabled:!1})))},required:!0}))]});return(0,r.jsxs)("div",{children:[(0,r.jsx)(s,{children:"Configure Social Features"}),(0,r.jsx)("p",{children:"Owncast provides the ability for people to follow and engage with your instance. It's a great way to promote alerting, sharing and engagement of your stream."}),(0,r.jsx)("p",{children:"Once enabled you'll alert your followers when you go live as well as gain the ability to compose custom posts to share any information you like."}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"Read more about the specifics of these social features."})}),(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(h.Z,{span:15,className:"form-module",style:{marginRight:"15px"},children:[X,(0,r.jsx)(b.Z,(0,t.Z)((0,i.Z)({fieldName:"enabled",onChange:function(e){e?N(!0):m((0,t.Z)((0,i.Z)({},o),{enabled:!1}))}},w.Kl),{checked:o.enabled,disabled:!K||!W})),(0,r.jsx)(b.Z,(0,t.Z)((0,i.Z)({fieldName:"isPrivate"},w.LC),{checked:o.isPrivate,disabled:!D})),(0,r.jsx)(b.Z,(0,t.Z)((0,i.Z)({fieldName:"nsfw",useSubmit:!0},w.B_),{checked:o.nsfw,disabled:!K})),(0,r.jsx)(v.$7,(0,t.Z)((0,i.Z)({required:!0,fieldName:"username",type:g.Kx},w.Xc),{value:o.username,initialValue:R,onChange:z,disabled:!D})),(0,r.jsx)(v.$7,(0,t.Z)((0,i.Z)({fieldName:"goLiveMessage"},w.BF),{type:g.Sk,value:o.goLiveMessage,initialValue:O,onChange:z,disabled:!D})),(0,r.jsx)(b.Z,(0,t.Z)((0,i.Z)({fieldName:"showEngagement"},w.FE),{checked:o.showEngagement,disabled:!D}))]}),(0,r.jsx)(h.Z,{span:8,className:"form-module",children:(0,r.jsx)(x.Y,{title:w.dR.label,placeholder:w.dR.placeholder,description:w.dR.tip,values:o.blockedDomains,handleDeleteIndex:function(e){o.blockedDomains.splice(e,1),n()},handleCreateString:function(e){var s;try{s=new URL(e).host}catch(a){s=e}o.blockedDomains.push(s),z({fieldName:"blockedDomains",value:o.blockedDomains}),n()},submitStatus:(0,y.kg)(_)})})]}),Z&&(0,r.jsx)(k,{cancelPressed:function(){N(!1),m((0,t.Z)((0,i.Z)({},o),{enabled:!1}))},okPressed:function(){N(!1),m((0,t.Z)((0,i.Z)({},o),{enabled:!0}))}})]})}}},function(e){e.O(0,[1829,9774,2888,179],(function(){return n=18957,e(e.s=n);var n}));var n=e.O();_N_E=n}]);