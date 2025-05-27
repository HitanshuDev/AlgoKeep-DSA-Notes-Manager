import express from 'express';
import Note from '../models/Note.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect all routes below
router.use(authMiddleware);

// GET all notes for a user
router.get('/', async (req, res) => {
  const notes = await Note.find({ user: req.userId }).sort({ createdAt: -1 });
  res.json(notes);
});

// POST a new note
router.post('/', async (req, res) => {
  const { title, language, code, algorithm } = req.body;
  const newNote = new Note({
    title,
    language,
    code,
    algorithm,
    user: req.userId
  });
  await newNote.save();
  res.status(201).json(newNote);
});

export default router;
