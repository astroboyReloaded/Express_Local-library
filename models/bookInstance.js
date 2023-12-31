const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  imprint: { type: String, required: true },
  status: { 
    type: String,
    required: true,
    enum: ['Available', 'Maintenance', 'Loaned', 'Reversed'],
    default: 'Maintenance',
  },
  due_back: { type: Date, default: Date.now },
});

BookInstanceSchema.virtual('url').get(function() {
  return `/catalog/bookinstance/${this._id}`;
});
BookInstanceSchema.virtual('formatted_due_back').get(function() {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model('BookInstance', BookInstanceSchema);

