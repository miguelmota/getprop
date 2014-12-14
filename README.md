# getprop

Get a property from object

# Install

```bash
npm install get-prop
```

# Usage

```javascript
var getProp = require('get-prop');

var obj = {
  foo: 'bar',
  qux: {
    zee: {
      boop: 'yo',
      peep: [55,'zonk']
    }
  }
};

getProp(obj, 'foo') // 'bar'
getProp(obj, 'deedee') // undefined
getProp(obj, 'qux.zee.boop') // 'yo'
getProp(obj, 'qux.zee.peep.0') // 55
getProp(obj, 'qux.zee.peep.1') // 'zonk'
```

# License

MIT
