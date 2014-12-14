(function(root) {

  function getProp(o, s) {
    if (!o || !s) return;
    if (!(typeof o === 'object' || o instanceof Object)) return;
    if (!(typeof s === 'string' || s instanceof String)) return;
    var props = s.split('.'),
        last = props[props.length - 1],
        i = 0,
        head = o;

    for (i = 0; i < props.length; i += 1) {
      if (!head[props[i]]) return;
      head = head[props[i]];
      if (typeof head !== 'undefined') {
        if (props[i] === last) {
          return head;
        }
      }
    }
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = getProp;
    }
    exports.getProp = getProp;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return getProp;
    });
  } else {
    root.getProp = getProp;
  }

})(this);

