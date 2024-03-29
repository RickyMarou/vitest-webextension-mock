# vitest-webextension-mock
![npm version](./public/npm-badge.svg)
![Code coverage](./public/codecov-badge.svg)


# Questions

What should we do with the differences between the specs and the chrome 
implementation?  
For an example, according to the spec, `browser.action.setTitle` should take
```ts
setTitle({title: string, windowId: number, tabId: number})
```
according to the specs ([MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/setTitle)), but the chrome implementation is ([docs](https://developer.chrome.com/docs/extensions/reference/api/action#method-setTitle)):
```ts
setTitle({title: string, tabId: number}, callback: Function)
```

What should we do in such cases?
- Offer a way for consumers to configure which flavour of the API they want to use?
- Only do chrome flavour? Only do official spec flavour?

We should for sure look at [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) which solves this problem and follow what they do (which is most likely following the spec)

# TODO

- [ ] Make extension URL configurable so consumers can control the path returned by `browser.runtime.getURL()`
  - [ ] Make browser configurable so it changes the scheme `chrome-extension://` or `moz-extension://`
  - [ ] Allow user to provide extension ID

## Docs

The mock functions will try to emulate browser behavior as best they can.
For an example:

```ts
browser.action.getTitle({windowId: 1, tabId: 1}) 
```

Will return an error because according to the specs, if both `windowId` and `tabId` are supplied, `getTitle` should return an error.

However, we rely on typescript for parameters null checks:

```ts
browser.action.getTitle()
```

is an invalid call as `getTitle` expects 1 parameter. The mocked function will not throw if called without a parameter. We recommend you use typescript with [`@types/webextension-polyfill`](https://www.npmjs.com/package/@types/webextension-polyfill) to catch these errors at build time.
