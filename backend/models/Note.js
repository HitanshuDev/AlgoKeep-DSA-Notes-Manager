// backend/models/Note.js
import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: String,
  language: String,
  code: String,
  algorithm: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Note', noteSchema);
