"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[13],{988:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(413);function r(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=t(791),i=t(984),u="TextField_wrap__e9m2f",o="TextField_label__vkJH3",s="TextField_input__Co8UC",c=t(184),m=["label","handleChange"],d=function(e){var n=e.label,t=e.handleChange,d=r(e,m),h=(0,l.useMemo)((function(){return(0,i.x0)()}),[]);return(0,c.jsxs)("div",{className:u,children:[(0,c.jsx)("label",{className:o,htmlFor:h,children:n}),(0,c.jsx)("input",(0,a.Z)({className:s,id:h,onChange:t},d))]})}},943:function(e,n,t){var a=t(942),r=t(413),l=t(439),i=t(791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,u=(0,i.useState)((0,r.Z)({},n)),o=(0,l.Z)(u,2),s=o[0],c=o[1],m=(0,i.useCallback)((function(e){var n=e.target,t=n.name,l=n.value;c((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},t,l))}))}),[c]);return{state:s,setState:c,handleChange:m,handleSubmit:function(e){e.preventDefault(),t((0,r.Z)({},s)),c((0,r.Z)({},n))}}}},13:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var a=t(413),r=t(434),l=t(943),i=t(988),u={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"Name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"Email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"Password: 8 characters"}},o={name:"",email:"",password:""},s=t(724),c="RegisterForm_form__Tv43W",m="RegisterForm_button__B3hFq",d=t(184),h=function(){var e=(0,r.I0)(),n=(0,l.Z)({initialState:o,onSubmit:function(n){e((0,s.IU)(n))}}),t=n.state,h=n.handleChange,f=n.handleSubmit,p=t.name,b=t.email,v=t.password;return(0,d.jsxs)("form",{className:c,onSubmit:f,children:[(0,d.jsx)(i.Z,(0,a.Z)({value:p,handleChange:h},u.name)),(0,d.jsx)(i.Z,(0,a.Z)({value:b,handleChange:h},u.email)),(0,d.jsx)(i.Z,(0,a.Z)({value:v,handleChange:h},u.password)),(0,d.jsx)("button",{className:m,type:"submit",children:"Register"})]})},f=function(){return(0,d.jsx)("div",{children:(0,d.jsx)(h,{})})}},984:function(e,n,t){t.d(n,{x0:function(){return a}});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=13.3ddc78c4.chunk.js.map