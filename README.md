# getprop

Get a property from object the easy way.

Turn

```javascript
var value = 'default value';

if (
  obj &&
  obj.qux &&
  obj.qux.zee &&
  obj.qux.zee.peep &&
  obj.qux.zee.peep[1] &&
  obj.qux.zee.peep[1].__data) {

  value = obj.qux.zee.peep[1].__data;
}
```

into

```javascript
var value = getProp(obj, 'qux.zee.peep.2.__data', 'default value');
```

# Install

```bash
npm install get-prop
```

```bash
bower install getprop
```

# Usage

```javascript
var getProp = require('get-prop');

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

getProp(obj, 'foo') // 'bar'
getProp(obj, 'deedee') // undefined
getProp(obj, 'deedee', "I'm default value") // "I'm default value"
getProp(obj, 'qux.zee.boop') // 'yo'
getProp(obj, 'qux.zee.peep.0') // 55
getProp(obj, 'qux.zee.peep.1') // 'zonk'
getProp(obj, 'qux.zee.peep[1]') // 'zonk'
getProp(obj, 'qux[key.with.dots]') // 'hello'
getProp(obj, 'qux["key.with.quotes"].greet') // 'hi'
getProp(obj, 'qux.zee.peep.2.__data') // 'pow'
getProp(obj, 'qux.$el') // 'element'
```

# License

MIT
