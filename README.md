# wpp-generate

Generate a WordPress plugin from a boilerplate. The generated plugin includes simple files just for my personal use for now.

## Install

Install the package globally:

```shell
npm install -g wpp-generate
```

Or use it with `npx`:

```shell
npx wpp-generate
```

## Usage

Run the command:

```shell
wpp-generate
```

And fill the form:

1. Plugin Name (Required)
2. Plugin Slug (Required)
3. Plugin URI
4. Description
5. Version
6. Author
7. Author URI

When you run the command, it will clone the [roelmagdaleno/wp-plugin-boilerplate](https://github.com/roelmagdaleno/wp-plugin-boilerplate) repository to the current path you're in.

## Plugin Structure

The generated project will contain the next structure:

```shell
plugin-name/
├─ includes/
│  ├─ constants.php
│  ├─ required-files.php
│  ├─ class-plugin-name.php
├─ plugin-name.php
```
