import yargs from "yargs";
import { hideBin } from "yargs/helpers";

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
    (argv) => {
      console.log(argv.note);
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
    (argv) => {
      console.log(argv);
    },
  )
  // todo: gets all the notes
  .command(
    "find <filter>",
    "get matching notes",
    (yargs) => {
      return yargs.positional("note", {
        type: "string",
        description: "get all notes",
      });
    },
    (argv) => {
      console.log(argv);
    },
  )

  // todo: gets all the notes
  .command(
    "remote <id>",
    "remove note by id",
    (yargs) => {
      return yargs.positional("note", {
        type: "string",
        description: "get all notes",
      });
    },
    (argv) => {
      console.log(argv);
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
      return yargs.positional("note", {
        type: "string",
        description: "get all notes",
      });
    },
    (argv) => {
      console.log(argv);
    },
  )

  .option("tags", {
    alias: "t",
    type: "string",
    description: "tag to add note",
  })
  .demandCommand(1)
  .parse();
