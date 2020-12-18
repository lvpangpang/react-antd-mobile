// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/86157/Desktop/吕肥肥的github/ltc/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"README","meta":{"order":null}},{"title":"Button","path":"/button","meta":{},"children":[]},{"title":"Checkbox","path":"/checkbox","meta":{},"children":[]},{"title":"Icon","path":"/icon","meta":{},"children":[]},{"title":"Input","path":"/input","meta":{},"children":[]},{"title":"List","path":"/list","meta":{},"children":[]},{"title":"Loading","path":"/loading","meta":{},"children":[]},{"title":"Radio","path":"/radio","meta":{},"children":[]},{"title":"Switch","path":"/switch","meta":{},"children":[]},{"title":"Toast","path":"/toast","meta":{},"children":[]}]}},"locales":[],"navs":{},"title":"Ltc","mode":"doc","repoUrl":"https://github.com/lvpangpang/ltc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../../README.md').default,
        "exact": true,
        "meta": {
          "locale": "en-US",
          "title": "README",
          "order": null
        },
        "title": "README"
      },
      {
        "path": "/button",
        "component": require('../../button/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/button/Readme.md",
          "updatedTime": 1608285039051,
          "slugs": [
            {
              "depth": 2,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Button",
          "group": {
            "path": "/button",
            "title": "Button"
          }
        },
        "title": "Button"
      },
      {
        "path": "/checkbox",
        "component": require('../../checkbox/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/checkbox/Readme.md",
          "updatedTime": 1608285946755,
          "slugs": [
            {
              "depth": 2,
              "value": "Checkbox",
              "heading": "checkbox"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "CheckboxItem",
              "heading": "checkboxitem"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api-1"
            }
          ],
          "title": "Checkbox",
          "group": {
            "path": "/checkbox",
            "title": "Checkbox"
          }
        },
        "title": "Checkbox"
      },
      {
        "path": "/icon",
        "component": require('../../icon/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/icon/Readme.md",
          "updatedTime": 1608286142449,
          "slugs": [
            {
              "depth": 2,
              "value": "Icon",
              "heading": "icon"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Icon",
          "group": {
            "path": "/icon",
            "title": "Icon"
          }
        },
        "title": "Icon"
      },
      {
        "path": "/input",
        "component": require('../../input/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/input/Readme.md",
          "updatedTime": 1608286248891,
          "slugs": [
            {
              "depth": 2,
              "value": "Input",
              "heading": "input"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Input",
          "group": {
            "path": "/input",
            "title": "Input"
          }
        },
        "title": "Input"
      },
      {
        "path": "/list",
        "component": require('../../list/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/list/Readme.md",
          "updatedTime": 1608286380393,
          "slugs": [
            {
              "depth": 2,
              "value": "List",
              "heading": "list"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "List",
          "group": {
            "path": "/list",
            "title": "List"
          }
        },
        "title": "List"
      },
      {
        "path": "/loading",
        "component": require('../../loading/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/loading/Readme.md",
          "updatedTime": 1608286363721,
          "slugs": [
            {
              "depth": 2,
              "value": "Loading",
              "heading": "loading"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Loading",
          "group": {
            "path": "/loading",
            "title": "Loading"
          }
        },
        "title": "Loading"
      },
      {
        "path": "/radio",
        "component": require('../../radio/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/radio/Readme.md",
          "updatedTime": 1608286413392,
          "slugs": [
            {
              "depth": 2,
              "value": "Radio",
              "heading": "radio"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "RadioItem",
              "heading": "radioitem"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api-1"
            }
          ],
          "title": "Radio",
          "group": {
            "path": "/radio",
            "title": "Radio"
          }
        },
        "title": "Radio"
      },
      {
        "path": "/switch",
        "component": require('../../switch/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/switch/Readme.md",
          "updatedTime": 1608286451234,
          "slugs": [
            {
              "depth": 2,
              "value": "Switch",
              "heading": "switch"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Switch",
          "group": {
            "path": "/switch",
            "title": "Switch"
          }
        },
        "title": "Switch"
      },
      {
        "path": "/toast",
        "component": require('../../toast/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/toast/Readme.md",
          "updatedTime": 1608286479079,
          "slugs": [
            {
              "depth": 2,
              "value": "Toast",
              "heading": "toast"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Function",
              "heading": "function"
            }
          ],
          "title": "Toast",
          "group": {
            "path": "/toast",
            "title": "Toast"
          }
        },
        "title": "Toast"
      }
    ],
    "title": "Ltc"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
