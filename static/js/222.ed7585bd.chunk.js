"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[222],{9222:function(n,e,r){r.r(e),r.d(e,{ContactsPage:function(){return $}});var t,a,i,o,s,c,d,u,l,p,m=r(1413),x=r(5705),h=r(9434),f=r(168),b=r(6444),g=(0,b.ZP)(x.l0)(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 400px;\n"]))),j=b.ZP.label(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 15px;\n"]))),Z=(0,b.ZP)(x.gN)(i||(i=(0,f.Z)(["\n  border: none;\n"]))),v=b.ZP.button(o||(o=(0,f.Z)(["\n  cursor: pointer;\n  width: 80px;\n  margin-left: auto;\n  padding: 4px;\n  border: none;\n  border-radius: 50px;\n  color: white;\n  background: linear-gradient(145deg, #e63e81, #ff4a99);\n  transition: width 350ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    width: 120px;\n  }\n"]))),w=(0,b.ZP)(x.Bc)(s||(s=(0,f.Z)(["\n  color: orangered;\n"]))),y=r(6727),P=y.Ry().shape({name:y.Z_().required().matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:y.Z_().required().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),C=function(n){return n.contacts.items},k=function(n){return n.filter},z=function(n){return n.contacts.isLoading},F=function(n){return n.contacts.error},L=r(3634),_=r(184),A={name:"",number:""},I=function(){var n=(0,h.I0)(),e=(0,h.v9)(C);return(0,_.jsx)(x.J9,{initialValues:A,onSubmit:function(r,t){var a=t.resetForm;if(e.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})))return alert("".concat(r.name," is already in contacts"));n((0,L.uK)((0,m.Z)({},r))),a()},validationSchema:P,children:(0,_.jsxs)(g,{autoComplete:"off",children:[(0,_.jsxs)(j,{htmlFor:"name",children:["Name",(0,_.jsx)(Z,{type:"text",name:"name"}),(0,_.jsx)(w,{name:"name",component:"div"})]}),(0,_.jsxs)(j,{htmlFor:"number",children:["Number",(0,_.jsx)(Z,{type:"tel",name:"number"}),(0,_.jsx)(w,{name:"number",component:"div"})]}),(0,_.jsx)(v,{type:"submit",children:"Create"})]})})},N=b.ZP.li(c||(c=(0,f.Z)(["\n  min-width: 210px;\n  padding: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  border-radius: 10px;\n  background: linear-gradient(145deg, #e63e81, #ff4a99);\n"]))),S=b.ZP.div(d||(d=(0,f.Z)(["\n  display: flex;\n  gap: 15px;\n"]))),q=b.ZP.button(u||(u=(0,f.Z)(["\n  cursor: pointer;\n  padding-top: 4px;\n  background-color: inherit;\n  color: white;\n  border: none;\n\n  &:hover {\n    color: red;\n  }\n"]))),B=r(2134),J=function(n){var e=n.name,r=n.number,t=n.id,a=(0,h.I0)();return(0,_.jsxs)(N,{children:[(0,_.jsxs)(S,{children:[(0,_.jsx)("p",{children:e}),(0,_.jsx)("p",{children:r})]}),(0,_.jsx)(q,{type:"button",onClick:function(){return a((0,L.GK)(t))},children:(0,_.jsx)(B.VPh,{})})]})},K=b.ZP.ul(l||(l=(0,f.Z)(["\n  margin-top: 40px;\n  margin-bottom: 15px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),V=r(2791),E=function(){var n=(0,h.I0)(),e=(0,h.v9)(C),r=(0,h.v9)(k),t=(0,h.v9)(z),a=(0,h.v9)(F);if(r.length){var i=r.toLowerCase();e=e.filter((function(n){return n.name.toLowerCase().includes(i)}))}return(0,V.useEffect)((function(){n((0,L.yF)())}),[n]),(0,_.jsxs)(_.Fragment,{children:[t&&(0,_.jsx)("p",{children:"Loading..."}),a&&(0,_.jsx)("p",{children:a}),(0,_.jsx)(K,{children:e.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,_.jsx)(J,{name:r,number:t,id:e},e)}))})]})},G=r(4808),M=b.ZP.input(p||(p=(0,f.Z)(["\n  font-size: 12px;\n  padding: 5px 25px;\n  border: none;\n"]))),R=function(){var n=(0,h.I0)();return(0,_.jsx)("div",{children:(0,_.jsx)(M,{type:"text",name:"filter",onInput:function(e){n((0,G.k)(e.target.value))},placeholder:"Search by name..."})})};function $(){return(0,_.jsxs)("div",{children:[(0,_.jsx)("h1",{children:"Phonebook"}),(0,_.jsx)(I,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(R,{}),(0,_.jsx)(E,{})]})}}}]);
//# sourceMappingURL=222.ed7585bd.chunk.js.map