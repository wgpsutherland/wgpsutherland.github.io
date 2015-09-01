/**
 * @license RequireJS text 2.0.13 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

define("text",["module"],function(e){"use strict";var t,n,r,i,s,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],u=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,f=typeof location!="undefined"&&location.href,l=f&&location.protocol&&location.protocol.replace(/\:/,""),c=f&&location.hostname,h=f&&(location.port||undefined),p={},d=e.config&&e.config()||{};t={version:"2.0.13",strip:function(e){if(e){e=e.replace(u,"");var t=e.match(a);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:d.createXhr||function(){var e,t,n;if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;if(typeof ActiveXObject!="undefined")for(t=0;t<3;t+=1){n=o[t];try{e=new ActiveXObject(n)}catch(r){}if(e){o=[n];break}}return e},parseName:function(e){var t,n,r,i=!1,s=e.lastIndexOf("."),o=e.indexOf("./")===0||e.indexOf("../")===0;return s!==-1&&(!o||s>1)?(t=e.substring(0,s),n=e.substring(s+1)):t=e,r=n||t,s=r.indexOf("!"),s!==-1&&(i=r.substring(s+1)==="strip",r=r.substring(0,s),n?n=r:t=r),{moduleName:t,ext:n,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,r,i){var s,o,u,a=t.xdRegExp.exec(e);return a?(s=a[2],o=a[3],o=o.split(":"),u=o[1],o=o[0],(!s||s===n)&&(!o||o.toLowerCase()===r.toLowerCase())&&(!u&&!o||u===i)):!0},finishLoad:function(e,n,r,i){r=n?t.strip(r):r,d.isBuild&&(p[e]=r),i(r)},load:function(e,n,r,i){if(i&&i.isBuild&&!i.inlineText){r();return}d.isBuild=i&&i.isBuild;var s=t.parseName(e),o=s.moduleName+(s.ext?"."+s.ext:""),u=n.toUrl(o),a=d.useXhr||t.useXhr;if(u.indexOf("empty:")===0){r();return}!f||a(u,l,c,h)?t.get(u,function(n){t.finishLoad(e,s.strip,n,r)},function(e){r.error&&r.error(e)}):n([o],function(e){t.finishLoad(s.moduleName+"."+s.ext,s.strip,e,r)})},write:function(e,n,r,i){if(p.hasOwnProperty(n)){var s=t.jsEscape(p[n]);r.asModule(e+"!"+n,"define(function () { return '"+s+"';});\n")}},writeFile:function(e,n,r,i,s){var o=t.parseName(n),u=o.ext?"."+o.ext:"",a=o.moduleName+u,f=r.toUrl(o.moduleName+u)+".js";t.load(a,r,function(n){var r=function(e){return i(f,e)};r.asModule=function(e,t){return i.asModule(e,f,t)},t.write(e,a,r,s)},s)}};if(d.env==="node"||!d.env&&typeof process!="undefined"&&process.versions&&!!process.versions.node&&!process.versions["node-webkit"])n=require.nodeRequire("fs"),t.get=function(e,t,r){try{var i=n.readFileSync(e,"utf8");i[0]==="﻿"&&(i=i.substring(1)),t(i)}catch(s){r&&r(s)}};else if(d.env==="xhr"||!d.env&&t.createXhr())t.get=function(e,n,r,i){var s=t.createXhr(),o;s.open("GET",e,!0);if(i)for(o in i)i.hasOwnProperty(o)&&s.setRequestHeader(o.toLowerCase(),i[o]);d.onXhr&&d.onXhr(s,e),s.onreadystatechange=function(t){var i,o;s.readyState===4&&(i=s.status||0,i>399&&i<600?(o=new Error(e+" HTTP status: "+i),o.xhr=s,r&&r(o)):n(s.responseText),d.onXhrComplete&&d.onXhrComplete(s,e))},s.send(null)};else if(d.env==="rhino"||!d.env&&typeof Packages!="undefined"&&typeof java!="undefined")t.get=function(e,t){var n,r,i="utf-8",s=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),u=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s),i)),a="";try{n=new java.lang.StringBuffer,r=u.readLine(),r&&r.length()&&r.charAt(0)===65279&&(r=r.substring(1)),r!==null&&n.append(r);while((r=u.readLine())!==null)n.append(o),n.append(r);a=String(n.toString())}finally{u.close()}t(a)};else if(d.env==="xpconnect"||!d.env&&typeof Components!="undefined"&&Components.classes&&Components.interfaces)r=Components.classes,i=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),s="@mozilla.org/windows-registry-key;1"in r,t.get=function(e,t){var n,o,u,a={};s&&(e=e.replace(/\//g,"\\")),u=new FileUtils.File(e);try{n=r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),n.init(u,1,0,!1),o=r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),o.init(n,"utf-8",n.available(),i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),o.readString(n.available(),a),o.close(),n.close(),t(a.value)}catch(f){throw new Error((u&&u.path||"")+": "+f)}};return t}),define("text!templates/pages/Home.html",[],function(){return""}),define("text!templates/sections/HomeTitle.html",[],function(){return'<!-- IMPORTANT: formatting must be kept like this to avoid the html being rendered with unwanted white space-->\r\n<div class="row">\r\n    <div class="home-title-name">\r\n\r\n        <span class="home-title-name-follow"></span>\r\n        <% _.each(title.split(\'\'), function(letter, i) {\r\n        %><span class="title-letter-<%= i %>"></span><%\r\n        }); %><span class="home-title-name-type-caret type-caret">|</span>\r\n\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <div class="home-links-div">\r\n        <ul class="home-links">\r\n\r\n            <!-- empty list and link shells -->\r\n            <% _.each(links, function(link, i) {\r\n            %><li class="li-<%=link%>">\r\n                <a class="link link-<%=link%>" href="#/<%=link%>">\r\n\r\n                    <!-- empty span for each letter in the link name -->\r\n                    <% _.each(link.split(\'\'), function(letter, j) {\r\n                    %><span class="links-letter-<%= j %>"></span><%\r\n                    }); %>\r\n\r\n                </a>\r\n\r\n            <!-- add empty spans for \' // \' insertion -->\r\n            </li><% if(i !== links.length - 1) {\r\n            %><li class="slash-list-<%= i %>"\r\n                ><span class="slash-0"></span\r\n                ><span class="slash-1"></span\r\n                ><span class="slash-2"></span\r\n                ><span class="slash-3"></span\r\n            ></li><% }\r\n            }); %><span class="links-type-caret type-caret clear">|</span>\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n'}),define("views/sections/HomeTitle",["jquery","underscore","backbone","text!templates/sections/HomeTitle.html"],function(e,t,n,r){return n.View.extend({className:"title-view full-height-view",template:t.template(r),initialize:function(){console.log("Home title view initialising")},render:function(){var e=this.template({title:this.name,links:this.homeLinks});this.$el.html(e),this.verticallyAlign(),this.type()},name:"Will Sutherland",homeLinks:["projects"],time:0,speed:100,verticallyAlign:function(){this.$(".home-title-name").css({"margin-top":e(".page").outerHeight()/2-100})},type:function(){t.each(this.name,function(e,t){this.addWithTimeout(".title-letter-"+t,e,this.speed)},this),this.toggleWithTimeout(".type-caret","clear",this.speed),t.each(this.homeLinks,function(e,n){t.each(e.split(""),function(t,n){this.addWithTimeout(".link-"+e+" > .links-letter-"+n,t,this.speed)},this),n!==this.homeLinks.length-1&&this.addSlashes(n)},this),this.toggleWithTimeout(".links-type-caret","blinker",this.speed*4)},addSlashes:function(e){var n=["&nbsp;","/","/","&nbsp;"];t.each(n,function(t,n){this.addWithTimeout(".slash-list-"+e+" > .slash-"+n,t,this.speed)},this)},addWithTimeout:function(e,n,r){setTimeout(t.bind(function(){this.$(e).html(n)},this),this.time+=r)},toggleWithTimeout:function(e,n,r){setTimeout(t.bind(function(){this.$(e).toggleClass(n)},this),this.time+=r)}})}),define("text!templates/sections/Me.html",[],function(){return'<div class="container">\r\n\r\n    <h1 class="view-header">ABOUT</h1>\r\n\r\n    <!-- picture -->\r\n    <div class="me-view-img-container">\r\n        <img src="public/images/me.png" alt="a photo of Will Sutherland" class="img-circle me-view-img">\r\n    </div>\r\n\r\n    <!-- social media -->\r\n    <div class="row me-view-social-wrapper">\r\n        <div class="col-sm-4"></div>\r\n\r\n        <div class="col-sm-4">\r\n            <% _.each(media, function(item) { %>\r\n            <div class="col-xs-3">\r\n                <a href="<%= item.link %>">\r\n            <span class="fa fa-<%= item.icon %>">\r\n\r\n            </span>\r\n                </a>\r\n            </div>\r\n            <% }); %>\r\n        </div>\r\n\r\n        <div class="col-sm-4"></div>\r\n    </div>\r\n\r\n    <!-- text bio -->\r\n    <div class="row">\r\n        <div class="col-md-2"></div>\r\n        <div class="col-md-8">\r\n            <!-- bio -->\r\n            <% _.each(description, function(line, i) { %>\r\n\r\n                <p><%= line %></p>\r\n\r\n            <% }); %>\r\n        </div>\r\n        <div class="col-md-2"></div>\r\n    </div>\r\n\r\n</div>\r\n'}),define("models/Info",["underscore","backbone"],function(e,t){return t.Model.extend({url:"public/data/me.json",initialize:function(){this.fetch()},parse:function(e){return e.info}})}),define("views/sections/Me",["jquery","underscore","backbone","text!templates/sections/Me.html","../../models/Info"],function(e,t,n,r,i){return n.View.extend({className:"me home-view",template:t.template(r),initialize:function(){console.log("Me view initialising"),this.infoModel=new i,this.listenTo(this.infoModel,"change",this.render)},render:function(){var e=this.infoModel,t=this.template({description:e.get("description"),media:e.get("social_media")});this.$el.html(t)}})}),define("text!templates/sections/Awards.html",[],function(){return'<div class="container">\r\n\r\n    <h1 class="view-header">AWARDS</h1>\r\n\r\n    <div class="row">\r\n\r\n        <% awardsCollection.each(function(award, i) { %>\r\n\r\n        <% if(i % 3 === 0) { %>\r\n            <div class="row award-row">\r\n        <% } %>\r\n\r\n        <div class="col-xs-4 award-outer-wrapper">\r\n            <div class="award-inner-wrapper">\r\n                <div class="award-tile-text">\r\n                    <p><strong><%= award.get(\'name\') %></strong></p>\r\n                    <p><%= award.get(\'reason\') %></p>\r\n                </div>\r\n            </div>\r\n            <img src="public/images/<%= award.get(\'image\') %>.png" alt="a logo" class="award-img">\r\n        </div>\r\n\r\n        <% if((i + 1) % 3 === 0 || i === awardsCollection.length - 1) { %>\r\n            </div>\r\n        <% } %>\r\n\r\n        <% }); %>\r\n\r\n    </div>\r\n\r\n</div>'}),define("models/Award",["underscore","backbone"],function(e,t){return t.Model.extend({})}),define("collections/Awards",["underscore","backbone","models/Award"],function(e,t,n){return t.Collection.extend({initialize:function(){this.fetch()},url:function(){return"public/data/me.json"},parse:function(e){return e.awards},model:n})}),define("views/sections/Awards",["jquery","underscore","backbone","text!templates/sections/Awards.html","../../collections/Awards"],function(e,t,n,r,i){return n.View.extend({className:"awards home-view",template:t.template(r),initialize:function(){console.log("Awards view initialising"),this.awardsCollection=new i,this.listenTo(this.awardsCollection,"add",this.render)},render:function(){var e=this.template({awardsCollection:this.awardsCollection});this.$el.html(e)}})}),define("text!templates/sections/Education.html",[],function(){return'<div class="container">\r\n    <h1 class="view-header">EDUCATION</h1>\r\n</div>'}),define("views/sections/Education",["jquery","underscore","backbone","text!templates/sections/Education.html"],function(e,t,n,r){return n.View.extend({className:"education full-height-view home-view",template:t.template(r),initialize:function(){console.log("Education view initialising")},render:function(){this.$el.html(this.template)}})}),define("text!templates/sections/Employment.html",[],function(){return'<div class="container">\r\n    <h1 class="view-header">EMPLOYMENT</h1>\r\n</div>'}),define("views/sections/Employment",["jquery","underscore","backbone","text!templates/sections/Employment.html"],function(e,t,n,r){return n.View.extend({className:"employment full-height-view home-view",template:t.template(r),initialize:function(){console.log("Employment view initialising")},render:function(){this.$el.html(this.template)}})}),define("text!templates/sections/Skills.html",[],function(){return'<div class="container">\r\n    <h1 class="view-header">SKILLS</h1>\r\n</div>'}),define("views/sections/Skills",["jquery","underscore","backbone","text!templates/sections/Skills.html"],function(e,t,n,r){return n.View.extend({className:"skills full-height-view home-view",template:t.template(r),initialize:function(){console.log("Skills view initialising")},render:function(){this.$el.html(this.template)}})}),define("views/pages/Home",["jquery","underscore","backbone","text!templates/pages/Home.html","views/sections/HomeTitle","views/sections/Me","views/sections/Awards","views/sections/Education","views/sections/Employment","views/sections/Skills"],function(e,t,n,r,i,s,o,u,a,f){return n.View.extend({className:"full-height-view home-page",template:t.template(r),contentViews:{awards:new o,education:new u,employment:new a,skills:new f},initialize:function(){console.log("Home page initialising")},render:function(){this.$el.html(this.template),t.each(this.contentViews,function(e){e.render(),this.$el.append(e.$el)},this)}})}),define("text!templates/pages/Projects.html",[],function(){return""}),define("views/pages/Projects",["jquery","underscore","backbone","text!templates/pages/Projects.html"],function(e,t,n,r){return n.View.extend({className:"fill background",template:t.template(r),initialize:function(){console.log("Projects page initialising")},render:function(){this.$el.html(this.template)}})}),define("router",["jquery","underscore","backbone","views/pages/Home","views/pages/Projects"],function(e,t,n,r,i){var s=n.Router.extend({routes:{"":"home",projects:"projects"}});return{initialize:function(){function l(n){e('.page > [data-name="'+n+'"]').length||(f[n].render(),e(".page").append(f[n].$el.attr("data-name",n))),t.each(f,function(e,t){e.$el.toggle(t===n)})}var o=new s,u=new r,a=new i,f={home:u,projects:a};o.on("route",function(e){l(e)}),n.history.start({pushState:!1})}}}),require.config({paths:{jquery:["//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min","./assets/jquery-2.1.4.min"],underscore:["//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min","./assets/underscore-min"],backbone:["//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.1/backbone-min","./assets/backbone-min"],text:"./assets/text",templates:"../templates"},shim:{backbone:{deps:["underscore"]},underscore:{exports:"_"}}}),require(["jquery"],function(e){}),require(["underscore"],function(e){}),require(["backbone"],function(e){}),require(["router"],function(e){e.initialize()}),define("main",function(){});