// backend/routes/noteRoutes.js
import express from 'express';
import Note from '../models/Note.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a new note
router.post('/', authMiddleware, async (req, res) => {
  const { title, language, code, algorithm } = req.body;

  if (!title || !language || !code || !algorithm) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newNote = new Note({
      title,
      language,
      code,
      algorithm,
      user: req.user  // from authMiddleware
    });

    await newNote.save();
    res.status(201).json({ message: 'Note created successfully', note: newNote });
  } catch (err) {
    console.error('Error saving note:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all notes for a logged-in user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user });
    res.status(200).json({ notes });
  } catch (err) {
    console.error('Error fetching notes:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


export default router;
