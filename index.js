#!/usr/bin/env node

const noteFile = process.argv[2];
const newNote = {
  content: noteFile,
  id: Date.now(),
};

console.log(newNote);
