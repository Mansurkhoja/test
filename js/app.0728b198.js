(function(e){function t(t){for(var r,i,s=t[0],o=t[1],a=t[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/test/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var l=o;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4d8e":function(e,t,n){},5459:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"progress"},u={key:1,class:"completed"};function i(e,t,n,i,s,o){var a=Object(r["j"])("Quiz");return Object(r["h"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",c,[Object(r["f"])("div",{class:"progressed",style:Object(r["g"])(o.progressed)},null,4)]),s.currentQuiz<10?(Object(r["h"])(),Object(r["c"])(a,{key:0,quizData:s.data[s.currentQuiz],quizAnswer:s.quizAnswer,onSelectAnswer:o.selectAnswer},null,8,["quizData","quizAnswer","onSelectAnswer"])):(Object(r["h"])(),Object(r["e"])("div",u," Правильно "+Object(r["k"])(s.corectSelected)+" из 10 ",1))],64)}var s=n("2909"),o=(n("d3b7"),n("2ef0")),a=n.n(o),l={key:0,class:"quiz"},f={class:"quiz__inner"},d={key:0,class:"quiz__items"},p=["innerHTML"],h={class:"quiz__answers"},b=["onClick","innerHTML"];function O(e,t,n,c,u,i){return n.quizData?(Object(r["h"])(),Object(r["e"])("div",l,[Object(r["f"])("div",f,[n.quizData?(Object(r["h"])(),Object(r["e"])("div",d,[Object(r["f"])("div",{class:"quiz__name",innerHTML:n.quizData.question},null,8,p),Object(r["f"])("div",h,[(Object(r["h"])(!0),Object(r["e"])(r["a"],null,Object(r["i"])(n.quizAnswer,(function(t,n){return Object(r["h"])(),Object(r["e"])("div",{class:"quiz__answer",key:n,onClick:function(t){return e.$emit("selectAnswer",n)},innerHTML:t},null,8,b)})),128))])])):Object(r["d"])("",!0)])])):Object(r["d"])("",!0)}var j={name:"Quiz",props:{quizData:{type:Object},quizAnswer:null},emits:["selectAnswer"]};n("9a09");j.render=O;var w=j,v={name:"App",components:{Quiz:w},data:function(){return{data:[],currentQuiz:0,correctAnswer:"",quizAnswer:[],corectSelected:0}},mounted:function(){var e=this;fetch("https://opentdb.com/api.php?amount=10&type=multiple",{method:"get"}).then((function(e){return e.json()})).then((function(t){e.data=t.results,e.shuffleAnswers()}))},computed:{answers:function(){var e=Object(s["a"])(this.data[this.currentQuiz].incorrect_answers);return e.push(this.data[this.currentQuiz].correct_answer),e},progressed:function(){return"width:".concat(10*this.currentQuiz,"%;")}},methods:{shuffleAnswers:function(){this.currentQuiz<10&&(this.quizAnswer=a.a.shuffle(this.answers),this.correctAnswer=this.quizAnswer.indexOf(this.data[this.currentQuiz].correct_answer))},selectAnswer:function(e){e===this.correctAnswer&&(this.corectSelected+=1),this.currentQuiz+=1,this.shuffleAnswers()}}};n("d04b");v.render=i;var z=v;Object(r["b"])(z).mount("#app")},"9a09":function(e,t,n){"use strict";n("5459")},d04b:function(e,t,n){"use strict";n("4d8e")}});
//# sourceMappingURL=app.0728b198.js.map