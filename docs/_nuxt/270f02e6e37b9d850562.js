(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{206:function(t,e,n){"use strict";n.r(e);n(73);var o={head:function(){return{title:"Мое Портфолио",meta:[{hid:"og:title",name:"og:title",content:"Мое Портфолио"},{hid:"description",name:"description",content:"Список работ"},{hid:"og:description",name:"og:description",content:"Список работ"}]}},fetch:function(t){t.store.dispatch("setH1","Портфолио")},created:function(){this.$store.dispatch("posts/nuxtServerInit")},computed:{posts:function(){return this.$store.state.posts.postsLoaded}}},c=n(2),component=Object(c.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("postsList",{attrs:{posts:this.posts}})],1)},[],!1,null,null,null);e.default=component.exports}}]);