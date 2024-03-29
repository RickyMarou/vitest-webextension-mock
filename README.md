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
