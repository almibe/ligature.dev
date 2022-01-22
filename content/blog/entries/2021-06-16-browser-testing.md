---
title: Adventures in Browser Testing
tags: blog
date: 2021-06-16
---

# Adventures in Browser Testing

I've been continuing to focus on ligature-js and have decided to focus entirely on the browser for now.
I'm planning on using IndexedDB/Dexie to persist the data (immutable was lacking some features when I
look into it more closely, mainly around doing scans).
For some reason I previously overlooked IndexedDB for some reason but it seems to have all the features
I want in a store for Ligature.
IndexedDB is interesting because it is a browser api so it can't be used directly from node.
There does exist a shim project that allows use of its api in node and uses SQLite for storage,
but for now I wanted to focus on using the browser api directly.

This leads to today's adventure of trying to figure out how exactly I wanted to test this code since
I couldn't just run Jest tests in node without using the shim project.
A quick search brought up that there are three main testing libraries that allow tests to be ran in
the browser (there are more but it seems like these are the most commonly used ones): QUnit, Jasmine,
and Mocha.  All three seem to require either an additional package or some hand written code to get
running correctly.

I first tried Jasmine with the jasmine-browser package.  I ran into some issues with loading modules.
I think my problems could be fixed with some small changes to the jasmine-browser project, but I
didn't want to dive too deeply into the issue without trying the alternatives first.
Next I tried QUnit with the Karma runner, again I had some issues with modules.
After reading the docs for all three projects and noticing that Mocha doesn't seem to have an
out of the box runner, I got the idea that it probably wouldn't be very difficult to build a simple
runner myself for Mocha that was based on Parcel.
It seems like using Parcel would solve all my module loading issues and allow me to possibly do some
customization of reports and also possibly run the tests with a headless browser if I ever needed to
for CI.

The first step was of course adding mocha, chia, and parcel-bundler as dev deps to the
@ligature/ligature-indexeddb project.
I then added a new file named test.html that will be the entry point for testing.
The mocha docs have a starter template for running tests in the browser at
https://mochajs.org/#running-mocha-in-the-browser.
After copying that file and updating the imports to use my local node dep instead of CDN files,
I quickly had a simple tester up and going.
See *** for what my test.html looks like now.
There are still some improvements to be made but none of them are very high priority right now.
Overall I'm very happy with this and am currently able to test my IndexedDB implementation
easily in the browser.
Since I'm using Parcel I get nice features like instant reloading as I code so I can always see
how my tests are doing which is very nice.
