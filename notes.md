```shell
//  start the server (express)
npm run dev
// The client/server entries points are:
entry.client.tsx
entry.server.tsx
```

```javascript
npm i -s supertokens-auth-react
// Add SuperTokens.init({ and <SuperTokensWrapper> to the root

```

Getting this error:

Hi Rishabh,

1. Made `<SuperTokensProvider>` the high-level component wrapper in `root.tsx`.
2. Setup `<SuperTokensProvider>` to to initialize SuperTokens, set up navigation, and provide authentication wrapper.

```

Node.js v20.11.0
 info  rebuilding... (~ app/config/frontend.tsx)
 info  building...

 info  rebuilt (163ms)
node:internal/process/esm_loader:34
      internalBinding('errors').triggerUncaughtException(
                                ^

Error [ERR_UNSUPPORTED_DIR_IMPORT]: Directory import '/Users/mawentowski/Repos/supertokens/my-remix-app/node_modules/supertokens-auth-react/recipe/thirdpartyemailpassword' is not supported resolving ES modules imported from /Users/mawentowski/Repos/supertokens/my-remix-app/build/index.js
Did you mean to import supertokens-auth-react/recipe/thirdpartyemailpassword/index.js?
    at finalizeResolution (node:internal/modules/esm/resolve:258:11)
    at moduleResolve (node:internal/modules/esm/resolve:917:10)
    at defaultResolve (node:internal/modules/esm/resolve:1130:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:396:12)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:365:25)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:240:38)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:85:39)
    at link (node:internal/modules/esm/module_job:84:36) {
  code: 'ERR_UNSUPPORTED_DIR_IMPORT',
  url: 'file:///Users/mawentowski/Repos/supertokens/my-remix-app/node_modules/supertokens-auth-react/recipe/thirdpartyemailpassword'
}

Node.js v20.11.0
^C%
```
