
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hashland-sdk.cjs.production.min.js')
} else {
  module.exports = require('./hashland-sdk.cjs.development.js')
}
