(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(18),i=c.n(s),j=(c(37),c(38),c(7)),d=c(1),r=function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),r=Object(j.a)(i,2),l=r[0],b=r[1],h=function(){var t=document.querySelector(".gender:checked").value,c=document.getElementById("age").value,n=document.getElementById("height").value,i=document.getElementById("weight").value,j=document.getElementById("userName").value;s("male"===t?Math.round(66.5+13.75*i+5.03*n-6.75*c):Math.round(655.1+9.56*i+1.85*n-4.68*c)),b(j),e.getBmr(a),e.getName(l)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:"Please Fill in All Fields"}),Object(d.jsxs)("form",{action:"",children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{id:"userName",type:"text",placeholder:"Your Name"})}),Object(d.jsxs)("div",{id:"genderPick",children:[Object(d.jsx)("input",{type:"radio",className:"gender",name:"gender",value:"male"}),"Male",Object(d.jsx)("input",{type:"radio",className:"gender",name:"gender",value:"female"}),"Female"]}),Object(d.jsxs)("div",{id:"userVariables",children:[Object(d.jsx)("input",{type:"number",id:"age",placeholder:"Age"}),Object(d.jsx)("input",{type:"number",id:"height",placeholder:"Height (cm)"}),Object(d.jsx)("input",{type:"number",id:"weight",placeholder:"Weight (kg)"})]})]}),Object(d.jsx)("button",{type:"button",onClick:function(){h()},children:"Submit"})]})})},l=c(16),b=function(e){var t=[],c=[],n=[],a=[];switch(e.mealData[0].meal){case"Breakfast":t.push.apply(t,Object(l.a)(e.mealData));break;case"Lunch":c.push.apply(c,Object(l.a)(e.mealData));break;case"Dinner":n.push.apply(n,Object(l.a)(e.mealData));break;case"Snack":a.push.apply(a,Object(l.a)(e.mealData))}var s=t.map((function(e){return Object(d.jsxs)("div",{className:"dailyData",children:[Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:e.food.toUpperCase()})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[e.cal,"kkcal"]}),Object(d.jsxs)("span",{children:[e.unit,"gr"]})]})]})})),i=c.map((function(e){return Object(d.jsxs)("div",{className:"dailyData",children:[Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:e.food.toUpperCase()})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[e.cal,"kkcal"]}),Object(d.jsx)("span",{children:e.unit})]})]})})),j=n.map((function(e){return Object(d.jsxs)("div",{className:"dailyData",children:[Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:e.food.toUpperCase()})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[e.cal,"kkcal"]}),Object(d.jsx)("span",{children:e.unit})]})]})})),r=a.map((function(e){return Object(d.jsxs)("div",{className:"dailyData",children:[Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:e.food.toUpperCase()})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[e.cal,"kkcal"]}),Object(d.jsx)("span",{children:e.unit})]})]})}));return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{id:"dailyDataArea",children:[Object(d.jsxs)("div",{id:"breakfast",children:[Object(d.jsxs)("div",{className:"mealsTitle",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h5",{children:"Breakfast"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Calorie"}),Object(d.jsx)("span",{children:"Unit"})]})]}),s]}),Object(d.jsxs)("div",{id:"lunch",children:[Object(d.jsxs)("div",{className:"mealsTitle",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h5",{children:"Lunch"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Calorie"}),Object(d.jsx)("span",{children:"Unit"})]})]}),i]}),Object(d.jsxs)("div",{id:"dinner",children:[Object(d.jsxs)("div",{className:"mealsTitle",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h5",{children:"Dinner"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Calorie"}),Object(d.jsx)("span",{children:"Unit"})]})]}),j]}),Object(d.jsxs)("div",{id:"snacks",children:[Object(d.jsxs)("div",{className:"mealsTitle",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h5",{children:"Snacks"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Calorie"}),Object(d.jsx)("span",{children:"Unit"})]})]}),r]})]}),Object(d.jsxs)("div",{id:"totalDaily",children:[Object(d.jsx)("h5",{children:"Daily Intakes"}),Object(d.jsxs)("div",{id:"totalValueArea",children:[Object(d.jsxs)("div",{className:"firstLine",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Calories"}),Object(d.jsx)("span",{children:"2000kkcal"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Carbs"}),Object(d.jsx)("span",{children:"30gr"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Protein"}),Object(d.jsx)("span",{children:"40gr"})]})]}),Object(d.jsxs)("div",{className:"secondline",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Fat"}),Object(d.jsx)("span",{children:"50gr"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Fibre"}),Object(d.jsx)("span",{children:"32gr"})]})]})]}),Object(d.jsxs)("div",{id:"infoArea",children:[Object(d.jsx)("span",{children:"DODO! Based on your basal metabolic rate, you need 352kkcal more."}),Object(d.jsx)("span",{children:"(Your Approximate Basal Metabolic Rate is 1986Cal/Day)"})]})]})]})},h=c(32),o=c(28),O=(c(40),function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(j.a)(s,2),l=i[0],O=i[1],u=Object(n.useState)(""),x=Object(j.a)(u,2),p=x[0],m=x[1],v=Object(n.useState)(""),f=Object(j.a)(v,2),g=f[0],y=f[1],k=Object(n.useState)(""),S=Object(j.a)(k,2),N=S[0],D=S[1],B=Object(n.useState)(""),C=Object(j.a)(B,2),F=C[0],I=C[1],E=Object(n.useState)("Select Meal"),A=Object(j.a)(E,2),T=A[0],L=A[1],U=Object(n.useState)(""),P=Object(j.a)(U,2),w=(P[0],P[1]),K=Object(n.useState)(""),M=Object(j.a)(K,2),R=M[0],H=M[1],_=Object(n.useState)(""),J=Object(j.a)(_,2),V=J[0],W=J[1],Y=Object(n.useState)(!0),q=Object(j.a)(Y,2),G=q[0],z=q[1],Q="https://api.edamam.com/api/food-database/v2/parser?ingr=",X="7b389745",Z="9ce7819e554a95d61e2b57cb2f9b8014",$=[];return $.push({meal:T,food:F,cal:c,unit:"1",fat:l,carbs:p,fiber:N,protein:g}),Object(d.jsx)(d.Fragment,{children:G?Object(d.jsx)("div",{id:"basalRate",children:Object(d.jsx)(r,{getBmr:function(e){H(e),z((function(e){return!e}))},getName:function(e){W(e)}})}):Object(d.jsxs)("div",{id:"mainBody",children:[Object(d.jsxs)(o.a,{id:"dropdown-basic-button",className:"mealButtons",title:T,onSelect:function(e){L(e)},children:[Object(d.jsx)(h.a.Item,{eventKey:"Breakfast",children:"Breakfast"}),Object(d.jsx)(h.a.Item,{eventKey:"Lunch",children:"Lunch"}),Object(d.jsx)(h.a.Item,{eventKey:"Dinner",children:"Dinner"}),Object(d.jsx)(h.a.Item,{eventKey:"Snack",children:"Snack"})]}),Object(d.jsx)("input",{type:"text",placeholder:"Search Food",id:"foodName",className:"foodSearch",onKeyPress:function(e){if("Enter"===e.key)return function(e){fetch("".concat(Q).concat(e,"&app_id=").concat(X,"&app_key=").concat(Z)).then((function(e){200!==e.status&&console.log("Houston! We have a problem ".concat(e.status)),e.json().then((function(e){w(e.parsed[0].food.nutrients),a(e.parsed[0].food.nutrients.ENERC_KCAL),O(e.parsed[0].food.nutrients.FAT),m(e.parsed[0].food.nutrients.CHOCDF),y(e.parsed[0].food.nutrients.PROCNT),D(e.parsed[0].food.nutrients.FIBTG),I(e.text)})).catch((function(e){console.log("error ".concat(e))}))}))}(document.getElementById("foodName").value),document.getElementById("foodName").value}}),Object(d.jsx)("button",{id:"addButton",children:"Add"}),Object(d.jsx)(b,{mealData:$,ingr:F,calorie:c,fat:l,carbs:p,protein:g,fiber:N,bmr:R,name:V})]})})});var u=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(O,{})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),x()}},[[44,1,2]]]);
//# sourceMappingURL=main.029e706e.chunk.js.map