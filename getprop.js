(function(root) {

  function getProp(o, s, d) {
    if (!o || !s) return;
    if (!(typeof o === 'object' || o instanceof Object)) return d;
    if (!(typeof s === 'string' || s instanceof String)) return d;
    var props = s.match(/(\[(.*?)\]|[0-9a-zA-Z_$]+)/gi).map(function(m) { return m.replace(/[\[\]]/gi,''); });

    var len = props.length,
        last = props[len - 1],
        i = 0,
        head = o;

    for (i = 0; i < len; i += 1) {
      if (!head[props[i]]) d;
      head = head[props[i]];
      if (typeof head !== 'undefined') {
        if (props[i] === last && i === len - 1) {
          return head;
        }
      }
    }
    return d;
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

