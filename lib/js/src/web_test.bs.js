// Generated by BUCKLESCRIPT VERSION 6.0.1, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");

var Test = /* module */[];

var Suite = /* module */[];

function run_suite(suite) {
  return List.map((function (t) {
                return Curry._1(t[/* f */1], /* () */0);
              }), suite[/* tests */1]);
}

exports.Test = Test;
exports.Suite = Suite;
exports.run_suite = run_suite;
/* No side effect */
