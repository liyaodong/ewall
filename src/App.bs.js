// Generated by BUCKLESCRIPT VERSION 5.0.2, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Home$ReactHooksTemplate = require("./Home.bs.js");
var Admin$ReactHooksTemplate = require("./Admin.bs.js");
var Route$ReactHooksTemplate = require("./Route.bs.js");

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = Route$ReactHooksTemplate.getRouteByHash(url[/* hash */1]);
  if (match !== 1) {
    return React.createElement(Home$ReactHooksTemplate.make, { });
  } else {
    return React.createElement(Admin$ReactHooksTemplate.make, { });
  }
}

var make = App;

exports.make = make;
/* react Not a pure module */
