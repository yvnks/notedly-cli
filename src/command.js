import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  findNotes,
  getAllNotes,
  newNote,
  removeAllNotes,
  removeNote,
} from "./notes.js";

const listNotes = (notes) => {
  notes.forEach((note) => {
    console.log("\n");
    console.log("id:", note.id);
    console.log("tags:", note.tags.join(","));
    console.log("note:", note.content);
  });
};

yargs(hideBin(process.argv))
  // todo: adds a new task to the cli.
  .command(
    "new  <note>",
    "create a new note",
    (yargs) => {
      return yargs.positional("note", {
        type: "string",
        description: "The content of the note",
      });
    },
    async (argv) => {
      console.log(argv.note);
      const tags = argv.tags ? argv.tags.split(",") : [];
      const note = await newNote(argv.note, tags);
      console.log("New note added:", note);
    },
  )

  // todo: gets all the notes
  .command(
    "all",
    "get all notes",
    (yargs) => {
      return yargs.positional("note", {
        type: "string",
        description: "get all notes",
      });
    },
    async () => {
      const allNotes = await getAllNotes();
      listNotes(allNotes);
    },
  )

  // todo: gets all the notes
  .command(
    "find <filter>",
    "get matching notes",
    (yargs) => {
      return yargs.positional("filter", {
        type: "string",
        description: "get all notes",
      });
    },
    async (argv) => {
      const queryNote = await findNotes(argv.filter);
      listNotes(queryNote);
    },
  )

  // todo: gets all the notes
  .command(
    `remove <id>`,
    `remove note by id`,
    (yargs) => {
      return yargs.positional("remove", {
        type: "string",
        description: "note by passing the id",
      });
    },
    async (argv) => {
      const id = await removeNote(argv.id);
      console.log(id);
    },
  )

  // todo: gets all the notes
  .command(
    "web [port]",
    "launch web app to see notes",
    (yargs) => {
      return yargs.positional("note", {
        type: "string",
        description: "port to bind on ",
        default: 5000,
      });
    },
    (argv) => {
      console.log(argv);
    },
  )

  // todo: gets all the notes
  .command(
    "clean",
    "removes all notes from db",
    (yargs) => {
      return yargs.positional("clean", {
        type: "string",
        description: "removes all notes from the db.",
      });
    },
    (argv) => {
      removeAllNotes();
      console.log("You have successfully deleted all your notes.");
    },
  )

  .option("tags", {
    alias: "t",
    type: "string",
    description: "tag to add note",
  })
  .demandCommand(1)
  .parse();
