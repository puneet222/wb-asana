!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,function(){return r={},o.m=n={0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CREATE_PROJECT_URL=t.TEAMS=t.PROJECTS=t.WORKSPACES=t.ACCESS_TOKEN=t.API_URL=t.API_VERSION=void 0,t.API_VERSION="1.0",t.API_URL="https://app.asana.com/api/"+t.API_VERSION,t.ACCESS_TOKEN=VARS.asanaAccessToken,t.WORKSPACES="workspaces",t.PROJECTS="projects",t.TEAMS="teams",t.CREATE_PROJECT_URL="https://app.asana.com/0/projects/new/blank"},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(){return r.ACCESS_TOKEN?JSON.stringify({remove:["setup"]}):JSON.stringify({remove:["workspaces"]})}}},o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6);function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r});