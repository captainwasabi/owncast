(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6801],{6440:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-video",function(){return t(15960)}])},3664:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var a=t(47568),i=t(70655),s=t(85893),r=t(67294),o=t(94594),l=t(83192),d=t(25521),c=t(25964),u=t(35159),h=function(e){var n=e.apiPath,t=e.checked,h=e.reversed,m=void 0!==h&&h,v=e.configPath,f=void 0===v?"":v,g=e.disabled,p=void 0!==g&&g,x=e.fieldName,j=e.label,b=e.tip,y=e.useSubmit,N=e.onChange,w=(0,r.useState)(null),k=w[0],Z=w[1],C=null,P=((0,r.useContext)(u.aC)||{}).setFieldInConfigState,_=function(){Z(null),clearTimeout(C),C=null},S=function(){var e=(0,a.Z)((function(e){var t;return(0,i.__generator)(this,(function(a){switch(a.label){case 0:return y?(Z((0,l.kg)(l.Jk)),t=m?!e:e,[4,(0,c.Si)({apiPath:n,data:{value:t},onSuccess:function(){P({fieldName:x,value:t,path:f}),Z((0,l.kg)(l.zv))},onError:function(e){Z((0,l.kg)(l.Un,"There was an error: ".concat(e)))}})]):[3,2];case 1:a.sent(),C=setTimeout(_,c.sI),a.label=2;case 2:return N&&N(e),[2]}}))}));return function(n){return e.apply(this,arguments)}}(),I=null!==k&&k.type===l.Jk;return(0,s.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[j&&(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:j})}),(0,s.jsxs)("div",{className:"input-side",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)(o.Z,{className:"switch field-".concat(x),loading:I,onChange:S,defaultChecked:t,checked:t,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:p}),(0,s.jsx)(d.E,{status:k})]}),(0,s.jsx)("p",{className:"field-tip",children:b})]})]})};h.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},15960:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return G}});var a=t(85893),i=t(54907),s=t(84485),r=t(25968),o=t(6226),l=t(67294),d=t(47568),c=t(828),u=t(70655),h=t(38939),m=t(65360),v=t(57553),f=t(25964),g=t(83192),p=t(35159),x=t(25521),j=function(){var e=(0,l.useContext)(p.aC),n=e||{},t=n.serverConfig,i=n.setFieldInConfigState,r=t||{},o=r.videoCodec,j=r.supportedCodecs,b=s.Z.Title,y=h.Z.Option,N=(0,l.useState)(null),w=N[0],k=N[1],Z=(0,l.useContext)(v.k).setMessage,C=(0,l.useState)(o),P=C[0],_=C[1],S=(0,l.useState)(o),I=S[0],T=S[1],V=(0,c.Z)(l.useState(!1),2),E=V[0],U=V[1],L=null;(0,l.useEffect)((function(){_(o)}),[o]);var A=function(){k(null),L=null,clearTimeout(L)};function B(){return(B=(0,d.Z)((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return _(I),T(""),U(!1),[4,(0,f.Si)({apiPath:f.CQ,data:{value:I},onSuccess:function(){i({fieldName:"videoCodec",value:I,path:"videoSettings"}),k((0,g.kg)(g.zv,"Video codec updated.")),L=setTimeout(A,f.sI),e.online&&Z("Your latency buffer setting will take effect the next time you begin a live stream.")},onError:function(e){k((0,g.kg)(g.Un,e)),L=setTimeout(A,f.sI)}})];case 1:return n.sent(),[2]}}))}))).apply(this,arguments)}var F=j.map((function(e){var n=e;return"libx264"===n?n="Default (libx264)":"h264_nvenc"===n?n="NVIDIA GPU acceleration":"h264_vaapi"===n?n="VA-API hardware encoding":"h264_qsv"===n?n="Intel QuickSync":"h264_v4l2m2m"===n?n="Video4Linux hardware encoding":"h264_omx"===n?n="OpenMax (omx) for Raspberry Pi":"h264_videotoolbox"===n&&(n="Apple VideoToolbox (hardware)"),(0,a.jsx)(y,{value:e,children:n},e)})),R="";return"libx264"===P?R="libx264 is the default codec and generally the only working choice for shared VPS environments. This is likely what you should be using unless you know you have set up other options.":"h264_nvenc"===P?R="You can use your NVIDIA GPU for encoding if you have a modern NVIDIA card with encoding cores.":"h264_vaapi"===P?R="VA-API may be supported by your NVIDIA proprietary drivers, Mesa open-source drivers for AMD or Intel graphics.":"h264_qsv"===P?R="Quick Sync Video is Intel's brand for its dedicated video encoding and decoding hardware. It may be an option if you have a modern Intel CPU with integrated graphics.":"h264_v4l2m2m"===P?R="Video4Linux is an interface to multiple different hardware encoding platforms such as Intel and AMD.":"h264_omx"===P?R="OpenMax is a codec most often used with a Raspberry Pi.":"h264_videotoolbox"===P&&(R="Apple VideoToolbox is a low-level framework that provides direct access to hardware encoders and decoders."),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{level:3,className:"section-title",children:"Video Codec"}),(0,a.jsxs)("div",{className:"description",children:["If you have access to specific hardware with the drivers and software installed for them, you may be able to improve your video encoding performance.",(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://owncast.online/docs/codecs?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read the documentation about this setting before changing it or you may make your stream unplayable."})})]}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(m.Z,{title:"Are you sure you want to change your video codec to ".concat(I," and understand what this means?"),visible:E,placement:"leftBottom",onConfirm:function(){return B.apply(this,arguments)},onCancel:function(){return U(!1)},okText:"Yes",cancelText:"No",children:(0,a.jsx)(h.Z,{defaultValue:P,value:P,style:{width:"100%"},onChange:function(e){T(e),U(!0)},children:F})}),(0,a.jsx)(x.E,{status:w}),(0,a.jsx)("p",{id:"selected-codec-note",className:"selected-value-note",children:R})]})]})},b=t(22918),y=s.Z.Title,N={0:"Lowest",1:"",2:"",3:"",4:"Highest"},w={0:"Lowest latency, lowest error tolerance (Not recommended, may not work for all content/configurations.)",1:"Low latency, low error tolerance",2:"Medium latency, medium error tolerance (Default)",3:"High latency, high error tolerance",4:"Highest latency, highest error tolerance"},k=function(){var e=(0,l.useState)(null),n=e[0],t=e[1],i=(0,l.useState)(null),s=i[0],r=i[1],o=(0,l.useContext)(p.aC),c=(0,l.useContext)(v.k).setMessage,h=o||{},m=h.serverConfig,j=h.setFieldInConfigState,k=(m||{}).videoSettings,Z=null;if(!k)return null;(0,l.useEffect)((function(){r(k.latencyLevel)}),[k]);var C=function(){t(null),Z=null,clearTimeout(Z)},P=function(){var e=(0,d.Z)((function(e){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return t((0,g.kg)(g.Jk)),[4,(0,f.Si)({apiPath:f.sv,data:{value:e},onSuccess:function(){j({fieldName:"latencyLevel",value:e,path:"videoSettings"}),t((0,g.kg)(g.zv,"Latency buffer level updated.")),Z=setTimeout(C,f.sI),o.online&&c("Your latency buffer setting will take effect the next time you begin a live stream.")},onError:function(e){t((0,g.kg)(g.Un,e)),Z=setTimeout(C,f.sI)}})];case 1:return n.sent(),[2]}}))}));return function(n){return e.apply(this,arguments)}}();return(0,a.jsxs)("div",{className:"config-video-latency-container",children:[(0,a.jsx)(y,{level:3,className:"section-title",children:"Latency Buffer"}),(0,a.jsx)("p",{className:"description",children:"While it's natural to want to keep your latency as low as possible, you may experience reduced error tolerance and stability the lower you go. The lowest setting is not recommended."}),(0,a.jsxs)("p",{className:"description",children:["For interactive live streams you may want to experiment with a lower latency, for non-interactive broadcasts you may want to increase it."," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/encoding#latency-buffer?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read to learn more."})]}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(b.Z,{tipFormatter:function(e){return w[e]},onChange:function(e){P(e)},min:0,max:4,marks:N,defaultValue:s,value:s}),(0,a.jsx)("p",{className:"selected-value-note",children:w[s]}),(0,a.jsx)(x.E,{status:n})]})]})},Z=t(14924),C=t(26042),P=t(69396),_=t(29815),S=t(71577),I=t(14670),T=t(10355),V=t(85402),E=t(48689),U=t(21640),L=t(94184),A=t.n(L),B=t(24389),F=t(3664),R=i.Z.Panel,D=function(e){var n=e.dataState,t=void 0===n?f.gX:n,l=e.onUpdateField,d=t.videoPassthrough,c=A()({"config-variant-form":!0,"video-passthrough-enabled":d});return(0,a.jsxs)("div",{className:c,children:[(0,a.jsxs)("p",{className:"description",children:[(0,a.jsx)("a",{href:"https://owncast.online/docs/video?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more"})," ","about how each of these settings can impact the performance of your server."]}),d&&(0,a.jsxs)("p",{className:"passthrough-warning",children:["NOTE: Video Passthrough for this output stream variant is ",(0,a.jsx)("em",{children:"enabled"}),", disabling the below video encoding settings."]}),(0,a.jsxs)(r.Z,{gutter:16,children:[(0,a.jsx)(B.nv,(0,P.Z)((0,C.Z)({maxLength:"10"},f.SS),{value:t.name,onChange:function(e){l({fieldName:"name",value:e.value})}})),(0,a.jsx)(o.Z,{sm:24,md:12,children:(0,a.jsxs)("div",{className:"form-module cpu-usage-container",children:[(0,a.jsx)(s.Z.Title,{level:3,children:"CPU or GPU Utilization"}),(0,a.jsx)("p",{className:"description",children:"Reduce to improve server performance, or increase it to improve video quality."}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(b.Z,{tipFormatter:function(e){return f.I$[e]},onChange:function(e){l({fieldName:"cpuUsageLevel",value:e})},min:1,max:Object.keys(f.t$).length,marks:f.t$,defaultValue:t.cpuUsageLevel,value:t.cpuUsageLevel,disabled:t.videoPassthrough}),(0,a.jsx)("p",{className:"selected-value-note",children:d?"CPU usage selection is disabled when Video Passthrough is enabled.":f.I$[t.cpuUsageLevel]||""})]}),(0,a.jsxs)("p",{className:"read-more-subtext",children:["This could mean GPU or CPU usage depending on your server environment."," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#cpu-usage",target:"_blank",rel:"noopener noreferrer",children:"Read more about hardware performance."})]})]})}),(0,a.jsx)(o.Z,{sm:24,md:12,children:(0,a.jsxs)("div",{className:"form-module bitrate-container ".concat(t.videoPassthrough?"disabled":""),children:[(0,a.jsx)(s.Z.Title,{level:3,children:"Video Bitrate"}),(0,a.jsx)("p",{className:"description",children:f.yC.tip}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(b.Z,{tipFormatter:function(e){return"".concat(e," ").concat(f.yC.unit)},disabled:t.videoPassthrough,defaultValue:t.videoBitrate,value:t.videoBitrate,onChange:function(e){l({fieldName:"videoBitrate",value:e})},step:f.yC.incrementBy,min:f.yC.min,max:f.yC.max,marks:f.HM}),(0,a.jsx)("p",{className:"selected-value-note",children:function(){if(d)return"Bitrate selection is disabled when Video Passthrough is enabled.";var e="".concat(t.videoBitrate).concat(f.yC.unit);return e=t.videoBitrate<2e3?"".concat(e," - Good for low bandwidth environments."):t.videoBitrate<3500?"".concat(e," - Good for most bandwidth environments."):"".concat(e," - Good for high bandwidth environments.")}()})]}),(0,a.jsx)("p",{className:"read-more-subtext",children:(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read more about bitrates."})})]})})]}),(0,a.jsx)(i.Z,{className:"advanced-settings",children:(0,a.jsxs)(R,{header:"Advanced Settings",children:[(0,a.jsxs)(r.Z,{gutter:16,children:[(0,a.jsx)(o.Z,{sm:24,md:12,children:(0,a.jsxs)("div",{className:"form-module resolution-module",children:[(0,a.jsx)(s.Z.Title,{level:3,children:"Resolution"}),(0,a.jsxs)("p",{className:"description",children:["Resizing your content will take additional resources on your server. If you wish to optionally resize your content for this stream output then you should either set the width ",(0,a.jsx)("strong",{children:"or"})," the height to keep your aspect ratio."," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read more about resolutions."})]}),(0,a.jsx)("br",{}),(0,a.jsx)(B.nv,(0,P.Z)((0,C.Z)({type:"number"},f.dL.scaledWidth),{value:t.scaledWidth,onChange:function(e){var n=Number(e.value);isNaN(n)||l({fieldName:"scaledWidth",value:n||0})},disabled:t.videoPassthrough})),(0,a.jsx)(B.nv,(0,P.Z)((0,C.Z)({type:"number"},f.dL.scaledHeight),{value:t.scaledHeight,onChange:function(e){var n=Number(e.value);isNaN(n)||l({fieldName:"scaledHeight",value:n||0})},disabled:t.videoPassthrough}))]})}),(0,a.jsx)(o.Z,{sm:24,md:12,children:(0,a.jsxs)("div",{className:"form-module video-passthrough-module",children:[(0,a.jsx)(s.Z.Title,{level:3,children:"Video Passthrough"}),(0,a.jsxs)("div",{className:"description",children:[(0,a.jsxs)("p",{children:["Enabling video passthrough may allow for less hardware utilization, but may also make your stream ",(0,a.jsx)("strong",{children:"unplayable"}),"."]}),(0,a.jsx)("p",{children:"All other settings for this stream output will be disabled if passthrough is used."}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#video-passthrough",target:"_blank",rel:"noopener noreferrer",children:"Read the documentation before enabling, as it impacts your stream."})})]}),(0,a.jsx)(m.Z,{disabled:!0===t.videoPassthrough,title:"Did you read the documentation about video passthrough and understand the risks involved with enabling it?",icon:(0,a.jsx)(U.Z,{}),onConfirm:function(){l({fieldName:"videoPassthrough",value:!0})},okText:"Yes",cancelText:"No",children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)(F.Z,{label:"Use Video Passthrough?",fieldName:"video-passthrough",tip:f.dL.videoPassthrough.tip,checked:t.videoPassthrough,onChange:function(e){d&&l({fieldName:"videoPassthrough",value:e})}})})})]})})]}),(0,a.jsxs)("div",{className:"form-module frame-rate-module",children:[(0,a.jsx)(s.Z.Title,{level:3,children:"Frame rate"}),(0,a.jsx)("p",{className:"description",children:f.nm.tip}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(b.Z,{tipFormatter:function(e){return"".concat(e," ").concat(f.nm.unit)},defaultValue:t.framerate,value:t.framerate,onChange:function(e){l({fieldName:"framerate",value:e})},step:f.nm.incrementBy,min:f.nm.min,max:f.nm.max,marks:f.Xq,disabled:t.videoPassthrough}),(0,a.jsx)("p",{className:"selected-value-note",children:d?"Framerate selection is disabled when Video Passthrough is enabled.":f.x8[t.framerate]||""})]}),(0,a.jsx)("p",{className:"read-more-subtext",children:(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#framerate",target:"_blank",rel:"noopener noreferrer",children:"Read more about framerates."})})]})]},"1")})]})},O=s.Z.Title,z=function(){var e=(0,l.useState)(!1),n=e[0],t=e[1],i=(0,l.useState)(!1),s=i[0],r=i[1],o=(0,l.useState)(0),h=o[0],m=o[1],j=(0,l.useContext)(v.k).setMessage,b=(0,l.useState)(f.gX),y=b[0],N=b[1],w=(0,l.useState)(null),k=w[0],U=w[1],L=(0,l.useContext)(p.aC),A=L||{},B=A.serverConfig,F=A.setFieldInConfigState,R=(B||{}).videoSettings,z=(R||{}).videoQualityVariants,H=null;if(!R)return null;var M=function(){U(null),H=null,clearTimeout(H)},G=function(){t(!1),m(-1),N(f.gX)},X=function(){var e=(0,d.Z)((function(e){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return U((0,g.kg)(g.Jk)),[4,(0,f.Si)({apiPath:f.vv,data:{value:e},onSuccess:function(){F({fieldName:"videoQualityVariants",value:e,path:"videoSettings"}),r(!1),G(),U((0,g.kg)(g.zv,"Variants updated")),H=setTimeout(M,f.sI),L.online&&j("Updating your video configuration will take effect the next time you begin a new stream.")},onError:function(e){U((0,g.kg)(g.Un,e)),r(!1),H=setTimeout(M,f.sI)}})];case 1:return n.sent(),[2]}}))}));return function(n){return e.apply(this,arguments)}}(),q=[{title:"Name",dataIndex:"name",render:function(e){return e||"No name"}},{title:"Video bitrate",dataIndex:"videoBitrate",key:"videoBitrate",render:function(e,n){return!e||n.videoPassthrough?"Same as source":"".concat(e," kbps")}},{title:"CPU Usage",dataIndex:"cpuUsageLevel",key:"cpuUsageLevel",render:function(e,n){return!e||n.videoPassthrough?"n/a":f.I$[e].split(" ")[0]}},{title:"",dataIndex:"",key:"edit",render:function(e){var n=e.key-1;return(0,a.jsxs)("span",{className:"actions",children:[(0,a.jsx)(S.Z,{size:"small",onClick:function(){m(n),N(z[n]),t(!0)},children:"Edit"}),(0,a.jsx)(S.Z,{className:"delete-button",icon:(0,a.jsx)(E.Z,{}),size:"small",disabled:1===z.length,onClick:function(){!function(e){var n=(0,_.Z)(z);n.splice(e,1),X(n)}(n)}})]})}}],Q=z.map((function(e,n){return(0,C.Z)({key:n+1},e)}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(O,{level:3,className:"section-title",children:"Stream output"}),function(){if(1!==z.length)return!1;var e=(0,c.Z)(z,1)[0];return f.i3.VIDEO_HEIGHT<=e.scaledHeight||f.i3.VIDEO_BITRATE<=e.videoBitrate}()&&(0,a.jsx)(I.Z,{message:f.i3.HELP_TEXT,type:"info",closable:!0}),(0,a.jsx)(x.E,{status:k}),(0,a.jsx)(T.Z,{className:"variants-table",pagination:!1,size:"small",columns:q,dataSource:Q}),(0,a.jsxs)(V.Z,{title:"Edit Video Variant Details",visible:n,onOk:function(){r(!0);var e=(0,_.Z)(z);-1===h?e.push(y):e.splice(h,1,y),X(e)},onCancel:G,confirmLoading:s,width:900,children:[(0,a.jsx)(D,{dataState:(0,C.Z)({},y),onUpdateField:function(e){var n=e.fieldName,t=e.value;N((0,P.Z)((0,C.Z)({},y),(0,Z.Z)({},n,t)))}}),(0,a.jsx)(x.E,{status:k})]}),(0,a.jsx)("br",{}),(0,a.jsx)(S.Z,{type:"primary",onClick:function(){m(-1),N(f.gX),t(!0)},children:"Add a new variant"})]})},H=i.Z.Panel,M=s.Z.Title;function G(){return(0,a.jsxs)("div",{className:"config-video-variants",children:[(0,a.jsx)(M,{children:"Video configuration"}),(0,a.jsxs)("p",{className:"description",children:["Before changing your video configuration"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/video?source=admin",target:"_blank",rel:"noopener noreferrer",children:"visit the video documentation"})," ","to learn how it impacts your stream performance. The general rule is to start conservatively by having one middle quality stream output variant and experiment with adding more of varied qualities."]}),(0,a.jsxs)(r.Z,{gutter:[16,16],children:[(0,a.jsx)(o.Z,{md:24,lg:12,children:(0,a.jsx)("div",{className:"form-module variants-table-module",children:(0,a.jsx)(z,{})})}),(0,a.jsxs)(o.Z,{md:24,lg:12,children:[(0,a.jsx)("div",{className:"form-module latency-module",children:(0,a.jsx)(k,{})}),(0,a.jsx)(i.Z,{className:"advanced-settings codec-module",children:(0,a.jsx)(H,{header:"Advanced Settings",children:(0,a.jsx)("div",{className:"form-module variants-table-module",children:(0,a.jsx)(j,{})})},"1")})]})]})]})}}},function(e){e.O(0,[7330,355,3286,5283,9774,2888,179],(function(){return n=6440,e(e.s=n);var n}));var n=e.O();_N_E=n}]);