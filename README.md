# example-monorepo-pnpm

An example repository demonstrating how to set up a pnpm monorepo.

`first` is the public package that is external-facing.

`second` is the internal package that is not published, but has types and functions used by `first`.

 The repository shows how to build the package in a way that allows exporting types and source of `first` without
 having the reference on `second` which will not be published.
 
 Note that after building, `first/dist/lib.js` does not contain a reference to `foo` as it is not important.
 This demonstrates how this setup allows importing types from `second` without bloating the bundle size of `first`.
 
