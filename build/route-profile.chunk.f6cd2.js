webpackJsonp([2],{AqGt:function(t,e,n){"use strict";function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return p});var i=n("KM04"),u=(n.n(i),n("7/cg")),c=n("aqQ4"),a=(n.n(c),n("Tv6c")),l=n.n(a),p=function(t){function e(){for(var e,n,r,i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return e=n=o(this,t.call.apply(t,[this].concat(u))),n.state={time:Date.now(),count:10},n.updateTime=function(){n.setState({time:Date.now()})},n.increment=function(){n.setState({count:n.state.count+1})},r=e,o(n,r)}return r(e,t),e.prototype.componentDidMount=function(){this.timer=setInterval(this.updateTime,1e3)},e.prototype.componentWillUnmount=function(){clearInterval(this.timer)},e.prototype.render=function(t,e){var o=t.user,r=e.time,c=e.count;return n.i(i.h)("div",{class:l.a.profile},n.i(i.h)("h1",null,"Profile: ",o),n.i(i.h)("p",null,"This is the user profile for a user named ",o,"."),n.i(i.h)("div",null,"Current time: ",new Date(r).toLocaleString()),n.i(i.h)("p",null,n.i(i.h)(u.a,{raised:!0,primary:!0,ripple:!0,onClick:this.increment},"Click Me")," ","Clicked ",c," times."))},e}(i.Component)},Tv6c:function(t){t.exports={profile:"profile__t2Dqz"}},aqQ4:function(){}});
//# sourceMappingURL=route-profile.chunk.f6cd2.js.map