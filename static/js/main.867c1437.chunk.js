(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,a){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,,,,,,,,,function(e,t,a){e.exports={Content:"Layout_Content__3H3X8"}},function(e,t,a){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,a){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,a){e.exports={Burger:"Burger_Burger__10T8F"}},,function(e,t,a){e.exports={Loader:"Spinner_Loader__1twK-",load7:"Spinner_load7__3lEXz"}},,function(e,t,a){e.exports=a(58)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a.n(l),i=(a(40),a(2)),c=a(3),s=a(4),d=a(5),u=function(e){return e.children},m=a(24),p=a.n(m),g=a(9),h=a.n(g),_=a(25),b=a.n(_),v=a(26),f=a.n(v),E=function(e){return r.a.createElement("div",{className:b.a.Logo},r.a.createElement("img",{src:f.a,alt:"Burger Logo"}))},C=a(27),k=a.n(C),B=a(11),w=a.n(B),y=function(e){return r.a.createElement("li",{className:w.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?w.a.active:null},e.children))},S=function(e){return r.a.createElement("ul",{className:k.a.NavigationItems},r.a.createElement(y,{link:"/",active:!0},"Burger Builder"),r.a.createElement(y,{link:"/"},"Checkout"))},N=a(28),O=a.n(N),j=function(e){return r.a.createElement("div",{onClick:e.clicked,className:O.a.DrawerToggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},D=function(e){return r.a.createElement("header",{className:h.a.Toolbar},r.a.createElement(j,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:h.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",{className:h.a.DesktopOnly},r.a.createElement(S,null)))},L=a(7),T=a.n(L),x=a(29),I=a.n(x),H=function(e){return e.show?r.a.createElement("div",{className:I.a.Backdrop,onClick:e.clicked}):null},M=function(e){var t=[T.a.SideDrawer,T.a.Close];return e.open&&(t=[T.a.SideDrawer,T.a.Open]),r.a.createElement(u,null,r.a.createElement(H,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:T.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",null,r.a.createElement(S,null))))},P=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerCloseHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(u,null,r.a.createElement(D,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(M,{open:this.state.showSideDrawer,closed:this.sideDrawerCloseHandler}),r.a.createElement("main",{className:p.a.Content},this.props.children))}}]),a}(n.Component),A=a(10),R=a(30),U=a.n(R),X=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(u,null,r.a.createElement(H,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},className:U.a.Modal},this.props.children))}}]),a}(n.Component),Y=a(34),K=a(31),F=a.n(K),J=a(6),z=a.n(J),W=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:z.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:z.a.BreadTop},r.a.createElement("div",{className:z.a.Seeds1}),r.a.createElement("div",{className:z.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:z.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:z.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:z.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:z.a.Bacon});break;default:e=null}return e}}]),a}(n.Component),$=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(Y.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(W,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:F.a.Burger},r.a.createElement(W,{type:"bread-top"}),t,r.a.createElement(W,{type:"bread-bottom"}))},q=a(12),Q=a.n(q),V=a(8),Z=a.n(V),G=function(e){return r.a.createElement("div",{className:Z.a.BuildControl},r.a.createElement("div",{className:Z.a.Label},e.label),r.a.createElement("button",{className:Z.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:Z.a.More,onClick:e.added},"More"))},ee=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],te=function(e){return r.a.createElement("div",{className:Q.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),ee.map((function(t){return r.a.createElement(G,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:Q.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},ae=a(13),ne=a.n(ae),re=function(e){return r.a.createElement("button",{className:[ne.a.Button,ne.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},le=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){console.log("[OrderSummary] DidUpdate()")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingridients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTrasnsform:"capitalize"}},t),":",e.props.ingridients[t])}));return r.a.createElement(u,null,r.a.createElement("h3",null,"You order"),r.a.createElement("p",null,"A delicious burger with the following ingridients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(re,{btnType:"Danger",clicked:this.props.purchaseCanceled},"CANCEL"),r.a.createElement(re,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),a}(n.Component),oe=a(32),ie=a.n(oe).a.create({baseURL:"https://burger-builder-49a30.firebaseio.com/"}),ce=a(33),se=a.n(ce),de=function(e){return r.a.createElement("div",{className:se.a.Loader})},ue={salad:.5,cheese:.4,bacon:.6,meat:1.3},me=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{bacon:0,cheese:0,meat:0,salad:0},totalPrice:4,purchasable:!1,purchasing:!1,loading:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(A.a)({},e.state.ingredients);n[t]=a;var r=ue[t],l=e.state.totalPrice+r;e.setState({totalPrice:l,ingredients:n}),e.updatePurchaseState(n)},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(A.a)({},e.state.ingredients);r[t]=n;var l=ue[t],o=e.state.totalPrice-l;e.setState({totalPrice:o,ingredients:r}),e.updatePurchaseState(r)}},e.updatePurchaseState=function(t){var a=Object.keys(t).map((function(e){return t[e]})).reduce((function(e,t){return e+t}),0);e.setState({purchasable:a>0})},e.purchasedHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.setState({loading:!0});var t={ingredients:e.state.ingredients,price:e.state.totalPrice,customer:{name:"Alex",address:{street:"Test, 123",zipCode:"123321",country:"Russia"},email:"alex.cptn3mo@gmail.com"},deliveryMethod:"fastest"};ie.post("/orders.json",t).then((function(t){e.setState({loading:!1,purchasing:!1})})).catch((function(t){e.setState({loading:!1,purchasing:!1})}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=Object(A.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=r.a.createElement(le,{ingridients:this.state.ingredients,price:this.state.totalPrice,purchaseCanceled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler});return this.state.loading&&(a=r.a.createElement(de,null)),r.a.createElement(u,null,r.a.createElement(X,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),r.a.createElement($,{ingredients:this.state.ingredients}),r.a.createElement(te,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,price:this.state.totalPrice,ordered:this.purchasedHandler}))}}]),a}(n.Component),pe=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null,r.a.createElement(me,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.867c1437.chunk.js.map