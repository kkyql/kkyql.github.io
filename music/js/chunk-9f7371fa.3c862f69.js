(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f7371fa"],{2436:function(t,a,i){"use strict";i("4e7b")},"269d":function(t,a,i){},"29af":function(t,a,i){"use strict";i.r(a);var r=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"BroadCastDetail"},[i("Back",[t._v("电台")]),t.info?i("div",{staticClass:"cover"},[i("div",{staticClass:"mask"},[i("img",{attrs:{src:t.info.picUrl,alt:""}}),i("span",{staticClass:"name"},[t._v(t._s(t.info.name))]),i("span",{staticClass:"sub"},[t._v(t._s(t._f("FormatSubCount")(t.info.subCount))+"人已订阅")]),i("span",{staticClass:"subscribe"},[t._v("订阅")]),i("svg",{staticClass:"icon",attrs:{t:"1612513256110",viewBox:"0 0 1057 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2367",width:"20",height:"20"}},[i("path",{attrs:{d:"M810.677677 1023.735742c-11.726452 0-23.25471-2.906839-33.626838-8.456258L528.516129 883.117419l-248.567742 132.129033a71.646968 71.646968 0 0 1-97.28-30.554839c-7.366194-14.203871-9.909677-30.455742-7.234064-46.245161l47.434322-280.212646-201.100387-197.962322a73.496774 73.496774 0 0 1-1.222193-103.12671 71.812129 71.812129 0 0 1 41.158193-21.206709l278.032516-40.794839 124.168258-254.546581A71.448774 71.448774 0 0 1 528.284903 0a71.580903 71.580903 0 0 1 64.412903 40.596645l124.300388 254.744774 277.900387 40.794839c39.440516 5.549419 66.923355 42.413419 61.44 82.283355-2.213161 15.855484-9.51329 30.587871-20.810323 41.851871l-201.067355 198.193548 47.500387 280.245678c6.672516 39.770839-19.786323 77.493677-59.127742 84.232258-3.864774 0.693677-7.795613 1.024-11.759483 1.057032l-0.396388-0.264258zM83.406452 412.044387l195.418838 192.677161c16.978581 16.747355 24.708129 40.893935 20.678194 64.512L253.357419 941.089032l241.630968-128.462451a71.118452 71.118452 0 0 1 67.055484 0l241.564903 128.462451-46.146064-272.086709a73.496774 73.496774 0 0 1 20.678193-64.512l195.484903-192.412904-270.071741-39.704774a72.175484 72.175484 0 0 1-54.272-39.869935L528.516129 84.859871l-120.798968 247.609806a72.109419 72.109419 0 0 1-54.272 39.869936l-270.005677 39.704774z",fill:"#ffffff","p-id":"2368"}})])])]):t._e(),t.program&&t.info?i("div",{staticClass:"nav"},[i("div",{staticClass:"title"},[i("span",[t._v("节目")]),i("span",[t._v(t._s(t.program.length))])]),i("div",{staticClass:"author"},[i("span",[t._v("主播")]),i("img",{attrs:{src:t.info.dj.avatarUrl,alt:""}}),i("span",[t._v(t._s(t.info.dj.nickname))])])]):t._e(),t.program?i("div",{staticClass:"content"},[i("div",{staticClass:"head"},[i("span",[t._v(t._s(t.program.length)+"期")]),i("div",{staticClass:"sort",on:{click:t.Reserve}},[i("span",{class:{icon:!0,reverse:t.reverseFlag}},[t._v("⬆")]),i("span",{staticClass:"text"},[t._v("排序")])])]),i("ul",{staticClass:"body"},t._l(t.program,(function(a,r){return i("ProgramItem",{key:a.id,attrs:{item:a,index:t.reverseFlag?t.program.length-r:r+1},nativeOn:{click:function(a){t.$store.state.play.currentList=t.program}}})})),1)]):t._e()],1)},s=[],e=(i("b680"),i("66b7")),n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("li",{staticClass:"ProgramItem",on:{click:function(a){return t.play(t.item.mainSong.id)}}},[i("div",{staticClass:"order"},[i("span",[t._v(t._s(t.index))])]),i("div",{staticClass:"program_info"},[i("p",{staticClass:"program_name"},[t._v(t._s(t.item.name))]),i("p",{staticClass:"program_data"},[i("span",[t._v(t._s(t._f("FormatTime")(t.item.createTime)))]),i("span",[i("i",{staticClass:"icon"}),t._v(t._s(t._f("FormatCount")(t.item.listenerCount)))]),i("span",[i("i",{staticClass:"icon"}),t._v(t._s(t._f("FormatDuration")(t.item.duration)))])]),i("span",{staticClass:"play_icon"})])])},o=[],l=(i("4de4"),i("d81d"),i("b0c0"),i("a9e3"),i("d3b7"),i("ac1f"),i("25f0"),i("466d"),i("4d90"),i("5319"),i("1276"),{props:["item","index"],filters:{FormatTime:function(t){var a=new Date(t),i=a.getFullYear(),r=(a.getMonth()+1).toString().padStart(2,0),s=a.getDate().toString().padStart(2,0);return i+"-"+r+"-"+s},FormatCount:function(t){return t<Math.pow(10,4)?t:(t/Math.pow(10,4)).toString().split(".")[0]+"万"},FormatDuration:function(t){var a=(t/1e3/60).toString().split(".")[0],i=(t/1e3%60).toString().split(".")[0];return a>=1?a.padStart(2,0)+":"+i.padStart(2,0):"00:"+i.padStart(2,0)}},data:function(){return{lyricStr:null}},methods:{play:function(t){var a=this;this.$store.state.play.currentMusic={id:t,al:{name:this.item.name,picUrl:this.item.dj.avatarUrl},name:this.item.name},this.axios.get("/lyric?id="+t).then((function(t){if(t.data.lrc){a.lyricStr=t.data.lrc.lyric;var i=/\[\d{2}:\d{2}\.\d{2,3}\]/gi;a.lyricStr=a.lyricStr.split("\n").filter((function(t){return t})).map((function(t){var a=t.match(i)[0].replace(/(\[|\])/gi,""),r=a.split(":");a=60*Number(r[0])+Number(r[1]);var s=t.replace(i,"");return{time:a,text:s}})),a.$store.state.play.lyric=a.lyricStr}else a.$store.state.play.lyric=[{text:"暂无歌词"}]}))}}}),c=l,u=(i("738c"),i("2877")),p=Object(u["a"])(c,n,o,!1,null,null,null),d=p.exports,m={components:{Back:e["a"],ProgramItem:d},data:function(){return{program:null,info:null,reverseFlag:!0}},methods:{Reserve:function(){this.reverseFlag=!this.reverseFlag,this.program=this.program.reverse()}},created:function(){var t=this;this.axios.get("/dj/program?limit=40&rid="+this.$route.query.id).then((function(a){t.program=a.data.programs})),this.axios.get("/dj/detail?rid="+this.$route.query.id).then((function(a){t.info=a.data.djRadio}))},filters:{FormatSubCount:function(t){return t<Math.pow(10,4)?t:(t/Math.pow(10,4)).toFixed(1)+"万"}}},f=m,v=(i("2436"),Object(u["a"])(f,r,s,!1,null,null,null));a["default"]=v.exports},"4e7b":function(t,a,i){},"738c":function(t,a,i){"use strict";i("269d")}}]);
//# sourceMappingURL=chunk-9f7371fa.3c862f69.js.map