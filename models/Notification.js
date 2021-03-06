var mongoose = require('mongoose') ;
var Schema = mongoose.Schema ;

module.exports = mongoose.model('notification', new Schema({
  title: String,
  description: String,
  category: {
    type: String,
    enum: ['vaccations', 'academics', 'placements']
  }
}))
/**
 *participants:[String],
	messages:[{
		author: String,
		message: String,
		timestamp: Date
	}]
 */