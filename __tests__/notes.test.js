import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import { randomUUID } from "node:crypto";

jest.unstable_mockModule("../src/db.js", () => ({
  insertDb: jest.fn(),
  getDB: jest.fn(),
  saveDB: jest.fn(),
}));

const { insertDb, getDB, saveDB } = await import("../src/db.js");
const { newNote } = await import("../src/notes.js");

beforeEach(() => {
  insertDb.mockClear();
  getDB.mockClear();
  saveDB.mockClear();
});

describe("New note:", () => {
  test("adds new note to the db", async () => {
    const data = {
      id: Date.now(),
      content: "test new note",
      tags: ["cli", "code"],
    };

    insertDb.mockResolvedValue(data);

    const returnNewNote = await newNote(data.content, data.tags);
    expect(returnNewNote).toEqual(data);
  });
});
