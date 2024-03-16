---
layout: Main.mustache
title: Running Ligature
tags: documentation
updated: 2022-08-01
---

# Running Ligature

In order to go through these steps you should first have the following applications setup:

 * [Git](https://git-scm.com/downloads) (required by all)
 * [Cargo](https://rustup.rs/) (ligature-rs)
 * [Node](https://nodejs.org/en/download/) (ligature-lab)

## Running the Backend Server

To run the backend and have the data persisted with the SQLite3 database, follow these steps:

```bash
git clone https://github.com/almibe/ligature-rs.git
cd ligature-rs/ligature-http
cargo run
```

It should now be running on localhost:4200.

## Running Ligature Components demo application

Ligature Components is a project that provides reusable Svelte Components for working with Ligature.
This project includes a demo 

## Running Ligature Desktop

First go through the steps [here](https://tauri.app/v1/guides/getting-started/prerequisites) to get Tauri set up.
Now run the following:

```bash
git clone https://github.com/almibe/ligature-desktop.git
cd ligature-desktop
npm install
npm run tauri dev
```

By default this application expects a running instance of the backend server running at localhost:4200.
