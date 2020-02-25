(window["webpackJsonpreact-app"]=window["webpackJsonpreact-app"]||[]).push([[0],{113:function(e,t,a){e.exports=a(237)},237:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),l=a.n(r),c=a(6),s=a(7),i=a(9),u=a(8),m=a(10),d=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={date:new Date},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return o.a.createElement("div",{class:"clock my-auto"},o.a.createElement("h4",{class:"font-weight-bold"},this.state.date.toLocaleTimeString()))}}]),t}(o.a.Component),p=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"font-weight-bolder my-auto py-2"},o.a.createElement("span",null," ALEXANDRE ",o.a.createElement("span",{role:"img","aria-label":"man"},"\ud83e\udd37\u200d\u2642\ufe0f ")))}}]),t}(n.Component),g=(a(64),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={checked:"dark"===localStorage.getItem("theme"),theme:localStorage.getItem("theme")},a.toggleThemeChange=function(){!1===a.state.checked?(localStorage.setItem("theme","dark"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme")),a.setState({checked:!0})):(localStorage.setItem("theme","light"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme")),a.setState({checked:!1}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme"))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{class:"float-left"},o.a.createElement("label",{class:"switch"},o.a.createElement("input",{type:"checkbox",defaultChecked:this.state.checked,onChange:function(){return e.toggleThemeChange()}}),o.a.createElement("span",{class:"slider round"})))}}]),t}(n.Component)),h=a(239),b=a(61),E=a(73),v=a.n(E),f=a(74),y=a.n(f),j=a(13),w=a(78),O=a(79),k=a(80);b.a.use(j.b).use(y.a).use(v.a).init({debug:!0,lng:"en",fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1},resources:{en:w,fr:O,pt:k},ns:["translations"],defaultNS:"translations",react:{wait:!0,useSuspense:!1}});var S=b.a,C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={value:"en"},a.handleChange=function(e){console.log("selected val is ",e.target.value);var t=e.target.value;a.setState((function(e){return{value:t}})),console.log("state value is",t),S.changeLanguage(t)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.t;return o.a.createElement("div",{class:"row"},o.a.createElement(h.a,{className:"col-sm-4 bg-transparent button-transparent btn-language-switcher",onClick:this.handleChange,value:"en"},e("en"),o.a.createElement("img",{src:"https://res.cloudinary.com/cinforme/image/upload/v1582388051/BLOG/en.png",alt:"English flag"})),o.a.createElement(h.a,{className:"col-sm-4 bg-transparent btn-language-switcher",onClick:this.handleChange,value:"fr"},e("fr"),o.a.createElement("img",{src:"https://res.cloudinary.com/cinforme/image/upload/v1582388051/BLOG/fr.png",alt:"French flag"})),o.a.createElement(h.a,{className:"col-sm-4 bg-transparent btn-language-switcher",onClick:this.handleChange,value:"pt"},e("pt"),o.a.createElement("img",{src:"https://res.cloudinary.com/cinforme/image/upload/v1582388051/BLOG/pt.png",alt:"Portuguese flag"})))}}]),t}(n.Component),I=Object(j.c)()(C),x=a(27),N=a(22),A=a(243),M=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(A.a,null,o.a.createElement(A.a.Item,null,o.a.createElement("img",{className:"d-block w-100 custom-image",src:"https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",alt:"HTML"}),o.a.createElement(A.a.Caption,null,o.a.createElement("h3",null,"HTML"),o.a.createElement("p",null,"Hypertext Markup Language"))),o.a.createElement(A.a.Item,null,o.a.createElement("img",{className:"d-block w-100 custom-image",src:"https://www.wallpaperflare.com/static/900/618/451/syntax-highlighting-code-color-codes-css-wallpaper.jpg",alt:"CSS"}),o.a.createElement(A.a.Caption,null,o.a.createElement("h3",null,"CSS"),o.a.createElement("p",null,"Cascade Style sheets"))),o.a.createElement(A.a.Item,null,o.a.createElement("img",{className:"d-block w-100 custom-image",src:"https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",alt:"JS"}),o.a.createElement(A.a.Caption,null,o.a.createElement("h3",null,"JS"),o.a.createElement("p",null,"JavaScript"))))}}]),t}(n.Component),L=a(40),B=a(49),q=a(58),P={bounce:{animation:"x 0.1s",animationName:B.a.keyframes(L.bounce,"bounce")}},T=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.t;return o.a.createElement(q.a,null,o.a.createElement("div",{className:"test my-4",style:P.bounce},e("aboutMeInfo")))}}]),t}(n.Component),W=Object(j.c)()(T),H={bounce:{animation:"x 3s",animationName:B.a.keyframes(L.bounce,"bounce")}},J=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.t;return o.a.createElement(q.a,null,o.a.createElement("div",{class:"alert-alert-danger",style:H.bounce},o.a.createElement("h3",null,e("introInitial")," ",o.a.createElement("i",null,"Alexandre Abreu")," ",e("introEnd"),o.a.createElement("span",{role:"img","aria-label":"coder"},"\ud83d\udc68\ud83c\udffc\u200d\ud83d\udcbb\ud83d\udcbb \u200d")),o.a.createElement("div",{class:"col-12 font-italic font-weight-lighter"},e("introMore"),o.a.createElement("h5",null," ",e("introSentence")))))}}]),t}(n.Component),D=Object(j.c)()(J),R=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"mt-3"},o.a.createElement("a",{href:"#",class:"list-group-item list-group-item-action"},o.a.createElement("div",{class:"d-flex w-100 justify-content-between"},o.a.createElement("h5",{class:"mb-1"},"CINFORME"),o.a.createElement("small",null,"Laravel / Vanilla JS / Bootstrap4")),o.a.createElement("p",{class:"mb-1"},"News platform, with an backoffice to insert news and also an news aggregator, using google translator API to store all content in two languages(english and portuguese)"),o.a.createElement("small",null,o.a.createElement("a",{class:"btn-secondary",href:"https://github.com/Alexandre46/CINFORME"},"https://github.com/Alexandre46/CINFORME"))),o.a.createElement("a",{href:"#",class:"list-group-item list-group-item-action"},o.a.createElement("div",{class:"d-flex w-100 justify-content-between"},o.a.createElement("h5",{class:"mb-1"},"Vue Weather SPA"),o.a.createElement("small",{class:"text-muted"},"VueJS / DarkSky API / Axios")),o.a.createElement("p",{class:"mb-1"},"Vue Weather Single Page Application to show city background image , weekly forecast for geolocation of user"),o.a.createElement("small",{class:"text-muted"},o.a.createElement("a",{class:"btn-secondary",href:"https://github.com/Alexandre46/vue-node-weather"},"https://github.com/Alexandre46/vue-node-weather"))),o.a.createElement("a",{href:"#",class:"list-group-item list-group-item-action"},o.a.createElement("div",{class:"d-flex w-100 justify-content-between"},o.a.createElement("h5",{class:"mb-1"},"React personal site"),o.a.createElement("small",{class:"text-muted"},"React / React-router / React-boostrap & animations (css)")),o.a.createElement("p",{class:"mb-1"},"Personal site/blog just to develop react knowledge"),o.a.createElement("small",{class:"text-muted"},o.a.createElement("a",{class:"btn-secondary",href:"https://github.com/Alexandre46/react-personal"},"https://github.com/Alexandre46/react-personal"))))}}]),t}(n.Component),V=a(240),z=a(242),F=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,253))})),K=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,254))})),G=(document.querySelector("html").getAttribute("data-theme"),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(n.Suspense,{fallback:o.a.createElement("div",{class:"text-warning"},"Loading...")},o.a.createElement(V.a,{defaultActiveKey:"0"},o.a.createElement(z.a,{className:""},o.a.createElement(V.a.Toggle,{as:z.a.Header,eventKey:"0"},"Initial Post - Markdown"),o.a.createElement(V.a.Collapse,{eventKey:"0"},o.a.createElement(z.a.Body,null,o.a.createElement(F,null)))),o.a.createElement(z.a,{className:""},o.a.createElement(V.a.Toggle,{as:z.a.Header,eventKey:"1"},"Laravel Relationships"),o.a.createElement(V.a.Collapse,{eventKey:"1"},o.a.createElement(z.a.Body,null,o.a.createElement(K,null)))))))}}]),t}(n.Component)),U=a(111),Y=a.n(U),X=a(241),_=a(112);function Q(e){e.preventDefault(),Y.a.sendForm("gmail","template_0GCXxagz",e.target,"user_dNokYX5Ebo1aMAvjNj39O").then((function(e){console.log(e.text),document.getElementById("email-success").classList.remove("d-none"),document.getElementById("email-error").classList.add("d-none")}),(function(e){document.getElementById("email-error").classList.remove("d-none"),document.getElementById("email-success").classList.add("d-none"),console.log(e)}))}var $=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.t;return o.a.createElement("div",{class:"w-100"},o.a.createElement("p",{class:"p-3"}," ",e("contactLabel")),o.a.createElement(X.a,{className:"contact-form",onSubmit:Q},o.a.createElement("div",{class:"col-12 mt-4 form-group"},o.a.createElement("div",{id:"email-success",class:"d-none bg-success alert-success"}," ",e("contactWithSuccess")),o.a.createElement("div",{id:"email-error",class:"d-none bg-danger alert-danger"}," ",e("contactWithError")),o.a.createElement("input",{type:"hidden",name:"contact_number",class:"pt-3"}),o.a.createElement(_.a,null,e("contactName")),o.a.createElement("input",{class:"form-control input",type:"text",name:"name",required:!0})),o.a.createElement("div",{class:"col-12 form-group"},o.a.createElement(_.a,null,e("contactEmail")),o.a.createElement("input",{class:"form-control input",type:"email",name:"email",required:!0})),o.a.createElement("div",{class:"col-12 form-group"},o.a.createElement(_.a,null,e("contactMessage")),o.a.createElement("textarea",{class:"form-control form-text",name:"message",minLength:"10",required:!0})),o.a.createElement("div",{class:"col-12 form-group"},o.a.createElement("input",{class:"btn btn-block btn-outline-success",type:"submit",value:e("contactSend")}))))}}]),t}(n.Component),Z=Object(j.c)()($),ee=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.t;return o.a.createElement(x.a,null,o.a.createElement("div",{class:"nav-collapse collapsed"},o.a.createElement("ul",{class:"navbar"},o.a.createElement("li",{class:"col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0"},o.a.createElement(x.b,{to:"/",className:"nav-link"},e("menuHome")," ",o.a.createElement("span",{role:"img","aria-label":"Home icon"},"\ud83c\udfe1"))),o.a.createElement("li",{class:"col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0"},o.a.createElement(x.b,{to:"/blog",className:"nav-link"}," ",e("menuBlog")," ",o.a.createElement("span",{role:"img","aria-label":"Rocket icon"},"\ud83d\ude80")," ")),o.a.createElement("li",{class:"col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0"},o.a.createElement(x.b,{to:"/projects",className:"nav-link"},e("menuProjects")," ",o.a.createElement("span",{role:"img","aria-label":"Book icon"},"\ud83d\udcd3")," ")),o.a.createElement("li",{class:"col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0"},o.a.createElement(x.b,{to:"/about-me",className:"nav-link"},e("menuAboutMe")," ",o.a.createElement("span",{role:"img","aria-label":"Person icon"},"\ud83d\udc68\ud83c\udffc\u200d\ud83d\udcbb"))),o.a.createElement("li",{class:"col-12 col-lg-2 btn btn-outline-secondary nav-item nav-link border-0"},o.a.createElement(x.b,{to:"/contact",className:"nav-link"},e("menuContact")," ",o.a.createElement("span",{role:"img","aria-label":"Phone icon"},"\ud83d\udcf1")))),o.a.createElement(N.c,null,o.a.createElement(N.a,{exact:!0,path:"/"},o.a.createElement(te,null)),o.a.createElement(N.a,{path:"/about"},o.a.createElement(ne,null)),o.a.createElement(N.a,{path:"/skills"},o.a.createElement(ae,null)),o.a.createElement(N.a,{path:"/blog"},o.a.createElement(le,null)),o.a.createElement(N.a,{path:"/projects"},o.a.createElement(re,null)),o.a.createElement(N.a,{path:"/about-me"},o.a.createElement(W,null)),o.a.createElement(N.a,{path:"/contact"},o.a.createElement(oe,null)))))}}]),t}(n.Component);function te(){return o.a.createElement("div",{class:"mt-3"},o.a.createElement(D,null))}function ae(){return o.a.createElement(M,null)}function ne(){return o.a.createElement(W,null)}function oe(){return o.a.createElement(Z,null)}function re(){return o.a.createElement(R,null)}function le(){return o.a.createElement(G,null)}var ce=Object(j.c)()(ee),se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(236);l.a.render(o.a.createElement(j.a,{i18n:S},o.a.createElement(g,null)),document.getElementById("theme-switcher")),l.a.render(o.a.createElement(j.a,{i18n:S},o.a.createElement(I,null)),document.getElementById("language-switcher")),l.a.render(o.a.createElement(p,null),document.getElementById("logo")),l.a.render(o.a.createElement(d,null),document.getElementById("clock")),l.a.render(o.a.createElement(j.a,{i18n:S},o.a.createElement(ce,null)),document.getElementById("navigation")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");se?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ie(t,e)}))}}()},64:function(e,t,a){},78:function(e){e.exports=JSON.parse('{"translations":{"en":"English","pt":"Portuguese","fr":"French","introInitial":"Hi, My name is","introEnd":"and i\'m a portuguese software developer","introMore":"I am passionate about programming, I love learning new things, discuss new ideas with the people around me, learn new thing every day and trying my best to contribute to a better world for everyone.","introSentence":"The first step is to establish that something is possible, then probably will occur.","menuHome":"Home","menuBlog":"Blog","menuProjects":"Projects","menuAboutMe":"About me","menuContact":"Contact","aboutMeInfo":"There\'s a lot of things i can talk but basically i am 29-year-old Portuguese coder who really enjoys this job.I\'ve always be curious to discover new things on this field, start interaction with Computers since my 7-8 years old when my parents bought ourfirst personal computer. On college i\'ve decided to go to technical course instead of normal /common area, and go to university to Computer Science degree. Finished my CS @2014 and since 2016 i\'m working on software development, i\'m currently on second company since university. I\'ve been working on VOD (video-on-demand) projects , internet banking & news projects","contactLabel":"Feel free to contact me for any reason, don\'t forget to put your identification","contactName":"Your Name","contactEmail":"Your Email","contactMessage":"Your Message to me","contactSend":"Send","contactWithSuccess":"Email was sent successfully","contactWithError":"Oops. Something went wrong. Email was not send, please try again later"}}')},79:function(e){e.exports=JSON.parse('{"translations":{"en":"Anglais","pt":"Portugais","fr":"fran\xe7ais","introInitial":"Salut je m\'appelle","introEnd":"et je suis un d\xe9veloppeur de logiciels portugais","introMore":"Je suis passionn\xe9e par la programmation, j\'aime apprendre de nouvelles choses, discuter de nouvelles id\xe9es avec les gens autour de moi, apprendre de nouvelles choses chaque jour et faire de mon mieux pour contribuer \xe0 un monde meilleur pour tous.","introSentence":"La premi\xe8re \xe9tape consiste \xe0 \xe9tablir que quelque chose est possible, puis se produira probablement.","menuHome":"Accueil","menuBlog":"Blogue","menuProjects":"Projets","menuAboutMe":"Propos de moi","menuContact":"Contactez nous","aboutMeInfo":"Il y a beaucoup de choses dont je peux parler mais, fondamentalement, je suis un codeur portugais de 29 ans qui aime vraiment ce travail. J\'ai toujours \xe9t\xe9 curieux de d\xe9couvrir de nouvelles choses dans ce domaine, de commencer \xe0 interagir avec les ordinateurs depuis mes 7 \xe0 8 ans lorsque mes parents ont achet\xe9 notre premier ordinateur personnel. Au coll\xe8ge, j\'ai d\xe9cid\xe9 d\'aller \xe0 un cours technique au lieu d\'un espace normal / commun, et d\'aller \xe0 l\'universit\xe9 en informatique degr\xe9. Termin\xe9 mon CS @ 2014 et depuis 2016 je travaille sur le d\xe9veloppement logiciel, je suis actuellement en deuxi\xe8me entreprise depuis l\'universit\xe9. J\'ai travaill\xe9 sur des projets VOD (vid\xe9o \xe0 la demande), des services bancaires par Internet et des projets d\'actualit\xe9s","contactLabel":"N\'h\xe9sitez pas \xe0 me contacter pour quelque raison que ce soit, n\'oubliez pas de mettre votre pi\xe8ce d\'identit\xe9","contactName":"Votre nom","contactEmail":"Votre email","contactMessage":"Votre message pour moi","contactSend":"Envoyer","contactWithSuccess":"L\'e-mail a \xe9t\xe9 envoy\xe9 avec succ\xe8s","contactWithError":"Oups. Quelque chose a mal tourn\xe9. L\'e-mail n\'a pas \xe9t\xe9 envoy\xe9, veuillez r\xe9essayer plus tard"}}')},80:function(e){e.exports=JSON.parse('{"translations":{"en":"Ingl\xeas","pt":"Portugu\xeas","fr":"Franc\xeas","introInitial":"Ola, o meu nome \xe9","introEnd":"e sou um desenvolvedor de software portugu\xeas","introMore":"Sou apaixonado por programa\xe7\xe3o, adoro aprender coisas novas, discutir novas id\xe9ias com as pessoas ao meu redor, aprender coisas novas todos os dias e fazer o poss\xedvel para contribuir para um mundo melhor para todos.","introSentence":"O primeiro passo \xe9 estabelecer que algo \xe9 poss\xedvel e provavelmente ocorrer\xe1.","menuHome":"In\xedcio","menuBlog":"Blog","menuProjects":"Projetos","menuAboutMe":"Sobre mim","menuContact":"Contacto","aboutMeInfo":"Eu posso falar muitas coisas, mas basicamente eu sou um programador portugu\xeas de 29 anos que realmente gosta deste trabalho. Eu sempre tenho curiosidade de descobrir coisas novas nesse campo, iniciar a intera\xe7\xe3o com computadores desde os 7-8 anos quando meus pais compraram nossa primeiro computador pessoal. Na faculdade, decidi fazer o curso t\xe9cnico em vez da \xe1rea normal / comum, e ir para a universidade em Ci\xeancia da Computa\xe7\xe3o grau. Terminei meu CS @ 2014 e desde 2016 estou trabalhando no desenvolvimento de software, atualmente estou na segunda empresa desde a universidade. Trabalhei em projetos de VOD (v\xeddeo sob demanda), internet banking e projetos de not\xedcias.","contactLabel":"Sinta-se \xe0 vontade para entrar em contato por qualquer motivo, n\xe3o esque\xe7a de colocar sua identifica\xe7\xe3o","contactName":"Seu nome","contactEmail":"Seu email","contactMessage":"Sua mensagem para mim","contactSend":"Enviar","contactWithSuccess":"Email enviado com sucesso","contactWithError":"Oops. Algo correu mal. Email n\xe3o foi enviado, por favor tente novamente mais tarde"}}')}},[[113,1,2]]]);
//# sourceMappingURL=main.88522941.chunk.js.map