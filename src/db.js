import fs from "node:fs/promises";
const databasePath = new URL("../db.json", import.meta.url).pathname;

export async function getDB() {
  const db = await fs.readFile(databasePath, "utf-8");
  return JSON.parse(db);
}

export async function saveDB(db) {
  await fs.writeFile(databasePath, JSON.stringify(db, null, 2));
}

export async function insertDb(note) {
  const db = await getDB(note);
  db.notes.push(note);
  await saveToDatabase(db);
  return note;
} 
