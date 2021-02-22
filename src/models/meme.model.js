const mongoose = require("mongoose");

const memeSchema = new mongoose.Schema(
  {
    name: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  }
  },
  {
    timestamps: true,
  },
);

memeSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

memeSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model("Meme", memeSchema);
