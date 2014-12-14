var test = require('tape');
var getProp = require('../getprop');

test('getProp', function (t) {
  t.plan(8);

  var obj = {
    foo: 'bar',
    qux: {
      zee: {
        boop: 'yo',
        peep: [55,'zonk']
      }
    }
  };

  t.equal(getProp(obj, 'foo'), 'bar');
  t.equal(getProp(obj, 'deedee'), undefined);
  t.equal(getProp(obj, 'qux.zee.boop'), 'yo');
  t.equal(getProp(obj, 'qux.zee.peep.0'), 55);
  t.equal(getProp(obj, 'qux.zee.peep.1'), 'zonk');
  t.equal(getProp(obj, ''), undefined);
  t.equal(getProp(obj, {}), undefined);
  t.equal(getProp(obj, 3), undefined);
});
