Errors = {
  // Local (client-only) collection
  collection: new Mongo.Collection(null),

  throw: function(message, options) {
  	var options = options || {};
  	var style = options.style || 'info';

    Errors.collection.insert({message: message, style: style, seen: false})
  },
  clearSeen: function() {
    Errors.collection.remove({seen: true});
  }
};
