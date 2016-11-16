# static-console-plugin-alert-output
Plugin for printing your [`static-console`](https://www.npmjs.com/package/static-console) messages using `window.alert`.

[![Gitter](https://badges.gitter.im/VINTproYKT/node-static-console.svg)](https://gitter.im/VINTproYKT/node-static-console?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Install
```
$ npm install --save static-console-plugin-alert-output
```

## API
### `AlertOutput`
```javascript
const c = require('static-console');
const AlertOutput = require('static-console-plugin-alert-output');

c.outputs.myLog = new AlertOutput();
c.routers.std.tasks.set(c.outputs.myLog, c.models.raw);// We add task for StdRouter bundled with StaticConsole to convert messages with RawModel

c.logt('info', `Starting log`);
c.log(`Another message`);
```
Test in any browser environment bundled with Node.js.

`c.outputs.myLog` is now invoking alert modal with each new message.

`AlertOutput` may be used as alternative to standard output in case when it is not available.

Note: `alert` has blocking implementation, used in syncronised code. If you want non-blocking API, try other [plugin for `static-console`](https://www.npmjs.com/search?q=static-console-plugin-).

### `print(model)`
`model` is the object that should have descriptive properties:
 - `data` - string with message. It could be converted with RawModel.

### *`window`*
Defines window in which `alert` will be called. Default: `window`.