# Localify WebExtension

This repository holds the code of a small [WebExtension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions).
Localify adds a planet button to the browser.
The button displays a popup with locales.
When the user clicks a locale, the active tab will navigate to the new URL with the selected locale.

## Files

```shell
.
|-icons
|--planet.png
|-popup
|--change-locale.html
|--change-locale.css
|--change-locale.js
|-LICENSE.md
|-manifest.json
|-README.md
```

## Regexp

The following RegExp:
```shell
(?:\?locale=([a-zA-Z]{2}))*#
```

Will match:
```shell
mydomain.fr/<span style="color:blue">#</span>/awesomeroute
mydomain.fr/<span style="color:blue">?locale=FR#</span>/awesomeroute
mydomain.fr/<span style="color:blue">?locale=en#</span>/awesomeroute
mydomain.fr/<span style="color:blue">?locale=en?locale=DE?locale=EN#</span>/awesomeroute
```

When the user selects a locale in the popup, the matching part will be replaced by `?locale={selectedLocale}` or by `#` if he selected clear.

## API Polyfill

- Chrome API uses `chrome.*` and callback functions
- Firefox API uses `browser.*` and promises
- Internet Explorer API uses `browser.*` and callback functions

Consider using a polyfill like [Mozilla Polyfill](https://github.com/mozilla/webextension-polyfill) (not tested yet).

## WebExtensions Links

- :book: Browser support for JavaScript APIs: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs
- :book: Chrome incompatibilities: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities
- :book: MDN Browser Compat Data: https://github.com/mdn/browser-compat-data
- :book: Web Navigation Events: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webNavigation
- :book: Google Developers Videos on Youtube (part 1) https://www.youtube.com/watch?v=rNkfs8-uRTE&list=PLCA101D6A85FE9D4B
- :book: Google Developers Videos on Youtube (part 2) https://www.youtube.com/watch?v=wRDPTnY3yO8&list=PL38DF05697DE372B1
