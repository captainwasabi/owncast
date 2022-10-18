(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3554],{44443:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-server-details",function(){return r(69370)}])},69370:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return K}});var n=r(85893),s=r(67294),i=r(84485),a=r(14924),o=r(26042),l=r(69396),c=r(54907),u=r(94199),d=r(71577),f=r(1413),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"},m=r(42135),v=function(e,t){return s.createElement(m.Z,(0,f.Z)((0,f.Z)({},e),{},{ref:t,icon:h}))};v.displayName="RedoOutlined";var y=s.forwardRef(v),p=r(57132),g=r(24389),x=r(45200),j=r(35159),w=r(57553),Z=r(25964),k=r(47568),N=r(70655),C=r(65360),b=r(58827),S=r(83192),P=r(25521),T=function(){var e=(0,s.useContext)(w.k).setMessage,t=(0,s.useState)(null),r=t[0],a=t[1],o=null,l=function(){a(null),o=null,clearTimeout(o)},c=function(){var t=(0,k.Z)((function(){var t;return(0,N.__generator)(this,(function(r){switch(r.label){case 0:a((0,S.kg)(S.Jk)),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,(0,b.rQ)(b.UJ)];case 2:return r.sent(),e(""),a((0,S.kg)(S.zv)),o=setTimeout(l,Z.sI),[3,4];case 3:return t=r.sent(),a((0,S.kg)(S.Un,"There was an error: ".concat(t))),o=setTimeout(l,Z.sI),[3,4];case 4:return[2]}}))}));return function(){return t.apply(this,arguments)}}();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z.Title,{level:3,className:"section-title",children:"Reset Directory"}),(0,n.jsx)("p",{className:"description",children:'If you are experiencing issues with your listing on the Owncast Directory and were asked to "reset" your connection to the service, you can do that here. The next time you go live it will try and re-register your server with the directory from scratch.'}),(0,n.jsx)(C.Z,{placement:"topLeft",title:"Are you sure you want to reset your connection to the Owncast directory?",onConfirm:c,okText:"Yes",cancelText:"No",children:(0,n.jsx)(d.Z,{type:"primary",children:"Reset Directory Connection"})}),(0,n.jsx)("p",{children:(0,n.jsx)(P.E,{status:r})})]})},_=c.Z.Panel,O=function(){var e=(0,s.useState)(null),t=e[0],r=e[1],f=(0,s.useContext)(j.aC),h=(0,s.useContext)(w.k).setMessage,m=(f||{}).serverConfig,v=m.streamKey,k=m.ffmpegPath,N=m.rtmpServerPort,C=m.webServerPort,b=m.yp,S=m.socketHostOverride,P=(0,s.useState)(!1),O=P[0],E=P[1],K=3e3;if((0,s.useEffect)((function(){r({streamKey:v,ffmpegPath:k,rtmpServerPort:N,webServerPort:C,socketHostOverride:S})}),[m]),!t)return null;var M=function(e){var n=e.fieldName,s=e.value;r((0,l.Z)((0,o.Z)({},t),(0,a.Z)({},n,s)))},R=function(){h("Updating server settings requires a restart of your Owncast server.")};return(0,n.jsxs)("div",{className:"edit-server-details-container",children:[(0,n.jsx)("div",{className:"field-container field-streamkey-container",children:(0,n.jsxs)("div",{className:"left-side",children:[(0,n.jsx)(x.$7,(0,l.Z)((0,o.Z)({fieldName:"streamKey"},Z.Ri),{value:t.streamKey,initialValue:v,type:g.A8,onChange:M,onSubmit:function(){h("Changing your stream key will log you out of the admin and block you from streaming until you change the key in your broadcasting software.")}})),(0,n.jsxs)("div",{className:"streamkey-actions",children:[(0,n.jsx)(u.Z,{title:"Generate a stream key",children:(0,n.jsx)(d.Z,{icon:(0,n.jsx)(y,{}),size:"small",onClick:function(){for(var e="",t=0;t<3;t+=1)e+=Math.random().toString(36).substring(2);M({fieldName:"streamKey",value:e})}})}),(0,n.jsx)(u.Z,{className:"copy-tooltip",title:O?"Copied!":"Copy to clipboard",children:(0,n.jsx)(d.Z,{icon:(0,n.jsx)(p.Z,{}),size:"small",onClick:function(){navigator.clipboard.writeText(t.streamKey).then((function(){E(!0),setTimeout((function(){return E(!1)}),K)}))}})})]})]})}),(0,n.jsx)(x.$7,(0,l.Z)((0,o.Z)({fieldName:"ffmpegPath"},Z.KB),{value:t.ffmpegPath,initialValue:k,onChange:M,onSubmit:function(){f.online&&h("The updated ffmpeg path will be used when starting your next live stream.")}})),(0,n.jsx)(x.$7,(0,l.Z)((0,o.Z)({fieldName:"webServerPort"},Z.rE),{value:t.webServerPort,initialValue:C,type:g.mG,onChange:M,onSubmit:R})),(0,n.jsx)(x.$7,(0,l.Z)((0,o.Z)({fieldName:"rtmpServerPort"},Z.lT),{value:t.rtmpServerPort,initialValue:N,type:g.mG,onChange:M,onSubmit:R})),(0,n.jsx)(c.Z,{className:"advanced-settings",children:(0,n.jsxs)(_,{header:"Advanced Settings",children:[(0,n.jsx)(i.Z.Paragraph,{children:"If you have a CDN in front of your entire Owncast instance, specify your origin server here for the websocket to connect to. Most people will never need to set this."}),(0,n.jsx)(x.$7,(0,l.Z)((0,o.Z)({fieldName:"socketHostOverride"},Z.ME),{value:t.socketHostOverride,initialValue:S||"",type:g.xA,onChange:M})),b.enabled&&(0,n.jsx)(T,{})]},"1")})]})},E=i.Z.Title;function K(){return(0,n.jsxs)("div",{className:"config-server-details-form",children:[(0,n.jsx)(E,{children:"Server Settings"}),(0,n.jsx)("p",{className:"description",children:"You should change your stream key from the default and keep it safe. For most people it's likely the other settings will not need to be changed."}),(0,n.jsx)("div",{className:"form-module config-server-details-container",children:(0,n.jsx)(O,{})})]})}}},function(e){e.O(0,[3286,9774,2888,179],(function(){return t=44443,e(e.s=t);var t}));var t=e.O();_N_E=t}]);