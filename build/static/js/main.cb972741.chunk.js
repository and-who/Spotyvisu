(this.webpackJsonpspotivisu=this.webpackJsonpspotivisu||[]).push([[0],{120:function(e,t,c){},261:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(18),s=c.n(r),i=(c(120),c(9)),o=c(113),l=c(281),u=(c(69),c(107)),j=c.n(u),d=c(2),b=function(e){return Object(d.jsx)("div",{className:"ProgressBar",children:Object(d.jsx)("div",{style:{width:"".concat(e.progress,"%"),backgroundColor:e.color},className:"ProgressBar__progress"})})},f="http://localhost:8080",m="".concat(f,"/player/current"),O="".concat(f,"/player/resume"),h="".concat(f,"/player/pause"),x="".concat(f,"/player/next"),g="".concat(f,"/player/volume/set/"),p=c(66),v=c.n(p),_=c(106),k=c(130),N=function(){var e=Object(_.a)(v.a.mark((function e(t){var c,n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new k(t),e.next=3,c.getPalette();case 3:return n=e.sent,a=n.Vibrant.getHex(),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){var t,c=e.player,a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=c.trackTime}));var r=a.current===c.trackTime,s=null===(t=c.image)||void 0===t?void 0:t.key,o=Object(n.useState)(),l=Object(i.a)(o,2),u=l[0],f=l[1];return Object(n.useMemo)((function(){return s&&N("https://i.scdn.co/image/".concat(s))}),[s]).then((function(e){return f(e)})),Object(d.jsxs)("div",{onClick:function(){r?fetch(O):fetch(h)},className:"TrackInfo",children:[Object(d.jsxs)("div",{className:"TrackInfo__art",children:[Object(d.jsx)("img",{src:"https://i.scdn.co/image/".concat(c.image.key),className:"TrackInfo__image",alt:"art"}),r&&Object(d.jsx)("div",{className:"TrackInfo__pause-overlay",children:Object(d.jsx)(j.a,{className:"TrackInfo__pause-icon"})})]}),Object(d.jsxs)("div",{className:"TrackInfo__infos",children:[Object(d.jsx)(b,{progress:c.trackTime/(c.track.duration/100),color:u}),Object(d.jsxs)("div",{className:"TrackInfo__infos-text",children:[Object(d.jsx)("h2",{className:"TrackInfo__infos-track",children:c.track.name}),Object(d.jsx)("h3",{className:"TrackInfo__infos-artist",children:c.track.artist.map((function(e){return e.name})).join(", ")})]})]})]})},T=c(67),S=function e(t){fetch(x).then((function(){t>1&&e(t-1)}))},C=function(e,t){return Object(d.jsxs)("div",{onClick:function(){S(t+1)},style:{backgroundColor:e.color},className:"NextSongs__card",children:[Object(d.jsx)("img",{src:"https://i.scdn.co/image/".concat(e.image.key),className:"NextSongs__card-art",alt:"art"}),Object(d.jsxs)("div",{className:"NextSongs__card-text",children:[Object(d.jsx)("h2",{className:"NextSongs__infos-track",children:e.track.name}),Object(d.jsx)("h3",{className:"NextSongs__infos-artist",children:e.track.artist.map((function(e){return e.name})).join(", ")})]})]},e.track.name)},w=function(e){var t,c,a=e.player,r=a.nextTracks.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{color:""})})),s=Object(n.useState)(),o=Object(i.a)(s,2),l=o[0],u=o[1],j=Object(n.useState)(),b=Object(i.a)(j,2),f=b[0],m=b[1],O=null===(t=a.nextTracks[0])||void 0===t?void 0:t.image.key,h=null===(c=a.nextTracks[1])||void 0===c?void 0:c.image.key;return Object(n.useMemo)((function(){return O&&N("https://i.scdn.co/image/".concat(O))}),[O]).then((function(e){return u(e)})),Object(n.useMemo)((function(){return h&&N("https://i.scdn.co/image/".concat(h))}),[h]).then((function(e){return m(e)})),r.length>0&&(r[0].color=l,r.length>1&&(r[1].color=f)),Object(d.jsxs)("div",{className:"NextSongs",children:[Object(d.jsx)("h2",{className:"NextSongs__next",children:"Next:"}),Object(d.jsx)("div",{className:"NextSongs__cards",children:r.map((function(e,t){return C(e,t)}))})]})},I=c(263),V=c(280),M=c(109),R=c.n(M),B=c(110),z=c.n(B),E=c(111),L=c.n(E),P=c(112),F=c.n(P),D=function(e){var t=function(e){var t=Math.floor(655.36);fetch("".concat(g).concat(e*t))};return Object(d.jsx)("div",{className:"VolumeControl",children:Object(d.jsxs)(V.a,{size:"large",variant:"contained",fullWidth:!0,color:"primary","aria-label":"outlined primary button group",children:[Object(d.jsx)(I.a,{onClick:function(){t(0)},size:"large",style:{borderTopLeftRadius:"1rem",borderBottomLeftRadius:"1rem"},children:Object(d.jsx)(R.a,{})}),Object(d.jsx)(I.a,{onClick:function(){t(8)},size:"large",children:Object(d.jsx)(z.a,{})}),Object(d.jsx)(I.a,{onClick:function(){t(15)},size:"large",children:Object(d.jsx)(L.a,{})}),Object(d.jsx)(I.a,{onClick:function(){t(66)},size:"large",style:{borderTopRightRadius:"1rem",borderBottomRightRadius:"1rem"},children:Object(d.jsx)(F.a,{})})]})})},J=function(e){var t=e.player;return Object(d.jsxs)("div",{className:"MainView",children:[Object(d.jsx)("div",{className:"MainView__tack",children:Object(d.jsx)(y,{player:t})}),Object(d.jsx)("div",{className:"MainView__next",children:t.nextTracks&&Object(d.jsx)(w,{player:t})}),Object(d.jsx)("div",{className:"MainView__volume",children:Object(d.jsx)(D,{})})]})},A=c.p+"static/media/spotify.7ef0c8a2.png",H=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1];return console.log(A),Object(n.useEffect)((function(){var e=setInterval((function(){var e=new Date;a(e.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}))}),1e3);return function(){return clearInterval(e)}}),[]),Object(d.jsxs)("div",{className:"NoConnectionView",children:[Object(d.jsx)("h1",{className:"NoConnectionView__time",children:c}),Object(d.jsxs)("p",{className:"NoConnectionView__text",children:["Verbinde dich \xfcber Spotify ",Object(d.jsx)("img",{className:"NoConnectionView__logo",src:A,alt:"logo"})]})]})};var W=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),s=Object(i.a)(r,2),u=s[0],j=s[1],b=Object(n.useState)(0),f=Object(i.a)(b,2),O=f[0],h=f[1];Object(n.useEffect)((function(){var e=setInterval((function(){fetch(m).then((function(e){return e.json()})).then((function(e){a(e)}))}),1e3);return function(){return clearInterval(e)}})),Object(n.useEffect)((function(){c&&c.trackTime!==u?(j(c.trackTime),h(0)):h(O+1)}),[c]);var x=Object(o.a)({palette:{primary:{main:"#fff"},secondary:{main:"#666"}}});return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(l.a,{theme:x,children:!c||O>3600?Object(d.jsx)(H,{}):Object(d.jsx)(J,{player:c})})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,282)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(W,{})}),document.getElementById("root")),q()}},[[261,1,2]]]);
//# sourceMappingURL=main.cb972741.chunk.js.map