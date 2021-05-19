## Sumbodules initialization
1. git submodule init 
2. git submodule update
## Integrating git submodules

1. `git submodule add git@bitbucket.org:atlas_guides/atlasguides-web-common.git src/api`
2. `cd src/api/ && git checkout develop && cd ../../`
3. In `package.json`
Change `include` property
```json
  "include": [
    "src",
+++ "src/api/src"
  ]
```
<b>OPTIONAL(Absolute path resolution)</b>

4. `yarn add -D react-app-rewired`
5. Add config-overrides.js in root folder
```
const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@api': path.resolve(__dirname, 'src/api/src'),
      '@': path.resolve(__dirname, 'src')
    },
  };

  return config;
};
```
6. Add `tsconfig.paths.json`
```
{
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@api/*": ["./src/api/src/*"],
        "@/*": ["./src/*"]
      }
    }
  }
```

7. Extends existing `tsconfig.json`

```
+++ "extends": "./tsconfig.paths.json",
```