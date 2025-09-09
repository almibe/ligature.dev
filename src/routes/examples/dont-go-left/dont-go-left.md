---
layout: Doc.liquid
---

# Don't Go Left

Don't Go Left is a trivial game that exists as a simple example of how to model games with Ligature.
This game can be thought of as a choose your own adventure.
You start the game in an initial position and you can go left or right.
If you go left, you lose, and if you go right, you win.

All of the game logic is expressed as a set of definitions.
The state of the game is expressed as assertions.

<div id="editor" class="editor">
$defs =
    definitions(
        equivalent(Player and(exists(position Position) func(position) exists(status Status) func(status)))
        equivalent(Position or(nominal(left) nominal(right) nominal(start)))
        equivalent(Status or(nominal(lost) nominal(won) nominal(playing)))
        implies( 
            exists(position nominal(start))
            and(
                exists(move-option nominal(left)) 
                exists(move-option nominal(right))
                exists(status nominal(playing))))
        implies( 
            exists(position nominal(left))
            and(
                exists(move-option nominal(start)) 
                exists(status nominal(lost))))
        implies(
            exists(position nominal(right))
            and(
                exists(move-option nominal(start))
                exists(status nominal(won)))))

is-consistent(
    $defs 
    assertions())
</textarea>

<script type="module" src="/assets/components.js"></script>
