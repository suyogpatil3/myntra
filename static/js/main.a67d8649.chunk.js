(this.webpackJsonpmyntra=this.webpackJsonpmyntra||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),a=c(9),n=c.n(a),i=(c(25),c(6)),o=c.n(i),l=c(10),d=c(11),u=c(12),j=c(20),h=c(19),p=(c(27),c(28),c(3)),b=c(0);function x(e){var t=e.name,c=e.filterItems,r=e.nameValue;return Object(b.jsxs)("div",{className:"filterValues",children:[Object(b.jsx)("input",{type:"checkbox",value:t,onClick:c,id:t,name:r}),"   ",Object(b.jsx)("label",{children:t})]})}function f(e){var t=e.products,c=e.changeProductArray,s=Object(r.useState)([]),a=Object(p.a)(s,2),n=a[0],i=a[1],o=function(e){var r=e.target.value,s=t.filter((function(e){return e.category.toLowerCase().includes(r.toLowerCase())})),a=n.concat(s);i(a),c(a)};return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)(x,{name:e.category,filterItems:o,nameValue:"category"},e.productId)}))})}function O(e){var t=e.products,c=e.changeProductArray,s=Object(r.useState)([]),a=Object(p.a)(s,2),n=a[0],i=a[1],o=function(e){var r=e.target.value,s=t.filter((function(e){return e.brand.toLowerCase().includes(r.toLowerCase())})),a=n.concat(s);i(a),c(a)};return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)(x,{name:e.brand,filterItems:o,nameValue:"brand"},t)}))})}var m,g=c(13),v=c(14).a.button(m||(m=Object(g.a)([" display: inline;\nfont-size:medium;\nbackground: #ff4b33f1;\nbox-shadow: 5px 5px 5px lightgray;\ntransition: all 0.2s ease-in-out;\ncolor: white;\nborder: 0;\nheight:30px;\nborder-radius: 5px;\nmargin-left: 5px;\nmargin-right:4px;\n &:hover {\n    box-shadow: -2px -2px 5px white, 2px 2px 5px gray;\n  }\n  \n  &:active {\n    box-shadow: inset 1px 1px 2px white, inset -1px -1px 2px gray;\n  }"])));function y(e){var t=e.products,c=e.allProducts,s=e.changeProductArray,a=Object(r.useState)(!1),n=Object(p.a)(a,2),i=(n[0],n[1],Object(r.useState)("")),o=Object(p.a)(i,2),l=o[0],d=o[1],u=[];function j(e){var c=e.target.value;console.log(c),d(c=c),u=t.filter((function(e){return e.gender.includes(c)})),s(u)}var h=function(e){var t=e.target.id;document.querySelectorAll("input").forEach((function(e){e.name==t&&(e.checked=!0)}))};return Object(b.jsxs)("div",{className:"sideBar",children:[Object(b.jsxs)("div",{className:"filterGroup",children:[Object(b.jsx)("h3",{children:"Filters"}),Object(b.jsx)(v,{onClick:function(e){document.querySelectorAll("input").forEach((function(e){"checkbox"!=e.type&&"radio"!=e.type||(e.checked=!1)})),s(c)},children:"Clear All"})]}),Object(b.jsxs)("div",{className:"genders",children:[Object(b.jsx)("input",{type:"radio",value:"Men",checked:"Men"==l,onChange:j}),"  ",Object(b.jsx)("label",{children:"Men/Boys"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"radio",value:"Women",checked:"Women"==l,onChange:j}),"  ",Object(b.jsx)("label",{children:"Women/Girls"}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"filterGroup",children:[Object(b.jsx)("h4",{className:"filterHeading",children:"Categories"}),Object(b.jsx)(v,{onClick:h,id:"category",children:"Select All"})]}),Object(b.jsx)("div",{className:"filters",children:Object(b.jsx)(f,{products:t,changeProductArray:s})}),Object(b.jsxs)("div",{className:"filterGroup",children:[Object(b.jsx)("h4",{className:"filterHeading",children:"Brands"}),Object(b.jsx)(v,{onClick:h,id:"brand",children:"Select All"})]}),Object(b.jsx)("div",{className:"filters",children:Object(b.jsx)(O,{products:t,changeProductArray:s})})]})}var N=c.p+"static/media/mLogo.0a8a94a6.JPG",S=function(e){var t=e.searchChange,c=e.setSortingType;return Object(b.jsx)("div",{className:"nav-collapsible",children:Object(b.jsxs)("div",{className:"header",children:[Object(b.jsxs)("span",{className:"companyName",children:[Object(b.jsx)("img",{src:N,className:"logo"})," Myntra"]}),Object(b.jsxs)("span",{className:"navGenders",children:[Object(b.jsx)("span",{children:"Men"}),Object(b.jsx)("span",{children:"Women"}),Object(b.jsx)("span",{children:"Boys"}),Object(b.jsx)("span",{children:"Girls"})]}),Object(b.jsx)("input",{type:"search",placeholder:"Search",onChange:t,className:"searchBox"}),Object(b.jsxs)("span",{children:[Object(b.jsx)("label",{children:"Sort by: "})," ",Object(b.jsxs)("select",{onChange:c,children:[Object(b.jsx)("option",{value:"reset",children:"None"}),Object(b.jsx)("option",{value:"price",children:"Price"}),Object(b.jsx)("option",{value:"year",children:"Year"}),Object(b.jsx)("option",{value:"discount",children:"Discount"})]})]}),Object(b.jsxs)("span",{class:"icons",children:[Object(b.jsx)("i",{class:"fas fa-user-circle"}),Object(b.jsx)("i",{class:"fas fa-shopping-bag"}),Object(b.jsx)("i",{class:"fas fa-bookmark"})]})]})})};function P(e){var t=e.name,c=e.brand,r=e.imgSrc,s=e.price,a=e.mrp;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"cardDesign grow",children:[Object(b.jsx)("img",{src:r,alt:t}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"brand",children:[Object(b.jsx)("p",{className:"brandName",children:c}),Object(b.jsxs)("p",{className:"description",children:[" ",t]})]}),Object(b.jsxs)("div",{className:"prices",children:[Object(b.jsxs)("span",{className:"price",children:[Object(b.jsx)("i",{class:"fas fa-rupee-sign priceRs"}),Object(b.jsx)("span",{children:s})]}),Object(b.jsxs)("span",{className:"mrp",children:[Object(b.jsx)("i",{class:"fas fa-rupee-sign mrpRs"}),a]})]})]})]})})}var C=c.p+"static/media/eImg.13468768.svg";function k(e){var t=e.products,c=e.searchfield;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"App",children:0==t.length&&0!=c.length?Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"noProducts",children:"No Products found for this item !!"}),Object(b.jsx)("img",{style:{width:"500px"},src:C})]}):t.map((function(e,t){return Object(b.jsx)(P,{id:e.productId,name:e.productName,brand:e.brand,price:e.price,mrp:e.mrp,imgSrc:e.searchImage},e.productId)}))})})}c(32);var w=c(18),A=c.n(w);function I(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{style:{placeItems:"center"},children:"404 page Not Found!!"})})}var B=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var r;return Object(d.a)(this,c),(r=t.call(this,e)).changeProductArray=function(e){0!==e.length&&r.setState({filteredProducts:e})},r.onSearchChange=function(e){if(r.setState({searchfield:e.target.value}),""==e.target.value&&""!==r.state.searchfield)r.setState({loader:!0}),setTimeout((function(){r.setState({filteredProducts:r.state.products,loader:!1})}),800);else{var t=r.state.products.filter((function(e){return e.productName.toLowerCase().includes(r.state.searchfield.toLowerCase())}));r.setState({loader:!0}),setTimeout((function(){r.setState({filteredProducts:t,loader:!1})}),1e3)}},r.onSortChange=function(e){if("default"===e.target.value)r.setState({filteredProducts:r.state.products});else{var t=r.state.filteredProducts,c=e.target.value;"year"===c?t.sort((function(e,t){return e.year-t.year})):"price"===c?t.sort((function(e,t){return e.price-t.price})):"discount"===c&&t.sort((function(e,t){return t.discount-e.discount})),r.setState({loader:!0}),setTimeout((function(){r.setState({filteredProducts:t,loader:!1})}),1200)}},r.state={products:[],filteredProducts:[],searchfield:"",sortType:"",loader:!0,error:!1},r}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://demo7242716.mockable.io/products").then((function(e){if(e.ok)return e.json()})).then((function(e){console.log(e.products),t.setState({products:e.products,loader:!1}),console.log(t.state.products)})).catch((function(e){t.setState({error:!0})}));case 2:""===this.state.searchfield&&""===this.state.sortType&&this.setState({filteredProducts:this.state.products});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsx)("div",{children:this.state.error?Object(b.jsx)(I,{}):Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)("div",{children:Object(b.jsx)(S,{searchChange:this.onSearchChange,setSortingType:this.onSortChange})}),Object(b.jsxs)("div",{className:"productBody",children:[Object(b.jsx)(y,{products:this.state.products,changeProductArray:this.changeProductArray,allProducts:this.state.products}),!0===this.state.loader?Object(b.jsx)("div",{className:"loading",children:Object(b.jsx)(A.a,{type:"Puff",color:"#ff5d48f1",height:200,width:200,timeout:5e3})}):Object(b.jsx)(k,{products:this.state.filteredProducts,searchfield:this.state.searchfield})]})," "]})})}}]),c}(r.Component);n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.a67d8649.chunk.js.map