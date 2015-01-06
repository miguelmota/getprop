var test = require('tape');
var getProp = require('../getprop');

test('getProp', function (t) {
  t.plan(14);

  var obj = {
    foo: 'bar',
    qux: {
      zee: {
        boop: 'yo',
        peep: [55,'zonk', {
          __data: 'pow'
        }],
      },
      'key.with.dots': 'hello',
      '"key.with.quotes"': {
        greet: 'hi'
      },
      $el: 'element'
    },
  };

  t.equal(getProp(obj, 'foo'), 'bar');
  t.equal(getProp(obj, 'deedee'), undefined);
  t.equal(getProp(obj, 'deedee', "I'm default value"), "I'm default value");
  t.equal(getProp(obj, 'qux.zee.boop'), 'yo');
  t.equal(getProp(obj, 'qux.zee.peep.0'), 55);
  t.equal(getProp(obj, 'qux.zee.peep.1'), 'zonk');
  t.equal(getProp(obj, 'qux.zee.peep[1]'), 'zonk');
  t.equal(getProp(obj, 'qux[key.with.dots]'), 'hello');
  t.equal(getProp(obj, 'qux["key.with.quotes"].greet'), 'hi');
  t.equal(getProp(obj, 'qux.zee.peep.2.__data'), 'pow');
  t.equal(getProp(obj, 'qux.$el'), 'element');
  t.equal(getProp(obj, ''), undefined);
  t.equal(getProp(obj, {}), undefined);
  t.equal(getProp(obj, 3), undefined);
});
