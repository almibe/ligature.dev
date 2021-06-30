# Refashioning Ligature-Lab

This update is related to my last on browser testing.
I'm pretty happy with how the in-browser testing of Ligature using IndexedDB is going,
but there are still some issues.
The main on is that when a test fails in the browser, because of how I'm doing the tests,
it's a little hard to figure out the exact problem.
I could make some changes to how I'm testing
(maybe only deleting databases if the test succeeds and then clearing all databased on the start of a clean run...),
but in general I need a way to just mess around with Ligature in the browser and try new things out much more interactively.

Enter the Ligature-Lab project.
The goal of this project originally was to provide a UI for the server side implementations of Ligature.
Since I'm taking a break from working on those to focus on the browser I decided to refashion Ligature Lab completely for this purpose.
Granted I really didn't get that far along the first time so it's not that great of a loss.
The original project is just a simple Sapper application that allowed adding datasets via a Bootstrap 5 beta powered UI
and persisted the information regarding a Dataset in localstorage.
Sapper has since been been replaced by SvelteKit and Bootstrap 5 has been offically released.
The new version of Ligature Lab uses the latest versions of both and I've also merged the code into the main ligature-js project
so that the UI can always use the latest version of the ligature-js codebase as well.

The main purpose of this project like I said is to allow experimenting interactively with the work I'm doing in ligature-js.
I hope to eventually reuse this code for embedding small demos in documnentation as well as a larger playground style environment.

Related is that I'm hoping to have some time soon to rewrite how ligature.dev is generated.
Currently I'm using 11ty, but switching to SvelteKit for this site would probably make it easier to include
some of the work I'm doing in ligature-js into this site.
We'll have to wait and see how that turns out though.
