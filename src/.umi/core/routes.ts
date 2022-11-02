// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/57481/Desktop/github/react-antd-mobile/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('C:/Users/57481/Desktop/github/react-antd-mobile/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('C:/Users/57481/Desktop/github/react-antd-mobile/node_modules/dumi-theme-mobile/es/layouts/demo.js').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('C:/Users/57481/Desktop/github/react-antd-mobile/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
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
    "wrappers": [require('C:/Users/57481/Desktop/github/react-antd-mobile/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('C:/Users/57481/Desktop/github/react-antd-mobile/node_modules/dumi-theme-mobile/es/layouts/index.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('C:/Users/57481/Desktop/github/react-antd-mobile/README.md').default,
        "exact": true,
        "meta": {
          "locale": "en-US",
          "order": null,
          "filePath": "README.md",
          "updatedTime": 1666164215000,
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
        "component": require('C:/Users/57481/Desktop/github/react-antd-mobile/src/button/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/button/Readme.md",
          "updatedTime": 1637648204000,
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
        "component": require('C:/Users/57481/Desktop/github/react-antd-mobile/src/checkbox/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/checkbox/Readme.md",
          "updatedTime": 1637311027000,
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
        "path": "/grid/readem",
        "component": require('C:/Users/57481/Desktop/github/react-antd-mobile/src/grid/READEM.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/grid/READEM.md",
          "updatedTime": 1666149569596,
          "slugs": [
            {
              "depth": 1,
              "value": "Grid",
              "heading": "grid"
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
          "title": "Grid",
          "group": {
            "path": "/grid",
            "title": "Grid"
          }
        },
        "title": "Grid - react-antd-mobile"
      },
      {
        "path": "/icon",
        "component": require('C:/Users/57481/Desktop/github/react-antd-mobile/src/icon/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/icon/Readme.md",
          "updatedTime": 1637648204000,
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
        "component": require('C:/Users/57481/Desktop/github/react-antd-mobile/src/input/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/input/Readme.md",
          "updatedTime": 1637650659000,
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
        "component": require('C:/Users/57481/Desktop/github/react-antd-mobile/src/list/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/list/Readme.md",
          "updatedTime": 1637650659000,
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
        "component": require('C:/Users/57481/Desktop/github/react-antd-mobile/src/loading/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/loading/Readme.md",
          "updatedTime": 1637650659000,
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
        "component": require('C:/Users/57481/Desktop/github/react-antd-mobile/src/radio/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/radio/Readme.md",
          "updatedTime": 1637311027000,
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
        "component": require('C:/Users/57481/Desktop/github/react-antd-mobile/src/switch/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/switch/Readme.md",
          "updatedTime": 1637311027000,
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
        "component": require('C:/Users/57481/Desktop/github/react-antd-mobile/src/toast/Readme.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/toast/Readme.md",
          "updatedTime": 1637650659000,
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
      },
      {
        "path": "/grid",
        "meta": {},
        "exact": true,
        "redirect": "/grid/readem"
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
