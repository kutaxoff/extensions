# Ng-Matero Extensions

[![CodeFactor](https://www.codefactor.io/repository/github/ng-matero/extensions/badge)](https://www.codefactor.io/repository/github/ng-matero/extensions)
[![npm](https://img.shields.io/npm/v/@ng-matero/extensions.svg)](https://www.npmjs.com/package/@ng-matero/extensions)
[![GitHub Release Date](https://img.shields.io/github/release-date/ng-matero/extensions)](https://github.com/ng-matero/extensions/releases)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ng-matero/extensions/blob/dev/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/ng-matero/extensions.svg)](https://gitter.im/matero-io/extensions)

The Ng-Matero Extensions is an extended component library for Angular Material.

## Documentation

Check out the [demos and APIs](https://ng-matero.github.io/extensions/).

## Installation

At first, you should install the Angular Material and setup it. [Learn more about the setup](https://material.angular.io/guide/getting-started).

Install the Extensions library:

```bash
$ npm install @qoollo/extensions --save
```

## Setup

Import the modules you need, e.g. data-grid and select.

```ts
import { MtxGridModule } from '@qoollo/extensions/grid';
import { MtxSelectModule } from '@qollo/extensions/select';

@NgModule({
  ...
  imports: [MtxGridModule, MtxSelectModule, ...],
  ...
})
export class YourAppModule {
}
```

## Theming

After import modules, you must define a theme. [More details about theming](https://material.angular.io/guide/theming).

```scss
@use '@qoollo/extensions' as mtx;

@include mtx.all-component-themes($theme);
@include mtx.all-experimental-component-themes($theme);
```

The @use-based Sass API is only available in the version `12.0.0` or above.

## License

MIT
