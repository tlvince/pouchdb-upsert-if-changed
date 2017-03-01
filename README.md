# pouchdb-upsert-if-changed

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/pouchdb-upsert-if-changed
[travis-image]: https://img.shields.io/travis/tlvince/pouchdb-upsert-if-changed.svg
[npm-url]: https://www.npmjs.com/package/pouchdb-upsert-if-changed
[npm-image]: https://img.shields.io/npm/v/pouchdb-upsert-if-changed.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/pouchdb-upsert-if-changed.svg

> Upsert if changed plugin for PouchDB

```js
const doc = { _id: 'foo' }
db.put(doc)
  // Does nothing
  .then(() => db.upsertIfChanged(doc))
  // Upserts
  .then(() => db.upsertIfChanged({_id: 'foo', bar: 'baz'}))
```

## Installation

```shell
npm install --save pouchdb-upsert-if-changed
```

## Usage

`upsertIfChanged(<doc>)`

```js
import PouchDB from 'pouchdb'
import upsert from 'pouchdb-upsert'
import upsertIfChanged from 'pouchdb-upsert-if-changed'

PouchDB
  .plugin(upsert)
  .plugin(upsertIfChanged)
```

## Author

© 2017 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
