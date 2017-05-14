"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),Form=function(){function t(e,n,a,o){_classCallCheck(this,t),this.callSelector=document.querySelectorAll(e),this.formContainer=document.querySelector(n),this.formClose=document.querySelector(a),this.durationAnimation=o}return _createClass(t,[{key:"log",value:function t(e,n){console.log(this.formContainer)}},{key:"click",value:function t(e,n,a){for(var o=this,i=0;i<this.callSelector.length;i++)this.callSelector[i].addEventListener("click",function(t){t.preventDefault(),o.formContainer.style.display="flex",setTimeout(function(){anime({targets:o.formContainer,opacity:1}),anime({targets:".formjs__content",opacity:1,translateY:[100,0],delay:100,duration:o.durationAnimation}),anime({targets:".formjs__content--header",opacity:[0,"1"],translateY:[50,0],duration:o.durationAnimation,delay:200}),anime({targets:".formjs__input",opacity:[0,"1"],translateY:[50,0],duration:o.durationAnimation,delay:function t(e,n){return 250*n+300}}),anime({targets:".formjs__footer--send",opacity:[0,"1"],translateY:[50,0],duration:o.durationAnimation,delay:700})},250)})}},{key:"close",value:function t(e,n){var a=this;this.formClose.addEventListener("click",function(){anime({targets:".formjs__content",opacity:0,translateY:[0,100],delay:250,duration:2e3}),setTimeout(function(){a.formContainer.style.display="none"},1e3)})}}]),t}(),Libs=function(){function t(e,n){_classCallCheck(this,t),this.link=e,this.appendAfter=n}return _createClass(t,[{key:"init",value:function t(e,n){var a=document.createElement("script");a.src=e,document.querySelector(n).appendChild(a)}}]),t}(),test=new Form(".formjs__call",".formjs",".formjs__close-area",2e3);test.click(),test.close();var animeJs=new Libs;animeJs.init("https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js","body");