define([], function(){
  'use strict';
  function toObject(val) {
    if (val === null) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }
  return Object.assign || function (target) {
    var from;
    var keys;
    var to = toObject(target);

    for (var s = 1; s < arguments.length; s = s + 1) {
        from = arguments[s];
        keys = Object.keys(Object(from));

        for (var i = 0; i < keys.length; i = i + 1) {
            to[keys[i]] = from[keys[i]];
        }
    }

    return to;
  };
});
