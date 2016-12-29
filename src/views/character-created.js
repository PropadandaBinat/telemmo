const emoji = require('node-emoji')
const keyboard = require('./keyboards/overworld')

module.exports = {
  keyboard,
  message: emoji.emojify(`
Character created! Have fun!

:globe_with_meridians: Welcome to the overworld! :globe_with_meridians:
  `.trim()),
  error: 'You already have a character :)'
}
