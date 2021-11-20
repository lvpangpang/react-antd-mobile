// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"README","meta":{"order":null}},{"title":"Button","path":"/button","meta":{},"children":[]},{"title":"Checkbox","path":"/checkbox","meta":{},"children":[]},{"title":"Icon","path":"/icon","meta":{},"children":[]},{"title":"Input","path":"/input","meta":{},"children":[]},{"title":"List","path":"/list","meta":{},"children":[]},{"title":"Loading","path":"/loading","meta":{},"children":[]},{"title":"Radio","path":"/radio","meta":{},"children":[]},{"title":"Switch","path":"/switch","meta":{},"children":[]},{"title":"Toast","path":"/toast","meta":{},"children":[]}]}},"locales":[],"navs":{},"title":"react-antd-mobile","logo":"./index.ico","mode":"doc","repoUrl":"https://github.com/lvpangpang/react-antd-mobile"},
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
        "component": require('../../Button/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Button/README.md",
          "updatedTime": 1637309425210,
          "slugs": [
            {
              "depth": 1,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "DEMOS",
              "heading": "demos"
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
        "component": require('../../Checkbox/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Checkbox/README.md",
          "updatedTime": 1637309531256,
          "slugs": [
            {
              "depth": 1,
              "value": "Checkbox",
              "heading": "checkbox"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "CheckboxItem",
              "heading": "checkboxitem"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api-1"
            },
            {
              "depth": 2,
              "value": "DEMOS",
              "heading": "demos"
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
        "component": require('../../Icon/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Icon/README.md",
          "updatedTime": 1637309566792,
          "slugs": [
            {
              "depth": 1,
              "value": "Icon",
              "heading": "icon"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "DEMOS",
              "heading": "demos"
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
        "component": require('../../Input/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Input/README.md",
          "updatedTime": 1637309591096,
          "slugs": [
            {
              "depth": 1,
              "value": "Input",
              "heading": "input"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "DEMOS",
              "heading": "demos"
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
        "component": require('../../List/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/List/README.md",
          "updatedTime": 1637309599515,
          "slugs": [
            {
              "depth": 1,
              "value": "List",
              "heading": "list"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "DEMOS",
              "heading": "demos"
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
        "component": require('../../Loading/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Loading/README.md",
          "updatedTime": 1637309792226,
          "slugs": [
            {
              "depth": 1,
              "value": "Loading",
              "heading": "loading"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "DEMOS",
              "heading": "demos"
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
        "component": require('../../Radio/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Radio/README.md",
          "updatedTime": 1637309622125,
          "slugs": [
            {
              "depth": 1,
              "value": "Radio",
              "heading": "radio"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "RadioItem",
              "heading": "radioitem"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api-1"
            },
            {
              "depth": 2,
              "value": "DEMOS",
              "heading": "demos"
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
        "component": require('../../Switch/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Switch/README.md",
          "updatedTime": 1637309629791,
          "slugs": [
            {
              "depth": 1,
              "value": "Switch",
              "heading": "switch"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "DEMOS",
              "heading": "demos"
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
        "component": require('../../Toast/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Toast/README.md",
          "updatedTime": 1637309644444,
          "slugs": [
            {
              "depth": 1,
              "value": "Toast",
              "heading": "toast"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "Function",
              "heading": "function"
            },
            {
              "depth": 2,
              "value": "DEMOS",
              "heading": "demos"
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
    "title": "react-antd-mobile"
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
