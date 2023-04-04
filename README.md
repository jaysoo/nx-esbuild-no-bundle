# Api

This repo demonstrates how `@nrwl/esbuild` handles workspace library dependencies when not bundling the app (e.g. `nx build --bundle=false`).

```shell
yarn install
nx build
```


This will produce the following files in `dist`.

```treeview
dist
└── api
    ├── main.js
    ├── package.json
    ├── src
    │   └── main.js
    └── util
        └── src
            ├── index.js
            └── lib
                └── util.js
```

Where the generated `dist/api/main.js` file maps workspace libs to their location inside `dist/api` by overriding `require` function for those cases.

