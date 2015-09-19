/**
 * @license RequireJS text 2.0.13 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

define("text",["module"],function(e){var t,n,r,i,s,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],u=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,f=typeof location!="undefined"&&location.href,l=f&&location.protocol&&location.protocol.replace(/\:/,""),c=f&&location.hostname,h=f&&(location.port||undefined),p={},d=e.config&&e.config()||{};t={version:"2.0.13",strip:function(e){if(e){e=e.replace(u,"");var t=e.match(a);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:d.createXhr||function(){var e,t,n;if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;if(typeof ActiveXObject!="undefined")for(t=0;t<3;t+=1){n=o[t];try{e=new ActiveXObject(n)}catch(r){}if(e){o=[n];break}}return e},parseName:function(e){var t,n,r,i=!1,s=e.lastIndexOf("."),o=e.indexOf("./")===0||e.indexOf("../")===0;return s!==-1&&(!o||s>1)?(t=e.substring(0,s),n=e.substring(s+1)):t=e,r=n||t,s=r.indexOf("!"),s!==-1&&(i=r.substring(s+1)==="strip",r=r.substring(0,s),n?n=r:t=r),{moduleName:t,ext:n,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,r,i){var s,o,u,a=t.xdRegExp.exec(e);return a?(s=a[2],o=a[3],o=o.split(":"),u=o[1],o=o[0],(!s||s===n)&&(!o||o.toLowerCase()===r.toLowerCase())&&(!u&&!o||u===i)):!0},finishLoad:function(e,n,r,i){r=n?t.strip(r):r,d.isBuild&&(p[e]=r),i(r)},load:function(e,n,r,i){if(i&&i.isBuild&&!i.inlineText){r();return}d.isBuild=i&&i.isBuild;var s=t.parseName(e),o=s.moduleName+(s.ext?"."+s.ext:""),u=n.toUrl(o),a=d.useXhr||t.useXhr;if(u.indexOf("empty:")===0){r();return}!f||a(u,l,c,h)?t.get(u,function(n){t.finishLoad(e,s.strip,n,r)},function(e){r.error&&r.error(e)}):n([o],function(e){t.finishLoad(s.moduleName+"."+s.ext,s.strip,e,r)})},write:function(e,n,r,i){if(p.hasOwnProperty(n)){var s=t.jsEscape(p[n]);r.asModule(e+"!"+n,"define(function () { return '"+s+"';});\n")}},writeFile:function(e,n,r,i,s){var o=t.parseName(n),u=o.ext?"."+o.ext:"",a=o.moduleName+u,f=r.toUrl(o.moduleName+u)+".js";t.load(a,r,function(n){var r=function(e){return i(f,e)};r.asModule=function(e,t){return i.asModule(e,f,t)},t.write(e,a,r,s)},s)}};if(d.env==="node"||!d.env&&typeof process!="undefined"&&process.versions&&!!process.versions.node&&!process.versions["node-webkit"])n=require.nodeRequire("fs"),t.get=function(e,t,r){try{var i=n.readFileSync(e,"utf8");i[0]==="﻿"&&(i=i.substring(1)),t(i)}catch(s){r&&r(s)}};else if(d.env==="xhr"||!d.env&&t.createXhr())t.get=function(e,n,r,i){var s=t.createXhr(),o;s.open("GET",e,!0);if(i)for(o in i)i.hasOwnProperty(o)&&s.setRequestHeader(o.toLowerCase(),i[o]);d.onXhr&&d.onXhr(s,e),s.onreadystatechange=function(t){var i,o;s.readyState===4&&(i=s.status||0,i>399&&i<600?(o=new Error(e+" HTTP status: "+i),o.xhr=s,r&&r(o)):n(s.responseText),d.onXhrComplete&&d.onXhrComplete(s,e))},s.send(null)};else if(d.env==="rhino"||!d.env&&typeof Packages!="undefined"&&typeof java!="undefined")t.get=function(e,t){var n,r,i="utf-8",s=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),u=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s),i)),a="";try{n=new java.lang.StringBuffer,r=u.readLine(),r&&r.length()&&r.charAt(0)===65279&&(r=r.substring(1)),r!==null&&n.append(r);while((r=u.readLine())!==null)n.append(o),n.append(r);a=String(n.toString())}finally{u.close()}t(a)};else if(d.env==="xpconnect"||!d.env&&typeof Components!="undefined"&&Components.classes&&Components.interfaces)r=Components.classes,i=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),s="@mozilla.org/windows-registry-key;1"in r,t.get=function(e,t){var n,o,u,a={};s&&(e=e.replace(/\//g,"\\")),u=new FileUtils.File(e);try{n=r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),n.init(u,1,0,!1),o=r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),o.init(n,"utf-8",n.available(),i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),o.readString(n.available(),a),o.close(),n.close(),t(a.value)}catch(f){throw new Error((u&&u.path||"")+": "+f)}};return t}),define("text!templates/pages/Home.html",[],function(){return""}),define("text!templates/sections/HomeTitle.html",[],function(){return'<!-- IMPORTANT: formatting must be kept like this to avoid the html being rendered with unwanted white space-->\n<div class="row">\n    <div class="home-title-name">\n\n        <span class="home-title-name-follow"></span>\n        <% _.each(title.split(\'\'), function(letter, i) {\n        %><span class="title-letter-<%= i %>"></span><%\n        }); %><span class="home-title-name-type-caret">|</span>\n\n    </div>\n</div>\n<div class="row">\n    <div class="home-links-div">\n        <ul class="home-links">\n\n            <!-- empty list and link shells -->\n            <% _.each(links, function(link, i) {\n            %><li class="li-<%=link.name%>">\n                <a class="link link-<%= link.name %>" href="<%= link.link %>">\n\n                    <!-- empty span for each letter in the link name -->\n                    <% _.each(link.name.split(\'\'), function(letter, j) {\n                    %><span class="links-letter-<%= j %>"></span><%\n                    }); %>\n\n                </a>\n\n            <!-- add empty spans for \' // \' insertion -->\n            </li><% if(i !== links.length - 1) {\n            %><li class="slash-list-<%= i %>"\n                ><span class="slash-0"></span\n                ><span class="slash-1"></span\n                ><span class="slash-2"></span\n                ><span class="slash-3"></span\n            ></li><% }\n            }); %><span class="links-type-caret clear">|</span>\n\n        </ul>\n    </div>\n</div>\n'}),define("views/sections/HomeTitle",["jquery","underscore","backbone","text!templates/sections/HomeTitle.html"],function(e,t,n,r){return n.View.extend({className:"title-view full-height-view",template:t.template(r),initialize:function(){console.log("Home title view initialising")},render:function(){var e=this.template({title:this.name,links:this.homeLinks});this.$el.html(e),this.verticallyAlign(),this.type()},name:"Will Sutherland",homeLinks:[{name:"resume",link:"./public/data/cv.pdf"},{name:"projects",link:"#/projects"}],time:300,speed:100,verticallyAlign:function(){this.$(".home-title-name").css({"margin-top":e(".page").outerHeight()/2-100})},type:function(){t.each(this.name,function(e,t){this.addWithTimeout(".title-letter-"+t,e,this.speed)},this),this.removeWithTimeout(".home-title-name-type-caret",0),this.toggleWithTimeout(".links-type-caret","clear",this.speed),t.each(this.homeLinks,function(e,n){t.each(e.name.split(""),function(t,n){this.addWithTimeout(".link-"+e.name+" > .links-letter-"+n,t,this.speed)},this),n!==this.homeLinks.length-1&&this.addSlashes(n)},this),this.toggleWithTimeout(".links-type-caret","blinker",this.speed*4)},addSlashes:function(e){var n=["&nbsp;","/","/","&nbsp;"];t.each(n,function(t,n){this.addWithTimeout(".slash-list-"+e+" > .slash-"+n,t,this.speed)},this)},addWithTimeout:function(e,n,r){setTimeout(t.bind(function(){this.$(e).html(n)},this),this.time+=r)},toggleWithTimeout:function(e,n,r){setTimeout(t.bind(function(){this.$(e).toggleClass(n)},this),this.time+=r)},removeWithTimeout:function(e,n){setTimeout(t.bind(function(){this.$(e).remove()},this),this.time+=n)}})}),define("views/pages/Home",["jquery","underscore","backbone","text!templates/pages/Home.html","views/sections/HomeTitle"],function(e,t,n,r,i){return n.View.extend({className:"full-height-view home-page",template:t.template(r),view:new i,initialize:function(){console.log("Home page initialising")},render:function(){this.$el.html(this.template),this.view.render(),this.$el.append(this.view.$el)}})}),define("text!templates/pages/Projects.html",[],function(){return'<div class="content-container"></div>'}),define("text!templates/sections/Sidebar.html",[],function(){return'<div class="nav-container-fixed"></div>\n'}),define("views/sections/Sidebar",["jquery","underscore","backbone","text!templates/sections/Sidebar.html"],function(e,t,n,r){return n.View.extend({className:"nav-container",template:t.template(r),initialize:function(){console.log("Sidebar view initialising")},render:function(){this.$el.html(this.template)}})}),define("text!templates/sections/ProjectGrid.html",[],function(){return"<% collection.each(function(project) { %>\n    <p><%= project.get('name') %></p>\n<% }); %>"}),define("views/sections/ProjectGrid",["jquery","underscore","backbone","text!templates/sections/ProjectGrid.html"],function(e,t,n,r){return n.View.extend({className:"",template:t.template(r),initialize:function(){console.log("ProjectGrid view initialising"),this.listenTo(this.collection,"add remove change",this.render)},render:function(){var e=this.template({collection:this.collection});this.$el.html(e)}})}),define("views/pages/Projects",["jquery","underscore","backbone","text!templates/pages/Projects.html","views/sections/Sidebar","views/sections/ProjectGrid"],function(e,t,n,r,i,s){return n.View.extend({className:"full-height-view",template:t.template(r),initialize:function(e){console.log("Projects page initialising"),this.projectsCollection=e.projectsCollection,this.sidebar=new i,this.projectGridView=new s({collection:this.projectsCollection})},render:function(){this.$el.html(this.template),this.sidebar.render(),this.projectGridView.render(),this.$el.prepend(this.sidebar.$el),this.$(".content-container").append(this.projectGridView.$el)}})}),define("models/Project",["underscore","backbone"],function(e,t){return t.Model.extend({})}),define("collections/Projects",["underscore","backbone","models/Project"],function(e,t,n){return t.Collection.extend({initialize:function(){this.fetch()},url:function(){return"public/data/me.json"},parse:function(e){return e.projects},model:n})}),define("router",["jquery","underscore","backbone","views/pages/Home","views/pages/Projects","collections/Projects"],function(e,t,n,r,i,s){var o=n.Router.extend({routes:{"":"home",projects:"projects"}});return{initialize:function(){function h(n){e('.page > [data-name="'+n+'"]').length||(c[n].render(),e(".page").append(c[n].$el.attr("data-name",n))),t.each(c,function(e,t){e.$el.toggle(t===n)})}var u=new o,a=new s,f=new r,l=new i({projectsCollection:a}),c={home:f,projects:l};u.on("route",function(e){h(e)}),n.history.start({pushState:!1})}}}),require.config({paths:{jquery:["//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min","./assets/jquery-2.1.4.min"],underscore:["//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min","./assets/underscore-min"],backbone:["//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.1/backbone-min","./assets/backbone-min"],text:"./assets/text",templates:"../templates"},shim:{backbone:{deps:["underscore"]},underscore:{exports:"_"}}}),require(["jquery"],function(e){}),require(["underscore"],function(e){}),require(["backbone"],function(e){}),require(["router"],function(e){e.initialize()}),define("main",function(){});