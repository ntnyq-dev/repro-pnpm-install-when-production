# repro-pnpm-install-when-production

pnpm will remove all other devDeps directly in the `node_modules` folder while installing in production mode.

## Repro steps

1. run `pnpm test` first time. All devDeps in `node_modules` are removed.

2. run `pnpm test` a second time. It will throw can not find package `kolorist`.
