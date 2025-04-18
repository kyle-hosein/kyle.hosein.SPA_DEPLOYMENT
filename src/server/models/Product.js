const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: String,
    trim: true,
    default: null // optional
  }, 
  imageUrl :{
    type: String,
    trim: true,
    default: null
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Product', productSchema);
