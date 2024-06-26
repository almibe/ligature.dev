---
layout: Main.mustache
title: Testing Ligature
tags: documentation
updated: 2024-04-13
---

# Testing Ligature

Ligature has some custom testing infrastructure.
Nothing too out of the ordinary but it deviates from the normal enough that it seems like a good idea to document.

## ligature-test-suite

The repository ligature-test-suite contains two directories.
The first directory "wander" contains a set of Wander scripts.
These scripts just test Wander support and should use the Test library to make assertions.
The Test library creates assertions that can cause the script to return an error.
The test running just runs the script and checks for an error, if there are no errors the test has passed.

Beside the "wander" directory is the "lig" directory.
This directory contains pairs of *.test.wander files and *.lig files.
These files are meant to be ran in the following way

 * Create a blank instance of Ligature
 * Load the contents of the *.lig file into the instance
 * Run the matching *.test.wander file in a context where it has access to the Ligature instance created above

## Using ligature-test-suite in ligature-fs

See https://github.com/almibe/ligature-fs/tree/main/src/LigatureTestSuite and https://github.com/almibe/ligature-fs/tree/main/src/LigatureInMemory.Test for examples.