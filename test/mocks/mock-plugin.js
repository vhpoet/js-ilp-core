'use strict'

const EventEmitter = require('eventemitter2')

class MockPlugin extends EventEmitter {
  constructor () {
    super()
    this.host = 'mock:'
  }

  connect () {
    this.connected = true
    this.emit('connect')
    return Promise.resolve(null)
  }

  disconnect () {
    this.connected = false
  }

  isConnected () {
    return this.connected
  }

  getAccount () {
    return 'mock.mark'
  }

  getConnectors () {
    return Promise.resolve(['http://connector.example'])
  }

  send () {
    return Promise.resolve(null)
  }

  fulfillCondition () {
    return Promise.resolve(null)
  }
}

module.exports = MockPlugin
