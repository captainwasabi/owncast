(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1064],{83818:function(e,t,n){"use strict";n.r(t),n.d(t,{OwncastPlayer:function(){return U},default:function(){return Q}});var i=n(47568),r=n(828),a=n(70655),s=n(85893),o=n(67294),u=n(4480),l=n(49218),c=n(85215),h=n(55206),f=n.n(h);n(33108);var d=function(e){var t=e.options,n=e.onReady,i=o.useRef(null),r=o.useRef(null);return o.useEffect((function(){if(!r.current){var e=i.current,a=r.current=(0,c.Z)(e,t,(function(){return a.log("player is ready"),n&&n(a,c.Z)}));a.autoplay(t.autoplay),a.src(t.sources)}}),[t,i]),o.useEffect((function(){var e=r.current;return function(){e&&(e.dispose(),r.current=null)}}),[r]),(0,s.jsx)("div",{"data-vjs-player":!0,children:(0,s.jsx)("video",{ref:i,className:"video-js vjs-big-play-centered vjs-show-big-play-button-on-pause ".concat(f().player," vjs-owncast")})})},y=n(51438);var p=function(){function e(){(0,y.Z)(this,e)}var t=e.prototype;return t.start=function(){this.stop(),this.timer=setInterval((function(){!function(){try{fetch("/api/ping")}catch(e){console.error(e)}}()}),4e3)},t.stop=function(){clearInterval(this.timer)},e}(),g=n(26042),m=n(69396),v=n(29815),b={position:"absolute",width:"100%",height:"100%"},k=function(e){var t=e.src,n=void 0===t?"":t,i=e.width,r=e.height,a=e.objectFit,u=void 0===a?"fill":a,l=e.duration,c=void 0===l?"1s":l,h=(0,o.useMemo)((function(){return{display:"inline-block",position:"relative",width:i,height:r}}),[i,r]),f=(0,o.useMemo)((function(){return[(0,m.Z)((0,g.Z)({},b),{objectFit:u,opacity:0,transition:"opacity ".concat(c)}),(0,m.Z)((0,g.Z)({},b),{objectFit:u,opacity:1,transition:"opacity ".concat(c)}),(0,m.Z)((0,g.Z)({},b),{objectFit:u,opacity:0})]}),[u,c]),d=(0,o.useState)(0),y=d[0],p=d[1],k=(0,o.useState)(["",""]),T=k[0],w=k[1],C=n!==T[1]?n:"",B=function(){p((y+1)%3),w([T[1],C])};return(0,s.jsx)("span",{style:h,children:(0,v.Z)(T).concat([C]).map((function(e,t){return""!==e&&(0,s.jsx)("img",{src:e,alt:"",style:f[t],onLoad:2===t?B:void 0},e)}))})};k.defaultProps={objectFit:"fill",duration:"3s"};var T=n(1125),w=n.n(T),C=function(e){var t,n=e.online,i=e.initialSrc,r=e.src,a=(0,o.useState)(i),u=a[0],l=a[1],c=(0,o.useState)("0s"),h=c[0],f=c[1];return(0,o.useEffect)((function(){clearInterval(t),t=setInterval((function(){"0s"===h&&f("3s"),l("".concat(r,"?").concat(Date.now()))}),2e4)}),[]),(0,s.jsxs)("div",{className:w().poster,children:[!n&&(0,s.jsx)("img",{src:i,alt:"logo"}),n&&(0,s.jsx)(k,{src:u,duration:h,objectFit:"cover",width:"100%",height:"100%"})]})},B=n(73682),I=n(1899),j=n(52951);var E=function(){function e(t,n){var i=this;(0,y.Z)(this,e),this.player=t,this.supportsDetailedMetrics=!1,this.hasPerformedInitialVariantChange=!1,this.clockSkewMs=0,this.segmentDownloadTime=[],this.bandwidthTracking=[],this.latencyTracking=[],this.errors=0,this.qualityVariantChanges=0,this.isBuffering=!1,this.bufferingDurationTimer=0,this.collectPlaybackMetricsTimer=0,this.videoJSReady=this.videoJSReady.bind(this),this.handlePlaying=this.handlePlaying.bind(this),this.handleBuffering=this.handleBuffering.bind(this),this.handleEnded=this.handleEnded.bind(this),this.handleError=this.handleError.bind(this),this.send=this.send.bind(this),this.collectPlaybackMetrics=this.collectPlaybackMetrics.bind(this),this.handleNoLongerBuffering=this.handleNoLongerBuffering.bind(this),this.sendMetricsTimer=0,this.player.on("canplaythrough",this.handleNoLongerBuffering),this.player.on("error",this.handleError),this.player.on("stalled",this.handleBuffering),this.player.on("waiting",this.handleBuffering),this.player.on("playing",this.handlePlaying),this.player.on("ended",this.handleEnded);var r=n.xhr;n.Vhs.xhr=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t[0].uri.match(".ts")){var a=new Date,s=t[1];t[1]=function(e,t,n){var r=(new Date).getTime()-a.getTime();i.trackSegmentDownloadTime(r),s(e,t,n)}}return r.apply(void 0,(0,v.Z)(t))},this.videoJSReady(),this.sendMetricsTimer=setInterval((function(){i.send()}),1e4)}return(0,j.Z)(e,[{key:"stop",value:function(){clearInterval(this.sendMetricsTimer),this.player.off()}},{key:"setClockSkew",value:function(e){this.clockSkewMs=e}},{key:"videoJSReady",value:function(){var e=this,t=this.player.tech({IWillNotUseThisInPlugins:!0});this.supportsDetailedMetrics=!!t,t.on("usage",(function(t){"vhs-unknown-waiting"===t.name&&e.setIsBuffering(!0),"vhs-rendition-change-abr"===t.name&&e.incrementQualityVariantChanges()})),this.player.textTracks().addEventListener("cuechange",(function(){e.incrementQualityVariantChanges()}))}},{key:"handlePlaying",value:function(){var e=this;clearInterval(this.collectPlaybackMetricsTimer),this.collectPlaybackMetricsTimer=setInterval((function(){e.collectPlaybackMetrics()}),5e3)}},{key:"handleEnded",value:function(){clearInterval(this.collectPlaybackMetricsTimer)}},{key:"handleBuffering",value:function(){this.incrementErrorCount(1),this.setIsBuffering(!0)}},{key:"handleNoLongerBuffering",value:function(){this.setIsBuffering(!1)}},{key:"handleError",value:function(){this.incrementErrorCount(1)}},{key:"incrementErrorCount",value:function(e){this.errors+=e}},{key:"incrementQualityVariantChanges",value:function(){this.hasPerformedInitialVariantChange?this.qualityVariantChanges++:this.hasPerformedInitialVariantChange=!0}},{key:"setIsBuffering",value:function(e){var t=this;this.isBuffering=e,e?this.bufferingDurationTimer=setTimeout((function(){t.incrementErrorCount(1)}),500):clearTimeout(this.bufferingDurationTimer)}},{key:"trackSegmentDownloadTime",value:function(e){this.segmentDownloadTime.push(e)}},{key:"trackBandwidth",value:function(e){this.bandwidthTracking.push(e)}},{key:"trackLatency",value:function(e){this.latencyTracking.push(e)}},{key:"collectPlaybackMetrics",value:function(){var e=this.player.tech({IWillNotUseThisInPlugins:!0});if(e&&e.vhs&&(!this.player.paused()&&2===this.player.networkState())){var t=e.vhs.systemBandwidth;this.trackBandwidth(t);try{var n=function(e){for(var t,n=e.vhs.playlists.media(),i=e.currentTime(),a=0,s=n.segments.length;a<s;a++)if(i<n.segments[a].end){t=n.segments[a];break}return t||(t=(0,r.Z)(n.segments,1)[0]),t}(e);if(!n||!n.dateTimeObject)return;var i=n.dateTimeObject.getTime(),a=(new Date).getTime()+this.clockSkewMs-i;if(a<0||a/1e3>=40)return;this.trackLatency(a)}catch(s){console.warn(s)}}}},{key:"send",value:function(){var e=this;return(0,i.Z)((function(){var t,n,i,r,s,o,u,l,c,h,f;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(0===e.segmentDownloadTime.length)return[2];if(!e.player||e.player.paused())return[2];t=e.errors,e.supportsDetailedMetrics?(r=(i=function(e){return e.reduce((function(e,t){return e+t}),0)/e.length})(e.segmentDownloadTime)/1e3,s=Math.round(1e3*r)/1e3,o=i(e.bandwidthTracking)/1e3,u=Math.round(1e3*o)/1e3,l=i(e.latencyTracking)/1e3,c=Math.round(1e3*l)/1e3,n={bandwidth:u,latency:c,downloadDuration:s,errors:t+(e.isBuffering?1:0),qualityVariantChanges:e.qualityVariantChanges}):n={errors:t+(e.isBuffering?1:0)},e.errors=0,e.qualityVariantChanges=0,e.segmentDownloadTime=[],e.bandwidthTracking=[],e.latencyTracking=[],h={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},a.label=1;case 1:return a.trys.push([1,3,,4]),[4,fetch("/api/metrics/playback",h)];case 2:return a.sent(),[3,4];case 3:return f=a.sent(),console.error(f),[3,4];case 4:return[2]}}))}))()}}]),e}(),M=E,P=n(45785),S=n(82662),x=n(88029),L=n(91224);var D=function(e,t,n,i){var r=t.getComponent("MenuItem"),a=t.getComponent("MenuItem"),s=t.getComponent("MenuButton"),o=function(e){(0,x.Z)(n,e);var t=(0,L.Z)(n);function n(e,i){return(0,y.Z)(this,n),t.call(this,e,i)}return n.prototype.createEl=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"button",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(0,P.Z)((0,S.Z)(n.prototype),"createEl",this).call(this,e,t,i);return r.innerHTML='<hr style="opacity: 0.3; margin-left: 10px; margin-right: 10px;" />',r},n}(r),u=new a(e,{selectable:!0});u.setAttribute("class","latency-toggle-item"),u.on("click",(function(){i()}));var l=new o(e,{selectable:!1}),c=t.extend(s,{constructor:function(){s.call(this,e)},createItems:function(){var t=e.tech({IWillNotUseThisInPlugins:!0}),i=new a(e,{selectable:!0,label:"Auto"}),r=n.map((function(n){var i=new a(e,{selectable:!0,label:n.name});return i.on("click",(function(){t?(t.vhs.representations().forEach((function(e,t){e.enabled(t===n.index)})),i.selected(!1)):console.warn("Invalid attempt to access null player tech")})),i}));i.on("click",(function(){t.vhs.representations().forEach((function(e){e.enabled(!0)})),i.selected(!1)}));var s=!!t&&!!t.vhs;return n.length<2&&s?[u]:n.length>1&&s?[i].concat((0,v.Z)(r),[l,u]):s||1!==n.length?[i].concat((0,v.Z)(r)):[]}}),h=e.tech({IWillNotUseThisInPlugins:!0});if(!(n.length<2)||h&&h.vhs){var f=new c;return f.addClass("vjs-quality-selector"),f}};var Z=function(){function e(t){(0,y.Z)(this,e),this.player=t,this.playing=!1,this.enabled=!1,this.running=!1,this.inTimeout=!1,this.jumpingToLiveIgnoreBuffer=!1,this.timeoutTimer=0,this.checkTimer=0,this.bufferingCounter=0,this.bufferingTimer=0,this.playbackRate=1,this.lastJumpOccurred=null,this.startupTime=new Date,this.clockSkewMs=0,this.currentLatency=null,this.bufferedAtLatency=[],this.player.on("playing",this.handlePlaying.bind(this)),this.player.on("pause",this.handlePause.bind(this)),this.player.on("error",this.handleError.bind(this)),this.player.on("waiting",this.handleBuffering.bind(this)),this.player.on("stalled",this.handleBuffering.bind(this)),this.player.on("ended",this.handleEnded.bind(this)),this.player.on("canplaythrough",this.handlePlaying.bind(this)),this.player.on("canplay",this.handlePlaying.bind(this)),this.check=this.check.bind(this),this.start=this.start.bind(this),this.enable=this.enable.bind(this),this.countBufferingEvent=this.countBufferingEvent.bind(this)}return(0,j.Z)(e,[{key:"setClockSkew",value:function(e){this.clockSkewMs=e}},{key:"check",value:function(){if(!((new Date).getTime()-this.startupTime.getTime()<1e4)&&!this.player.paused()&&!this.player.seeking()&&!this.inTimeout&&this.enabled){var e=this.player.tech({IWillNotUseThisInPlugins:!0});if(e&&e.vhs)if(2===this.player.networkState()){var t=0;try{if(0===e.vhs.stats.buffered.length)return void this.timeout();e.vhs.stats.buffered.forEach((function(e){t+=e.end-e.start}))}catch(g){console.error(g)}var n=e.vhs.playlists.media().attributes.BANDWIDTH,i=e.vhs.systemBandwidth/n;try{var a=function(e){for(var t,n=e.vhs.playlists.media(),i=e.currentTime(),a=0,s=n.segments.length;a<s;a++)if(i<n.segments[a].end){t=n.segments[a];break}return t||(t=(0,r.Z)(n.segments,1)[0]),t}(e);if(!a)return;if(i<1.8&&t<6*a.duration)return void this.timeout();var s=Math.max(4e3,1e3*a.duration*1.8),o=this.bufferedAtLatency.concat([s]),u=o.reduce((function(e,t){return e+t}),0)/o.length,l=Math.max(1.4*u,Math.min(1e3*a.duration*2.6,15e3));u>=l&&(l=u+3e3);var c=a.dateTimeObject.getTime(),h=(new Date).getTime()+this.clockSkewMs-c;if(this.currentLatency=h,Math.abs(h)>8e4)return void this.timeout();if(h>l){if(this.shouldJumpToLive()&&h>l+5e3){var f=h/1e3-3*a.duration,d=this.player.currentTime()+f;console.info("latency",h/1e3,"jumping",f,"to live from ",this.player.currentTime()," to ",d);var y=e.vhs.stats.buffered[0].end;if(d>e.vhs.stats.buffered[0].start<y)return void this.jump(d)}var p=.33*i;(p=Math.max(Math.min(p,1.08),1))>this.playbackRate+.02&&(p=this.playbackRate+.02),p=Math.round(p*Math.pow(10,3))/Math.pow(10,3),this.start(p)}else h<=u&&this.stop();console.info("latency",h/1e3,"min",u/1e3,"max",l/1e3,"playback rate",this.playbackRate,"enabled:",this.enabled,"running: ",this.running,"skew: ",this.clockSkewMs,"rebuffer events: ",this.bufferingCounter)}catch(m){}}}}},{key:"shouldJumpToLive",value:function(){return!(this.bufferingCounter>1)&&(new Date).getTime()-this.lastJumpOccurred>2e4}},{key:"jump",value:function(e){var t=this;this.jumpingToLiveIgnoreBuffer=!0,this.performedInitialLiveJump=!0,this.lastJumpOccurred=new Date,console.info("current time",this.player.currentTime(),"seeking to",e),this.player.currentTime(e),setTimeout((function(){t.jumpingToLiveIgnoreBuffer=!1}),5e3)}},{key:"setPlaybackRate",value:function(e){this.playbackRate=e,this.player.playbackRate(e)}},{key:"start",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;!this.inTimeout&&this.enabled&&e!==this.playbackRate&&(this.running=!0,this.setPlaybackRate(e))}},{key:"stop",value:function(){this.running&&console.log("stopping latency compensator..."),this.running=!1,this.setPlaybackRate(1)}},{key:"enable",value:function(){var e=this;this.enabled=!0,clearInterval(this.checkTimer),clearTimeout(this.bufferingTimer),this.checkTimer=setInterval((function(){e.check()}),3e3)}},{key:"disable",value:function(){clearInterval(this.checkTimer),clearTimeout(this.timeoutTimer),this.stop(),this.enabled=!1}},{key:"timeout",value:function(){var e=this;this.jumpingToLiveIgnoreBuffer||(this.inTimeout=!0,this.stop(),clearTimeout(this.timeoutTimer),this.timeoutTimer=setTimeout((function(){e.endTimeout()}),3e4))}},{key:"endTimeout",value:function(){clearTimeout(this.timeoutTimer),this.inTimeout=!1}},{key:"handlePlaying",value:function(){var e=this.playing;this.playing=!0,clearTimeout(this.bufferingTimer),this.enabled&&this.shouldJumpToLive()&&(e||(this.jumpingToLiveIgnoreBuffer=!0,this.player.liveTracker.seekToLiveEdge(),this.lastJumpOccurred=new Date))}},{key:"handlePause",value:function(){this.playing=!1}},{key:"handleEnded",value:function(){this.enabled&&this.disable()}},{key:"handleError",value:function(){this.enabled&&this.timeout()}},{key:"countBufferingEvent",value:function(){var e=this;this.bufferingCounter+=1,this.bufferingCounter>4?this.disable():(this.bufferedAtLatency.push(this.currentLatency),console.log("latency compensation timeout due to buffering:",this.bufferingCounter,"buffering events of",4),setTimeout((function(){e.bufferingCounter>0&&(e.bufferingCounter-=1)}),18e4))}},{key:"handleBuffering",value:function(){var e=this;this.enabled&&!this.inTimeout&&(this.jumpingToLiveIgnoreBuffer?this.jumpingToLiveIgnoreBuffer=!1:(this.timeout(),clearTimeout(this.bufferingTimer),this.bufferingTimer=setTimeout((function(){e.countBufferingEvent()}),200)))}}]),e}(),R=Z,_="/api/video/variants",N="owncast_volume",J="latencyCompensatorEnabled",O=new p,V=null,q=null,F=!1;function A(){return W.apply(this,arguments)}function W(){return(W=(0,i.Z)((function(){var e,t;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:e=[],n.label=1;case 1:return n.trys.push([1,4,,5]),[4,fetch(_)];case 2:return[4,n.sent().json()];case 3:return e=n.sent(),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2,e]}}))}))).apply(this,arguments)}var U=function(e){var t=e.source,n=e.online,c=o.useRef(null),h=(0,r.Z)((0,u.FV)(I.We),2),f=h[0],y=h[1],p=(0,u.sJ)(I.g8),g=function(){(0,B.qQ)(N,c.current.muted()?0:c.current.volume())},m=function(e){var t=document.querySelector(".latency-toggle-item > .vjs-menu-item-text");t&&(t.innerHTML=e)},v=function(){q&&q.stop(),F=!0,(q=new R(c.current)).setClockSkew(p),q.enable(),(0,B.qQ)(J,!0),m("disable minimized latency")},b=function(){q&&q.disable(),q=null,F=!1,(0,B.qQ)(J,!1),m('<span style="font-size: 0.8em">enable minimized latency (experimental)</span>')},k=function(){F?b():v()},T=function(){var e=(0,i.Z)((function(e,t){var n,i;return(0,a.__generator)(this,(function(r){switch(r.label){case 0:return[4,A()];case 1:return n=r.sent(),i=D(e,t,n,k),e.controlBar.addChild(i,{},e.controlBar.children_.length-2),function(e){var t=e.tech({IWillNotUseThisInPlugins:!0});t&&t.vhs&&("true"===(0,B.$o)(J)&&t&&t.vhs?v():b())}(e),[2]}}))}));return function(t,n){return e.apply(this,arguments)}}();(0,l.y1)("space",(function(e){e.preventDefault(),c.current.paused()?c.current.play():c.current.pause()})),(0,l.y1)("f",(function(){c.current.isFullscreen()?c.current.exitFullscreen():c.current.requestFullscreen()}),{enableOnContentEditable:!1}),(0,l.y1)("m",(function(){c.current.muted()||0===c.current.volume()?c.current.volume(.7):c.current.volume(0)}),{enableOnContentEditable:!1}),(0,l.y1)("0",(function(){return c.current.volume(c.current.volume()+.1)}),{enableOnContentEditable:!1}),(0,l.y1)("9",(function(){return c.current.volume(c.current.volume()-.1)}),{enableOnContentEditable:!1});var w={autoplay:!1,controls:!0,responsive:!0,fluid:!1,playsinline:!0,liveui:!0,preload:"auto",controlBar:{progressControl:{seekBar:!1}},html5:{vhs:{enableLowInitialPlaylist:!0,experimentalBufferBasedABR:!0,useNetworkInformationApi:!0,maxPlaylistRetries:30}},liveTracker:{trackingThreshold:0,liveTolerance:15},sources:[{src:t,type:"application/x-mpegURL"}]};return(0,o.useEffect)((function(){V&&V.setClockSkew(p)}),[p]),(0,o.useEffect)((function(){return function(){b(),V.stop()}}),[]),(0,s.jsxs)("div",{style:{display:"grid"},children:[n&&(0,s.jsx)("div",{style:{gridColumn:1,gridRow:1},children:(0,s.jsx)(d,{options:w,onReady:function(e,t){c.current=e,function(){try{c.current.volume((0,B.$o)(N)||1)}catch(e){console.warn(e)}}(),function(e,t){if(window.hasOwnProperty("WebKitPlaybackTargetAvailabilityEvent")){var n=t.getComponent("Button"),i=t.extend(n,{constructor:function(){n.call(this,e)},handleClick:function(){try{document.getElementsByTagName("video")[0].webkitShowPlaybackTargetPicker()}catch(e){console.error(e)}}});e.controlBar.addChild(new i).addClass("vjs-airplay")}}(e,t),e.on("waiting",(function(){e.log("player is waiting")})),e.on("dispose",(function(){e.log("player will dispose"),O.stop()})),e.on("playing",(function(){e.log("player is playing"),O.start(),y(!0)})),e.on("pause",(function(){e.log("player is paused"),O.stop(),y(!1)})),e.on("ended",(function(){e.log("player is ended"),O.stop(),y(!1)})),t.hookOnce(),e.on("volumechange",g),(V=new M(e,t)).setClockSkew(p),T(e,t)}})}),(0,s.jsx)("div",{style:{gridColumn:1,gridRow:1},children:!f&&(0,s.jsx)(C,{online:n,initialSrc:"/thumbnail.jpg",src:"/thumbnail.jpg"})})]})},Q=U},55206:function(e){e.exports={player:"VideoJS_player__GT8FN",poster:"VideoJS_poster__nlmqm"}},1125:function(e){e.exports={poster:"VideoPoster_poster__RDkSk"}},25893:function(){}}]);