# Chrome autoscroll extension

This simple extension enables automated scrolling on CoinMarketCap.  It use the [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/) API  to execute script in different contexts and the [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/alarms/) API to schedule code to run periodically or at a specified time in the future.

## Overview

The extension employs jQuery to facilitate automatic scrolling when a URL matches the DNS configuration specified in the manifest file

## Running this extension

1. Clone this repository.
2. Load this directory in Chrome as an [unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).
3. Pin the extension to the browser's taskbar is you want to see the icon
