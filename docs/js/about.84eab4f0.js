(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"07a4":function(t,e,s){},"159b":function(t,e,s){var n=s("da84"),i=s("fdbc"),a=s("17c2"),r=s("9112");for(var o in i){var c=n[o],l=c&&c.prototype;if(l&&l.forEach!==a)try{r(l,"forEach",a)}catch(h){l.forEach=a}}},"17c2":function(t,e,s){"use strict";var n=s("b727").forEach,i=s("a640"),a=s("ae40"),r=i("forEach"),o=a("forEach");t.exports=r&&o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,s){var n=s("d039"),i=s("b622"),a=s("2d00"),r=i("species");t.exports=function(t){return a>=51||!n((function(){var e=[],s=e.constructor={};return s[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"250f":function(t,e,s){},"304e":function(t,e,s){},4160:function(t,e,s){"use strict";var n=s("23e7"),i=s("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"482e":function(t,e,s){"use strict";var n=s("07a4"),i=s.n(n);i.a},"65f0":function(t,e,s){var n=s("861d"),i=s("e8b5"),a=s("b622"),r=a("species");t.exports=function(t,e){var s;return i(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!i(s.prototype)?n(s)&&(s=s[r],null===s&&(s=void 0)):s=void 0),new(void 0===s?Array:s)(0===e?0:e)}},8418:function(t,e,s){"use strict";var n=s("c04e"),i=s("9bf2"),a=s("5c6c");t.exports=function(t,e,s){var r=n(e);r in t?i.f(t,r,a(0,s)):t[r]=s}},9200:function(t,e,s){},9220:function(t,e,s){},a61a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAABcRgAAXEYBFJRDQQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIjSURBVDiNnZTBThNRFIa/czulYoSaSiwUiiF02Ema4N7E1KCBxMTAzufwHdQnMVoJstDKVuOGRCMxMdgS06JCKAYkUIvTe9zQWspMW/iX/z/nu+fmnjlCgNY2NG1gXg0ZgSTKFYQdgaLCsrVkJ0bko1+ttBqFkrpqeALcCzqwSQtYHqaSkg+Efv2h0wJPUaJdAOvaV3jgDsvLU9DChs6osAiEzgCsq4Ywm0rI6wb0+MorQH+n6p3DI3ocoa8nfDIQ9tRjyh2VggFQw+NugF/K+7wpbFL17OlQiWJ4BCBrG5o2wod2sKpneV8q832/AsB0apCBixG/T9VY0o6B+XbArYM/vCuWqfytNbxTI/NfYkPMOWrIiPocqfBpa5fP23uoTx4o5bYjymirf3Dk8bZYpnxYPQOtoVEHiDU7Vc+Sy29S8WoBNdCh8QGDsNPsRBxDZjxOrLfnPF0CbBuBYqvbHwlzJzXEZDyK+LxKh05LRmHZLxGB6/HL3BqL0xtu+cnaUBVyxlqy7Y4dvHSBGTfBSF9vV0xjyZrj9bXQDhxxDDfHrjKViGFECJoxEZ6PJ2VVAPIlTRFipZvt9KtyRMgI0Ui4Ndq1DlMTcVlvPEP+p97FssT5tpSnwqybkByAqbupIXmlwgywe0bgb4X7deAJKICbkJzWuIHygo6Tg4rwzAuRdodlqTkI3A3rJZ20IeZQMsA1YAAoA98Ulo0lO56UVb/af1qsvLgVSpxMAAAAAElFTkSuQmCC"},a640:function(t,e,s){"use strict";var n=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&n((function(){s.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,s){var n=s("83ab"),i=s("d039"),a=s("5135"),r=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(a(o,t))return o[t];e||(e={});var s=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,h=a(e,0)?e[0]:c,u=a(e,1)?e[1]:void 0;return o[t]=!!s&&!i((function(){if(l&&!n)return!0;var t={length:-1};l?r(t,1,{enumerable:!0,get:c}):t[1]=1,s.call(t,h,u)}))}},b050:function(t,e,s){"use strict";var n=s("9200"),i=s.n(n);i.a},b51f:function(t,e,s){"use strict";var n=s("250f"),i=s.n(n);i.a},b727:function(t,e,s){var n=s("0366"),i=s("44ad"),a=s("7b0b"),r=s("50c4"),o=s("65f0"),c=[].push,l=function(t){var e=1==t,s=2==t,l=3==t,h=4==t,u=6==t,g=5==t||u;return function(d,f,m,p){for(var b,v,F=a(d),A=i(F),y=n(f,m,3),C=r(A.length),k=0,S=p||o,w=e?S(d,C):s?S(d,0):void 0;C>k;k++)if((g||k in A)&&(b=A[k],v=y(b,k,F),t))if(e)w[k]=v;else if(v)switch(t){case 3:return!0;case 5:return b;case 6:return k;case 2:c.call(w,b)}else if(h)return!1;return u?-1:l||h?h:w}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},b8a4:function(t,e,s){"use strict";var n=s("9220"),i=s.n(n);i.a},cd56:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[t.isMobile?s("MainMobile"):t._e(),t.isMobile?t._e():s("MainStandard")],1)},i=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mainMobile"},[s("div",{staticClass:"budgetPanel"},[s("BudgetDatePanel",{attrs:{onlyBudget:!0}})],1),s("div",{staticClass:"datePanel"},[s("BudgetDatePanel",{attrs:{onlyDate:!0}})],1),s("TableMobile")],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"budgetDatePanel",style:t.styleForPanel},[n("div",{staticClass:"row"},[t.onlyDate||t.onlyBudget?n("div",{staticClass:"spacer"}):t._e(),t.onlyDate?t._e():n("div",{class:t.budgetClass},[t._v("Current budget:")]),t.onlyDate?t._e():n("div",{staticClass:"budget",style:t.styleForBudget},[t._v(t._s("€"+t.budget))]),t.onlyDate||t.onlyBudget?t._e():n("div",{staticClass:"spacer"}),t.onlyBudget?t._e():n("div",{staticClass:"dateLabel"},[t._v("Date:")]),t.onlyBudget?t._e():n("div",{class:t.dateClass,style:t.styleForDate},[n("div",{staticClass:"selectedDate"},[t._v("14 June 2020")]),n("img",{staticClass:"dropIcon",attrs:{src:s("7cf1")}})]),t.onlyDate||t.onlyBudget?n("div",{staticClass:"spacer"}):t._e()])])},c=[],l=(s("4160"),s("b0c0"),s("cc71"),s("159b"),{name:"BudgetDatePanel",props:{onlyBudget:Boolean,onlyDate:Boolean},methods:{},computed:{budget:function(){var t=this.$store.state.expenses,e=0,s=this.$store.state.income,n=0;return t.forEach((function(t){e+=parseFloat(t.amount)})),s.forEach((function(t){n+=parseFloat(t.amount)})),n-e},budgetClass:function(){return this.onlyBudget?"budgetOnlyLabel":"budgetLabel"},dateClass:function(){return this.onlyDate?"dateOnly":"date"},settings:function(){return this.$store.state.settings},calculatedFontSizeDifference:function(){return parseFloat((this.settings.textSize-50)/50)},calculatedLetterSpacingDifference:function(){return parseFloat((this.settings.letterSpacing-50)/15)},calculatedWordSpacingDifference:function(){return parseFloat((this.settings.wordSpacing-50)/1)},calculatedLineSpacingDifference:function(){return parseFloat((this.settings.lineSpacing-50)/2.5)},styleForPanel:function(){return{fontSize:1.5+this.calculatedFontSizeDifference+"rem",fontWeight:this.settings.bold?"bold":"300",fontFamily:"default"==this.settings.font.name?"Bahnschrift":this.settings.font.name,letterSpacing:0+this.calculatedLetterSpacingDifference+"px",wordSpacing:0+this.calculatedWordSpacingDifference+"px",lineHeight:20+this.calculatedLineSpacingDifference+"px",color:this.colorForPanel,backgroundColor:this.backgroundForPanel}},styleForBudget:function(){return{color:this.colorForBudget}},styleForDate:function(){return{color:this.colorForDate,backgroundColor:this.backgroundForDate}},backgroundForPanel:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"white":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#fafcfe":"#1f5285":"#539fd5":"black"},colorForPanel:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"black":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#378fce":"#e6f0fb":"white":"white"},colorForBudget:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"black":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#256796":"#e6f0fb":"#bce0ff":"white"},backgroundForDate:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"white":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#004e53":"#e6f0fb":"#fbfcff":"black"},colorForDate:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"black":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#fcfdfe":"#1f5285":"#539fd5":"white"}}}),h=l,u=(s("482e"),s("2877")),g=Object(u["a"])(h,o,c,!1,null,"8d60a740",null),d=g.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tableMobile"},[n("div",{staticClass:"tabs",style:t.styleForTabs},[n("div",{class:t.isExpenses?"tab":"tab-inactive",style:t.isExpenses?t.styleForActive:t.styleForInactive,on:{click:function(e){return t.switchTabs(!0)}}},[t._v("Your expenses")]),n("div",{class:t.isExpenses?"tab-inactive":"tab",style:t.isExpenses?t.styleForInactive:t.styleForActive,on:{click:function(e){return t.switchTabs(!1)}}},[t._v("Your income")])]),n("div",{staticClass:"addButton",style:t.styleForActive,on:{click:t.openAdd}},[t._v(t._s(t.isExpenses?"Add expense":"Add income"))]),t.isExpenses?n("div",t._l(t.expensesPaged(t.page),(function(e){return n("div",{key:e.product,staticClass:"element",style:t.styleForTables},[n("div",{staticClass:"elementRow"},[n("div",[t._v(t._s(e.product))]),n("div",{staticClass:"spacer"}),n("div",[t._v(t._s(e.time))])]),n("div",{staticClass:"elementRow"},[n("div",[t._v(t._s("€"+e.amount))]),n("div",{staticClass:"spacer"}),n("div",[t._v(t._s(e.category))])]),n("div",{staticClass:"elementRow"},[n("div",{staticClass:"element-comments"},[t._v(t._s(e.comments))])])])})),0):t._e(),t.isExpenses?t._e():n("div",t._l(t.incomePaged(t.page),(function(e){return n("div",{key:e.source,staticClass:"element",style:t.styleForTables},[n("div",{staticClass:"elementRow"},[n("div",[t._v(t._s(e.source))]),n("div",{staticClass:"spacer"}),n("div",[t._v(t._s(e.time))])]),n("div",{staticClass:"elementRow"},[n("div",[t._v(t._s("€"+e.amount))]),n("div",{staticClass:"spacer"})]),n("div",{staticClass:"elementRow"},[n("div",{staticClass:"element-comments"},[t._v(t._s(e.comments))])])])})),0),n("div",{staticClass:"spacer",style:t.styleForTables}),n("div",{staticClass:"pager",style:t.styleForPager},[n("img",{staticClass:"pagerButton",attrs:{src:s("a61a")},on:{click:t.previousPage}}),n("div",{staticClass:"pagerNumber",style:t.styleForPagerNumber},[t._v(t._s(t.page)+" of "+t._s(t.isExpenses?t.expensesPageNumber:t.incomePageNumber))]),n("img",{staticClass:"pagerButton",attrs:{src:s("dadd")},on:{click:t.nextPage}})])])},m=[],p=(s("fb6a"),{name:"TableMobile",data:function(){return{isExpenses:!0,page:1,rowsPerPage:3}},created:function(){},methods:{expensesPaged:function(t){return this.expenses.slice((t-1)*this.rowsPerPage,(t-1)*this.rowsPerPage+this.rowsPerPage)},incomePaged:function(t){return this.income.slice((t-1)*this.rowsPerPage,(t-1)*this.rowsPerPage+this.rowsPerPage)},nextPage:function(){this.page!=(this.isExpenses?this.expensesPageNumber:this.incomePageNumber)&&this.page++},previousPage:function(){1!=this.page&&this.page--},switchTabs:function(t){this.isExpenses=t},openAdd:function(){this.$store.commit("openAdd",this.isExpenses)}},computed:{header:function(){return this.isExpenses?"Your expenses:":"Your income:"},expenses:function(){return this.$store.state.expenses},income:function(){return this.$store.state.income},expensesPageNumber:function(){return Math.floor(this.$store.state.expenses.length/this.rowsPerPage)+1},incomePageNumber:function(){return Math.floor(this.$store.state.income.length/this.rowsPerPage)+1},settings:function(){return this.$store.state.settings},calculatedFontSizeDifference:function(){return parseFloat((this.settings.textSize-50)/50)},calculatedLetterSpacingDifference:function(){return parseFloat((this.settings.letterSpacing-50)/15)},calculatedWordSpacingDifference:function(){return parseFloat((this.settings.wordSpacing-50)/1)},calculatedLineSpacingDifference:function(){return parseFloat((this.settings.lineSpacing-50)/2.5)},calculatedBackgroundForHeader:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"white":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#fafcfe":"#1f5285":"#539fd5":"black"},calculatedColorForHeader:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"black":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#378fce":"#e6f0fb":"white":"white"},calculatedBackgroundForInactive:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"white":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#90c1e3":"#276c9b":"#90c1e3":"black"},calculatedColorForInactive:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"black":(this.settings.contrast||"default"!=this.settings.theme.name)&&(this.settings.contrast||"dark"!=this.settings.theme.name)?this.settings.contrast||"light"!=this.settings.theme.name?null:"#23628f":"#edf4fa":"white"},calculatedColorForHeaders:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"black":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#246593":"#e6f0fb":"white":"white"},calculatedBackgroundForHeaders:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"white":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#cae1f2":"#14364f":"#81b7e0":"black"},calculatedColorForRows:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"black":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#378fce":"#e6f0fb":"#378fce":"white"},calculatedBackgroundForRows:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"white":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#fbfcff":"#1f5285":"#fbfcff":"black"},styleForTables:function(){return{fontSize:1.5+this.calculatedFontSizeDifference+"rem",fontWeight:this.settings.bold?"bold":"300",fontFamily:"default"==this.settings.font.name?"Bahnschrift":this.settings.font.name,letterSpacing:0+this.calculatedLetterSpacingDifference+"px",wordSpacing:0+this.calculatedWordSpacingDifference+"px",lineHeight:20+this.calculatedLineSpacingDifference+"px",backgroundColor:this.calculatedBackgroundForRows,color:this.calculatedColorForRows}},styleForTabs:function(){return{backgroundColor:this.calculatedBackgroundForHeader}},styleForActive:function(){return{fontSize:1.5+this.calculatedFontSizeDifference+"rem",fontWeight:this.settings.bold?"bold":"300",fontFamily:"default"==this.settings.font.name?"Bahnschrift":this.settings.font.name,letterSpacing:0+this.calculatedLetterSpacingDifference+"px",wordSpacing:0+this.calculatedWordSpacingDifference+"px",lineHeight:20+this.calculatedLineSpacingDifference+"px",backgroundColor:this.calculatedBackgroundForHeader,color:this.calculatedColorForHeader}},styleForInactive:function(){return{fontSize:1.5+this.calculatedFontSizeDifference+"rem",fontWeight:this.settings.bold?"bold":"300",fontFamily:"default"==this.settings.font.name?"Bahnschrift":this.settings.font.name,letterSpacing:0+this.calculatedLetterSpacingDifference+"px",wordSpacing:0+this.calculatedWordSpacingDifference+"px",lineHeight:20+this.calculatedLineSpacingDifference+"px",backgroundColor:this.calculatedBackgroundForInactive,color:this.calculatedColorForInactive}},styleForHeaders:function(){return{backgroundColor:this.calculatedBackgroundForHeaders,color:this.calculatedColorForHeaders}},styleForRow:function(){return{backgroundColor:this.calculatedBackgroundForRows,color:this.calculatedColorForRows}},styleForTable:function(){return{backgroundColor:this.calculatedBackgroundForRows}},styleForPager:function(){return{backgroundColor:this.calculatedBackgroundForHeaders}},styleForPagerNumber:function(){return{color:this.calculatedColorForHeaders}}}}),b=p,v=(s("b51f"),Object(u["a"])(b,f,m,!1,null,"80e463a8",null)),F=v.exports,A={name:"MainMobile",components:{BudgetDatePanel:d,TableMobile:F},created:function(){},methods:{},computed:{}},y=A,C=(s("b8a4"),Object(u["a"])(y,a,r,!1,null,"351ee124",null)),k=C.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mainStandard",style:t.mainStyle},[s("div",{staticClass:"budgetDatePanel"},[s("BudgetDatePanel")],1),s("div",{staticClass:"tableColumns"},[s("div",{staticClass:"column"},[s("TableStandard",{attrs:{isExpenses:!0}}),s("button",{staticClass:"addButton",style:t.styleForButton,on:{click:t.openAddExpense}},[t._v("Add expense")])],1),s("div",{staticClass:"spacer",style:t.spacerStyle}),s("div",{staticClass:"column"},[s("TableStandard",{attrs:{isExpenses:!1}}),s("button",{staticClass:"addButton",style:t.styleForButton,on:{click:t.openAddIncome}},[t._v("Add income")])],1)])])},w=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tableStandard",style:t.styleForTable},[n("div",{staticClass:"header",style:t.styleForHeader},[t._v(t._s(t.header))]),t.isExpenses?n("table",{staticClass:"table",style:t.styleForTables},[n("tr",{staticClass:"table-headers",style:t.styleForHeaders},[n("th",[t._v("Time")]),n("th",[t._v("Product")]),n("th",[t._v("Amount")]),n("th",[t._v("Category")]),n("th",[t._v("Comments")])]),t._l(t.expensesPaged(t.page),(function(e){return n("tr",{key:e.product,staticClass:"table-row",style:t.styleForRow},[n("td",[t._v(t._s(e.time))]),n("td",[t._v(t._s(e.product))]),n("td",[t._v(t._s("€"+e.amount))]),n("td",[t._v(t._s(e.category))]),n("td",[t._v(t._s(e.comments))])])}))],2):t._e(),t.isExpenses?t._e():n("table",{staticClass:"table",style:t.styleForTables},[n("tr",{staticClass:"table-headers",style:t.styleForHeaders},[n("th",[t._v("Time")]),n("th",[t._v("Source")]),n("th",[t._v("Amount")]),n("th",[t._v("Comments")])]),t._l(t.incomePaged(t.page),(function(e){return n("tr",{key:e.source,staticClass:"table-row",style:t.styleForRow},[n("td",[t._v(t._s(e.time))]),n("td",[t._v(t._s(e.source))]),n("td",[t._v(t._s("€"+e.amount))]),n("td",[t._v(t._s(e.comments))])])}))],2),n("div",{staticClass:"spacer"}),n("div",{staticClass:"pager",style:t.styleForPager},[n("img",{staticClass:"pagerButton",attrs:{src:s("a61a")},on:{click:t.previousPage}}),n("div",{staticClass:"pagerNumber",style:t.styleForPagerNumber},[t._v(t._s(t.page)+" of "+t._s(t.isExpenses?t.expensesPageNumber:t.incomePageNumber))]),n("img",{staticClass:"pagerButton",attrs:{src:s("dadd")},on:{click:t.nextPage}})])])},P=[],B={name:"TableStandard",props:{isExpenses:Boolean},data:function(){return{page:1,rowsPerPage:7}},created:function(){},methods:{expensesPaged:function(t){return this.expenses.slice((t-1)*this.rowsPerPage,(t-1)*this.rowsPerPage+this.rowsPerPage)},incomePaged:function(t){return this.income.slice((t-1)*this.rowsPerPage,(t-1)*this.rowsPerPage+this.rowsPerPage)},nextPage:function(){this.page!=(this.isExpenses?this.expensesPageNumber:this.incomePageNumber)&&this.page++},previousPage:function(){1!=this.page&&this.page--}},computed:{header:function(){return this.isExpenses?"Your expenses:":"Your income:"},expenses:function(){return this.$store.state.expenses},income:function(){return this.$store.state.income},expensesPageNumber:function(){return Math.floor(this.$store.state.expenses.length/this.rowsPerPage)+1},incomePageNumber:function(){return Math.floor(this.$store.state.income.length/this.rowsPerPage)+1},settings:function(){return this.$store.state.settings},calculatedFontSizeDifference:function(){return parseFloat((this.settings.textSize-50)/50)},calculatedLetterSpacingDifference:function(){return parseFloat((this.settings.letterSpacing-50)/15)},calculatedWordSpacingDifference:function(){return parseFloat((this.settings.wordSpacing-50)/1)},calculatedLineSpacingDifference:function(){return parseFloat((this.settings.lineSpacing-50)/2.5)},calculatedBackgroundForHeader:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"white":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#fafcfe":"#1f5285":"#539fd5":"black"},calculatedColorForHeader:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"black":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#378fce":"#e6f0fb":"white":"white"},calculatedColorForHeaders:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"black":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#246593":"#e6f0fb":"white":"white"},calculatedBackgroundForHeaders:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"white":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#cae1f2":"#14364f":"#81b7e0":"black"},calculatedColorForRows:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"black":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#378fce":"#e6f0fb":"#378fce":"white"},calculatedBackgroundForRows:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"white":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#fbfcff":"#1f5285":"#fbfcff":"black"},styleForTables:function(){return{fontSize:.7+this.calculatedFontSizeDifference+"rem",fontWeight:this.settings.bold?"bold":"300",fontFamily:"default"==this.settings.font.name?"Bahnschrift":this.settings.font.name,letterSpacing:0+this.calculatedLetterSpacingDifference+"px",wordSpacing:0+this.calculatedWordSpacingDifference+"px",lineHeight:20+this.calculatedLineSpacingDifference+"px"}},styleForHeader:function(){return{fontSize:1.5+this.calculatedFontSizeDifference+"rem",fontWeight:this.settings.bold?"bold":"300",fontFamily:"default"==this.settings.font.name?"Bahnschrift":this.settings.font.name,letterSpacing:0+this.calculatedLetterSpacingDifference+"px",wordSpacing:0+this.calculatedWordSpacingDifference+"px",lineHeight:20+this.calculatedLineSpacingDifference+"px",backgroundColor:this.calculatedBackgroundForHeader,color:this.calculatedColorForHeader}},styleForHeaders:function(){return{backgroundColor:this.calculatedBackgroundForHeaders,color:this.calculatedColorForHeaders}},styleForRow:function(){return{backgroundColor:this.calculatedBackgroundForRows,color:this.calculatedColorForRows}},styleForTable:function(){return{backgroundColor:this.calculatedBackgroundForRows}},styleForPager:function(){return{backgroundColor:this.calculatedBackgroundForHeaders}},styleForPagerNumber:function(){return{color:this.calculatedColorForHeaders}}}},D=B,_=(s("d0b1"),Object(u["a"])(D,x,P,!1,null,"d6866dcc",null)),L=_.exports,E={name:"MainStandard",components:{BudgetDatePanel:d,TableStandard:L},created:function(){},methods:{openAddExpense:function(){this.$store.commit("openAdd",!0)},openAddIncome:function(){this.$store.commit("openAdd",!1)}},computed:{calculatedWidthForMain:function(){return(this.$store.state.settings.lineLengths-50)/10},calculatedFlexForSpacer:function(){return(this.$store.state.settings.lineLengths-50)/50},settings:function(){return this.$store.state.settings},colorForButton:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"black":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#378fce":"#e6f0fb":"white":"white"},backgroundColorForButton:function(){return!this.settings.contrast||"default"!=this.settings.theme.name&&"dark"!=this.settings.theme.name?this.settings.contrast&&"light"==this.settings.theme.name?"white":this.settings.contrast||"default"!=this.settings.theme.name?this.settings.contrast||"dark"!=this.settings.theme.name?this.settings.contrast||"light"!=this.settings.theme.name?null:"#fafcfe":"#1f5285":"#539fd5":"black"},styleForButton:function(){return{color:this.colorForButton,backgroundColor:this.backgroundColorForButton}},mainStyle:function(){return{width:90+this.calculatedWidthForMain+"%"}},spacerStyle:function(){return{flex:1-this.calculatedFlexForSpacer}}}},M=E,R=(s("b050"),Object(u["a"])(M,S,w,!1,null,"1442994a",null)),T=R.exports,H={name:"Main",components:{MainMobile:k,MainStandard:T},created:function(){this.calculateIfMobile(),window.addEventListener("resize",this.onWindowResize)},methods:{calculateIfMobile:function(){return this.$store.state.isMobileVersion,window.innerWidth,this.$store.commit("setMobileVersion",window.innerWidth<700),window.innerWidth<700},onWindowResize:function(){this.calculateIfMobile()}},computed:{isMobile:function(){return this.$store.state.isMobileVersion}}},N=H,V=Object(u["a"])(N,n,i,!1,null,null,null);e["default"]=V.exports},d0b1:function(t,e,s){"use strict";var n=s("304e"),i=s.n(n);i.a},dadd:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAABcRgAAXEYBFJRDQQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIaSURBVDiNnZXNblJRFIW/faAKxrZYiAQENAh1pCHamHTiQG1iqiYajRMfxGfQPogDSU3UqKCJL9DEYB1VMFoawaZNaPAHKNztwEIL3MtP1+zeu8539l43Zx/BQWsbmjKG+wLXFWIofoRtgXWF98biWTwiObu10vuiUNSkGp4Ad5w27EhZRnmUiEreEZr/oTdQngK+ocB9VRUeJk/Jyz5ooaiLangBuMYAttXCcDsRkjcd6F7LK8BUVwmNXRpNxX/syCjgiraYS8akYADUsNQLBKg1LTKFEqs/K6gOhfowPAaQtQ1NGeGjnWvrT51MvgxA6LiH+WgA78TAdNRYpIwLHgytASj9qvH6S4lS9e8gm7QM94xluObo6HmuNVt8+LZJruwch8CCESU2SqVtqcLnzR2yhTK/G007S8wAM46AAfB23vWm1fspYBC2DwP1eSa4Gg9y1G369nMrFAVC41DPBSa5GDqBkb5TDrDuFsgCl0dhetwu5iN+wlNexw4UssZYpJ1r2ldk0sut2fBAIKAui2UTj0gO5bm9RRGEC8Fprpw5aZdfl0RIx6PySQDyRU3gYgVl+qBpp75Ly1JmvKOdfcvNpdmgfO0kvTf2XnHIKaXCzWRYMgCdfhJheavCIlAZE1hVuNsGdkEBkmHJaos5kZF+noqQttykDg5osLlO2ioU9bz1/45aAE4DAWAL+K7wzlikz0Zl1W7tP9M7v5798BkZAAAAAElFTkSuQmCC"},e8b5:function(t,e,s){var n=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,e,s){"use strict";var n=s("23e7"),i=s("861d"),a=s("e8b5"),r=s("23cb"),o=s("50c4"),c=s("fc6a"),l=s("8418"),h=s("b622"),u=s("1dde"),g=s("ae40"),d=u("slice"),f=g("slice",{ACCESSORS:!0,0:0,1:2}),m=h("species"),p=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!d||!f},{slice:function(t,e){var s,n,h,u=c(this),g=o(u.length),d=r(t,g),f=r(void 0===e?g:e,g);if(a(u)&&(s=u.constructor,"function"!=typeof s||s!==Array&&!a(s.prototype)?i(s)&&(s=s[m],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return p.call(u,d,f);for(n=new(void 0===s?Array:s)(b(f-d,0)),h=0;d<f;d++,h++)d in u&&l(n,h,u[d]);return n.length=h,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.84eab4f0.js.map