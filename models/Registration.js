const mongoose = require('mongoose');
const { Schema } = mongoose;

const registrationSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zip: Number,
  registerDate: Date
});

mongoose.model('registration', registrationSchema);
