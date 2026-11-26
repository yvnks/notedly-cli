# Notedly

Notedly is a small Node.js command-line app for creating, listing, searching, and removing notes. Notes are stored locally in `db.json`, and each note can have tags.

## Requirements

- Node.js
- npm

## Setup

Install the dependencies:

```sh
npm install
```

Run commands from the project root with `node index.js`.

## Commands

Create a note:

```sh
node index.js new "Pick up groceries" --tags "personal,errands"
```

The `--tags` option is optional. Separate multiple tags with commas.

List all notes:

```sh
node index.js all
```

Find notes whose content contains a search term:

```sh
node index.js find groceries
```

Remove a note by its ID (shown by the `all` command):

```sh
node index.js remove <id>
```

Remove all notes:

```sh
node index.js clean
```

Launch the local web view on port `5000`:

```sh
node index.js web
```

Pass a port number to use a different port:

```sh
node index.js web 3000
```

## Tests

Run the test suite with:

```sh
npm test
```
