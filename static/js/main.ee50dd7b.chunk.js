(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),i=a(9),s=a(1),l=a(6),u=a.n(l);var p=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",alt:"\u041c\u0435\u0441\u0442\u043e",src:u.a}))},m=r.a.createContext();var d=function(e){var t=r.a.useContext(m),a=e.card.owner._id===t._id,n=e.card.likes.some((function(e){return e._id===t._id}));return r.a.createElement("div",{className:"place-card"},r.a.createElement("img",{className:"place-card__image",alt:"\u0444\u043e\u0442\u043e",src:e.card.link,onClick:function(){e.onCardClick(e.card)}}),r.a.createElement("button",{onClick:function(){e.handleCardDelete(e.card)},className:"place-card__delete ".concat(a?"":"place-card__delete_disabled"),type:"button"}),r.a.createElement("p",{className:"place-card__title"},e.card.name),r.a.createElement("div",{className:"place-card__like-container"},r.a.createElement("button",{className:"place-card__like ".concat(n?"place-card__like_clicked":""),onClick:function(){e.handleCardLike(e.card)},type:"button"}),r.a.createElement("p",{className:"place-card__quantity"},e.card.likes.length)))};var h=function(e){var t=r.a.useContext(m);function a(t){e.onCardClick(t)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"profile"},r.a.createElement("button",{className:"profile__image-button",type:"button",onClick:e.isEditAvatarPopupOpen}),r.a.createElement("img",{className:"profile__image",alt:"\u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",src:t.avatar}),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h1",{className:"profile__name"},t.name),r.a.createElement("p",{className:"profile__activity"},t.about),r.a.createElement("button",{className:"profile__edit",type:"button",onClick:e.onEditProfile})),r.a.createElement("button",{className:"profile__add",type:"button",onClick:e.onAddPlace})),r.a.createElement("section",{className:"places-list"},e.cards.map((function(t){return r.a.createElement(d,{handleCardLike:e.clickOnLike,onCardClick:a,key:t._id,card:t,handleCardDelete:e.clickOnDeleteButton})}))))};var f=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__text"},"\xa9 2020 Mesto Russia"))};var _=function(e){return r.a.createElement("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:e.popupSelector},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{className:"popup__close",onClick:e.isClose,type:"button"}),r.a.createElement("form",{className:"popup__form",onSubmit:e.onSubmitImage,name:e.formName,noValidate:!0},r.a.createElement("h3",{className:"popup__title"},e.title),e.children,r.a.createElement("button",{className:"popup__save"},e.buttonText))))};function E(e){var t=r.a.useRef(),a=r.a.useRef();return r.a.useEffect((function(){t.current.value="",a.current.value=""}),[t,a]),r.a.createElement("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:"card-popup"},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{className:"popup__close",onClick:e.isClose,type:"button"}),r.a.createElement("form",{className:"popup__form",onSubmit:function(n){n.preventDefault(),e.onAddCard({link:t.current.value,name:a.current.value})},name:"places",noValidate:!0},r.a.createElement("h3",{className:"popup__title"},"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e"),r.a.createElement("input",{ref:a,autoComplete:"off",minLength:"1",maxLength:"30",className:"popup__name",id:"input-place",name:"name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"input-place-error"}),r.a.createElement("input",{ref:t,autoComplete:"off",type:"url",className:"popup__activity",id:"input-link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"input-link-error"}),r.a.createElement("button",{className:"popup__save"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))}var v=function(e){return r.a.createElement("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:e.popupSelector},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{className:"popup__close",onClick:e.isClose,type:"button"}),r.a.createElement("img",{className:"popup__image",alt:"\u0444\u043e\u0442\u043e",src:"".concat(e.card.link)}),r.a.createElement("p",{className:"popup__text"},e.card.name)))};var k=function(e){var t=r.a.useContext(m),a=r.a.useState(t.name),n=Object(s.a)(a,2),o=n[0],c=n[1],i=r.a.useState(t.about),l=Object(s.a)(i,2),u=l[0],p=l[1];return r.a.useEffect((function(){c(t.name),p(t.about)}),[t.name,t.about]),r.a.createElement("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:"profile-popup"},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{className:"popup__close",onClick:e.isClose,type:"button"}),r.a.createElement("form",{className:"popup__form",noValidate:!0,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:u})}},r.a.createElement("h3",{className:"popup__title"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement("input",{value:o||"",onChange:function(e){c(e.target.value)},autoComplete:"off",minLength:"2",maxLength:"40",className:"popup__name",id:"input-name",name:"name",type:"text",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"input-name-error"}),r.a.createElement("input",{value:u||"",onChange:function(e){p(e.target.value)},autoComplete:"off",minLength:"2",maxLength:"200",className:"popup__activity",id:"input-activity",name:"about",type:"text",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"input-activity-error"}),r.a.createElement("button",{className:"popup__save"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))};function b(e){var t=r.a.useRef();return r.a.useEffect((function(){t.current.value=""}),[t]),r.a.createElement(_,{isOpen:e.isOpen,isClose:e.isClose,popupSelector:"avatar-popup",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmitImage:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{ref:t,autoComplete:"off",type:"url",className:"popup__name",id:"input-avatar",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"input-avatar-error"}))})}var C=a(7),A=a(8),N=new(function(){function e(t){var a=t.authorization,n=t.cardsUrl,r=t.userUrl;Object(C.a)(this,e),this._authorization=a,this._cardsUrl=n,this._userUrl=r}return Object(A.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():(console.log("_handleResponse rejection"),Promise.reject(e.statusText))}},{key:"_handleResponseError",value:function(e){return console.log("_handleResponseError"),Promise.reject(e.message)}},{key:"addCardToServer",value:function(e){return fetch(this._cardsUrl,{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"removeLike",value:function(e){return fetch("".concat(this._cardsUrl,"likes/").concat(e),{headers:{authorization:this._authorization},method:"DELETE"}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"setLike",value:function(e){return fetch("".concat(this._cardsUrl,"likes/").concat(e),{headers:{authorization:this._authorization},method:"PUT"}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._cardsUrl).concat(e),{headers:{authorization:this._authorization},method:"DELETE"}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"getUser",value:function(){return fetch(this._userUrl,{headers:{authorization:this._authorization}}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"getInitialCards",value:function(){return fetch(this._cardsUrl,{headers:{authorization:this._authorization}}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"editProfile",value:function(e){return fetch(this._userUrl,{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._userUrl,"/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._handleResponse).catch(this._handleResponseError)}}]),e}())({authorization:"fe47d12a-65cb-489c-8a22-593f286d28c3",cardsUrl:"https://mesto.nomoreparties.co/v1/cohort-13/cards/",userUrl:"https://mesto.nomoreparties.co/v1/cohort-13/users/me"});var g=function(e){var t=r.a.useState({}),a=Object(s.a)(t,2),n=a[0],o=a[1],c=r.a.useState([]),l=Object(s.a)(c,2),u=l[0],d=l[1],C=r.a.useState(!1),A=Object(s.a)(C,2),g=A[0],O=A[1],R=r.a.useState(!1),y=Object(s.a)(R,2),j=y[0],z=y[1],U=r.a.useState(!1),S=Object(s.a)(U,2),w=S[0],L=S[1],x=r.a.useState(!1),P=Object(s.a)(x,2),T=P[0],D=P[1],M=r.a.useState({}),J=Object(s.a)(M,2),B=J[0],G=J[1];function H(){D(!1),L(!1),z(!1),O(!1),G({})}return r.a.useEffect((function(){N.getUser().then((function(e){o(e)})),N.getInitialCards().then((function(e){d(e)}))}),[]),r.a.createElement(m.Provider,{value:n},r.a.createElement("div",{className:"page"},r.a.createElement(p,null),r.a.createElement(h,{cards:u,clickOnLike:function(e){e.likes.some((function(e){return e._id===n._id}))?N.removeLike(e._id).then((function(t){var a=u.map((function(a){return a._id===e._id?t:a}));d(a)})):N.setLike(e._id).then((function(t){var a=u.map((function(a){return a._id===e._id?t:a}));d(a)}))},clickOnDeleteButton:function(e){N.deleteCard(e._id).then((function(e){var t=u.filter((function(t){return t!==e}));d(t)}))},onCardClick:function(e){D(!0),G(e)},onEditProfile:function(){z(!0)},onAddPlace:function(){L(!0)},isEditAvatarPopupOpen:function(){O(!0)}}),r.a.createElement(f,null),r.a.createElement(k,{onUpdateUser:function(e){N.editProfile(e).then((function(e){o(e)})).then((function(){H()}))},isClose:H,isOpen:j}),r.a.createElement(E,{onAddCard:function(e){N.addCardToServer(e).then((function(e){d([].concat(Object(i.a)(u),[e]))})).then((function(){H()}))},isClose:H,isOpen:w}),r.a.createElement(_,{buttonText:"\u0414\u0430",isClose:H,isOpen:!1,popupSelector:"delete-popup",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),r.a.createElement(b,{onUpdateAvatar:function(e){N.setAvatar(e).then((function(e){o(e)})).then((function(){H()}))},isClose:H,isOpen:g}),r.a.createElement(v,{popupSelector:"image-popup",card:B,isClose:H,isOpen:T})))};a(15);c.a.render(r.a.createElement(g,null),document.querySelector("#root"))},6:function(e,t){e.exports="data:image/png;base64,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"}},[[10,1,2]]]);
//# sourceMappingURL=main.ee50dd7b.chunk.js.map