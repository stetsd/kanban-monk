webpackJsonp([1],{"+O1/":function(t,s,e){"use strict";var i=e("xLOx"),a=e("A56l"),o=e("DPSm");s.a={components:{Menu:i.a,TaskList:a.a,TaskAdder:o.a},data:function(){return{done:this.$store.getters["tasks/getTasksDone"]}}}},"+kwO":function(t,s,e){"use strict";var i=e("U0d8"),a=e("r7h0"),o=!1;var n=function(t){o||e("9z59")},l=e("VU/8")(i.a,a.a,!1,n,null,null);l.options.__file="frontend\\components\\Task.vue",s.a=l.exports},"1D9E":function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,".menu{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:55px 0 0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 32px}.menu__link{font-size:18px;color:#3f3f3f;margin:0 32px 0 0}.menu__link:last-child{margin:0}.menu__link.active{font-size:36px}.menu__info-item{color:#999;font-size:18px}",""])},"1ssL":function(t,s,e){var i=e("hVM/");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("81713d40",i,!1,{sourceMap:!1})},"7knJ":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"taskAdderWrapper",class:["task-adder__wrapper",t.isActive?"active":""],on:{keyup:function(s){return"button"in s||!t._k(s.keyCode,"esc",27,s.key,"Escape")?t.closePanel(s):null}}},[e("input",{ref:"taskAdderPlug",staticClass:"task-adder__btn-plug",attrs:{type:"text",placeholder:"Add new task here..."},on:{click:t.openPanel}}),e("div",{ref:"taskAdder",staticClass:"task-adder"},[e("div",{staticClass:"task-adder__inner"},[e("div",{staticClass:"task-adder__edit-panel"},[e("Btn",{attrs:{text:"close",cls:"btn_minimal task-adder__btn-close"},on:{act:t.closePanel}}),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.taskTitle,expression:"taskTitle"}],ref:"taskAdderInput",staticClass:"task-adder__input",attrs:{placeholder:"Add new task here..."},domProps:{value:t.taskTitle},on:{input:[function(s){s.target.composing||(t.taskTitle=s.target.value)},t.checkTaskTitle]}}),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.taskDescription,expression:"taskDescription"}],ref:"taskAdderInputDesc",staticClass:"task-adder__input-desc",attrs:{placeholder:"Add description for the task here..."},domProps:{value:t.taskDescription},on:{input:function(s){s.target.composing||(t.taskDescription=s.target.value)}}}),e("Btn",{ref:"taskAdderBtnAdd",attrs:{text:"Add Task",cls:"btn_act task-adder__btn-add"},on:{act:t.taskAdd}})],1)])])])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};s.a=a},"9z59":function(t,s,e){var i=e("PUZ/");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("4839919f",i,!1,{sourceMap:!1})},A56l:function(t,s,e){"use strict";var i=e("vkr4"),a=e("WIDI"),o=!1;var n=function(t){o||e("xAHU")},l=e("VU/8")(i.a,a.a,!1,n,null,null);l.options.__file="frontend\\components\\TaskList.vue",s.a=l.exports},"C+QD":function(t,s,e){var i=e("JOIt");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("7ec5b7c2",i,!1,{sourceMap:!1})},DPSm:function(t,s,e){"use strict";var i=e("Wiw2"),a=e("7knJ"),o=!1;var n=function(t){o||e("ssmw")},l=e("VU/8")(i.a,a.a,!1,n,null,null);l.options.__file="frontend\\components\\TaskAdder.vue",s.a=l.exports},FUjG:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:["menu"]},[e("div",{staticClass:"menu__links"},[e("nuxt-link",{class:["menu__link","task"===t.activeMenuItem?"active":""],attrs:{to:"/task"}},[t._v("Tasks")]),t.hasDone?e("nuxt-link",{class:["menu__link","done"===t.activeMenuItem?"active":""],attrs:{to:"/done"}},[t._v("Done")]):t._e()],1),e("div",{staticClass:"menu__info"},["task"==t.activeMenuItem?e("div",{staticClass:"menu__info-item"},[t._v("Status")]):"done"==t.activeMenuItem?e("div",{staticClass:"menu__info-item"},[t._v("Efficiency")]):t._e()])])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};s.a=a},JOIt:function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},"Npv/":function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,".task-list{margin:11px 0 0}",""])},OL27:function(t,s,e){var i=e("1D9E");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("279d01cd",i,!1,{sourceMap:!1})},PHco:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("+O1/"),a=e("tQ9C"),o=!1;var n=function(t){o||e("C+QD")},l=e("VU/8")(i.a,a.a,!1,n,null,null);l.options.__file="frontend\\pages\\done\\index.vue",s.default=l.exports},"PUZ/":function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.task-list__item{position:relative;width:100%;height:80px;overflow:hidden}.task-list__essence,.task-list__item-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.task-list__essence{padding:0 32px;width:100%;height:80px;position:relative;z-index:1;background-color:#fff;border-bottom:1px solid #eee;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;-ms-transition:all .2s ease-out;-o-transition:all .2s ease-out}.task-list__item:first-child .task-list__essence{border-top:1px solid #eee}.task-list__item.swiped .task-list__essence{width:55%}.task-list__title{color:#3f3f3f;font-size:18px}.task-list__item.swiped .task-list__title{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.task-list__status{font-size:14px;color:#999;display:block;margin:0}.task-list__item.swiped .task-list__status{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.task-list__action{color:#777;font-size:18px}.task-list__item.swiped .task-list__action{display:none}.task-list__tool-wrapper{width:100%;position:absolute;left:0;right:0;top:0;bottom:0}.task-list__tool{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:45%;height:80px;position:absolute;right:0;background:linear-gradient(35.88deg,#00c9ff -22.31%,#92fe9d 230.07%);-webkit-box-shadow:0 3px 7px rgba(0,201,255,.21);box-shadow:0 3px 7px rgba(0,201,255,.21)}.task-list__tool,.task-list__tool-inner{display:-webkit-box;display:-ms-flexbox;display:flex}.task-list__tool-inner{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.task-list__tool-stat{color:#fff;position:relative}.new .task-list__tool-stat:first-child{line-height:15px;font-size:18px;width:35px;top:3px;margin:0 20px 0 0}.running .task-list__tool-stat:first-child{font-size:36px;font-family:Roboto Condensed;top:3px;margin:0 20px 0 0}.stopped .task-list__tool-stat:first-child{line-height:15px;font-size:18px;width:55px;top:2px;margin:0 15px 0 0}.done .task-list__tool-stat:first-child{line-height:15px;font-size:18px;width:55px;top:2px;margin:0 15px 0 1px}.done .task-list__tool-stat:first-child::after{content:"";display:block;background-color:#fff;width:1px;height:32px;position:absolute;right:-5px;top:-2px}.new .task-list__tool-stat:nth-child(2){font-size:36px;font-family:Roboto Condensed;top:3px}.running .task-list__tool-stat:nth-child(2){line-height:15px;font-size:18px;width:35px;top:3px}.stopped .task-list__tool-stat:nth-child(2){font-size:36px;font-family:Roboto Condensed;top:3px}.done .task-list__tool-stat:nth-child(2){line-height:15px;font-size:18px;width:55px;top:2px;margin:0 -6px 0 6px}.task-list__tool-done,.task-list__tool-new,.task-list__tool-running,.task-list__tool-stopped{display:none}.task-list__item.done .task-list__tool-done,.task-list__item.new .task-list__tool-new,.task-list__item.running .task-list__tool-running,.task-list__item.stopped .task-list__tool-stopped{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}',""])},QYsW:function(t,s,e){"use strict";var i=e("jrs3"),a=e("yNnP"),o=!1;var n=function(t){o||e("1ssL")},l=e("VU/8")(i.a,a.a,!1,n,null,null);l.options.__file="frontend\\components\\Btn.vue",s.a=l.exports},Tlg9:function(t,s,e){"use strict";s.a={data:function(){return{timer:this.$store.getters["timerGlobal/get"],activeMenuItem:this.$route.name,hasDone:!!this.$store.getters["tasks/getTasksDone"].length}}}},U0d8:function(t,s,e){"use strict";(function(t){s.a={props:["title","action","id","description","state","time","monks"],data:function(){return{taskToolActive:"task"===this.$route.name}},methods:{taskStart:function(t){t.stopPropagation(),console.log("check")},taskStop:function(t){t.stopPropagation(),console.log("check")},taskRestart:function(t){t.stopPropagation(),console.log("check")},taskStartAgain:function(t){t.stopPropagation(),console.log("check")}},mounted:function(){var s=this,e=new t(this.$refs.task);this.taskToolActive&&(e.on("swipeleft",function(t){for(var s=document.querySelectorAll(".task-list__item"),e=0;e<s.length;e++)s[e].classList.remove("swiped");t.target.closest(".task-list__item").classList.add("swiped")}),e.on("swiperight",function(t){t.target.closest(".task-list__item").classList.remove("swiped")})),this.$refs.task.addEventListener("click",function(t){s.$store.commit("tasks/chActiveTask",s.$attrs.task),s.$router.push(s.$route.path+"/"+s.id)},!1)}}}).call(s,e("rxKx"))},WIDI:function(t,s,e){"use strict";var i=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"task-list"},this._l(this.tasks,function(t,e){return s("Task",{key:e,attrs:{task:t,title:t.title,action:t.state,id:t.id,description:t.description,state:t.state,time:t.time,monks:t.monks}})}))};i._withStripped=!0;var a={render:i,staticRenderFns:[]};s.a=a},Wiw2:function(t,s,e){"use strict";(function(t,i){var a=e("QYsW");s.a={components:{Btn:a.a},data:function(){return{isActive:!1,taskTitle:"",taskDescription:""}},mounted:function(){var s=this,e=new t(this.$refs.taskAdder),a=!0;e.on("press",function(t){a=!1}),e.on("panend",function(t){if(!a){a=!0;var e="panleft"===t.additionalEvent?"-100%":"100%";s.$refs.taskAdder.style.left=e,s.$refs.taskAdderBtnAdd.$el.classList.remove("active"),setTimeout(function(){s.closePanel(),s.$refs.taskAdder.style.left=0},400)}}),i(this.$refs.taskAdderInput),i(this.$refs.taskAdderInputDesc)},methods:{openPanel:function(){var t=this;this.isActive=!0,this.$refs.taskAdderPlug.blur(),setTimeout(function(){t.$refs.taskAdderInput.focus()},200)},closePanel:function(){this.isActive=!1,this.$refs.taskAdderPlug.blur(),this.clearTaskText(),this.hideAddTools()},checkTaskTitle:function(){this.$refs.taskAdderInput.value.length?this.showAddTools():this.hideAddTools()},showAddTools:function(){this.$refs.taskAdderBtnAdd.$el.classList.add("active"),this.$refs.taskAdderInputDesc.classList.add("active")},hideAddTools:function(){this.$refs.taskAdderBtnAdd.$el.classList.remove("active"),this.$refs.taskAdderInputDesc.classList.remove("active")},clearTaskText:function(){this.taskTitle="",this.taskDescription=""},taskAdd:function(){var t=this.taskTitle,s=this.taskDescription;t&&t.length&&this.$emit("taskAdd",{title:t,description:s}),this.closePanel()}}}}).call(s,e("rxKx"),e("JnrT"))},"hVM/":function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,".btn{cursor:pointer;font-family:Roboto Condensed,sans-serif;font-style:normal;font-weight:400;line-height:normal;font-size:24px;color:#00c9ff;border-radius:30px;padding:16px 31px;background:#fff;font-weight:300}.btn.btn_act{background:linear-gradient(33.61deg,#00c9ff -25.81%,#92fe9d 237.92%);-webkit-box-shadow:0 3px 7px rgba(0,201,255,.21);box-shadow:0 3px 7px rgba(0,201,255,.21);color:#fff;font-weight:400;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-ms-transition:all .3s ease-out;-o-transition:all .3s ease-out}.btn.btn_act:hover{background:linear-gradient(33.61deg,#00c9ff,#92fe9d 237.92%);-webkit-box-shadow:0 0 0 rgba(0,201,255,.21);box-shadow:0 0 0 rgba(0,201,255,.21)}.btn.btn_std{background-color:#fff;-webkit-box-shadow:0 3px 7px rgba(0,201,255,.21);box-shadow:0 3px 7px rgba(0,201,255,.21);padding:17px 27px}.btn.btn_minimal{color:#1f1f1f}",""])},jX9O:function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,".task-adder{width:100%;height:0;position:fixed;bottom:0;left:0;right:0;background-color:#fff;padding:28px 0 0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;-ms-transition:all .2s ease-out;-o-transition:all .2s ease-out;-webkit-box-shadow:0 -4px 13px rgba(0,0,0,.04);box-shadow:0 -4px 13px rgba(0,0,0,.04)}.task-adder__wrapper.active .task-adder{padding:0;bottom:inherit;top:122px;height:100%;z-index:1}.task-adder__btn-plug{border:none;font-size:18px;font-weight:300;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:0 36px;font-family:Roboto;resize:none;background-color:#fff;bottom:0;position:fixed;z-index:2;padding:32px 36px;-webkit-box-shadow:0 -4px 13px rgba(0,0,0,.04);box-shadow:0 -4px 13px rgba(0,0,0,.04);-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;-ms-transition:all .2s ease-out;-o-transition:all .2s ease-out}.task-adder__btn-plug::-webkit-input-placeholder{color:#999}.task-adder__btn-plug:-ms-input-placeholder,.task-adder__btn-plug::-ms-input-placeholder{color:#999}.task-adder__btn-plug::placeholder{color:#999}.task-adder__wrapper.active .task-adder__btn-plug{bottom:-100px}.task-adder__edit-panel{display:none}.task-adder__wrapper.active .task-adder__edit-panel{display:block}.task-adder__input{border:none;font-size:18px;font-weight:300;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:0 36px;font-family:Roboto;resize:none;color:#3f3f3f;font-size:36px;height:43px}.task-adder__input::-webkit-input-placeholder{color:#999}.task-adder__input:-ms-input-placeholder,.task-adder__input::-ms-input-placeholder{color:#999}.task-adder__input::placeholder{color:#999}.task-adder__btn-close.btn.btn_minimal{font-size:18px;color:#999;display:inline-block;margin:0 0 0 6px;display:none}.task-adder__wrapper.active .task-adder__btn-close.btn.btn_minimal{display:inline-block}.task-adder__input-desc{border:none;font-size:18px;font-weight:300;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:0 36px;font-family:Roboto;resize:none;margin:31px 0 0;height:22px;visibility:hidden;-webkit-opacity:0;-moz-opacity:0;opacity:0}.task-adder__input-desc::-webkit-input-placeholder{color:#999}.task-adder__input-desc:-ms-input-placeholder,.task-adder__input-desc::-ms-input-placeholder{color:#999}.task-adder__input-desc::placeholder{color:#999}.task-adder__input-desc.active{visibility:visible;-webkit-opacity:1;-moz-opacity:1;opacity:1}.task-adder__btn-add{position:fixed;right:39px;bottom:43px;-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;-ms-transition:all .2s ease-out;-o-transition:all .2s ease-out;visibility:hidden;-webkit-opacity:0;-moz-opacity:0;opacity:0}.task-adder__btn-add.active{visibility:visible;-webkit-opacity:1;-moz-opacity:1;opacity:1}",""])},jrs3:function(t,s,e){"use strict";s.a={props:["cls","text"]}},r7h0:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"task",class:["task-list__item",t.state]},[e("div",{staticClass:"task-list__item-inner"},[e("div",{staticClass:"task-list__essence"},[e("div",{staticClass:"task-list__title"},[t._v("\n\t\t\t\t"+t._s(t.title)),e("br"),"done"!==t.state?e("span",{staticClass:"task-list__status"},[t._v(t._s(t.monks))]):e("span",{staticClass:"task-list__status"},[t._v("completed, "+t._s(t.time.done))])]),e("div",{staticClass:"task-list__action"},[t._v(t._s(t.action))])]),t.taskToolActive?e("div",{staticClass:"task-list__tool-wrapper"},[e("div",{staticClass:"task-list__tool"},[e("div",{staticClass:"task-list__tool-inner"},["new"===t.state?e("div",{staticClass:"task-list__tool-new"},[e("div",{staticClass:"task-list__tool-stat",on:{click:t.taskStart}},[t._v("\n\t\t\t\t\t\t\tstart task\n\t\t\t\t\t\t")]),e("div",{staticClass:"task-list__tool-stat"},[t._v("\n\t\t\t\t\t\t\t25:00\n\t\t\t\t\t\t")])]):t._e(),"running"===t.state?e("div",{staticClass:"task-list__tool-running"},[e("div",{staticClass:"task-list__tool-stat"},[t._v("\n\t\t\t\t\t\t\t25:00\n\t\t\t\t\t\t")]),e("div",{staticClass:"task-list__tool-stat",on:{click:t.taskStop}},[t._v("\n\t\t\t\t\t\t\tstop task\n\t\t\t\t\t\t")])]):t._e(),"stopped"===t.state?e("div",{staticClass:"task-list__tool-stopped"},[e("div",{staticClass:"task-list__tool-stat",on:{click:t.taskRestart}},[t._v("\n\t\t\t\t\t\t\trestart task\n\t\t\t\t\t\t")]),e("div",{staticClass:"task-list__tool-stat"},[t._v("\n\t\t\t\t\t\t\t25:00\n\t\t\t\t\t\t")])]):t._e(),"done"===t.state?e("div",{staticClass:"task-list__tool-done"},[e("div",{staticClass:"task-list__tool-stat",on:{click:t.taskStartAgain}},[t._v("\n\t\t\t\t\t\t\tstart again\n\t\t\t\t\t\t")]),e("div",{staticClass:"task-list__tool-stat"},[t._v("\n\t\t\t\t\t\t\ttask done\n\t\t\t\t\t\t")])]):t._e()])])]):t._e()])])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};s.a=a},ssmw:function(t,s,e){var i=e("jX9O");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("7086347e",i,!1,{sourceMap:!1})},tQ9C:function(t,s,e){"use strict";var i=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{},[s("Menu"),s("TaskList",{attrs:{tasks:this.done}})],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};s.a=a},vkr4:function(t,s,e){"use strict";var i=e("+kwO");s.a={props:["tasks"],components:{Task:i.a}}},xAHU:function(t,s,e){var i=e("Npv/");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("327f1d03",i,!1,{sourceMap:!1})},xLOx:function(t,s,e){"use strict";var i=e("Tlg9"),a=e("FUjG"),o=!1;var n=function(t){o||e("OL27")},l=e("VU/8")(i.a,a.a,!1,n,null,null);l.options.__file="frontend\\components\\Menu.vue",s.a=l.exports},yNnP:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.text?e("div",{class:["btn",t.cls?t.cls:""],on:{click:function(s){t.$emit("act")}}},[e("div",[t._v(t._s(t.text))])]):t._e()};i._withStripped=!0;var a={render:i,staticRenderFns:[]};s.a=a}});