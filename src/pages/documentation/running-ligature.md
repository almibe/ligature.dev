---
layout: ../../layouts/Main.astro
title: Running Ligature
tags: documentation
date: 2022-10-25
---

## Running Ligature

In order to go through these steps you should first have the following applications setup:

 * [Git](https://git-scm.com/downloads) (required by all)
 * [OpenJDK](https://adoptium.net/) (ligature-kt, backend server and repl)
 * [Node](https://nodejs.org/en/download/) (ligature-desktop, ligature-components, ligature-web)

## Running the Backend Server

To run the backend and have the data persisted with the Xodus database, follow these steps:

```bash
git clone https://github.com/almibe/ligature-kt.git
cd ligature-kt/ligature-http-xodus
../gradle/gradlew run
```

It should now be running on localhost:4200.

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
