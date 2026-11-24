import { insertDb, getDB, saveDB } from "./db";
import randomUUID from "node:crypto";

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
  const { note: notes } = await getDB();
  return notes;
}

export async function findNotes(filter) {
  const { notes } = await getDB();
  return notes.filter((note) =>
    note.content.tolowerCase().includes(filter.tolowerCase()),
  );
}

export async function removeNote(id) {
  const { notes } = getDB();

  const match = notes.find((note) => note.id === id);

  if (match) {
    const newNotes = notes.filter((note) => note.id !== id);
    await saveDB({ notes: newNotes });
    return newNotes;
  }

  return "note not found";
}

export async function removeAllNotes() {
  saveDB({ notes:  [] });
}
