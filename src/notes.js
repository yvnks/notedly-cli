import { insertDb, getDB, saveDB } from "./db.js";
import { randomUUID } from "node:crypto";

export async function newNote(note, tags) {
  const newNotes = {
    id: randomUUID(),
    content: note,
    tags,
  };

  await insertDb(newNotes);
  return newNotes;
}

export async function getAllNotes() {
  const { notes } = await getDB();
  return notes;
}

export async function findNotes(filter) {
  const { notes } = await getDB();
  return notes.filter((note) =>
    note.content.toLowerCase().includes(filter.toLowerCase()),
  );
}

export async function removeNote(id) {
  const { notes } = await getDB();

  const match = notes.find((note) => note.id === id);

  if (match) {
    // create a new note without the curr id.
    const newNotes = notes.filter((note) => note.id !== id);
    await saveDB({ notes: newNotes });
    return newNotes;
  }

  return "note not found";
}

export async function removeAllNotes() {
  saveDB({ notes: [] });
}
