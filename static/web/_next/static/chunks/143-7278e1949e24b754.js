(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{50143:function(e,t,n){"use strict";n.d(t,{u:function(){return Oe}});var r=n(85893),s=n(71577),a=n(9764),o=n(67294),i=n(36531),c=n(66017),u=n(11622),l=n(13545),d=n.n(l),h=n(14924),m=n(47049),f=n(86492),p=n.n(f),g=n(94184),x=n.n(g),j=n(94199),v=n(29158),_=n(4480),y=n(78583),C=n.n(y);function N(e){var t=new Date(e);if(Number.isNaN(t))return"";if(function(e){var t="string"===typeof e?new Date(e):e;return(new Date-t)/864e5}(e)>=1){var n=t.toLocaleDateString("en-US",{dateStyle:"medium"});return"at ".concat(n," at ").concat(t.toLocaleTimeString())}return"".concat(t.toLocaleTimeString())}var b,M,w,Z,S,k=n(47568),E=n(70655),T=n(11475),B=n(90420),U=n(18429),A=n(64942),D=n(85402),O=n(12461),I=n(66516),R=n(38504),P=n(26713),F=n(25968),L=n(6226),H=n(11382),W=n(51438),J=function(){function e(){(0,W.Z)(this,e)}return e.removeMessage=function(e,t){return(0,k.Z)((function(){var n,r,s;return(0,E.__generator)(this,(function(a){switch(a.label){case 0:return(n=new URL("/api/chat/messagevisibility",window.location.toString())).searchParams.append("accessToken",t),r=n.toString(),s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idArray:[e]})},[4,fetch(r,s)];case 1:return a.sent(),[2]}}))}))()},e.banUser=function(e,t){return(0,k.Z)((function(){var n,r,s;return(0,E.__generator)(this,(function(a){switch(a.label){case 0:return(n=new URL("/api/chat/users/setenabled",window.location.toString())).searchParams.append("accessToken",t),r=n.toString(),s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})},[4,fetch(r,s)];case 1:return a.sent(),[2]}}))}))()},e}(),V=n(62638),Y=n.n(V),z=function(){var e=(0,k.Z)((function(e,t){return(0,E.__generator)(this,(function(n){try{J.removeMessage(e,t)}catch(r){console.error(r)}return[2]}))}));return function(t,n){return e.apply(this,arguments)}}(),G=function(e){var t=e.label,n=e.value;return(0,r.jsxs)(F.Z,{justify:"space-around",align:"middle",children:[(0,r.jsx)(L.Z,{span:12,children:t}),(0,r.jsx)(L.Z,{span:12,children:n})]})},X=function(e){var t=e.id,n=e.body,a=e.accessToken;return(0,r.jsxs)(F.Z,{justify:"space-around",align:"middle",children:[(0,r.jsx)(L.Z,{span:18,children:n}),(0,r.jsx)(L.Z,{children:(0,r.jsx)(s.Z,{onClick:function(){return z(t,a)},children:"X"})})]})},q=function(e){var t=e.client,n=t.messageCount,s=t.userAgent,a=t.connectedAt,o=t.geo;return(0,r.jsxs)("div",{children:[(0,r.jsx)(G,{label:"Messages Sent",value:"".concat(n)}),(0,r.jsx)(G,{label:"Geo",value:o}),(0,r.jsx)(G,{label:"Connected At",value:a.toString()}),(0,r.jsx)(G,{label:"User Agent",value:s})]})},K=function(e){var t=e.color,n="var(--theme-color-users-".concat(t,")");return(0,r.jsxs)(F.Z,{justify:"space-around",align:"middle",children:[(0,r.jsx)(L.Z,{span:12,children:"Color"}),(0,r.jsx)(L.Z,{span:12,children:(0,r.jsx)("div",{className:Y().colorBlock,style:{backgroundColor:n},children:t})})]})},Q=function(e){var t=e.userId,n=e.accessToken,s=(0,o.useState)(null),a=s[0],i=s[1],c=(0,o.useState)(!0),u=c[0],l=c[1],d=function(){var e=(0,k.Z)((function(){var e,n;return(0,E.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,fetch("/api/moderation/chat/user/".concat(t))];case 1:return[4,r.sent().json()];case 2:return e=r.sent(),i(e),l(!1),[3,4];case 3:return n=r.sent(),console.error(n),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();if((0,o.useEffect)((function(){d()}),[]),!a)return null;var h=a.user,m=a.connectedClients,f=a.messages,p=h.displayName,g=h.displayColor,x=h.createdAt,j=h.previousNames,v=h.scopes,_=h.isBot,y=h.authenticated;return(0,r.jsx)("div",{className:Y().modalContainer,children:(0,r.jsxs)(H.Z,{spinning:u,children:[(0,r.jsx)("h1",{children:p}),(0,r.jsxs)(F.Z,{justify:"space-around",align:"middle",children:[v.map((function(e){return(0,r.jsx)(L.Z,{children:e})})),y&&(0,r.jsx)(L.Z,{children:"Authenticated"}),_&&(0,r.jsx)(L.Z,{children:"Bot"})]}),(0,r.jsx)(K,{color:g}),(0,r.jsx)(G,{label:"User Created",value:x.toString()}),(0,r.jsx)(G,{label:"Previous Names",value:j.join(",")}),(0,r.jsx)("hr",{}),(0,r.jsx)("h2",{children:"Currently Connected"}),m.length>0&&(0,r.jsx)(F.Z,{gutter:[15,15],wrap:!0,children:m.map((function(e){return(0,r.jsx)(L.Z,{flex:"auto",children:(0,r.jsx)(q,{client:e})})}))}),(0,r.jsx)("hr",{}),f.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Recent Chat Messages"}),(0,r.jsx)("div",{className:Y().chatHistory,children:f.map((function(e){return(0,r.jsx)(X,{id:e.id,body:e.body,accessToken:n},e.id)}))})]})]})})},$=n(31833),ee=n.n($),te=D.Z.confirm,ne=function(e){var t=e.messageID,n=e.userID,s=e.userDisplayName,a=e.accessToken,i=(0,o.useState)(!1),c=i[0],u=i[1],l=function(){var e=(0,k.Z)((function(){var e;return(0,E.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,J.banUser(n,a)];case 1:return t.sent(),[3,3];case 2:return e=t.sent(),console.error(e),O.ZP.error(e),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,k.Z)((function(){var e;return(0,E.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,J.removeMessage(t,a)];case 1:return n.sent(),[3,3];case 2:return e=n.sent(),console.error(e),O.ZP.error(e),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,k.Z)((function(){return(0,E.__generator)(this,(function(e){return te({icon:(0,r.jsx)(T.Z,{}),content:"Are you sure you want to remove this message from ".concat(s,"?"),onOk:function(){d()}}),[2]}))}));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,k.Z)((function(){return(0,E.__generator)(this,(function(e){return te({icon:(0,r.jsx)(T.Z,{}),content:"Are you sure you want to ban ".concat(s," from chat?"),onOk:function(){l()}}),[2]}))}));return function(){return e.apply(this,arguments)}}(),f=(0,r.jsx)(I.Z,{onClick:function(e){var t=e.key;"hide-message"===t?h():"ban-user"===t?m():"more-info"===t&&u(!0)},items:[{label:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:ee().icon,children:(0,r.jsx)(B.Z,{})}),"Hide Message"]}),key:"hide-message"},{label:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:ee().icon,children:(0,r.jsx)(U.Z,{})}),"Ban User"]}),key:"ban-user"},{label:(0,r.jsx)("div",{children:"More Info..."}),key:"more-info"}]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(R.Z,{overlay:f,trigger:["click"],children:(0,r.jsx)("button",{type:"button",onClick:function(e){return e.preventDefault()},children:(0,r.jsx)(P.Z,{children:(0,r.jsx)(A.Z,{})})})}),(0,r.jsx)(D.Z,{visible:c,okText:"Ban User",okButtonProps:{danger:!0},onOk:l,onCancel:function(){u(!1)},children:(0,r.jsx)(Q,{userId:n,accessToken:a})})]})},re=n(79010),se=n.n(re),ae=function(e){var t=e.badge,n=e.userColor,s="var(--theme-user-colors-".concat(n,")"),a={color:s,borderColor:s};return(0,r.jsx)("span",{style:a,className:se().badge,children:t})},oe=n(1899),ie=function(e){var t=e.message,n=e.highlightString,s=e.showModeratorMenu,a=e.sentBySelf,i=e.sameUserAsLast,c=e.isAuthorModerator,u=e.isAuthorAuthenticated,l=t.id,d=t.body,f=t.user,g=t.timestamp,y=f.id,b=f.displayName,M=f.displayColor,w=(0,_.sJ)(oe.FI),Z="var(--theme-color-users-".concat(M,")"),S="Sent ".concat(N(g)),k=(0,o.useState)(d),E=k[0],T=k[1],B=[];return c&&B.push((0,r.jsx)(ae,{badge:"mod",userColor:M},"mod")),u&&B.push((0,r.jsx)(ae,{badge:(0,r.jsx)(v.Z,{title:"authenticated"}),userColor:M},"auth")),(0,o.useEffect)((function(){T(p().decode(d))}),[t]),(0,r.jsx)("div",{className:x()(C().messagePadding,i&&C().messagePaddingCollapsed),children:(0,r.jsxs)("div",{className:x()(C().root,(0,h.Z)({},C().ownMessage,a)),style:{borderColor:Z},children:[!i&&(0,r.jsx)(j.Z,{title:"user info goes here",placement:"topLeft",mouseEnterDelay:1,children:(0,r.jsxs)("div",{className:C().user,style:{color:Z},children:[(0,r.jsx)("span",{className:C().userName,children:b}),(0,r.jsx)("span",{children:B})]})}),(0,r.jsx)(j.Z,{title:S,mouseEnterDelay:1,children:(0,r.jsx)(m.y,{search:n,children:(0,r.jsx)("div",{className:C().message,dangerouslySetInnerHTML:{__html:E}})})}),s&&(0,r.jsx)("div",{className:C().modMenuWrapper,children:(0,r.jsx)(ne,{messageID:l,accessToken:w,userID:y,userDisplayName:b})}),(0,r.jsx)("div",{className:C().background,style:{color:Z}})]})})},ce=n(26042),ue=n(69396),le=n(828),de=n(93045),he=n(27496),me=n(55241),fe=n(77493),pe=n(96391),ge=n(57741),xe=function(e){var t=(0,o.useState)([]),n=t[0],s=t[1],a=e.onEmojiSelect,i=e.onCustomEmojiSelect,c=(0,o.useRef)(),u=function(){var e=(0,k.Z)((function(){var e,t;return(0,E.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,fetch("/api/emoji")];case 1:return[4,n.sent().json()];case 2:return e=n.sent(),s(e),[3,4];case 3:return t=n.sent(),console.error("cannot fetch custom emoji",t),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){u()}),[]),(0,o.useEffect)((function(){var e=n.map((function(e){return{emoji:e.name,label:e.name,url:e.url}}));(0,ge.wU)({rootElement:c.current,custom:e,initialCategory:"custom",showPreview:!1,showRecents:!0}).addEventListener("emoji:select",(function(e){e.url?i(e):a(e)}))}),[n]),(0,r.jsx)("div",{ref:c})},je=n(25882),ve=n.n(je),_e=function(e){var t=e.attributes,n=e.element,s=e.children,a=(0,pe.vt)(),o=(0,pe.UE)();return(0,r.jsxs)("span",(0,ue.Z)((0,ce.Z)({},t),{contentEditable:!1,children:[(0,r.jsx)("img",{alt:n.alt,src:n.src,title:n.name,style:{display:"inline",maxWidth:"50px",maxHeight:"20px",boxShadow:"".concat(a&&o?"0 0 0 3px #B4D5FF":"none")}}),s]}))},ye=function(e){var t,n;if(fe.xv.isText(e))return e.text;0===e.children.length?t=[{text:""}]:t=null===(n=e.children)||void 0===n?void 0:n.map((function(e){return ye(e)})).join("");switch(e.type){case"paragraph":return"<p>".concat(t,"</p>");case"image":return'<img src="'.concat(e.src,'" alt="').concat(e.alt,'" title="').concat(e.name,'" class="emoji"/>');default:return t}},Ce=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],a=(0,_.sJ)(oe.Gt),i=(0,o.useMemo)((function(){return(0,pe.BU)(function(e){var t=e.isVoid;return e.isVoid=function(e){return"image"===e.type||t(e)},e.isInline=function(e){return"image"===e.type},e}((0,fe.Jh)()))}),[]),c=function(){if(a){var e=ye(i);a.send({type:u.C.CHAT,body:e}),fe.YR.delete(i,{at:{anchor:fe.ML.start(i,[]),focus:fe.ML.end(i,[])}})}else console.log("websocketService is not defined")},l=function(e,t){if(e){var n=i.selection,r=function(e,t,n){return{type:"image",alt:e,src:t,name:n,children:[{text:""}]}}(t,e,t);if(fe.YR.insertNodes(i,r,{select:!0}),n){var s,a=(0,le.Z)(fe.ML.parent(i,null===(s=n.focus)||void 0===s?void 0:s.path),2),o=a[0],c=a[1];i.isVoid(o)||fe.NB.string(o).length?fe.YR.insertNodes(i,r,{at:fe.y$.next(c),select:!0}):(fe.YR.insertNodes(i,r,{at:c,select:!0}),fe.ML.normalize(i,{force:!0}))}else fe.YR.insertNodes(i,r,{select:!0})}};return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:ve().root,children:[(0,r.jsxs)(pe.mH,{editor:i,value:[{type:"paragraph",children:[{text:""}]}],children:[(0,r.jsx)(pe.CX,{onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),c())},renderElement:function(e){return"image"===e.element.type?(0,r.jsx)(_e,(0,ce.Z)({},e)):(0,r.jsx)("p",(0,ce.Z)({},e))},placeholder:"Chat message goes here...",style:{width:"100%"},autoFocus:!0}),(0,r.jsx)(me.Z,{content:(0,r.jsx)(xe,{onEmojiSelect:function(e){if(pe.F3.focus(i),e.url){var t=e.url;l(t,t)}else{var n=e.emoji;fe.YR.insertText(i,n)}},onCustomEmojiSelect:function(e){pe.F3.focus(i);var t=e.url;l(t,t)}}),trigger:"click",onVisibleChange:function(e){return n(e)},visible:t})]}),(0,r.jsx)("button",{type:"button",className:ve().emojiButton,title:"Emoji picker button",onClick:function(){return n(!t)},children:(0,r.jsx)(de.Z,{})}),(0,r.jsx)(s.Z,{className:ve().sendButton,size:"large",type:"ghost",icon:(0,r.jsx)(he.Z,{}),onClick:c})]})})},Ne=n(93174),be=n.n(Ne);function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Me.apply(this,arguments)}var we=function(e){return o.createElement("svg",Me({height:500,viewBox:"0 0 132.292 132.292",width:500,xmlns:"http://www.w3.org/2000/svg"},e),b||(b=o.createElement("linearGradient",{id:"moderator_svg__a",gradientUnits:"userSpaceOnUse",x1:432.851,x2:464.644,y1:49.977,y2:49.977},o.createElement("stop",{offset:0,stopColor:"#2087e2"}),o.createElement("stop",{offset:1,stopColor:"#b63fff"}))),M||(M=o.createElement("path",{d:"M438.672 34.08h20.151a5.82 5.82 45 0 1 5.82 5.821v20.151a5.82 5.82 135 0 1-5.82 5.821h-20.15a5.82 5.82 45 0 1-5.822-5.82V39.9a5.82 5.82 135 0 1 5.821-5.82z",fill:"url(#moderator_svg__a)",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})),w||(w=o.createElement("path",{d:"M121.11 29.551c-6.93 47.444-30.074 104.618-77.642 79.674l25.83 23.067h38.772c13.377 0 24.22-10.845 24.22-24.222V40.864z",fill:"#1d1535",fillOpacity:.335})),Z||(Z=o.createElement("path",{d:"M66.775 13.257s-7.129 57.999-.63 99.312c6.565 41.724-81.568-74.394-49.619-79.203 31.949-4.809 50.249-20.11 50.249-20.11z",fill:"#e2e8f0",fillOpacity:.306})),S||(S=o.createElement("path",{d:"M435.995 42.072c6.797.447 12.753-4.806 12.753-4.806s5.955 5.253 12.752 4.806c-.581 12.745-7.495 20.586-12.752 20.628-5.188.042-12.172-7.883-12.753-20.628z",fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:2,transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})))},Ze=function(){return(0,r.jsxs)("div",{className:be().chatModerationNotification,children:[(0,r.jsx)(we,{className:be().icon}),"You are now a moderator."]})},Se=n(31681),ke=n.n(Se),Ee=function(e){var t=e.message,n=t.body,s=t.user.displayName,a=e.highlightString;return(0,r.jsxs)("div",{className:ke().chatSystemMessage,children:[(0,r.jsx)("div",{className:ke().user,children:(0,r.jsx)("span",{className:ke().userName,children:s})}),(0,r.jsx)(m.y,{search:a,children:(0,r.jsx)("div",{className:ke().message,dangerouslySetInnerHTML:{__html:n}})})]})},Te=n(83066),Be=n.n(Te),Ue=function(e){var t=e.isAuthorModerator,n=e.userColor,s=e.displayName,a="var(--theme-user-colors-".concat(n,")");return(0,r.jsxs)("div",{className:Be().join,children:[(0,r.jsxs)("span",{style:{color:a},children:[s,t&&(0,r.jsx)("span",{children:(0,r.jsx)(ae,{badge:"mod",userColor:n})})]})," ","joined the chat."]})};function Ae(e,t){if(e.length<2)return!1;var n=e[t],r=n.user.id,s=e[t-1];if((null===s||void 0===s?void 0:s.type)!==u.C.CHAT)return!1;if(!s.timestamp||!n.timestamp)return!1;var a=new Date(s.timestamp).getTime();return!(new Date(n.timestamp).getTime()-a>12e4)&&r===(null===s||void 0===s?void 0:s.user.id)}function De(e){var t=e.user.scopes;return!(!t||0===t.length)&&t.includes("MODERATOR")}var Oe=function(e){var t=e.messages,n=e.usernameToHighlight,l=e.chatUserId,h=e.isModerator,m=e.showInput,f=e.height,p=(0,o.useState)(!1),g=p[0],x=p[1],j=(0,o.useRef)(null),v=function(e,s){switch(s.type){case u.C.CHAT:var a,o,c;return(0,r.jsx)(ie,{message:s,showModeratorMenu:h,highlightString:n,sentBySelf:(null===(a=s.user)||void 0===a?void 0:a.id)===l,sameUserAsLast:Ae(t,e),isAuthorModerator:null===(o=s.user.scopes)||void 0===o?void 0:o.includes("MODERATOR"),isAuthorAuthenticated:null===(c=s.user)||void 0===c?void 0:c.authenticated},s.id);case u.C.NAME_CHANGE:return function(e){var t=e.oldName,n=e.user,s=n.displayName,a=n.displayColor,o="var(--theme-color-users-".concat(a,")");return(0,r.jsxs)("div",{className:d().nameChangeView,children:[(0,r.jsx)("div",{style:{marginRight:5,height:"max-content",margin:"auto 5px auto 0"},children:(0,r.jsx)(i.Z,{})}),(0,r.jsxs)("div",{className:d().nameChangeText,children:[(0,r.jsx)("span",{style:{color:o},children:t}),(0,r.jsx)("span",{className:d().plain,children:" is now known as "}),(0,r.jsx)("span",{style:{color:o},children:s})]})]})}(s);case u.C.CONNECTED_USER_INFO:return function(e){if(!De(e))return(0,r.jsx)("div",{style:{width:"1px",height:"1px"}});return(0,r.jsx)(Ze,{})}(s);case u.C.USER_JOINED:return function(e){var t=e.user,n=t.displayName,s=t.displayColor,a=De(e);return(0,r.jsx)(Ue,{displayName:n,userColor:s,isAuthorModerator:a})}(s);case u.C.SYSTEM:return(0,r.jsx)(Ee,{message:s,highlightString:n},s.id);default:return null}},_=(0,o.useMemo)((function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.OO,{style:{height:f},className:d().virtuoso,ref:j,initialTopMostItemIndex:t.length-1,data:t,itemContent:function(e,t){return v(e,t)},followOutput:"auto",alignToBottom:!0,atBottomStateChange:function(e){return x(e)}}),!g&&(0,r.jsx)("div",{className:d().toBottomWrap,children:(0,r.jsx)(s.Z,{type:"default",icon:(0,r.jsx)(c.Z,{}),onClick:function(){return j.current.scrollToIndex({index:t.length-1,behavior:"smooth"})},children:"Go to last message"})})]})}),[t,n,l,h,g]);return(0,r.jsxs)("div",{className:d().chatContainer,children:[_,m&&(0,r.jsx)(Ce,{})]})};Oe.defaultProps={showInput:!0,height:"auto"}},13545:function(e){e.exports={chatHeader:"ChatContainer_chatHeader__EJsYI",toBottomWrap:"ChatContainer_toBottomWrap__3V5wa",nameChangeView:"ChatContainer_nameChangeView__ziyXN",nameChangeText:"ChatContainer_nameChangeText__yXG__",plain:"ChatContainer_plain__IPS19",chatContainer:"ChatContainer_chatContainer__O2lYN",virtuoso:"ChatContainer_virtuoso__OS9Kz"}},83066:function(e){e.exports={join:"ChatJoinMessage_join__fP0IQ"}},31833:function(e){e.exports={icon:"ChatModerationActionMenu_icon__9j6DF"}},62638:function(e){e.exports={modalContainer:"ChatModerationDetailsModal_modalContainer__czndV",chatHistory:"ChatModerationDetailsModal_chatHistory__PunRk",colorBlock:"ChatModerationDetailsModal_colorBlock___rAlw"}},93174:function(e){e.exports={chatModerationNotification:"ChatModeratorNotification_chatModerationNotification__kgFWe",icon:"ChatModeratorNotification_icon__7FdGg"}},31681:function(e){e.exports={chatSystemMessage:"ChatSystemMessage_chatSystemMessage__c6XEN",user:"ChatSystemMessage_user__6yHSJ",message:"ChatSystemMessage_message__ySq5g"}},25882:function(e){e.exports={root:"ChatTextField_root__4oUkJ",inputWrapper:"ChatTextField_inputWrapper__qBEWv",submitButtonWrapper:"ChatTextField_submitButtonWrapper__YBPMe",sendButton:"ChatTextField_sendButton__MOmD4",emojiButton:"ChatTextField_emojiButton__ON_Cu"}},79010:function(e){e.exports={badge:"ChatUserBadge_badge__1EdUp"}},78583:function(e){e.exports={root:"ChatUserMessage_root__79heB",user:"ChatUserMessage_user__xUEp9",message:"ChatUserMessage_message__MJ9LD",ownMessage:"ChatUserMessage_ownMessage__d28A3",background:"ChatUserMessage_background__Tfghp",modMenuWrapper:"ChatUserMessage_modMenuWrapper__7fblv",messagePadding:"ChatUserMessage_messagePadding__Xp1F6"}}}]);