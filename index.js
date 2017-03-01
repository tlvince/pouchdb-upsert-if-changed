const isEqual = require('lodash.isEqual')

const maybeUpsert = (oldDoc, newDoc) => {
  const revved = Object.assign({}, newDoc, {
    _rev: oldDoc._rev
  })
  if (isEqual(oldDoc, revved)) {
    return
  }
  return newDoc
}

exports.upsertIfChanged = function (newDoc) {
  return this.upsert(newDoc._id, oldDoc => maybeUpsert(oldDoc, newDoc))
}
