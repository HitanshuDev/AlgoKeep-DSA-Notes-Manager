// backend/routes/noteRoutes.js
import express from 'express';
const router = express.Router();
import Note from '../models/Note';

// GET all notes
router.get('/', async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

// POST a new note
router.post('/', async (req, res) => {
  const { title, language, code, algorithm } = req.body;
  const newNote = new Note({ title, language, code, algorithm });
  await newNote.save();
  res.status(201).json(newNote);
});

export default router;
