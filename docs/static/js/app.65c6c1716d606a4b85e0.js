webpackJsonp([1],{"59w/":function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),a=(e("thjQ"),e("mtWM")),o=e.n(a);var l={getBooks:function(){return o.a.get("static/books.json").then(function(t){return t.data})},getEmptyBook:function(){return{title:"",author:"",img:"",date:""}}},n=e("mvHQ"),c=e.n(n),r={data:function(){return{book:JSON.parse(c()(this.bookToEdit)),isTitleValid:!1,isAuthorValid:!1,isImgValid:!1,isDateValid:!1}},methods:{cancleClicked:function(){this.$emit("closeModal")},validateTitle:function(){this.book.title?this.isTitleValid=!0:this.isTitleValid=!1},validateTitleDup:function(){this.$emit("checkTitleDup",this.book)},handleTitleValidation:function(){this.validateTitle(),this.validateTitleDup()},validateAuthor:function(){this.book.author?this.isAuthorValid=!0:this.isAuthorValid=!1},validateImg:function(){this.book.img?this.isImgValid=!0:this.isImgValid=!1},validateDate:function(){this.book.date&&("invalid Date"!==new Date(this.book.date)?this.isDateValid=!0:this.isDateValid=!1)},checkBools:function(){return!!(this.isTitleValid&&this.isAuthorValid&&this.isImgValid&&this.isDateValid)},validateAll:function(){this.validateTitle(),this.validateAuthor(),this.validateImg(),this.validateDate()},saveClicked:function(){this.checkBools()&&this.$emit("bookSaveClicked",this.book)}},mounted:function(){this.bookToEdit.id&&this.validateAll()},props:{bookToEdit:Object,isDuplicateTitle:Boolean}},d={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.bookToEdit?e("section",[e("div",{staticClass:"modal is-active"},[e("div",{staticClass:"modal-background"}),t._v(" "),e("div",{staticClass:"modal-content modalBackground"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label formLabel"},[t._v("Book Title")]),t._v(" "),e("div",{staticClass:"control has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.book.title,expression:"book.title"}],staticClass:"input",class:{"is-danger":!t.isTitleValid||t.isDuplicateTitle},attrs:{type:"text",placeholder:"Book Title"},domProps:{value:t.book.title},on:{keyup:t.handleTitleValidation,input:function(i){i.target.composing||t.$set(t.book,"title",i.target.value)}}}),t._v(" "),e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fas fa-check",class:{greenColor:t.isTitleValid&&!t.isDuplicateTitle}})])]),t._v(" "),t.isDuplicateTitle?e("p",{staticClass:"help is-danger"},[t._v("Title Already Exists")]):t._e()]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label formLabel"},[t._v("Author")]),t._v(" "),e("div",{staticClass:"control has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.book.author,expression:"book.author"}],staticClass:"input",class:{"is-danger":!t.isAuthorValid},attrs:{type:"text",placeholder:"Book Name"},domProps:{value:t.book.author},on:{keyup:t.validateAuthor,input:function(i){i.target.composing||t.$set(t.book,"author",i.target.value)}}}),t._v(" "),e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fas fa-check",class:{greenColor:t.isAuthorValid}})])])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label formLabel"},[t._v("Img Url")]),t._v(" "),e("div",{staticClass:"control has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.book.img,expression:"book.img"}],staticClass:"input",class:{"is-danger":!t.isImgValid},attrs:{type:"text",placeholder:"Img Url"},domProps:{value:t.book.img},on:{keyup:t.validateImg,input:function(i){i.target.composing||t.$set(t.book,"img",i.target.value)}}}),t._v(" "),e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fas fa-check",class:{greenColor:t.isImgValid}})])])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label formLabel"},[t._v("Date")]),t._v(" "),e("div",{staticClass:"control has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.book.date,expression:"book.date"}],staticClass:"input",class:{"is-danger":!t.isDateValid},attrs:{type:"date",placeholder:"Book Name"},domProps:{value:t.book.date},on:{input:[function(i){i.target.composing||t.$set(t.book,"date",i.target.value)},t.validateDate],keyup:t.validateDate}}),t._v(" "),e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fas fa-check",class:{greenColor:t.isDateValid}})])]),t._v(" "),t.isDateValid?t._e():e("p",{staticClass:"help is-danger"},[t._v("Enter Date In Format : DD/MM/YYYY")])]),t._v(" "),e("div",{staticClass:"btnContainer"},[e("button",{staticClass:"button is-primary",attrs:{disabled:!t.checkBools()},on:{click:t.saveClicked}},[t._v("Save")]),t._v(" "),e("button",{staticClass:"button is-danger",on:{click:t.cancleClicked}},[t._v("Cancle")])])]),t._v(" "),e("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:t.cancleClicked}})])]):t._e()},staticRenderFns:[]};var u=e("VU/8")(r,d,!1,function(t){e("59w/")},"data-v-d327f7e2",null).exports,h={methods:{deleteClicked:function(){this.$emit("deleteBookClicked",this.item.id)},editClicked:function(){this.$emit("editBookClicked",this.item)}},props:{item:Object},filters:{capitalize:function(t){return t?(t=(t=t.match(/\w+/g).join(" ")).toString().toLowerCase()).replace(/\w\S*/g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}):""},yearOnly:function(t){return new Date(t).getFullYear()}}},v={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.item?e("section",{staticClass:"card"},[e("img",{staticClass:"card-image",attrs:{src:t.item.img}}),t._v(" "),e("div",{staticClass:"card-content"},[e("p",{staticClass:"bookTitle"},[t._v(t._s(t._f("capitalize")(t.item.title)))]),t._v(" "),e("time",{staticClass:"bookSubtitle",attrs:{datetime:"2016-1-1"}},[t._v(t._s(t._f("yearOnly")(t.item.date)))]),t._v(" "),e("p",{staticClass:"bookSubtitle"},[t._v(t._s(t._f("capitalize")(t.item.author)))])]),t._v(" "),e("div",{staticClass:"btnsContainer"},[e("a",{staticClass:"buttonTransparent editBtn",on:{click:t.editClicked}},[e("i",{staticClass:"far fa-edit"})]),t._v(" "),e("a",{staticClass:"buttonTransparent deleteBtn",on:{click:t.deleteClicked}},[e("i",{staticClass:"far fa-trash-alt"})])])]):t._e()},staticRenderFns:[]};var k={data:function(){return{books:[],selectedBook:null,isModal:!1,isDupTitle:!1}},components:{Edit:u,Card:e("VU/8")(h,v,!1,function(t){e("rxQB")},"data-v-13f035e2",null).exports},methods:{getBooksFromService:function(){var t=this;l.getBooks().then(function(i){t.books=i})},toggleModal:function(){this.isModal=!this.isModal,!this.isModal&&this.selectedBook?(this.selectedBook=null,this.isDupTitle=!1):this.selectedBook=l.getEmptyBook()},getLastId:function(){for(var t=0,i=0;i<this.books.length;i++){var e=this.books[i];e.id>t&&(t=e.id)}return t},saveBook:function(t){if(this.toggleModal(),t.id){var i=this.getBookIndexById(t.id);this.books.splice(i,1,t)}else t.id=this.getLastId()+1,this.books.push(t)},editBook:function(t){this.selectedBook=t,this.isModal=!0},deleteBookById:function(t){var i=this;swal({title:"Are You Sure You Want To Delete Item Number "+t+"?",icon:"warning",dangerMode:!0}).then(function(e){if(e){var s=i.getBookIndexById(t);i.books.splice(s,1),swal("Deleted!","Your imaginary file has been deleted!","success")}})},getBookIndexById:function(t){for(var i=-1,e=0;e<this.books.length;e++){t===this.books[e].id&&(i=e)}return i},checkForDup:function(t){this.isDupTitle=!1;for(var i=0;i<this.books.length;i++){var e=this.books[i];if(t.title.toLowerCase()===e.title.toLowerCase()){if(t.id===e.id)continue;this.isDupTitle=!0}}}},created:function(){this.getBooksFromService()}},m={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"listCompContainer"},[e("h1",{staticClass:"headLine"},[t._v("Vue Library")]),t._v(" "),e("div",{staticClass:"addDiv"},[e("button",{staticClass:"button is-primary",on:{click:t.toggleModal}},[t._v("Add New Book")])]),t._v(" "),t.isModal?e("Edit",{attrs:{bookToEdit:t.selectedBook,isDuplicateTitle:t.isDupTitle},on:{closeModal:t.toggleModal,bookSaveClicked:t.saveBook,checkTitleDup:t.checkForDup}}):t._e(),t._v(" "),e("div",{staticClass:"listContainer"},t._l(t.books,function(i){return e("Card",{key:i.id,attrs:{item:i},on:{editBookClicked:t.editBook,deleteBookClicked:t.deleteBookById}})}))],1)},staticRenderFns:[]};var p={name:"app",components:{CardList:e("VU/8")(k,m,!1,function(t){e("hBbV")},"data-v-c8ab85e2",null).exports}},f={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("CardList")],1)},staticRenderFns:[]};var b=e("VU/8")(p,f,!1,function(t){e("ZuLG")},null,null).exports;new s.a({el:"#app",template:"<App/>",components:{App:b}})},ZuLG:function(t,i){},hBbV:function(t,i){},rxQB:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.65c6c1716d606a4b85e0.js.map