(this.webpackJsonpena_log=this.webpackJsonpena_log||[]).push([[0],{15:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return g}));var a,r=n(8),s=n(23),c=n(18),i=n.n(c),l=n(33),u=n(17),o=n(46),m=n.n(o),d=n(44).DateTime,f=Object(u.b)("fetchKeys",Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://ctt.pfstr.de/json/filehashes.json");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),p=Object(u.b)("readENALog",function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new FileReader,e.abrupt("return",new Promise((function(e,a){n.onerror=function(){n.abort(),a(new DOMException("Error parsing input file."))},n.onload=function(){e(n.result)},n.readAsText(t)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(u.c)({name:"diagnosisKeys",initialState:{keys:{},status:"uninitialized",enastatus:"uninitialized",exposures:{}},reducers:{resetENA:function(e,t){e.exposures={},e.enastatus="uninitialized"}},extraReducers:(a={},Object(r.a)(a,f.pending,(function(e,t){e.status="loading"})),Object(r.a)(a,f.fulfilled,(function(e,t){e.status="loaded",e.keys=t.payload})),Object(r.a)(a,f.rejected,(function(e,t){e.status="error"})),Object(r.a)(a,p.pending,(function(e,t){e.enastatus="loading"})),Object(r.a)(a,p.fulfilled,(function(t,n){var a=JSON.parse(n.payload),r="DeviceProductType"in a,c=r?a.ExposureChecks:a,i={};c.map((function(n){if((r?n.MatchCount:n.matchesCount)>0){var a=r?n.Hash.toLowerCase():e.from(n.hash,"base64").toString("hex").toLowerCase();if(!(a in i)){var s=r?n.RandomIDCount:n.keyCount;i[a]={date:t.keys[a],keysInFileCount:s,matches:[]}}}})),c.map((function(t){var n=r?t.MatchCount:t.matchesCount,a=r?t.Hash.toLowerCase():e.from(t.hash,"base64").toString("hex").toLowerCase();if(n>0||a in i){var s=r?d.fromFormat(t.Timestamp,"yyyy-MM-dd HH:mm:ss ZZZ").toISO():d.fromFormat(t.timestamp,"dd. LLLL yyyy, HH:mm").toISO();i[a].matches.push({timestamp:s,count:n})}})),Object.entries(i).map((function(e){var n=Object(s.a)(e,2),a=n[0],r=n[1];r.matches=r.matches.sort((function(e,t){return e.timestamp>t.timestamp?1:-1})),t.exposures[a]=r})),t.enastatus="loaded"})),Object(r.a)(a,p.rejected,(function(e,t){e.enastatus="error"})),a)}),g=b.actions.resetENA;t.a=b.reducer}).call(this,n(60).Buffer)},26:function(e,t,n){},50:function(e,t,n){e.exports=n(86)},55:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(11),c=n.n(s),i=(n(55),n(8)),l=n(30),u=n(23),o=n(9),m=n(48),d=n(19),f=n(20),p=n(21),b=n(13),g=n(16),E=n(28),h=n(15),O=n(49),j=(n(26),n(44).DateTime),y=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.diagnosisKeys.status})),n=Object(o.c)((function(e){return e.diagnosisKeys.enastatus})),s=Object(o.c)((function(e){return e.diagnosisKeys.exposures})),c=Object(a.useCallback)((function(t){"uninitialized"===n&&1===t.length&&e(Object(h.c)(t[0]))}),[e,n]),i=Object(O.a)({onDrop:c}),l=i.getRootProps,u=i.getInputProps;Object(a.useEffect)((function(){e(Object(h.b)())}),[e]);var m=[];Object.keys(s).map((function(e){m.push([e,s[e].date])}));var d=m.sort((function(e,t){return e[1]>t[1]?1:-1}));return"loading"===t||"uninitialized"===t?r.a.createElement(b.a,{className:"mainRow"},r.a.createElement(g.a,null,r.a.createElement(p.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Lade Diagnoseschl\xfcssel...")))):"error"===t?r.a.createElement(b.a,{className:"mainRow"},r.a.createElement(g.a,null,r.a.createElement("p",null,"Beim Laden der Diagnoseschl\xfcsselinformationen ist ein Fehler aufgetreten."))):r.a.createElement(b.a,null,r.a.createElement(g.a,null,"uninitialized"===n&&r.a.createElement("div",l({className:"dropzone"}),r.a.createElement("input",u()),r.a.createElement("p",null,"Um Begegnungs\xfcberpr\xfcfungsdatei zu analysieren, klicken oder ziehen.")),"loading"===n&&r.a.createElement(p.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Lade Begegnungs\xfcberpr\xfcfungsdatei")),"error"===n&&r.a.createElement("p",null,"Beim Laden der Begegnungs\xfcberpr\xfcfungen ist ein Fehler aufgetreten."),"loaded"===n&&0===d.length&&r.a.createElement("p",null,"Bei Begegnungs\xfcberpr\xfcfungen wurden keine Treffer mit positiv getester Person gefunden."),"loaded"===n&&d.length>0&&d.map((function(e){var t=e[0],n=j.fromISO(e[1]).toLocaleString(j.DATE_MED_WITH_WEEKDAY);return r.a.createElement("div",null,r.a.createElement(b.a,{className:"mt-4"},r.a.createElement(g.a,null,"Schl\xfcsseldatei vom ",n," mit ",s[t].keysInFileCount," Schl\xfcsseln:")),r.a.createElement(E.a,{className:"mt-2",striped:!0,bordered:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("th",null,"Anzahl Treffer"),r.a.createElement("th",null,"\xdcberpr\xfcfungszeitpunkt")),r.a.createElement("tbody",null,s[t].matches.map((function(e){var t=j.fromISO(e.timestamp).toLocaleString(j.DATETIME_SHORT);return r.a.createElement("tr",null,r.a.createElement("td",null,e.count),r.a.createElement("td",null,t))})))))}))))},k=function(){return r.a.createElement(b.a,{className:"mainRow"},r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement("p",null,"Der Quelltext dieser Applikation findet sich auf ",r.a.createElement("a",{href:"https://github.com/felixlen/ena_log",target:"_blank"},"GitHub")," unter MIT-Lizenz."),r.a.createElement("p",null,"Herzlichen Dank an ",r.a.createElement("a",{href:"https://pfstr.de",target:"_blank"},"Jan Pfister")," f\xfcr das Bereitstellen der Datenschl\xfcsseldatei."),r.a.createElement("p",null,"(c) 2020 ",r.a.createElement("a",{href:"https://www.felixlenders.de",target:"_blank"},"Felix Lenders"),"."))))};n(82);var v=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.diagnosisKeys.enastatus})),n=Object(a.useState)({home:!0,info:!1}),s=Object(u.a)(n,2),c=s[0],p=s[1],b=function(e){p((function(t){return Object.entries(t).reduce((function(t,n){return Object(l.a)(Object(l.a)({},t),{},Object(i.a)({},n[0],n[0]===e))}),{})}))};return r.a.createElement(m.a,null,r.a.createElement(d.a,{bg:"light",expand:"lg"},r.a.createElement(d.a.Brand,null,"CWA Begegnungs\xfcberpr\xfcfungen"),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(f.a,{className:"mr-auto"},r.a.createElement(f.a.Link,{onClick:function(){return b("home")}},"Home"),r.a.createElement(f.a.Link,{onClick:function(){return b("info")}},"Information"),"uninitialized"!==t&&r.a.createElement(f.a.Link,{onClick:function(){return e(Object(h.d)())}},"Zur\xfccksetzen")))),c.home&&r.a.createElement(y,null),c.info&&r.a.createElement(k,null))},w=n(17),L=Object(w.a)({reducer:{diagnosisKeys:h.a}});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:L},r.a.createElement(v,null))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.ea2915d3.chunk.js.map