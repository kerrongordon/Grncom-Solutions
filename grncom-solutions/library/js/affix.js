/* ========================================================================
 * Bootstrap: affix.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#affix
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function(e){"use strict";var t=function(n,r){this.options=e.extend({},t.DEFAULTS,r);this.$window=e(window).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this));this.$element=e(n);this.affixed=this.unpin=null;this.checkPosition()};t.RESET="affix affix-top affix-bottom";t.DEFAULTS={offset:0};t.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var n=e(document).height();var r=this.$window.scrollTop();var i=this.$element.offset();var s=this.options.offset;var o=s.top;var u=s.bottom;if(typeof s!="object")u=o=s;if(typeof o=="function")o=s.top();if(typeof u=="function")u=s.bottom();var a=this.unpin!=null&&r+this.unpin<=i.top?false:u!=null&&i.top+this.$element.height()>=n-u?"bottom":o!=null&&r<=o?"top":false;if(this.affixed===a)return;if(this.unpin)this.$element.css("top","");this.affixed=a;this.unpin=a=="bottom"?i.top-r:null;this.$element.removeClass(t.RESET).addClass("affix"+(a?"-"+a:""));if(a=="bottom"){this.$element.offset({top:document.body.offsetHeight-u-this.$element.height()})}};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this);var i=r.data("bs.affix");var s=typeof n=="object"&&n;if(!i)r.data("bs.affix",i=new t(this,s));if(typeof n=="string")i[n]()})};e.fn.affix.Constructor=t;e.fn.affix.noConflict=function(){e.fn.affix=n;return this};e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this);var n=t.data();n.offset=n.offset||{};if(n.offsetBottom)n.offset.bottom=n.offsetBottom;if(n.offsetTop)n.offset.top=n.offsetTop;t.affix(n)})})}(window.jQuery)