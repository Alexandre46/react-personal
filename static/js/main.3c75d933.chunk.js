(window["webpackJsonpreact-app"]=window["webpackJsonpreact-app"]||[]).push([[0],{201:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),r=a.n(c),o=a(9),s=a(10),i=a(12),m=a(11),u=a(13),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={date:new Date},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return l.a.createElement("div",{class:"clock my-auto"},l.a.createElement("h2",{class:"font-weight-bold"},this.state.date.toLocaleTimeString()))}}]),t}(l.a.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"font-weight-bolder my-auto py-2"},l.a.createElement("span",null," ALEXANDRE ",l.a.createElement("span",{role:"img","aria-label":"man"},"\ud83e\udd37\u200d\u2642\ufe0f ")))}}]),t}(n.Component),g=(a(57),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={checked:"dark"===localStorage.getItem("theme"),theme:localStorage.getItem("theme")},a.toggleThemeChange=function(){!1===a.state.checked?(localStorage.setItem("theme","dark"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme")),a.setState({checked:!0})):(localStorage.setItem("theme","light"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme")),a.setState({checked:!1}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme"))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{class:"float-right"},l.a.createElement("label",{class:"switch"},l.a.createElement("input",{type:"checkbox",defaultChecked:this.state.checked,onChange:function(){return e.toggleThemeChange()}}),l.a.createElement("span",{class:"slider round"})))}}]),t}(n.Component)),b=a(22),p=a(20),E=a(205),f=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement(E.a.Item,null,l.a.createElement("img",{className:"d-block w-100 custom-image",src:"https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",alt:"HTML"}),l.a.createElement(E.a.Caption,null,l.a.createElement("h3",null,"HTML"),l.a.createElement("p",null,"Hypertext Markup Language"))),l.a.createElement(E.a.Item,null,l.a.createElement("img",{className:"d-block w-100 custom-image",src:"https://www.wallpaperflare.com/static/900/618/451/syntax-highlighting-code-color-codes-css-wallpaper.jpg",alt:"CSS"}),l.a.createElement(E.a.Caption,null,l.a.createElement("h3",null,"CSS"),l.a.createElement("p",null,"Cascade Style sheets"))),l.a.createElement(E.a.Item,null,l.a.createElement("img",{className:"d-block w-100 custom-image",src:"https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",alt:"JS"}),l.a.createElement(E.a.Caption,null,l.a.createElement("h3",null,"JS"),l.a.createElement("p",null,"JavaScript"))))}}]),t}(n.Component),v=a(34),y=a(43),w=a(51),k={bounce:{animation:"x 0.1s",animationName:y.a.keyframes(v.bounce,"bounce")}},j=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(w.a,null,l.a.createElement("div",{className:"test my-4",style:k.bounce},"There's a lot of things i can talk but basically i am 29-year-old Portuguese coder who really enjoys this job. I've always be curious to discover new things on this field, start interaction with Computers since my 7-8 years old when my parents bought our first personal computer. On college i've decided to go to technical course instead of normal /common area, and go to university to Computer Science degree. Finished my CS @2014 and since 2016 i'm working on software development, i'm currently on second company since university. I've been working on VOD (video-on-demand) projects , internet banking & news projects"))}}]),t}(n.Component),O={bounce:{animation:"x 3s",animationName:y.a.keyframes(v.bounce,"bounce")}};function S(){return l.a.createElement(w.a,null,l.a.createElement("div",{class:"alert-alert-danger",style:O.bounce},l.a.createElement("h3",null,"Hi, My name is Alexandre Abreu and i'm a portuguese software developer",l.a.createElement("span",{role:"img","aria-label":"coder"},"\ud83d\udc68\ud83c\udffc\u200d\ud83d\udcbb\ud83d\udcbb \u200d")),l.a.createElement("div",{class:"col-12 font-italic font-weight-lighter"},"I am passionate about programming, I love learning new things, discuss new ideas with the people around me, learn new thing every day and trying my best to contribute to a better world for everyone.",l.a.createElement("h5",null," The first step is to establish that something is possible, then probably will occur."))))}var x=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"mt-3"},l.a.createElement("a",{href:"#",class:"list-group-item list-group-item-action"},l.a.createElement("div",{class:"d-flex w-100 justify-content-between"},l.a.createElement("h5",{class:"mb-1"},"CINFORME"),l.a.createElement("small",null,"Laravel / Vanilla JS / Bootstrap4")),l.a.createElement("p",{class:"mb-1"},"News platform, with an backoffice to insert news and also an news aggregator, using google translator API to store all content in two languages(english and portuguese)"),l.a.createElement("small",null,l.a.createElement("a",{class:"btn-secondary",href:"https://github.com/Alexandre46/CINFORME"},"https://github.com/Alexandre46/CINFORME"))),l.a.createElement("a",{href:"#",class:"list-group-item list-group-item-action"},l.a.createElement("div",{class:"d-flex w-100 justify-content-between"},l.a.createElement("h5",{class:"mb-1"},"Vue Weather SPA"),l.a.createElement("small",{class:"text-muted"},"VueJS / DarkSky API / Axios")),l.a.createElement("p",{class:"mb-1"},"Vue Weather Single Page Application to show city background image , weekly forecast for geolocation of user"),l.a.createElement("small",{class:"text-muted"},l.a.createElement("a",{class:"btn-secondary",href:"https://github.com/Alexandre46/vue-node-weather"},"https://github.com/Alexandre46/vue-node-weather"))),l.a.createElement("a",{href:"#",class:"list-group-item list-group-item-action"},l.a.createElement("div",{class:"d-flex w-100 justify-content-between"},l.a.createElement("h5",{class:"mb-1"},"React personal site"),l.a.createElement("small",{class:"text-muted"},"React / React-router / React-boostrap & animations (css)")),l.a.createElement("p",{class:"mb-1"},"Personal site/blog just to develop react knowledge"),l.a.createElement("small",{class:"text-muted"},l.a.createElement("a",{class:"btn-secondary",href:"https://github.com/Alexandre46/react-personal"},"https://github.com/Alexandre46/react-personal"))))}}]),t}(n.Component),I=a(203),C=a(206),A=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,216))})),N=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,217))})),B=(document.querySelector("html").getAttribute("data-theme"),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",{class:"text-warning"},"Loading...")},l.a.createElement(I.a,{defaultActiveKey:"0"},l.a.createElement(C.a,{className:""},l.a.createElement(I.a.Toggle,{as:C.a.Header,eventKey:"0"},"Initial Post - Markdown"),l.a.createElement(I.a.Collapse,{eventKey:"0"},l.a.createElement(C.a.Body,null,l.a.createElement(A,null)))),l.a.createElement(C.a,{className:""},l.a.createElement(I.a.Toggle,{as:C.a.Header,eventKey:"1"},"Laravel Relationships"),l.a.createElement(I.a.Collapse,{eventKey:"1"},l.a.createElement(C.a.Body,null,l.a.createElement(N,null)))))))}}]),t}(n.Component)),L=a(96),T=a.n(L),M=a(204),R=a(97);function D(){return l.a.createElement("div",{class:"w-100"},l.a.createElement("p",{class:"p-3"}," Feel free to contact me for any reason, don't forget to put your identification"),l.a.createElement(M.a,{className:"contact-form",onSubmit:function(e){e.preventDefault(),T.a.sendForm("gmail","template_0GCXxagz",e.target,"user_dNokYX5Ebo1aMAvjNj39O").then((function(e){console.log(e.text),document.getElementById("email-success").classList.remove("d-none"),document.getElementById("email-error").classList.add("d-none")}),(function(e){document.getElementById("email-error").classList.remove("d-none"),document.getElementById("email-success").classList.add("d-none"),console.log(e)}))}},l.a.createElement("div",{class:"col-12 mt-4 form-group"},l.a.createElement("div",{id:"email-success",class:"d-none bg-success alert-success"}," Email sent with success"),l.a.createElement("div",{id:"email-error",class:"d-none bg-danger alert-danger"}," Email sent with success"),l.a.createElement("input",{type:"hidden",name:"contact_number",class:"pt-3"}),l.a.createElement(R.a,null,"Name"),l.a.createElement("input",{class:"form-control input",type:"text",name:"name",required:!0})),l.a.createElement("div",{class:"col-12 form-group"},l.a.createElement(R.a,null,"Email"),l.a.createElement("input",{class:"form-control input",type:"email",name:"email",required:!0})),l.a.createElement("div",{class:"col-12 form-group"},l.a.createElement(R.a,null,"Message"),l.a.createElement("textarea",{class:"form-control form-text",name:"message",required:!0})),l.a.createElement("div",{class:"col-12 form-group"},l.a.createElement("input",{class:"btn btn-block btn-outline-success",type:"submit",value:"Send"}))))}function H(){return l.a.createElement("div",{class:"mt-3"},l.a.createElement(S,null))}function W(){return l.a.createElement(f,null)}function P(){return l.a.createElement(j,null)}function J(){return l.a.createElement(x,null)}var q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(200);r.a.render(l.a.createElement(g,null),document.getElementById("theme-switcher")),r.a.render(l.a.createElement(h,null),document.getElementById("logo")),r.a.render(l.a.createElement(d,null),document.getElementById("clock")),r.a.render(l.a.createElement((function(){return l.a.createElement(b.a,null,l.a.createElement("div",{class:"nav-collapse collapsed"},l.a.createElement("ul",{class:"navbar"},l.a.createElement("li",{class:"col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0"},l.a.createElement(b.b,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{class:"col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0"},l.a.createElement(b.b,{to:"/blog",className:"nav-link"}," Blog \ud83d\ude80 ")),l.a.createElement("li",{class:"col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0"},l.a.createElement(b.b,{to:"/projects",className:"nav-link"},"Projects")),l.a.createElement("li",{class:"col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0"},l.a.createElement(b.b,{to:"/skills",className:"nav-link"},"Skills")),l.a.createElement("li",{class:"col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0"},l.a.createElement(b.b,{to:"/about-me",className:"nav-link"},"About me ")),l.a.createElement("li",{class:"col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0"},l.a.createElement(b.b,{to:"/contact",className:"nav-link"},"Contact "))),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/"},l.a.createElement(H,null)),l.a.createElement(p.a,{path:"/about"},l.a.createElement(P,null)),l.a.createElement(p.a,{path:"/skills"},l.a.createElement(W,null)),l.a.createElement(p.a,{path:"/blog"},l.a.createElement(B,null)),l.a.createElement(p.a,{path:"/projects"},l.a.createElement(J,null)),l.a.createElement(p.a,{path:"/about-me"},l.a.createElement(j,null)),l.a.createElement(p.a,{path:"/contact"},l.a.createElement(D,null)))))}),null),document.getElementById("navigation")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");q?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):F(t,e)}))}}()},57:function(e,t,a){},98:function(e,t,a){e.exports=a(201)}},[[98,1,2]]]);
//# sourceMappingURL=main.3c75d933.chunk.js.map