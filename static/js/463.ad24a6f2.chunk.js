"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[463],{988:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(413);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=t(791),i=t(984),o="TextField_wrap__e9m2f",u="TextField_label__vkJH3",s="TextField_input__Co8UC",c=t(184),d=["label","handleChange"],m=function(e){var n=e.label,t=e.handleChange,m=a(e,d),f=(0,l.useMemo)((function(){return(0,i.x0)()}),[]);return(0,c.jsxs)("div",{className:o,children:[(0,c.jsx)("label",{className:u,htmlFor:f,children:n}),(0,c.jsx)("input",(0,r.Z)({className:s,id:f,onChange:t},m))]})}},943:function(e,n,t){var r=t(942),a=t(413),l=t(439),i=t(791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,o=(0,i.useState)((0,a.Z)({},n)),u=(0,l.Z)(o,2),s=u[0],c=u[1],d=(0,i.useCallback)((function(e){var n=e.target,t=n.name,l=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,l))}))}),[c]);return{state:s,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},s)),c((0,a.Z)({},n))}}}},192:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(413),a=t(434),l=t(988),i={email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},o={email:"",password:""},u=t(943),s=t(724),c="LoginForm_form__gPEx5",d="LoginForm_button__LodJg",m=t(184),f=function(){var e=(0,a.I0)(),n=(0,u.Z)({initialState:o,onSubmit:function(n){e((0,s.x4)(n))}}),t=n.state,f=n.handleChange,h=n.handleSubmit,p=t.email,b=t.password;return(0,m.jsxs)("form",{className:c,onSubmit:h,children:[(0,m.jsx)(l.Z,(0,r.Z)({value:p,handleChange:f},i.email)),(0,m.jsx)(l.Z,(0,r.Z)({value:b,handleChange:f},i.password)),(0,m.jsx)("button",{className:d,type:"submit",children:"Login"})]})},h=function(){return(0,m.jsx)("div",{children:(0,m.jsx)(f,{})})}},984:function(e,n,t){t.d(n,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=463.ad24a6f2.chunk.js.map