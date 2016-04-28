// Pubsub for commication between preact components
var Pubsub = function() {
  this.topics = {}

  this.on = function(topicname, fn) {
    if (!this.topics[topicname])
      this.topics[topicname] = []
    this.topics[topicname].push(fn)
  }

  this.trigger = function(topicname, args) {
    if (!this.topics[topicname]) return

    this.topics[topicname].forEach(fn => fn(args) )
  }
}

var pubsub = new Pubsub()
export default pubsub

