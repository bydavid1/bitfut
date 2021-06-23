import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var channel = new Schema({
  name: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  }
});

var Channel = mongoose.models.Channel || mongoose.model('Channel', channel);

export default Channel;