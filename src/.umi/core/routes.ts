// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/node_modules/dumi-theme-mobile/es/layouts/demo.js').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-mobile/es/builtins/Previewer.js');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/node_modules/dumi-theme-mobile/es/layouts/index.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/README.md').default,
        "exact": true,
        "meta": {
          "locale": "en-US",
          "order": null,
          "filePath": "README.md",
          "updatedTime": 1637409755000,
          "slugs": [
            {
              "depth": 1,
              "value": "react-antd-mobile",
              "heading": "react-antd-mobile"
            },
            {
              "depth": 2,
              "value": "1. 使用 demo",
              "heading": "1-使用-demo"
            },
            {
              "depth": 2,
              "value": "2. 按需加载",
              "heading": "2-按需加载"
            }
          ],
          "title": "react-antd-mobile"
        },
        "title": "react-antd-mobile"
      },
      {
        "path": "/button",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/src/Button/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Button/README.md",
          "updatedTime": 1637647599716,
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
        "title": "Button - react-antd-mobile"
      },
      {
        "path": "/checkbox",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/src/Checkbox/README.md').default,
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
        "title": "Checkbox - react-antd-mobile"
      },
      {
        "path": "/icon",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/src/Icon/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Icon/README.md",
          "updatedTime": 1637647750529,
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
        "title": "Icon - react-antd-mobile"
      },
      {
        "path": "/input",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/src/Input/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Input/README.md",
          "updatedTime": 1637650467451,
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
        "title": "Input - react-antd-mobile"
      },
      {
        "path": "/list",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/src/List/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/List/README.md",
          "updatedTime": 1637650511624,
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
        "title": "List - react-antd-mobile"
      },
      {
        "path": "/loading",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/src/Loading/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Loading/README.md",
          "updatedTime": 1637650378131,
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
              "value": "Function",
              "heading": "function"
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
        "title": "Loading - react-antd-mobile"
      },
      {
        "path": "/radio",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/src/Radio/README.md').default,
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
        "title": "Radio - react-antd-mobile"
      },
      {
        "path": "/switch",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/src/Switch/README.md').default,
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
        "title": "Switch - react-antd-mobile"
      },
      {
        "path": "/toast",
        "component": require('C:/Users/86157/Desktop/吕肥肥的github/react-antd-mobile/src/Toast/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Toast/README.md",
          "updatedTime": 1637650292882,
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
        "title": "Toast - react-antd-mobile"
      }
    ],
    "title": "react-antd-mobile",
    "component": (props) => props.children
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
