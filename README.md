# Notedly

Notedly is a small Node.js command-line app for creating, listing, searching, and removing notes. Notes are stored locally in `db.json`, and each note can have tags.

## Requirements

- Node.js 18+
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
note new index.js new "Pick up groceries" --tags "personal,errands"
```

The `--tags` option is optional. Separate multiple tags with commas.

List all notes:

```sh
note all
```

Find notes whose content contains a search term:

```sh
note find groceries
```

Remove a note by its ID (shown by the `all` command):

```sh
note remove <id>
```

Remove all notes:

```sh
note clean
```

Launch the local web view on port `5000`:

```sh
note web [4000]
```
Pass a port number to use a different port:


## Tests

Run the test suite with:

```sh
npm test
```
