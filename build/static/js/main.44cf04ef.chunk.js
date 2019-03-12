(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),i=a.n(s),o=(a(24),a(5)),c=a(6),l=a(9),m=a(7),u=a(10),p=a(8),h=a(34),d=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title display-4 text-primary text-center my-4"},"Welcome to our starting Page"),r.a.createElement("div",{className:"container my-4"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("span",{className:"float-right mb-2"},r.a.createElement(h.a,{to:"/anmelden",className:"nav-item"},"Sign in")),r.a.createElement("form",{className:"text-center",onSubmit:this.props.formProps.handleSubmit},r.a.createElement("div",{className:"input-group mb-3 input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Username")),r.a.createElement("input",{onChange:this.props.formProps.handleChange,ident:"usr",type:"text",className:"form-control",value:this.props.formProps.userName})),r.a.createElement("div",{className:"input-group mb-3 input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Password")),r.a.createElement("input",{onChange:this.props.formProps.handleChange,ident:"pwd",type:"password",className:"form-control",value:this.props.formProps.password})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg"},"Log in"),r.a.createElement("span",null)),this.props.formProps.hasFailed&&r.a.createElement("div",{className:"alert alert-danger my-4"},"Either username or password was incorrect. Try again!"))))}}]),t}(n.Component),g=a(31),b=a(17),f=a(33),E=a(32),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={wantsOut:!1},a.goToLogin=a.goToLogin.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"goToLogin",value:function(e){this.setState({wantsOut:!0})}},{key:"componentWillUnmount",value:function(){this.props.unauthorize()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"nav my-4"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{to:"/user",className:"nav-link"},"Main")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{to:"/user/dashboard",className:"nav-link"},"Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{to:"/user/friends",className:"nav-link"},"Your Friends")),r.a.createElement("li",{className:"nav-item float-right"},r.a.createElement("button",{onClick:this.goToLogin,className:"btn btn-danger btn-sm"},"Sign Out"))),this.state.wantsOut&&r.a.createElement(E.a,{to:"/logout"}))}}]),t}(r.a.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(v,{unauthorize:this.props.unauthorize}),r.a.createElement("div",{className:"jumbotron"},r.a.createElement(b.a,{exact:!0,path:"/user/",render:function(){return r.a.createElement("h2",null,"Welcome home, ",e.props.formProps.userName)}}),r.a.createElement(b.a,{path:"/user/dashboard",render:function(){return r.a.createElement("h2",null,e.props.formProps.userName,", that is your dashboard ")}}),r.a.createElement(b.a,{path:"/user/friends",render:function(){return r.a.createElement("h2",null,e.props.formProps.userName,", that are your friends")}}))))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={isRedirectSet:!1,count:5},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){0===e.state.count?(clearInterval(t),setTimeout(function(){return e.setState({isRedirectSet:!0})},0)):e.setState({count:e.state.count-1})},1e3);this.props.resetFields()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-3"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h2",null,"In ",this.state.count," sec you will switch to Login Area"),r.a.createElement("p",{className:"lead"},"Or you can click",r.a.createElement(h.a,{to:"/",className:"text-primary"}," here")))),this.state.isRedirectSet&&r.a.createElement(E.a,{to:"/"}))}}]),t}(r.a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title display-4 text-primary text-center my-4"},"Sign in"),r.a.createElement("div",{className:"container my-4"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("span",{className:"float-right mb-2"},r.a.createElement(h.a,{to:"/",className:"nav-item"},"Back to home page ")),r.a.createElement("form",{className:"text-center",onSubmit:this.props.formPropsSignIn.handleSubmitSignIn},r.a.createElement("div",{className:"input-group mb-3 input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Username")),r.a.createElement("input",{onChange:this.props.formPropsSignIn.handleChange,identsign:"usrsignin",type:"text",className:"form-control",value:this.props.formPropsSignIn.userNameSignIn})),r.a.createElement("div",{className:"input-group mb-3 input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Password")),r.a.createElement("input",{onChange:this.props.formPropsSignIn.handleChange,identsign:"pwdsignin",type:"password",className:"form-control",value:this.props.formPropsSignIn.passwordSignIn})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg"},"Confirm"),r.a.createElement("span",null)),this.props.formPropsSignIn.confirmToHome&&r.a.createElement("div",{className:"alert alert-success my-4 d-flex justify-content-between align-items-center"},"Go back to home page",r.a.createElement(h.a,{to:"/"},r.a.createElement("button",{className:"btn btn-success px-5"},"Enter"))))))}}]),t}(n.Component),w=(a(28),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={userName:"",password:"",hasFailed:!1,isAuth:!1,passwordSignIn:"",userNameSignIn:"",confirmToHome:!1},a.changeFormField=a.changeFormField.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.unauthorize=a.unauthorize.bind(Object(u.a)(a)),a.resetFields=a.resetFields.bind(Object(u.a)(a)),a.handleSubmitSignIn=a.handleSubmitSignIn.bind(Object(u.a)(a)),a.changeSignIn=a.changeSignIn.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"changeFormField",value:function(e){switch(e.target.getAttribute("ident")){case"usr":this.setState({userName:e.target.value});break;case"pwd":this.setState({password:e.target.value});break;default:return}}},{key:"changeSignIn",value:function(e){switch(e.target.getAttribute("identsign")){case"usrsignin":this.setState({userNameSignIn:e.target.value});break;case"pwdsignin":this.setState({passwordSignIn:e.target.value});break;default:return}}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.userName===this.state.userNameSignIn&&this.state.password===this.state.passwordSignIn?this.setState({hasFailed:!1,isAuth:!0,confirmToHome:!1}):this.setState({hasFailed:!0})}},{key:"handleSubmitSignIn",value:function(e){e.preventDefault(),this.setState({confirmToHome:!0})}},{key:"unauthorize",value:function(e){this.setState({isAuth:!1})}},{key:"resetFields",value:function(e){this.setState({userName:"",password:""})}},{key:"render",value:function(){var e=this,t={userName:this.state.userName,password:this.state.password,handleChange:this.changeFormField,handleSubmit:this.handleSubmit,hasFailed:this.state.hasFailed},a={handleSubmitSignIn:this.handleSubmitSignIn,handleChange:this.changeSignIn,passwordSignIn:this.state.passwordSignIn,userNameSignIn:this.state.userNameSignIn,confirmToHome:this.state.confirmToHome};return r.a.createElement(g.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(d,{formProps:t})}}),r.a.createElement(b.a,{path:"/anmelden",render:function(){return r.a.createElement(y,{formPropsSignIn:a})}}),r.a.createElement(f.a,null,r.a.createElement(b.a,{path:"/logout",render:function(){return r.a.createElement(S,{resetFields:e.resetFields})}}),r.a.createElement(b.a,{path:"/user",render:function(){return r.a.createElement(N,{unauthorize:e.unauthorize,formProps:t})}}),this.state.isAuth&&r.a.createElement(E.a,{to:"/user"}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(29);i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.44cf04ef.chunk.js.map